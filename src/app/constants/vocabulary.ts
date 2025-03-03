interface VocabularyItem {
  japanese: string
  hiragana: string
  korean: string
  category: string
}

interface VocabularyGroup {
  name: string
  items: VocabularyItem[]
}

export const VOCABULARY_GROUPS: VocabularyGroup[] = [
  {
    name: '인사',
    items: [
      { japanese: 'おはよう', hiragana: 'おはよう', korean: '안녕하세요 (아침)', category: '인사' },
      { japanese: 'こんにちは', hiragana: 'こんにちは', korean: '안녕하세요 (낮)', category: '인사' },
      { japanese: 'こんばんは', hiragana: 'こんばんは', korean: '안녕하세요 (저녁)', category: '인사' },
      { japanese: 'さようなら', hiragana: 'さようなら', korean: '안녕히 가세요', category: '인사' },
      { japanese: 'ありがとう', hiragana: 'ありがとう', korean: '감사합니다', category: '인사' },
      { japanese: 'すみません', hiragana: 'すみません', korean: '죄송합니다', category: '인사' },
      { japanese: 'いってきます', hiragana: 'いってきます', korean: '다녀오겠습니다', category: '인사' },
      { japanese: 'いってらっしゃい', hiragana: 'いってらっしゃい', korean: '다녀오세요', category: '인사' },
      { japanese: 'ただいま', hiragana: 'ただいま', korean: '다녀왔습니다', category: '인사' },
      { japanese: 'おかえり', hiragana: 'おかえり', korean: '어서오세요', category: '인사' },
      { japanese: 'おやすみ', hiragana: 'おやすみ', korean: '안녕히 주무세요', category: '인사' },
      { japanese: 'はじめまして', hiragana: 'はじめまして', korean: '처음 뵙겠습니다', category: '인사' },
    ],
  },
  {
    name: '기본 단어',
    items: [
      { japanese: '私', hiragana: 'わたし', korean: '나, 저', category: '대명사' },
      { japanese: '本', hiragana: 'ほん', korean: '책', category: '물건' },
      { japanese: '水', hiragana: 'みず', korean: '물', category: '음식' },
      { japanese: '犬', hiragana: 'いぬ', korean: '개', category: '동물' },
      { japanese: '猫', hiragana: 'ねこ', korean: '고양이', category: '동물' },
      { japanese: '人', hiragana: 'ひと', korean: '사람', category: '대명사' },
      { japanese: '友達', hiragana: 'ともだち', korean: '친구', category: '대명사' },
      { japanese: '先生', hiragana: 'せんせい', korean: '선생님', category: '대명사' },
      { japanese: '学生', hiragana: 'がくせい', korean: '학생', category: '대명사' },
      { japanese: '家族', hiragana: 'かぞく', korean: '가족', category: '대명사' },
      { japanese: '電話', hiragana: 'でんわ', korean: '전화', category: '물건' },
      { japanese: 'テレビ', hiragana: 'てれび', korean: '텔레비전', category: '물건' },
    ],
  },
  {
    name: '숫자',
    items: [
      { japanese: '一', hiragana: 'いち', korean: '1', category: '숫자' },
      { japanese: '二', hiragana: 'に', korean: '2', category: '숫자' },
      { japanese: '三', hiragana: 'さん', korean: '3', category: '숫자' },
      { japanese: '四', hiragana: 'よん', korean: '4', category: '숫자' },
      { japanese: '五', hiragana: 'ご', korean: '5', category: '숫자' },
      { japanese: '六', hiragana: 'ろく', korean: '6', category: '숫자' },
      { japanese: '七', hiragana: 'なな', korean: '7', category: '숫자' },
      { japanese: '八', hiragana: 'はち', korean: '8', category: '숫자' },
      { japanese: '九', hiragana: 'きゅう', korean: '9', category: '숫자' },
      { japanese: '十', hiragana: 'じゅう', korean: '10', category: '숫자' },
      { japanese: '百', hiragana: 'ひゃく', korean: '100', category: '숫자' },
      { japanese: '千', hiragana: 'せん', korean: '1000', category: '숫자' },
    ],
  },
  {
    name: '음식',
    items: [
      { japanese: 'ご飯', hiragana: 'ごはん', korean: '밥', category: '음식' },
      { japanese: '魚', hiragana: 'さかな', korean: '생선', category: '음식' },
      { japanese: '肉', hiragana: 'にく', korean: '고기', category: '음식' },
      { japanese: '野菜', hiragana: 'やさい', korean: '채소', category: '음식' },
      { japanese: '果物', hiragana: 'くだもの', korean: '과일', category: '음식' },
      { japanese: 'お茶', hiragana: 'おちゃ', korean: '차', category: '음식' },
      { japanese: 'コーヒー', hiragana: 'こーひー', korean: '커피', category: '음식' },
      { japanese: 'パン', hiragana: 'ぱん', korean: '빵', category: '음식' },
      { japanese: 'ラーメン', hiragana: 'らーめん', korean: '라면', category: '음식' },
      { japanese: '寿司', hiragana: 'すし', korean: '초밥', category: '음식' },
      { japanese: 'カレー', hiragana: 'かれー', korean: '카레', category: '음식' },
      { japanese: 'うどん', hiragana: 'うどん', korean: '우동', category: '음식' },
    ],
  },
  {
    name: '장소',
    items: [
      { japanese: '学校', hiragana: 'がっこう', korean: '학교', category: '장소' },
      { japanese: '公園', hiragana: 'こうえん', korean: '공원', category: '장소' },
      { japanese: '図書館', hiragana: 'としょかん', korean: '도서관', category: '장소' },
      { japanese: '駅', hiragana: 'えき', korean: '역', category: '장소' },
      { japanese: '病院', hiragana: 'びょういん', korean: '병원', category: '장소' },
      { japanese: '家', hiragana: 'いえ', korean: '집', category: '장소' },
      { japanese: 'レストラン', hiragana: 'れすとらん', korean: '레스토랑', category: '장소' },
      { japanese: '映画館', hiragana: 'えいがかん', korean: '영화관', category: '장소' },
      { japanese: 'スーパー', hiragana: 'すーぱー', korean: '슈퍼마켓', category: '장소' },
      { japanese: '銀行', hiragana: 'ぎんこう', korean: '은행', category: '장소' },
      { japanese: '郵便局', hiragana: 'ゆうびんきょく', korean: '우체국', category: '장소' },
      { japanese: 'デパート', hiragana: 'でぱーと', korean: '백화점', category: '장소' },
    ],
  },
  {
    name: '형용사',
    items: [
      { japanese: '大きい', hiragana: 'おおきい', korean: '크다', category: '형용사' },
      { japanese: '小さい', hiragana: 'ちいさい', korean: '작다', category: '형용사' },
      { japanese: '高い', hiragana: 'たかい', korean: '높다/비싸다', category: '형용사' },
      { japanese: '安い', hiragana: 'やすい', korean: '싸다', category: '형용사' },
      { japanese: '新しい', hiragana: 'あたらしい', korean: '새롭다', category: '형용사' },
      { japanese: '古い', hiragana: 'ふるい', korean: '오래되다', category: '형용사' },
      { japanese: '良い', hiragana: 'いい', korean: '좋다', category: '형용사' },
      { japanese: '悪い', hiragana: 'わるい', korean: '나쁘다', category: '형용사' },
      { japanese: '暑い', hiragana: 'あつい', korean: '덥다', category: '형용사' },
      { japanese: '寒い', hiragana: 'さむい', korean: '춥다', category: '형용사' },
      { japanese: '楽しい', hiragana: 'たのしい', korean: '즐겁다', category: '형용사' },
      { japanese: '難しい', hiragana: 'むずかしい', korean: '어렵다', category: '형용사' },
    ],
  },
  {
    name: '동사',
    items: [
      { japanese: '行く', hiragana: 'いく', korean: '가다', category: '동사' },
      { japanese: '来る', hiragana: 'くる', korean: '오다', category: '동사' },
      { japanese: '食べる', hiragana: 'たべる', korean: '먹다', category: '동사' },
      { japanese: '飲む', hiragana: 'のむ', korean: '마시다', category: '동사' },
      { japanese: '見る', hiragana: 'みる', korean: '보다', category: '동사' },
      { japanese: '聞く', hiragana: 'きく', korean: '듣다', category: '동사' },
      { japanese: '話す', hiragana: 'はなす', korean: '말하다', category: '동사' },
      { japanese: '読む', hiragana: 'よむ', korean: '읽다', category: '동사' },
      { japanese: '書く', hiragana: 'かく', korean: '쓰다', category: '동사' },
      { japanese: '寝る', hiragana: 'ねる', korean: '자다', category: '동사' },
      { japanese: '起きる', hiragana: 'おきる', korean: '일어나다', category: '동사' },
      { japanese: '勉強する', hiragana: 'べんきょうする', korean: '공부하다', category: '동사' },
    ],
  },
] 