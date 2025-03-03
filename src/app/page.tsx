'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useProgressStore } from './store/progressStore'
import ProgressBar from './components/ProgressBar'

export default function Home() {
  const progress = useProgressStore(state => state.progress)

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        일본어 학습
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/hiragana">
          <motion.div
            className="card p-6"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">히라가나</h2>
            <p className="text-gray-600 mb-4">
              히라가나 문자를 배우고 연습합니다.
            </p>
            <ProgressBar progress={progress.hiragana} label="학습 진도" />
          </motion.div>
        </Link>

        <Link href="/katakana">
          <motion.div
            className="card p-6"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">카타카나</h2>
            <p className="text-gray-600 mb-4">
              카타카나 문자를 배우고 연습합니다.
            </p>
            <ProgressBar progress={progress.katakana} label="학습 진도" />
          </motion.div>
        </Link>

        <Link href="/vocabulary">
          <motion.div
            className="card p-6"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">단어 학습</h2>
            <p className="text-gray-600 mb-4">
              기초 일본어 단어를 학습합니다.
            </p>
            <ProgressBar progress={progress.vocabulary} label="학습 진도" />
          </motion.div>
        </Link>

        <Link href="/sentences">
          <motion.div
            className="card p-6"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">문장 학습</h2>
            <p className="text-gray-600 mb-4">
              기초 일본어 문장을 학습합니다.
            </p>
            <ProgressBar progress={progress.sentences} label="학습 진도" />
          </motion.div>
        </Link>
      </div>
    </main>
  )
}
