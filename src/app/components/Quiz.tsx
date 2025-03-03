import { useState } from 'react'
import type { QuizQuestion } from '../types'

interface QuizProps {
  question: QuizQuestion
  onAnswer: (correct: boolean) => void
}

export default function Quiz({ question, onAnswer }: QuizProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showResult, setShowResult] = useState(false)

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer)
    setShowResult(true)
    const isCorrect = answer === question.correctAnswer
    onAnswer(isCorrect)
  }

  const getButtonClass = (option: string) => {
    if (!showResult || selectedAnswer !== option) {
      return 'bg-white hover:bg-gray-50'
    }
    return option === question.correctAnswer
      ? 'bg-green-100 border-green-500'
      : 'bg-red-100 border-red-500'
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">
        {question.question}
      </h3>
      <div className="space-y-3">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => !showResult && handleAnswer(option)}
            disabled={showResult}
            className={`w-full p-4 text-left rounded-lg border transition-colors
              ${getButtonClass(option)}`}
          >
            {option}
          </button>
        ))}
      </div>
      {showResult && (
        <div className="mt-4 text-center">
          <p className={`font-semibold ${
            selectedAnswer === question.correctAnswer
              ? 'text-green-600'
              : 'text-red-600'
          }`}>
            {selectedAnswer === question.correctAnswer
              ? '정답입니다! 👏'
              : `틀렸습니다. 정답은 ${question.correctAnswer}입니다.`}
          </p>
        </div>
      )}
    </div>
  )
} 