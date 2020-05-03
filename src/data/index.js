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
    label: 'Perfect Shining!!!',
      data:{
      atk: 317,
      name: 'AKARI',
      attr: FIRE,
      skill: {
        type: ATTACK,
        boss: BOSS,
        fusion: true,
        target:null,
        value: 15,
        skill2: {
          boss: BOSS,
          value: null
        }
      }
    }
  },
  {
    label: 'Zest of blue',
    data: {
      atk: 317,
      name: 'AOI',
      attr: AQUA,
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
    label: 'みんなH',
    data: {
      atk: 322,
      name: 'YUZU',
      attr: LEAF,
      skill: {
        type: BOOST,
        boss: SENSEI,
        fusion: false,
        target: ATC,
        value: 14,
        skill2: {
          boss: null,
          value: null
        }
      }
    }
  }
]
