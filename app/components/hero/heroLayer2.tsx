/* eslint-disable @next/next/no-img-element */
import { GlitchText } from "../glitchText/glitchText"
import { HoldButton } from "../holdButton/holdButton"

type HeroLayerProps = {
    onChange:() => void
    isFinishVideo: boolean
}
export const HeroLayer2 = ({ onChange, isFinishVideo }: HeroLayerProps) => {
  return (
    <>
      <div
        className="Hero-BackgroundVideo cover"
        style={{ opacity: .6, animationName: isFinishVideo ? "HeroBgIntro" : "none" }}
      >
        <video src="./static/coffee2.mp4" autoPlay muted playsInline loop/>
      </div>
      <div className="Hero-Content cover center">
        <img
          className="Hero-Content-Logo"
          src="./static/logo.png"
          alt="bonarja logo"
          style={{ filter: "brightness(0.4) sepia(1) hue-rotate(313deg)" }}
        />
        <div className="Hero-Text center">
          <GlitchText
            text="the secret"
            colorText="#be8d81cc"
            colorLine="#be8d81"
            fontSize={4}
            left={-4}
          />
          <GlitchText
            text="behind"
            colorText="#9ba2b3d6"
            colorLine="#9ba2b3"
            delay={400}
            fontSize={5}
            left={-10}
            top={-1}
          />
          <GlitchText
            text="the innovation"
            colorText="#be8d81cc"
            colorLine="#be8d81"
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
