'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { SENTENCE_GROUPS } from '../constants/sentences'
import FlashCard from '../components/FlashCard'
import { useProgressStore } from '../store/progressStore'
import { FaVolumeUp } from 'react-icons/fa'

export default function SentencesPage() {
  const [selectedGroup, setSelectedGroup] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showHiragana, setShowHiragana] = useState(true)
  const { updateProgress } = useProgressStore()

  const currentGroup = SENTENCE_GROUPS[selectedGroup]
  const currentSentence = currentGroup.items[currentIndex]

  // 음성 합성 함수
  const speak = (text: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation()
    }
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'ja-JP'
      window.speechSynthesis.speak(utterance)
    }
  }

  const handleNext = () => {
    if (currentIndex < currentGroup.items.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else if (selectedGroup < SENTENCE_GROUPS.length - 1) {
      setSelectedGroup(selectedGroup + 1)
      setCurrentIndex(0)
    }
    
    // 진행률 업데이트
    const totalSentences = SENTENCE_GROUPS.reduce((acc, group) => acc + group.items.length, 0)
    const completedSentences = selectedGroup * 5 + currentIndex + 1
    const progress = (completedSentences / totalSentences) * 100
    updateProgress('sentences', progress)
  }

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    } else if (selectedGroup > 0) {
      setSelectedGroup(selectedGroup - 1)
      setCurrentIndex(SENTENCE_GROUPS[selectedGroup - 1].items.length - 1)
    }
  }

  // 문장 선택 핸들러
  const handleSentenceSelect = (index: number) => {
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
        문장 학습
      </h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {currentGroup.name} 학습하기
        </h2>
        <div className="flex gap-2 overflow-x-auto pb-4">
          {SENTENCE_GROUPS.map((group, idx) => (
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

      <div className="mb-4 flex justify-center">
        <button
          onClick={() => setShowHiragana(!showHiragana)}
          className="btn-secondary"
        >
          {showHiragana ? '한자 보기' : '히라가나 보기'}
        </button>
      </div>

      <div className="mb-8">
        <FlashCard
          front={
            <div className="text-center">
              <div className="text-2xl mb-2">
                {showHiragana ? currentSentence.hiragana : currentSentence.japanese}
              </div>
              <div className="text-gray-500 text-sm">
                {showHiragana ? currentSentence.japanese : currentSentence.hiragana}
              </div>
              <div className="text-gray-400 text-xs mt-1">
                {currentSentence.hiragana}
              </div>
            </div>
          }
          back={currentSentence.korean}
        />
        <div className="flex justify-center mt-4">
          <button
            onClick={(e) => speak(showHiragana ? currentSentence.hiragana : currentSentence.japanese, e)}
            className="text-2xl text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
            aria-label="발음 듣기"
          >
            <FaVolumeUp />
          </button>
        </div>
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
          {currentIndex + 1} / {currentGroup.items.length}
        </span>
        <button
          onClick={handleNext}
          disabled={
            selectedGroup === SENTENCE_GROUPS.length - 1 &&
            currentIndex === currentGroup.items.length - 1
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {currentGroup.items.map((sentence) => (
            <motion.div
              key={sentence.japanese}
              className={`card flex flex-col items-center justify-center p-4 cursor-pointer ${
                sentence === currentSentence ? 'ring-2 ring-blue-500' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleSentenceSelect(currentGroup.items.indexOf(sentence))}
            >
              <span className="text-lg mb-1">{showHiragana ? sentence.hiragana : sentence.japanese}</span>
              <span className="text-sm text-gray-500">{showHiragana ? sentence.japanese : sentence.hiragana}</span>
              <span className="text-xs text-gray-400 mb-2">{sentence.hiragana}</span>
              <span className="text-gray-600">{sentence.korean}</span>
              <span className="text-sm text-gray-400 mt-2">#{sentence.category}</span>
              <button
                onClick={(e) => speak(showHiragana ? sentence.hiragana : sentence.japanese, e)}
                className="mt-2 text-xl text-blue-600 hover:text-blue-700 transition-colors p-2 rounded-full hover:bg-blue-50"
                aria-label="발음 듣기"
              >
                <FaVolumeUp />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 