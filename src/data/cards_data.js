import {
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
} from '../reducers/input.js'

export default [
  { label: '【N】★★★★★★★★★★ (親密度Lv.600)',
    data:{
      atk: 347,
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
