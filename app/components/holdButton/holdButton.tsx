import { useLongPress } from "@/app/hooks/useLongPress"
import "./holdButton.scss"
import cn from "classnames"
import { useRef } from "react"
import { useNavigator } from "@/app/providers/navigator.provider"
import { setVars } from "@/app/utils/setVars"

type HoldButtonProps = {
  colorText?: string
  colorCircle?: string
  onPress?: () => void
}
export const HoldButton = ({
  colorText = "rgb(255 255 255 / 72%)",
  colorCircle = "rgb(255 255 255 / 72%)",
  onPress,
}: HoldButtonProps) => {
  const { vibrate } = useNavigator()
  const { current: delay } = useRef<number>(350)
  const { startLongPress, props } = useLongPress({
    onFinish: () => {
      vibrate()
      onPress && onPress()
    },
    delay: delay,
  })
  const buttonCN = cn("HoldButton-Button", {
    "HoldButton-Animation": !startLongPress,
    "HoldButton-AnimationOnPress": startLongPress,
  })

  return (
    <div
      className="HoldButton center"
      style={setVars({
        HoldButton_ColorText: colorText,
        HoldButton_ColorCircle: colorCircle,
        HoldButton_Delay: delay + "ms",
      })}
      {...props}
    >
      <div className={buttonCN}></div>
      <div className="HoldButton-Text center vertical">
        <p>click</p>
        <p>and hold</p>
      </div>
    </div>
  )
}
