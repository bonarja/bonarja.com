/* eslint-disable @next/next/no-img-element */
import { GlitchText } from "../glitchText/glitchText"
import { HoldButton } from "../holdButton/holdButton"

type HeroLayerProps = {
    onChange:() => void
    isFinishVideo: boolean
}
export const HeroLayer3 = ({ onChange, isFinishVideo }: HeroLayerProps) => {
  return (
    <>
      <div
        className="Hero-Background cover"
        style={{ backgroundImage: "url(./static/w2.jpg)", animationName: isFinishVideo ? "HeroBgIntro" : "none" }}
      ></div>
      <div className="Hero-Content cover center">
        <img
          className="Hero-Content-Logo"
          src="./static/logo.png"
          alt="bonarja logo"
          style={{ filter: "brightness(0.34) sepia(1) hue-rotate(303deg) saturate(2.5)" }}
        />
        <div className="Hero-Text center">
          <GlitchText
            text="embrace"
            colorText="#ad4b55f0"
            colorLine="#ad4b55"
            fontSize={5}
          />
          <GlitchText
            text="the"
            colorText="#9ba2b3d6"
            colorLine="#9ba2b3"
            delay={400}
            fontSize={5}
            left={-15}
            top={-1}
          />
          <GlitchText
            text="extraordinary"
            colorText="#ad4b55f0"
            colorLine="#ad4b55"
            delay={550}
            fontSize={3}
            left={6}
            top={-1}
          />
        </div>
        <HoldButton onPress={onChange} />
      </div>
    </>
  )
}
