/* eslint-disable @next/next/no-img-element */
"use client"

import { usePreload } from "@/app/providers/preload.provider"
import { HeroStyled } from "./hero.styled"
import { RESOURCE } from "@/app/utils/resources"
import { ReactEventHandler, useCallback, useRef, useState } from "react"
import { HeroLayer1 } from "./heroLayer1"
import { HeroLayer2 } from "./heroLayer2"
import { HeroLayer3 } from "./heroLayer3"
import { useNavigator } from "@/app/providers/navigator.provider"

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
    <HeroStyled
      className="Hero cover"
      $finishVideo={isFinishVideo}
      $isMobile={isMobile}
    >
      {isDone && !isFinishVideo && (
        <div
          className="Hero-Video cover"
          style={{ backgroundColor: "#252832" }}
        >
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
        {layer === 1 && <HeroLayer1 onChange={changeLayer} />}
        {layer === 2 && <HeroLayer2 onChange={changeLayer} />}
        {layer === 3 && <HeroLayer3 onChange={changeLayer} />}
      </div>
    </HeroStyled>
  )
}
