import styled from "styled-components"

type LoaderProps = {
  $backgroundColor?: string
  $color?: string
  $size?: number;
}
export const Loader = styled.div<LoaderProps>`
  border: 4px solid ${(props) => props.$backgroundColor ?? "rgb(255 255 255 / 39%)"};
  border-top: 4px solid ${(props) => props.$color ?? "white"};
  border-radius: 50%;
  width: 25px;
  height: 25px;
  animation: LoaderAnimation 2s linear infinite;
  @keyframes LoaderAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
