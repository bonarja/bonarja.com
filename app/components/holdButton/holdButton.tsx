import { useLongPress } from "@/app/hooks/useLongPres"
import { HoldButtonStyled } from "./holdButton.styled"
import cn from "classnames"
import { useRef } from "react"
import { useNavigator } from "@/app/providers/navigator.provider"

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
    <HoldButtonStyled
      className="HoldButton center"
      $colorText={colorText}
      $colorCircle={colorCircle}
      $delay={delay}
      {...props}
    >
      <div className={buttonCN}></div>
      <div className="HoldButton-Text center vertical">
        <p>click</p>
        <p>and hold</p>
      </div>
    </HoldButtonStyled>
  )
}
