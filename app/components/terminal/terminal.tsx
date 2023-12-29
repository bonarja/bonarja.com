/* eslint-disable react/display-name */
"use client"

import { useState, forwardRef, useImperativeHandle, useRef, useCallback, useMemo } from "react"
import { TerminalStyled } from "./terminal.styled"

type TerminalHandler = {
  add: (value: string) => void
}

type TerminalProps = {
  useDelay?: boolean
  initialMsgs?: string[]
}
export const Terminal = forwardRef<TerminalHandler, TerminalProps>(({ useDelay = true, initialMsgs = [] }, ref) => {
  const [length, setLength] = useState<number>(0)
  const messages = useRef<string[]>(initialMsgs)
  const timer = useRef<number>(0)
  useImperativeHandle(ref, () => ({
    add(value) {
      timer.current = useDelay ? (timer.current + 400) : 0
      setTimeout(() => {
        messages.current = [...messages.current, value]
        setLength(messages.current.length)
      }, timer.current)
    }
  }))

  return <TerminalStyled className="Terminal">
    {messages.current.map((x, index) => {
      const isLast = index === length - 1
      return <p key={index} className={isLast ? "Terminal-LastLine" : ""}> {x}</p>
    })}
  </TerminalStyled>
})
