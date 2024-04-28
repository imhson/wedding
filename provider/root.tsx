'use client'

import ReactLenis from '@studio-freight/react-lenis'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { createContext, useEffect, useRef, useState } from 'react'
interface IContext {
  splashing: boolean
  setSplashing: any
  welcoming: boolean
  setWelcoming: any
}
export const RootContext = createContext<IContext>({
  splashing: true,
  setSplashing: () => {},
  welcoming: true,
  setWelcoming: () => {},
})

export default function RootProvider({ children }: { children: React.ReactNode }) {
  const [initializing, setInitializing] = useState(true)
  const [splashing, setSplashing] = useState(true)
  const [welcoming, setWelcoming] = useState(true)
  const id = useRef<any>()

  const init = async () => {
    try {
      setInitializing(false)
    } catch (error) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    init()
  }, [])

  useEffect(() => {
    if (splashing) {
      document.documentElement.className = 'unscrollable'
      id.current = 1
    } else {
      id.current = setTimeout(() => {
        document.documentElement.className = ''
        id.current = null
      }, 2500)
    }
  }, [splashing])

  if (initializing) return <></>

  return (
    <RootContext.Provider
      value={{
        splashing,
        setSplashing,
        welcoming,
        setWelcoming,
      }}>
      <SpeedInsights />
      <ReactLenis root>{children}</ReactLenis>
    </RootContext.Provider>
  )
}
