"use client"

import { Hero } from "./components/hero/hero"
import { Preload } from "./components/preload/preload"
import { usePreload } from "./providers/preload.provider"

export default function Home() {
  const { isDone } = usePreload()
  return (
    <>
      {!isDone && <Preload />}
      <div className="Main cover">
        <Hero />
        {/* <div className="scrollContent cover">

        </div> */}
      </div>
    </>
  )
}
