"use client"

import { GlitchImage } from "react-glitch-image"
import { PreloadStyled } from "./preload.styled"
import { Terminal } from "../terminal/terminal"
import { ComponentRef, useCallback, useEffect, useRef } from "react"
import { usePreload } from "@/app/providers/preload.provider"
import { RESOURCE, getResources } from "@/app/utils/resources"
import { Loader } from "../loader/loader"
import { HoldButton } from "../holdButton/holdButton"

export const Preload = () => {
  const terminalRef = useRef<ComponentRef<typeof Terminal>>(null)

  const onLoadResource = useCallback((name: string) => {
    const msg = {
      [RESOURCE.videoIntro]: "Loaded video intro",
      [RESOURCE.sfx]: "Loaded audio fx",
      [RESOURCE.background]: "Loaded background",
    }
    terminalRef.current?.add(msg[name as RESOURCE] || "Done!")
  }, [])

  const { isLoading, done } = usePreload({ onLoad: onLoadResource })

  return (
    <PreloadStyled className="Preload cover" $isLoading={isLoading}>
      <div className="Preload-Logo">
        <GlitchImage
          splitSize={4}
          opacity={0.5}
          customFilter="invert(20%) sepia() saturate(100000%) hue-rotate(calc($150deg + 150deg)) contrast(2)"
          width={10}
          brightness={1}
          image="./static/logo.png"
          animationInterval={2500}
        />
      </div>
      <button className="Preload-Button" onClick={done}>ENTER</button>
      <div className="Preload-Terminal">
        <Terminal
          ref={terminalRef}
          initialMsgs={["Run <Terminal/>", "Loading..."]}
          useDelay={false}
        />
      </div>
      {isLoading && <Loader className="Preload-Loader"/>}
    </PreloadStyled>
  )
}