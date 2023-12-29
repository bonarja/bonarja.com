import styled, { css } from "styled-components"

const getFontSize = (size: string | number) =>
  typeof size === "number" ? `${size}rem` : size

export const GlitchTextStyled = styled.div<{
  $fontSize: number | string
  $splitSize: number
  $variation: number
  $colorLine: string
  $active: boolean
  $delay: number
  $colorText: string
}>`
  font-size: ${(props) => getFontSize(props.$fontSize)};
  position: relative;
  p {
    text-transform: uppercase;
    margin: 0;
    font-family: "Fira Mono", monospace;
    color: white;
    font-weight: bold;
    color: ${(p) => p.$colorText};
    letter-spacing: 0.05em;
  }
  .GlitchText {
    &-LineWrap {
      overflow: hidden;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
    }
    &-Line {
      background-color: ${(props) => props.$colorLine};
      position: absolute;
      left: 101%;
      animation-delay: ${(props) => props.$delay}ms;
      animation-duration: 800ms;
      animation-fill-mode: forwards;
      ${(props) => props.$active && "animation-name: GlitchText-Line;"}
    }
    &-Wrap {
      display: grid;
      grid-template-rows: repeat(${(props) => props.$splitSize}, 1fr);
      position: absolute;
      left: 0;
      top: 0;
    }
    &-Division {
      overflow: hidden;
      opacity: 0;
      animation-fill-mode: forwards;
      animation-name: GlitchText-Text;
      animation-duration: 1ms;
      animation-delay: ${(props) => props.$delay + 250}ms;
      position: relative;
      p {
        position: absolute;
        left: 0;
        animation-iteration-count: infinite;
        animation-duration: 150ms;
        pointer-events: none;
        user-select: none;
      }
    }
  }
  &:hover .GlitchText-Division > p {
    animation-name: GlitchText-glitch2;
  }
  &:hover .GlitchText-Division:nth-child(1) > p {
    animation-name: GlitchText-glitch1;
  }
  @keyframes GlitchText-glitch1 {
    ${(props) =>
      props.$variation &&
      css`
        0% {
          transform: translateX(${1 * props.$variation}rem)
            translateY(${0.05 * props.$variation}rem);
          opacity: 1;
        }
        20% {
          transform: translateX(${-3 * props.$variation}rem)
            translateY(${-0.1 * props.$variation}rem);
        }
        40% {
          transform: translateX(${3 * props.$variation}rem)
            translateY(${0.05 * props.$variation}rem);
        }
        60% {
          transform: translateX(${-1 * props.$variation}rem)
            translateY(${0.1 * props.$variation}rem);
        }
        74% {
          opacity: 1;
        }
        75% {
          opacity: 0;
        }
        80% {
          transform: translateX(0) translateY(0);
        }
        85% {
          opacity: 1;
        }
        100% {
          transform: translateX(${0.35 * props.$variation}rem)
            translateY(${-0.05 * props.$variation}rem);
        }
      `}
  }
  @keyframes GlitchText-glitch2 {
    ${(props) =>
      props.$variation &&
      css`
        0% {
          transform: translateX(${-3 * props.$variation}rem);
          opacity: 1;
        }
        20% {
          transform: translateX(${2 * props.$variation}rem);
        }
        34% {
          opacity: 1;
        }
        35% {
          opacity: 0;
        }
        40% {
          transform: translateX(0);
        }
        45% {
          opacity: 1;
        }
        60% {
          transform: translateX(${3 * props.$variation}rem);
        }
        80% {
          transform: translateX(${-3 * props.$variation}rem);
        }
        100% {
          transform: translateX(${3.2 * props.$variation}rem);
        }
      `}
  }
  @keyframes GlitchText-Text {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes GlitchText-Line {
    from {
      left: 101%;
    }
    to {
      left: -101%;
    }
  }
`
