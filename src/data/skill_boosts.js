import {
  BOOST,
  NORMAL,
  NONE,
  BOSS,
  ATK,
  ATR,
  ATC,
  CHA,
} from '../reducers/input.js'

export default [
  { label: '[同属性]ブースト',
    data: {
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[同属性]ボスブースト',
    data: {
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATR,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[同属性][同キャラ]ブースト',
    data: {
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATC,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[同属性][同キャラ]ボスブースト',
    data: {
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATC,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[全属性]ブースト',
    data: {
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATK,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[全属性]ボスブースト',
    data: {
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: ATK,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[同キャラ]ブースト',
    data: {
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: CHA,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[同キャラ]ボスブースト',
    data: {
      skill: {
        type: BOOST,
        boss: BOSS,
        fusion: false,
        target: CHA,
        value: 14,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '[同属性]ブースト＋（アタック）',
    data: {
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 12,
        skill2: {
          boss: NORMAL,
          value: 3
        }
      }
    }
  },
]
