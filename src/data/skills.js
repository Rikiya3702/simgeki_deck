import {
  ATTACK,
  BOOST,
  BOSS,
  SENSEI,
  TUIGEKI,
  ATK,
  ATR,
  ATC,
  CHA,
  FIRE,
  LEAF,
  AQUA,
  AKARI,
  AOI,
  YUZU
} from '../reducers/input.js'

export default [
  {
    label: 'ボスアタック',
      data:{
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target:null,
        value: 15,
        skill2: {
          boss: null,
          value: 5
        }
      }
    }
  },
  {
    label: '追撃アタック（ボスアタック）',
    data: {
      skill: {
        type: ATTACK,
        boss: TUIGEKI,
        fusion: false,
        target:null,
        value: 5,
        skill2: {
          boss: BOSS,
          value: 15
        }
      }
    }
  },
  {
    label: '先制キャラブースト',
    data: {
      skill: {
        type: BOOST,
        boss: SENSEI,
        fusion: false,
        target: ATC,
        value: 14,
        skill2: {
          boss: null,
          value: 5
        }
      }
    }
  }
]
