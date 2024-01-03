import { MediaScreen } from "@/app/utils/mediaScreen"
import styled from "styled-components"

export const HoldButtonStyled = styled.div<{
  $colorText: string
  $colorCircle: string
  $delay: number
}>`
  cursor: pointer;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  gap: 8px;
  -webkit-tap-highlight-color: transparent;
  ${MediaScreen.mediumScreen} {
    gap: 14px;
  }
  .HoldButton {
    &-Button {
      width: 30px;
      height: 30px;
      border-style: solid;
      border-width: 3px;
      border-color: ${(p) => p.$colorCircle};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      &:after {
        content: "";
        width: 10px;
        height: 10px;
        background-color: ${(p) => p.$colorCircle};
        border-radius: 50%;
        position: absolute;
      }
      ${MediaScreen.mediumScreen} {
        width: 40px;
        height: 40px;
        border-width: 3px;
        &:after {
          width: 15px;
          height: 15px;
        }
      }
    }
    &-Animation:after {
      animation-name: HoldButtonAnimation;
      animation-duration: 3000ms;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      opacity: 0.5;
    }
    &-AnimationOnPress:after {
      animation-name: HoldButtonAnimationOnPress;
      animation-duration: ${(p) => p.$delay}ms;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      opacity: 0.5;
    }
    &-Text {
      align-items: flex-start;
      text-transform: uppercase;
    }
  }
  p {
    color: ${(p) => p.$colorText};
    margin: 0;
    font-weight: bold;
    letter-spacing: 0.05em;
    font-size: 12px;
    user-select: none;
    ${MediaScreen.mediumScreen} {
      font-size: 15px;
    }
  }
  @keyframes HoldButtonAnimation {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    40% {
      opacity: 1;
      transform: scale(1.6);
    }
  }
  @keyframes HoldButtonAnimationOnPress {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      opacity: 1;
      transform: scale(3.1);
    }
  }
`
