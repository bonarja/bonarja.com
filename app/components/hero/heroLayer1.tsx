/* eslint-disable @next/next/no-img-element */
import { RESOURCE } from "@/app/utils/resources"
import { GlitchText } from "../glitchText/glitchText"
import { usePreload } from "@/app/providers/preload.provider"
import { HoldButton } from "../holdButton/holdButton"
import { useRef } from "react"
// import { useScrollAnimation } from "@/app/hooks/useScrollAnimation"

type HeroLayerProps = {
  onChange: () => void
  isFinishVideo: boolean
}
export const HeroLayer1 = ({ onChange, isFinishVideo }: HeroLayerProps) => {
  const { getResource } = usePreload()  
  return (
    <>
      <div
        className="Hero-Background cover"
        style={{ backgroundImage: `url(${getResource(RESOURCE.background)})`, animationName: isFinishVideo ? "HeroBgIntro" : "none" }}
      ></div>
      <div className="Hero-Content cover center">
        <img
          className="Hero-Content-Logo"
          src="./static/logo.png"
          alt="bonarja logo"
          style={{ filter: "brightness(0.2) sepia(1) hue-rotate(167deg)" }}
        />
        <div className="Hero-Text center">
          <GlitchText
            text="Challenging"
            colorText="#253332d1"
            colorLine="#253332"
            fontSize={4}
          />
          <GlitchText
            text="the norms"
            colorText="#1c1d1b"
            colorLine="#1c1d1b"
            delay={400}
            fontSize={2.4}
            left={-10}
            top={-1}
          />
          <GlitchText
            text="sparking a revolution"
            colorText="#253332d1"
            colorLine="#253332"
            delay={550}
            fontSize={2.1}
            top={-0.5}
          />
          <GlitchText
            text="in creativity."
            colorText="#1c1d1b"
            colorLine="#1b2c3c"
            delay={600}
            fontSize={3}
            left={7}
            top={-0.5}
          />
        </div>
        <HoldButton onPress={onChange} />
      </div>
    </>
  )
}
