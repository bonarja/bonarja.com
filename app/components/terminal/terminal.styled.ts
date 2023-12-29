import { getRem } from "@/app/utils/getRem"
import { MediaScreen } from "@/app/utils/mediaScreen"
import styled from "styled-components"

export const TerminalStyled = styled.div`
  width: ${getRem(300)};
  height: ${getRem(200)};
  padding: 20px;
  color: #b9b9b9;
  display: flex;
  flex-direction: column;
  justify-content: end;
  user-select: none;
  p {
    margin: 0;
    font-size: 13px;
    animation-name: TerminalLineIn;
    animation-fill-mode: forwards;
    animation-timing-function: ease;
    animation-duration: 400ms;
    opacity: 0;
    position: relative;
    padding-left: 12px;
    margin-bottom: 3px;
    &::after {
      content: "■";
      position: absolute;
      left: 0;
      bottom: 2px;
    }
  }
  ${MediaScreen.mobile} {
    width: 100%;
  }
  @keyframes TerminalLineIn {
    from {
      opacity: .3;
      transform: translateX(-12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
