
export const MediaScreen = {
    mobile: "@media screen and (max-width: 650px)",
    belowTo: (size: number) => `@media screen and (max-width: ${size}px)`,
    aboveTo: (size: number) => `@media screen and (min-width: ${size}px)`
}