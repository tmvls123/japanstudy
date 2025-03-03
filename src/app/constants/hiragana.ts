import { CharacterGroup } from '../types'

export const HIRAGANA_GROUPS: CharacterGroup[] = [
  {
    name: '기본 모음',
    characters: [
      { character: 'あ', romanization: 'a', sound: '/sounds/hiragana/a.mp3' },
      { character: 'い', romanization: 'i', sound: '/sounds/hiragana/i.mp3' },
      { character: 'う', romanization: 'u', sound: '/sounds/hiragana/u.mp3' },
      { character: 'え', romanization: 'e', sound: '/sounds/hiragana/e.mp3' },
      { character: 'お', romanization: 'o', sound: '/sounds/hiragana/o.mp3' },
    ],
  },
  {
    name: 'K행',
    characters: [
      { character: 'か', romanization: 'ka', sound: '/sounds/hiragana/ka.mp3' },
      { character: 'き', romanization: 'ki', sound: '/sounds/hiragana/ki.mp3' },
      { character: 'く', romanization: 'ku', sound: '/sounds/hiragana/ku.mp3' },
      { character: 'け', romanization: 'ke', sound: '/sounds/hiragana/ke.mp3' },
      { character: 'こ', romanization: 'ko', sound: '/sounds/hiragana/ko.mp3' },
    ],
  },
  {
    name: 'S행',
    characters: [
      { character: 'さ', romanization: 'sa', sound: '/sounds/hiragana/sa.mp3' },
      { character: 'し', romanization: 'shi', sound: '/sounds/hiragana/shi.mp3' },
      { character: 'す', romanization: 'su', sound: '/sounds/hiragana/su.mp3' },
      { character: 'せ', romanization: 'se', sound: '/sounds/hiragana/se.mp3' },
      { character: 'そ', romanization: 'so', sound: '/sounds/hiragana/so.mp3' },
    ],
  },
  {
    name: 'T행',
    characters: [
      { character: 'た', romanization: 'ta', sound: '/sounds/hiragana/ta.mp3' },
      { character: 'ち', romanization: 'chi', sound: '/sounds/hiragana/chi.mp3' },
      { character: 'つ', romanization: 'tsu', sound: '/sounds/hiragana/tsu.mp3' },
      { character: 'て', romanization: 'te', sound: '/sounds/hiragana/te.mp3' },
      { character: 'と', romanization: 'to', sound: '/sounds/hiragana/to.mp3' },
    ],
  },
  {
    name: 'N행',
    characters: [
      { character: 'な', romanization: 'na', sound: '/sounds/hiragana/na.mp3' },
      { character: 'に', romanization: 'ni', sound: '/sounds/hiragana/ni.mp3' },
      { character: 'ぬ', romanization: 'nu', sound: '/sounds/hiragana/nu.mp3' },
      { character: 'ね', romanization: 'ne', sound: '/sounds/hiragana/ne.mp3' },
      { character: 'の', romanization: 'no', sound: '/sounds/hiragana/no.mp3' },
    ],
  },
] 