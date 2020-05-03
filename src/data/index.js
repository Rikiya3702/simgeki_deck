import {
  ATTACK,
  BOOST,
  BOSS,
  SENSEI,
  TUIGEKI,
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
        value: 5,
        skill2: {
          boss: BOSS,
          value: 15
        }
      }
    }
  }
]
