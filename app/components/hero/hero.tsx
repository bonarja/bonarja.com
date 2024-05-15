"use client"
/* eslint-disable @next/next/no-img-element */

import { usePreload } from "@/app/providers/preload.provider"
import { RESOURCE } from "@/app/utils/resources"
import { useCallback, useRef, useState } from "react"
import { HeroLayer1 } from "./heroLayer1"
import { HeroLayer2 } from "./heroLayer2"
import { HeroLayer3 } from "./heroLayer3"
import { useNavigator } from "@/app/providers/navigator.provider"
import "./hero.scss"
import { setVars } from "@/app/utils/setVars"

export const Hero = () => {
  const { isMobile } = useNavigator()
  const audioRef = useRef<HTMLAudioElement>()
  const { getResource } = usePreload()
  const { isDone, finishVideo, isFinishVideo } = usePreload()
  const onEndedVideo = useCallback(() => finishVideo(), [finishVideo])
  const [layer, setLayer] = useState(1)

  const changeLayer = useCallback(() => {
    const max = 3
    const next = layer + 1
    setLayer(next > max ? 1 : next)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
  }, [layer])

  const onLoadStartVideo = useCallback(
    ({ target }: { target: HTMLVideoElement }) => {
      target.volume = 0.5
    },
    []
  )

  return (
    <div
      className="Hero cover"
      style={setVars({ Hero_PointerEven: isMobile ? "none" : "unset" })}
    >
      {isDone && !isFinishVideo && (
        <div className="Hero-Video cover">
          <video
            src={getResource(RESOURCE.videoIntro)}
            autoPlay
            onEnded={onEndedVideo}
            playsInline
            onLoadStart={onLoadStartVideo as never}
          />
        </div>
      )}
      {isFinishVideo && (
        <audio
          autoPlay
          src={getResource(RESOURCE.sfx)}
          ref={audioRef as never}
          playsInline
        />
      )}

      <div className="Hero-Content cover center">
        {layer === 1 && (
          <HeroLayer1 isFinishVideo={isFinishVideo} onChange={changeLayer} />
        )}
        {layer === 2 && (
          <HeroLayer2 isFinishVideo={isFinishVideo} onChange={changeLayer} />
        )}
        {layer === 3 && (
          <HeroLayer3 isFinishVideo={isFinishVideo} onChange={changeLayer} />
        )}
      </div>
    </div>
  )
}
