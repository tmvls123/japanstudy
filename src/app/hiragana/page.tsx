'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HIRAGANA_GROUPS } from '../constants/hiragana'
import FlashCard from '../components/FlashCard'
import { useProgressStore } from '../store/progressStore'

export default function HiraganaPage() {
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { updateProgress } = useProgressStore()

  const currentGroup = HIRAGANA_GROUPS[selectedGroup]
  const currentChar = currentGroup.characters[currentIndex]

  const handleNext = () => {
    if (currentIndex < currentGroup.characters.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (selectedGroup < HIRAGANA_GROUPS.length - 1) {
      setSelectedGroup(selectedGroup + 1)
      setCurrentIndex(0)
    }
    
    // 진행률 업데이트
    const totalChars = HIRAGANA_GROUPS.reduce((acc, group) => acc + group.characters.length, 0)
    const completedChars = selectedGroup * 5 + currentIndex + 1
    const progress = (completedChars / totalChars) * 100
    updateProgress('hiragana', progress)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (selectedGroup > 0) {
      setSelectedGroup(selectedGroup - 1)
      setCurrentIndex(HIRAGANA_GROUPS[selectedGroup - 1].characters.length - 1)
    }
  }

  // 문자 선택 핸들러 추가
  const handleCharSelect = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <Link href="/" className="btn-primary inline-block">
          ← 메인으로 돌아가기
        </Link>
      </div>

      <h1 className="text-3xl font-bold text-blue-600 mb-8 text-center">
        히라가나 학습
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {currentGroup.name} 학습하기
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {HIRAGANA_GROUPS.map((group, idx) => (
            <button
              key={group.name}
              onClick={() => {
                setSelectedGroup(idx)
                setCurrentIndex(0)
              }}
              className={`px-4 py-2 rounded-lg whitespace-nowrap ${
                selectedGroup === idx
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              {group.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <FlashCard
          front={currentChar.character}
          back={currentChar.romanization}
          sound={currentChar.sound}
        />
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={selectedGroup === 0 && currentIndex === 0}
          className="btn-primary disabled:opacity-50"
        >
          이전
        </button>
        <span className="text-gray-600">
          {currentIndex + 1} / {currentGroup.characters.length}
        </span>
        <button
          onClick={handleNext}
          disabled={
            selectedGroup === HIRAGANA_GROUPS.length - 1 &&
            currentIndex === currentGroup.characters.length - 1
          }
          className="btn-primary disabled:opacity-50"
        >
          다음
        </button>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {currentGroup.name} 목록
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {currentGroup.characters.map((char, idx) => (
            <motion.div
              key={char.character}
              className={`card flex flex-col items-center justify-center p-4 cursor-pointer ${
                char === currentChar ? 'ring-2 ring-blue-500' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCharSelect(idx)}
            >
              <span className="text-3xl mb-2">{char.character}</span>
              <span className="text-gray-600">{char.romanization}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 