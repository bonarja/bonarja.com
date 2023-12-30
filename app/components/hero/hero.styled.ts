import { MediaScreen } from "@/app/utils/mediaScreen"
import styled from "styled-components"

export const HeroStyled = styled.div<{ $finishVideo: boolean; $isMobile: boolean }>`
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  .Hero {
    &-Background {
      background-size: cover;
      background-position: center;
    }
    &-Background,
    &-BackgroundVideo {
      animation-fill-mode: forwards;
      animation-timing-function: ease;
      animation-duration: 5000ms;
      opacity: 0.75;
      ${(props) => props.$finishVideo && "animation-name: HeroBgIntro"}
    }
    &-Video {
      position: absolute;
      z-index: 9999;
      overflow: hidden;
      left: 0;
      top: 0;
    }
    &-BackgroundVideo {
      position: absolute;
      z-index: 0;
      overflow: hidden;
      left: 0;
      top: 0;
    }
    &-Content {
      position: absolute;
      left: 0;
      top: 0;
      &-Logo {
        position: absolute;
        top: 20px;
        width: 60px;
      }
    }
    &-Text {
      flex-direction: column;
      ${p => p.$isMobile && "pointer-events: none"};
    }
  }
  .HoldButton {
    position: absolute;
    right: 20px;
    ${MediaScreen.mobile} {
      bottom: 30px;
      right: 30px;
    }
  }
  @keyframes HeroBgIntro {
    from {
      transform: scale(1.5);
    }
    to {
      transform: scale(1);
    }
  }
  video {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
  }
`
