/* eslint-disable @next/next/no-img-element */
"use client"

import { usePreload } from "@/app/providers/preload.provider"
import { HeroStyled } from "./hero.styled"
import { RESOURCE } from "@/app/utils/resources"
import { useCallback, useRef, useState } from "react"
import { HeroLayer1 } from "./heroLayer1"
import { HeroLayer2 } from "./heroLayer2"
import { HeroLayer3 } from "./heroLayer3"

export const Hero = () => {
  const audioRef = useRef<HTMLAudioElement>()
  const { getResource } = usePreload()
  const { isDone, finishVideo, isFinishVideo } = usePreload()
  const onEndedVideo = useCallback(() => finishVideo(), [finishVideo])
  const [layer, setLayer] = useState(1)

  const changeLayer = useCallback(() => {
    const max = 3
    const next = layer + 1
    setLayer(next > max ? 1 : next)
    if (audioRef.current ) {
      audioRef.current.currentTime = 0
      audioRef.current.play()
    }
    
  }, [layer])

  return (
    <HeroStyled className="Hero cover" $finishVideo={isFinishVideo}>
      {isDone && !isFinishVideo && (
        <div className="Hero-Video cover">
          <video
            src={getResource(RESOURCE.videoIntro)}
            autoPlay
            onEnded={onEndedVideo}
            playsInline
          />
        </div>
      )}
      {isFinishVideo && <audio autoPlay src={getResource(RESOURCE.sfx)} ref={audioRef as never} />}
      {layer === 1 && <HeroLayer1 onChange={changeLayer} />}
      {layer === 2 && <HeroLayer2 onChange={changeLayer} />}
      {layer === 3 && <HeroLayer3 onChange={changeLayer} />}
      {/* <div
        className="Hero-Background cover"
        style={{ backgroundImage: `url(${getResource(RESOURCE.background)})` }}
      ></div>
      <div className="Hero-Content cover center">
        <Header/>
      <img
            className="Hero-Content-Logo"
            src="./static/logo.png"
            alt="bonarja logo"
          />
        <div className="Hero-Text center">
          {isFinishVideo && <audio autoPlay src={getResource(RESOURCE.sfx)}/>}
          <GlitchText text="Challenging" colorText="#253332d1" colorLine="#253332" fontSize={4} />
          <GlitchText text="the norms" colorText="#1c1d1b" colorLine="#1c1d1b" delay={400} fontSize={2.4} left={-10} />
          <GlitchText text="sparking a revolution" colorText="#253332d1" colorLine="#253332" delay={550} fontSize={2.1} />
          <GlitchText text="in creativity." colorText="#1c1d1b" colorLine="#1b2c3c" delay={600} fontSize={3} left={7} />
        </div>
      </div> */}
    </HeroStyled>
  )
}
