import { useEffect, useState } from "react"

export const useIsclient = () => {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => setIsClient(true), [])

    return { isClient }
}