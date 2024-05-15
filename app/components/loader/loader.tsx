import { setVars } from "@/app/utils/setVars"

type LoaderProps = {
  backgroundColor?: string
  color?: string
} & Partial<React.HTMLAttributes<HTMLDivElement>>
export const Loader = ({
  backgroundColor,
  color,
  style,
  ...rest
}: LoaderProps) => {
  return (
    <div
      className="Loader"
      style={{
        ...setVars({
          Loader_BackgroundColor: backgroundColor,
          Loader_Color: color,
        }),
        ...style
      }}
      {...rest}
    ></div>
  )
}
