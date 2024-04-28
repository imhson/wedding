'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { FaArrowLeft } from 'react-icons/fa6'
export default function CursorFollower() {
  // Using useRef() to store the cursor element reference
  const cursorRef = useRef(null)
  const arrowRef = useRef(null)
  // Check if it's a touch device
  // useEffect() to only execute this code
  // when the HTML is ready as well as the element reference
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    const cursor = cursorRef.current
    // If device is touchable or cursor element
    // doesn't exist, stop here
    if (isTouchDevice || !cursor) {
      return
    }
    // Using mousemove() to animate the element cursor
    // based on the mouse cursor position (x and y)
    window.addEventListener('mousemove', (e: any) => {
      const { target, x, y } = e
      // check if the mouse cursor is over some link or button
      const isTargetLinkOrBtn = target?.closest('.hover-effect')
      // using the GSAP power to animate some properties
      if (isTargetLinkOrBtn) {
        gsap.to(cursor, {
          x: x - 7,
          y: y - 7,
          duration: 2,
          opacity: 1,
          ease: 'power3.out',
          scale: 3.5,
        })
        gsap.to(arrowRef.current, {
          duration: 1,
          opacity: 1,
          rotate: 140,
          ease: 'power3.out',
        })
      } else {
        gsap.to(cursor, {
          x: x + 3,
          y: y + 3,
          duration: 2,
          opacity: 1,
          ease: 'power3.out',
          scale: 1,
        })
        gsap.to(arrowRef.current, {
          duration: 1,
          opacity: 0,
          rotate: 0,
          ease: 'power3.out',
        })
      }
    })
    // Using mouseleave() to animate the element cursor
    // when the mouse cursor is moved off the page
    document.addEventListener('mouseleave', () => {
      gsap.to(cursor, {
        duration: 2,
        opacity: 0,
      })
    })
  }, [])
  return (
    <div className='cursor-follower grid place-items-center' ref={cursorRef}>
      <span className='opacity-0' ref={arrowRef}>
        <FaArrowLeft color='white' className='max-w-2' />
      </span>
    </div>
  )
}
