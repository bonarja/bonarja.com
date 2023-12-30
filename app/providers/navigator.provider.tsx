import {
  ReactElement,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"

type NavigatorProps = {
  isMobile: boolean
  isSaveData: boolean
  isClient: boolean
  vibrate: () => void
}
const NavigatorContext = createContext<NavigatorProps | null>(null)
const useNavigator = () => {
  const context = useContext(NavigatorContext)
  if (!context) {
    throw new Error("usePreload must be used within an PreloadProvider")
  }
  return context
}

const NavigatorProvider = ({ children }: { children: ReactElement }) => {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => setIsClient(true), [])
  const isMobile = useMemo(() => {
    if (typeof navigator === "undefined") return false
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  }, [])

  const isSaveData = useMemo(() => {
    if (typeof navigator === "undefined") return false
    const connection =
      (navigator as any).connection ||
      (navigator as any).mozConnection ||
      (navigator as any).webkitConnection
    return connection?.saveData
  }, [])

  const vibrate = useCallback(() => {
    if (typeof navigator === "undefined") return
    navigator.vibrate && navigator.vibrate(50)
  }, [])

  const ctx = useMemo<NavigatorProps>(
    () => ({
      isMobile,
      isClient,
      isSaveData,
      vibrate
    }),
    [isMobile, isClient, isSaveData, vibrate]
  )
  return (
    <NavigatorContext.Provider value={ctx}>
      {children}
    </NavigatorContext.Provider>
  )
}
export { NavigatorProvider, useNavigator }
