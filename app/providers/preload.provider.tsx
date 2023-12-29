import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"
import { RESOURCE, getResources } from "../utils/resources"

type PreloadProps = {
  resources: Record<string, string>
  existResources: boolean
  lastKey: string
  done: () => void
  isDone: boolean
  isLoading: boolean
  getResource: (resource: RESOURCE) => string
  isFinishVideo: boolean
  finishVideo: () => void
}

type UsePreloadProps = {
  onLoad?: (key: string) => void
}

const PreloadContext = createContext<PreloadProps | null>(null)
const usePreload = ({ onLoad }: UsePreloadProps = {}) => {
  const context = useContext(PreloadContext)
  if (!context) {
    throw new Error("usePreload must be used within an PreloadProvider")
  }
  useEffect(() => {
    onLoad && context.lastKey && onLoad(context.lastKey)
  }, [context.lastKey, onLoad])
  return context
}

const PreloadProvider = ({ children }: { children: ReactElement }) => {
  const [lastKey, setLastKey] = useState("")
  const [resources, setResources] = useState<Record<string, string>>({})
  const [isLoading, setIsLoading] = useState(true)
  const [isDone, setDone] = useState(false)
  const [isFinishVideo, setIsFinishVideo] = useState(false)
  const originalResources = useRef<Record<string, string>>()
  const PromiseAll = useCallback(function (
    promises: Record<string, Promise<Response>>
  ) {
    let count = 0
    const result: Record<string, string> = {}
    const length = Object.keys(promises).length
    const DELAY = 250
    return new Promise<Record<string, string>>((resolve) => {
      Object.entries(promises).forEach(([key, promise]) => {
        promise.then(async (r) => {
          result[key] = URL.createObjectURL(await r.blob())
          setTimeout(() => {
            setLastKey(key)
          }, DELAY * count)
          count++
          if (length === count) {
            resolve(result)
            setIsLoading(false)
            setTimeout(() => {
              setLastKey("finish")
            }, DELAY * count)
          }
        })
      })
    })
  },
  [])

  const loadResources = useCallback(
    async (resources: Record<string, string>) => {
      setIsLoading(true)
      const result = await PromiseAll(
        Object.entries(resources).reduce(
          (acum, [key, path]) => ({ ...acum, [key]: fetch(path) }),
          {}
        )
      )
      setResources(result)
    },
    [PromiseAll]
  )

  const existResources = useMemo(() => resources !== null, [resources])
  const done = useCallback(() => setDone(true), [])

  const getResource = useCallback(
    (resource: RESOURCE) => {
      const originalResources = getResources()
      return isLoading
        ? originalResources[resource]
        : resources[resource]
    },
    [isLoading, resources]
  )

  useEffect(() => {
    if (!originalResources.current) {
      const resources = getResources()
      originalResources.current = resources
      loadResources(resources)
    }
  }, [loadResources])

  const finishVideo = useCallback(() => setIsFinishVideo(true), [])

  const ctx = useMemo<PreloadProps>(
    () => ({
      existResources,
      resources,
      lastKey,
      done,
      isDone,
      isLoading,
      getResource,
      finishVideo,
      isFinishVideo
    }),
    [existResources, resources, lastKey, done, isDone, isLoading, getResource, finishVideo, isFinishVideo]
  )

  return (
    <PreloadContext.Provider value={ctx}>{children}</PreloadContext.Provider>
  )
}

export { PreloadProvider, usePreload }
