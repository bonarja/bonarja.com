import { useCallback, useEffect, useRef } from "react"
import { GlitchTextStyled } from "./glitchText.styled"
import { useIsclient } from "@/app/hooks/useIsClient"
import { getRandomText } from "./randomText"
import { usePreload } from "@/app/providers/preload.provider"

type GlitchTextProps = {
  text: string
  splitSize?: number
  animationTime?: number
  colorText?: string
  colorLine?: string
  delay?: number
  style?: React.CSSProperties
  fontSize?: number | string
  left?: number
  top?: number
}
export const GlitchText = ({
  text,
  splitSize = 2,
  animationTime = 1000,
  colorLine = "white",
  delay = 0,
  style = {},
  colorText = "white",
  fontSize = 3,
  left,
  top,
}: GlitchTextProps) => {
  const { isFinishVideo } = usePreload()
  const ref = useRef<HTMLDivElement>(null)
  const letters = useRef<string>("")
  const timer = useRef<NodeJS.Timeout>()
  const timer2 = useRef<NodeJS.Timeout>()
  const { isClient } = useIsclient()
  const getPStyle = useCallback((index: number) => {
    return {
      top: `-${100 * index}%`,
    }
  }, [])

  useEffect(() => {
    let delayTimer: NodeJS.Timeout
    if (isClient && isFinishVideo) {
      clearTimeout(timer.current)
      const p = ref.current?.querySelectorAll(
        "p"
      ) as unknown as HTMLParagraphElement[]
      if (p) {
        delayTimer = setTimeout(() => {
          timer.current = setInterval(() => {
            const value = getRandomText({
              length: text.length - letters.current.length,
            })
            p.forEach((x) => (x.innerHTML = value + letters.current))
          }, 70)
          timer2.current = setInterval(() => {
            if (letters.current.length === text.length) {
              clearInterval(timer.current)
              clearInterval(timer2.current)
              p.forEach((x) => (x.innerHTML = text))
              return
            }
            letters.current =
              text[text.length - (1 + letters.current.length)] + letters.current
          }, animationTime / text.length)
        }, delay)
      }
    }
    return () => {
      clearInterval(timer.current)
      clearInterval(timer2.current)
      clearTimeout(delayTimer)
    }
  }, [isClient, text, animationTime, delay, isFinishVideo])

  return (
    <GlitchTextStyled
      className="GlitchText"
      $fontSize={fontSize}
      $splitSize={splitSize}
      $variation={0.05}
      $colorLine={colorLine}
      $active={isFinishVideo}
      $delay={delay}
      style={{
        ...style,
        ...(left && { marginLeft: `${left}rem` }),
        ...(top && { marginTop: `${top}rem` }),
      }}
      $colorText={colorText}
    >
      <div className="GlitchText-LineWrap cover">
        {isClient && <div className="GlitchText-Line cover"></div>}
      </div>
      <p
        style={{
          ...(3 > 2 && { visibility: "hidden" }),
        }}
      >
        {text}
      </p>
      <div className="GlitchText-Wrap cover" ref={ref}>
        {isClient &&
          isFinishVideo &&
          Array(splitSize)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="GlitchText-Division">
                <p style={getPStyle(index)}></p>
              </div>
            ))}
      </div>
    </GlitchTextStyled>
  )
}
