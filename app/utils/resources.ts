export enum RESOURCE {
  videoIntro = "videoIntro",
  sfx = "sfx",
  background = "background"
}
export const getResources = (): Record<RESOURCE, string> => {
  return {
    [RESOURCE.videoIntro]: "./static/intro.mp4",
    [RESOURCE.sfx]: "./static/sfx.mp3",
    [RESOURCE.background]: "./static/w3.jpg"
  }
}
