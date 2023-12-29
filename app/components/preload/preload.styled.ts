import { getRem } from "@/app/utils/getRem"
import { MediaScreen } from "@/app/utils/mediaScreen"
import styled from "styled-components"

export const PreloadStyled = styled.div<{ $isLoading: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #252832;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  .Preload {
    &-Logo {
      animation-name: PreloadLogoIn;
      animation-fill-mode: forwards;
      animation-duration: 2500ms;
      animation-timing-function: ease;
    }
    &-Terminal {
      position: fixed;
      left: 0;
      bottom: 0;
    }
    &-Button {
      opacity: 0;
      color: white;
      background: transparent;
      padding: ${getRem(10)} ${getRem(20)};
      letter-spacing: 0.1em;
      width: ${getRem(150)};
      font-size: ${getRem(18)};
      margin-top: ${getRem(30)};
      border-style: solid;
      border-radius: 4px;
      border-width: 2px;
      user-select: none;
      cursor: pointer;
      border-color: #f1986a;
      position: relative;
      overflow: hidden;
      animation-fill-mode: forwards;
      animation-delay: 1000ms;
      animation-duration: 1000ms;
      animation-timing-function: ease;
      ${(props) => !props.$isLoading && "animation-name: PreloadEnterIn;"}
      &:after {
        content: "";
        position: absolute;
        left: -15%;
        top: 0;
        height: 100%;
        width: 0;
        background-color: #f1986a;
        z-index: -1;
        transform: skewX(16deg);
        transition: all ease 200ms;
        opacity: 0.4;
      }
      &:hover:after {
        width: 65%;
      }
      &:active:after {
        width: 100%;
      }
    }
    &-Loader {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }
  h1 {
    color: #f1986a;
    font-size: ${getRem(40)};
    letter-spacing: 0.3em;
    animation-name: PreloadTitleIn;
    animation-fill-mode: forwards;
    animation-delay: 2000ms;
    animation-duration: 1000ms;
    animation-timing-function: ease;
    opacity: 0;
  }
  @keyframes PreloadLogoIn {
    from {
      transform: scale(1.5);
    }
    to {
      transform: scale(1);
    }
  }
  @keyframes PreloadEnterIn {
    from {
      transform: translateY(80%);
      opacity: 0.3;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  ${MediaScreen.mobile} {
  }
`
