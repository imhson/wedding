'use client'
import { motion } from 'framer-motion'

export default function Template({ children }: any) {
  return (
    <div className='relative'>
      <div className=''>{children}</div>
      <motion.div
        className='fixed top-0 left-0 bg-[#41435d] origin-bottom w-full h-[100dvh]'
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        key='side-out'></motion.div>
      <motion.div
        className='fixed top-0 left-0 bg-[#41435d] origin-top w-full h-[100dvh]'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        key='side-in'></motion.div>
    </div>
  )
}
