'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import Image1 from '@/assets/image_1.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { greatVibesFont } from '@/utils/fonts'
export default function MainSection() {
  const [state, setState] = useState(0)
  const [prevState, setPrevState] = useState(0)
  const container = useRef<any>()
  useGSAP(
    () => {
      if (state == 1) {
        gsap.to('#image', {
          xPercent: -61,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#together-button', {
          opacity: 1,
          pointerEvents: 'unset',
          maxWidth: 400,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#groom-button', {
          opacity: 0,
          pointerEvents: 'none',
          maxWidth: 0,
          marginLeft: 0,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#bride-button', {
          opacity: 1,
          pointerEvents: 'unset',
          maxWidth: 400,
          marginLeft: 20,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#buttons', {
          x: '-18vw',
          duration: 2,
          ease: 'power4.inOut',
        })
      }
      if (state == 2) {
        gsap.to('#image', {
          xPercent: -39,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#together-button', {
          opacity: 1,
          pointerEvents: 'unset',
          maxWidth: 400,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#groom-button', {
          opacity: 1,
          pointerEvents: 'unset',
          maxWidth: 400,
          marginLeft: 20,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#bride-button', {
          opacity: 0,
          pointerEvents: 'none',
          maxWidth: 0,
          marginLeft: 0,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#buttons', {
          x: '27vw',
          duration: 2,
          ease: 'power4.inOut',
        })
      }

      if (state == 1 && prevState == 0) {
        gsap.set('#letter', {
          right: '100%',
        })
        gsap.to('#letter', {
          right: 0,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.set('#bride', {
          opacity: 0,
          delay: 1.1,
        })
        gsap.set('#groom', {
          opacity: 1,
          delay: 1.1,
        })
      }
      if (state == 1 && prevState == 2) {
        gsap.to('#letter', {
          right: 0,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.set('#bride', {
          opacity: 0,
          delay: 1,
        })
        gsap.set('#groom', {
          opacity: 1,
          delay: 1,
        })
      }

      if (state == 2 && prevState == 0) {
        gsap.set('#letter', {
          right: '-34vw',
        })
        gsap.to('#letter', {
          right: '67vw',
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.set('#bride', {
          opacity: 1,
          delay: 1.1,
        })
        gsap.set('#groom', {
          opacity: 0,
          delay: 1.1,
        })
      }
      if (state == 2 && prevState == 1) {
        gsap.to('#letter', {
          right: '67vw',
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.set('#bride', {
          opacity: 1,
          delay: 1,
        })
        gsap.set('#groom', {
          opacity: 0,
          delay: 1,
        })
      }
      if (state == 0 && prevState == 1) {
        gsap.to('#letter', {
          right: '100%',
          duration: 2,
          ease: 'power4.inOut',
        })
      }
      if (state == 0 && prevState == 2) {
        gsap.to('#letter', {
          right: '-34vw',
          duration: 2,
          ease: 'power4.inOut',
        })
      }
      if (state != 0 && prevState == 0) {
        gsap.to('#image', {
          scale: 1.1,
          duration: 2,
          ease: 'power4.inOut',
        })
      }
      if (state == 0 && prevState != 0) {
        gsap.to('#image', {
          xPercent: -50,
          scale: 1,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.set('#bride', {
          opacity: 1,
          delay: 0.92,
        })
        gsap.set('#groom', {
          opacity: 1,
          delay: 0.92,
        })
        gsap.to('#together-button', {
          opacity: 0,
          pointerEvents: 'none',
          maxWidth: 0,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#groom-button', {
          opacity: 1,
          pointerEvents: 'unset',
          maxWidth: 400,
          marginLeft: 0,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#bride-button', {
          opacity: 1,
          pointerEvents: 'unset',
          maxWidth: 400,
          marginLeft: 20,
          duration: 2,
          ease: 'power4.inOut',
        })
        gsap.to('#buttons', {
          x: 80,
          duration: 2,
          ease: 'power4.inOut',
        })
      }
    },
    { scope: container, dependencies: [state] }
  )

  const handler = (nextState: number) => {
    setState((prev) => {
      setPrevState(prev)
      return nextState
    })
  }

  return (
    <div className='h-[100dvh] w-screen overflow-hidden relative flex justify-center' ref={container}>
      <div className='h-[100dvh] w-[150vw] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2' id='image'>
        <div className='w-full h-full relative'>
          <Image
            src={Image1}
            alt=''
            className='min-h-[100dvh] w-[150vw] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
          />
        </div>
        <div id='groom' className='h-[70dvh] w-96 bg-green-300 absolute bottom-0 left-[47%] -translate-x-1/2'></div>
        <div id='bride' className='h-[65dvh] w-96 bg-pink-200 absolute bottom-0 left-[54%] -translate-x-1/2'></div>
      </div>
      <div id='letter' className='w-1/3 h-[100dvh] bg-[#faefeb] absolute right-full top-0'></div>
      <div id='buttons' className='absolute bottom-[5vh] flex items-center'>
        <button
          id='together-button'
          className='btn menu-btn h-10 w-10 rounded-full bg-white flex justify-center items-center opacity-0'
          onClick={() => handler(0)}
          data-hover>
          <svg xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewBox='0 0 24 24' fill='none'>
            <path
              d='M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z'
              fill='currentColor'
            />
          </svg>
          <div data-hover-bounds></div>
        </button>
        <button
          id='groom-button'
          onClick={() => handler(1)}
          className={`btn close-btn h-10 flex items-center rounded-full ml-5 bg-white ${greatVibesFont.className}`}
          data-hover>
          <p className='px-5'>Groom</p>
          <div data-hover-bounds></div>
        </button>
        <button
          id='bride-button'
          onClick={() => handler(2)}
          className={`btn close-btn h-10 flex items-center rounded-full ml-5 bg-white ${greatVibesFont.className}`}
          data-hover>
          <p className='px-5'>Bride</p>
          <div data-hover-bounds></div>
        </button>
      </div>
    </div>
  )
}
