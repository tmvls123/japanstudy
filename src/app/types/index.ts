export interface Character {
  character: string
  romanization: string
  sound?: string
}

export interface CharacterGroup {
  name: string
  characters: Character[]
}

export interface VocabularyItem {
  word: string
  reading: string
  meaning: string
  example?: {
    japanese: string
    reading: string
    meaning: string
  }
  sound?: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: string
  hint?: string
}

export interface LearningProgress {
  completed: boolean
  score: number
  lastStudied: string
} 