import {
  TEMPLETE,
  ATTACK,
  BOOST,
  NONE,
  NORMAL,
  BOSS,
  SENSEI,
  TUIGEKI,
  ATK,
  ATR,
  ATC,
  CHA,
  FIRE,
  LEAF,
  AQUA
} from '../reducers/input.js'

import {
  AKARI, YUZU, AOI,
  RIO, RIKU, TSUBAKI,
  HARUNA, AYAKA,
  KOBOSHI, SAKI,
  AKANE, KAEDE, ARISU,
  CHINATSU, TSUMUGI, MIA
} from './character_names.js'

export default [
  { label: 'テンプレートを選択して下さい',
    data:{
      atk: 347,
      name: AKARI,
      attr: TEMPLETE,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 25,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【N】★★★★★★★★★★ (親密度Lv.600)',
    data:{
      atk: 347,
      name: AKARI,
      attr: FIRE,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: false,
        target: NONE,
        value: 25,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★★ デイドリーム・フェアリーズ',
    data:{
      atk: 327,
      name: AKARI,
      attr: FIRE,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 22,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★★☆ デイドリーム・フェアリーズ',
    data:{
      atk: 312,
      name: AKARI,
      attr: FIRE,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★★☆☆ デイドリーム・フェアリーズ',
    data:{
      atk: 300,
      name: AKARI,
      attr: FIRE,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★★☆☆☆ デイドリーム・フェアリーズ',
    data:{
      atk: 285,
      name: AKARI,
      attr: FIRE,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
  { label: '【SSR】★☆☆☆☆ デイドリーム・フェアリーズ',
    data:{
      atk: 262,
      name: AKARI,
      attr: FIRE,
      skill: {
        type: BOOST,
        boss: NORMAL,
        fusion: false,
        target: ATR,
        value: 20,
        skill2: {
          boss: NONE,
          value: 0
        }
      }
    }
  },
]
