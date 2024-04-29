'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import FrozenRoute from './frozenRoute'
import { useEffect } from 'react'

const PageAnimatePresence = ({ children }: any) => {
  const pathname = usePathname()
  useEffect(() => {
    require('../cursor/script')
  }, [pathname])
  return (
    <AnimatePresence mode='wait' onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div key={pathname}>
        <FrozenRoute>{children}</FrozenRoute>
      </motion.div>
    </AnimatePresence>
  )
}

export default PageAnimatePresence
