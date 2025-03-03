interface SentenceItem {
  japanese: string
  hiragana: string
  korean: string
  category: string
}

interface SentenceGroup {
  name: string
  items: SentenceItem[]
}

export const SENTENCE_GROUPS: SentenceGroup[] = [
  {
    name: '기본 문장',
    items: [
      {
        japanese: 'おはようございます。',
        hiragana: 'おはようございます。',
        korean: '안녕하세요. (아침)',
        category: '인사',
      },
      {
        japanese: '私は学生です。',
        hiragana: 'わたしはがくせいです。',
        korean: '저는 학생입니다.',
        category: '자기소개',
      },
      {
        japanese: '日本語を勉強しています。',
        hiragana: 'にほんごをべんきょうしています。',
        korean: '일본어를 공부하고 있습니다.',
        category: '자기소개',
      },
      {
        japanese: 'これは本です。',
        hiragana: 'これはほんです。',
        korean: '이것은 책입니다.',
        category: '사물',
      },
      {
        japanese: 'あの人は先生です。',
        hiragana: 'あのひとはせんせいです。',
        korean: '저 사람은 선생님입니다.',
        category: '사람',
      },
    ],
  },
  {
    name: '위치와 장소',
    items: [
      {
        japanese: '学校はどこですか？',
        hiragana: 'がっこうはどこですか？',
        korean: '학교는 어디입니까?',
        category: '질문',
      },
      {
        japanese: '駅の近くです。',
        hiragana: 'えきのちかくです。',
        korean: '역 근처입니다.',
        category: '답변',
      },
      {
        japanese: '図書館は右にあります。',
        hiragana: 'としょかんはみぎにあります。',
        korean: '도서관은 오른쪽에 있습니다.',
        category: '위치',
      },
      {
        japanese: '公園で遊びます。',
        hiragana: 'こうえんであそびます。',
        korean: '공원에서 놉니다.',
        category: '행동',
      },
      {
        japanese: '家に帰ります。',
        hiragana: 'いえにかえります。',
        korean: '집에 돌아갑니다.',
        category: '이동',
      },
    ],
  },
  {
    name: '시간 표현',
    items: [
      {
        japanese: '今何時ですか？',
        hiragana: 'いまなんじですか？',
        korean: '지금 몇 시입니까?',
        category: '질문',
      },
      {
        japanese: '七時です。',
        hiragana: 'しちじです。',
        korean: '7시입니다.',
        category: '답변',
      },
      {
        japanese: '明日学校に行きます。',
        hiragana: 'あしたがっこうにいきます。',
        korean: '내일 학교에 갑니다.',
        category: '계획',
      },
      {
        japanese: '昨日映画を見ました。',
        hiragana: 'きのうえいがをみました。',
        korean: '어제 영화를 봤습니다.',
        category: '과거',
      },
      {
        japanese: '来週日本に行きます。',
        hiragana: 'らいしゅうにほんにいきます。',
        korean: '다음 주에 일본에 갑니다.',
        category: '미래',
      },
    ],
  },
  {
    name: '취미와 좋아하는 것',
    items: [
      {
        japanese: '何が好きですか？',
        hiragana: 'なにがすきですか？',
        korean: '무엇을 좋아합니까?',
        category: '질문',
      },
      {
        japanese: '音楽が好きです。',
        hiragana: 'おんがくがすきです。',
        korean: '음악을 좋아합니다.',
        category: '취미',
      },
      {
        japanese: '日本の食べ物が好きです。',
        hiragana: 'にほんのたべものがすきです。',
        korean: '일본 음식을 좋아합니다.',
        category: '음식',
      },
      {
        japanese: '休みの日は本を読みます。',
        hiragana: 'やすみのひはほんをよみます。',
        korean: '쉬는 날에는 책을 읽습니다.',
        category: '취미',
      },
      {
        japanese: 'スポーツをすることが好きです。',
        hiragana: 'すぽーつをすることがすきです。',
        korean: '스포츠 하는 것을 좋아합니다.',
        category: '취미',
      },
    ],
  },
  {
    name: '감정과 상태',
    items: [
      {
        japanese: '元気ですか？',
        hiragana: 'げんきですか？',
        korean: '건강하십니까?',
        category: '질문',
      },
      {
        japanese: 'はい、元気です。',
        hiragana: 'はい、げんきです。',
        korean: '네, 건강합니다.',
        category: '답변',
      },
      {
        japanese: '疲れています。',
        hiragana: 'つかれています。',
        korean: '피곤합니다.',
        category: '상태',
      },
      {
        japanese: '楽しかったです。',
        hiragana: 'たのしかったです。',
        korean: '즐거웠습니다.',
        category: '감정',
      },
      {
        japanese: '難しいですね。',
        hiragana: 'むずかしいですね。',
        korean: '어렵네요.',
        category: '감정',
      },
    ],
  },
] 