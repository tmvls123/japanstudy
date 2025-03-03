'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Howl } from 'howler'

interface FlashCardProps {
  front: string
  back: string
  sound?: string
}

export default function FlashCard({ front, back, sound }: FlashCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
    if (sound) {
      const audio = new Howl({
        src: [sound],
        html5: true
      })
      audio.play()
    }
  }

  return (
    <div className="perspective-1000 w-full h-64 cursor-pointer" onClick={handleClick}>
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 앞면 */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-white rounded-xl shadow-lg p-6 backface-hidden
            ${isFlipped ? 'opacity-0' : 'opacity-100'}`}
        >
          <span className="text-9xl">{front}</span>
        </div>

        {/* 뒷면 */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-white rounded-xl shadow-lg p-6 backface-hidden
            ${isFlipped ? 'opacity-100' : 'opacity-0'}`}
          style={{ transform: 'rotateY(180deg)' }}
        >
          <span className="text-7xl text-gray-700">{back}</span>
        </div>
      </motion.div>
    </div>
  )
} 