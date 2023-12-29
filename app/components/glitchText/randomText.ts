"use client"
const letterList = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "n",
  "m",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "#",
  "&",
  "$",
  "#",
  "#",
  "#",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
]
type GetRandomTextProps = {
  length: number
}
export const getRandomText = ({ length }: GetRandomTextProps) => {
  return Array(length)
    .fill(0)
    .map(() => letterList[Math.floor(Math.random() * letterList.length)])
    .join("")
}