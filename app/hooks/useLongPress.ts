import { useEffect, useState } from "react"

type UseLongPressProps = {
  onFinish: () => void
  delay?: number
  onStartPress?: () => void
  onStopPress?: () => void
}
export const useLongPress = ({
  onFinish,
  delay = 300,
  onStartPress,
  onStopPress,
}: UseLongPressProps) => {
  const [startLongPress, setStartLongPress] = useState(false)

  useEffect(() => {
    let timerId: NodeJS.Timeout | null = null

    if (startLongPress) {
      onStartPress && onStartPress()
      timerId = setTimeout(onFinish, delay)
    } else {
      onStopPress && onStopPress()
      timerId && clearTimeout(timerId)
    }

    return () => {
      timerId && clearTimeout(timerId)
    }
  }, [onFinish, delay, startLongPress, onStartPress, onStopPress])

  return {
    props: {
      onMouseDown: () => setStartLongPress(true),
      onMouseUp: () => setStartLongPress(false),
      onMouseLeave: () => setStartLongPress(false),
      onTouchStart: () => setStartLongPress(true),
      onTouchEnd: () => setStartLongPress(false),
    },
    startLongPress
  }
}
