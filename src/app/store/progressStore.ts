import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ProgressState {
  progress: {
    hiragana: number
    katakana: number
    vocabulary: number
    sentences: number
  }
  updateProgress: (section: 'hiragana' | 'katakana' | 'vocabulary' | 'sentences', value: number) => void
}

export const useProgressStore = create<ProgressState>()(
  persist(
    (set) => ({
      progress: {
        hiragana: 0,
        katakana: 0,
        vocabulary: 0,
        sentences: 0,
      },
      updateProgress: (section, value) =>
        set((state) => ({
          progress: {
            ...state.progress,
            [section]: value,
          },
        })),
    }),
    {
      name: 'progress-storage',
    }
  )
) 