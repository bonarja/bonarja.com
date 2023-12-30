"use client"
import { Inter } from "next/font/google"
import "./globals.scss"
import StyledComponentsRegistry from "./lib/registry"
import { PreloadProvider } from "./providers/preload.provider"
import { NavigatorProvider } from "./providers/navigator.provider"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Bonarja",
//   description: "Bonarja",
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Bonarja</title>
      <body className={inter.className}>
        <NavigatorProvider>
          <PreloadProvider>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </PreloadProvider>
        </NavigatorProvider>
      </body>
    </html>
  )
}
