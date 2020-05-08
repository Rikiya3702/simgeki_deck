import {
  CARD_NAME,
  CARD_ATK,
  CARD_SKILL,
  CARD_SKILL_TYPE,
  CARD_SKILL_BOSS,
  CARD_SKILL_FUSION,
  CARD_SKILL_TARGET,
  CARD_SKILL_SKILL2,
  CARD_SKILL_VALUE,
  CARD_SKILL2_VALUE,
  BOSS_ENTER,
  BOSS_DONE
} from '../actions'

import {
  AKARI, YUZU, AOI,
  RIO, RIKU, TSUBAKI,
  HARUNA, AYAKA,
  KOBOSHI, SAKI,
  AKANE, KAEDE, ARISU,
  CHINATSU, TSUMUGI, MIA
} from '../data/character_names.js'

export const TEMPLETE = 'TEMPLETE'
export const ATTACK = 'ATTACK'
export const BOOST = 'BOOST'

export const NORMAL = 'NOMAL'
export const BOSS = 'BOSS'
export const SENSEI = 'SENSEI'
export const TUIGEKI = 'TUIGEKI'

export const NONE = 'NONE'
export const ATK = 'ATK'
export const ATR = 'ATR'
export const ATC = 'ATC'
export const CHA = 'CHA'

export const FIRE = 'FIRE'
export const LEAF = 'LEAF'
export const AQUA = 'AQUA'



const MAX_ATK_VALUE = 999
const MAX_SKILL_VALUE = 99

const updateMessage = () =>{
  let mes = []
  mes.push('更新履歴')
  mes.push('')
  mes.push('2020/05/03　開発着手')
  return mes
}

 /*
------------アタック------------
・タイミング（ノーマル・先制・ボス・追撃、フュー・先制フュー・ボスフュー・追撃フュー）
・追加スキル（なし・全部・先制・ボス・追撃）

  type: ATTACK,
  boss: null BOSS SENSEI TUIGEKI,
  fusion: true false,
  target: null,
  value: 15,
  skill2: {
    boss: BOSS SENSEI TUIGEKI,
    value: null
  }
------------------------------------------------

------------ブースト------------

( null or ATK ) and (null or ATTR or CHAR )

ATACCKの攻撃力％アップ（全部・ボス・先制・追撃）
→ATK
ATACCKかつ属性の攻撃力％アップ（全部・ボス・先制・追撃）
→ATR
ATACCKかつキャラの攻撃力％アップ（全部・ボス・先制・追撃）
→ATC
キャラの攻撃力％アップ（全部・ボス・先制・追撃）
→CHA

  type: BOOST,
    boss: null BOSS SENSEI TUIGEKI,
    fusion: true false, （キャラブースト）
    target: ATK ATR ATC CHA
    value: 15,
  （↓使わない↓）
    skill2: {
      boss: null,
      value: null
    }
------------------------------------------------
 */
const initialCard = {
  atk: 317,
  name: AKARI,
  attr: FIRE,
  skill: {
    type: BOOST,
    boss: BOSS,
    fusion: false,
    target: ATR,
    value: 20,
    skill2: {
      boss: NONE,
      value: 0
    }
  }
}
const initialCardLeft = Object.assign({}, initialCard,{
  name: AOI,
  attr: AQUA,
  skill: {
    type: ATTACK,
    boss: SENSEI,
    fusion: false,
    target: NONE,
    value: 20,
    skill2: {
      boss: NONE,
      value: 0
    }
  }
})
const initialCardRight = Object.assign({}, initialCard,{
  name: YUZU,
  attr: LEAF,
  skill: {
    type: ATTACK,
    boss: NORMAL,
    fusion: true,
    target: NONE,
    value: 6,
    skill2: {
      boss: BOSS,
      value: 2
    }
  }
})
const initialState = {  mes: ['ようこそ'],
                        updated: updateMessage(),
                        cards: {  left : initialCardLeft,
                                  center: initialCard,
                                  right: initialCardRight,
                                },
                        bosstime: { enter: 50,
                                    done: 60
                                  }
                      }

const validate = (value, max) => {
  if( value >= 0 && value <= max){
    return Math.floor(value)
  }else if( value > max){
    return max
  }else{
    return 0
  }
}

const validateEnter = v => {
  if(v.enter >= 100){
    return { enter: 100, done: 100 }
  }else if(v.enter >= v.done){
    return { enter: v.enter, done: v.enter }
  }else{
    return { enter: v.enter, done: v.done }
  }
}

const validateDone = v => {
  if(v.done <= 0){
    return { enter: 0, done: 0 }
  }else if(v.done <= v.enter){
    return { enter: v.done, done: v.done }
  }else{
    return { enter: v.enter, done: v.done }
  }
}

const getChar2Attr = char => {
  switch(char) {
    case AKARI:
    case RIKU:
    case HARUNA:
    case AKANE:
    case MIA:
      return FIRE
    case AOI:
    case RIO:
    case AYAKA:
    case SAKI:
    case ARISU:
    case TSUMUGI:
      return AQUA
    case YUZU:
    case TSUBAKI:
    case KOBOSHI:
    case KAEDE:
    case CHINATSU:
      return LEAF
    default:
  }
}

export default (state = initialState, action) => {
  let new_card = {}

  switch(action.type){
    case CARD_NAME:
      new_card = {...state.cards[action.position],
          name: action.value,
          attr: getChar2Attr( action.value),
      }
      return {...state ,
                cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_ATK:
      new_card = {...state.cards[action.position] ,
        atk: validate(action.value, MAX_ATK_VALUE)
      }
      return {...state ,
                cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL:
      if(action.value.type === 'TEMPLETE'){
        return state
      }
      new_card = Object.assign({}, state.cards[action.position] ,{
          skill: action.value
      })
      return {...state ,
                cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL_TYPE:
      if(action.value === ATTACK){
        new_card = {...state.cards[action.position] ,
            skill: {...state.cards[action.position].skill,
              type: ATTACK,
              target: NONE,
              boss: state.cards[action.position].skill.boss,
              fusion: state.cards[action.position].skill.fusion,
              skill2: state.cards[action.position].skill.skill2
        }}
      }else{
        new_card = {...state.cards[action.position] ,
            skill: {...state.cards[action.position].skill,
              type: BOOST,
              boss: NORMAL,
              fusion: false,
              target: ATR,
              skill2: state.cards[action.position].skill.skill2
        }}
      }
      return {...state, cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL_BOSS:
      new_card = {...state.cards[action.position] ,
          skill: {...state.cards[action.position].skill,
            boss: action.value
      }}
      return {...state, cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL_FUSION:
      new_card = {...state.cards[action.position] ,
          skill: {...state.cards[action.position].skill,
            fusion: action.value
      }}
      return {...state, cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL_TARGET:
      new_card = {...state.cards[action.position] ,
          skill: {...state.cards[action.position].skill,
            target: action.value
      }}
      return {...state, cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL_SKILL2:
      new_card = {...state.cards[action.position] ,
          skill: {...state.cards[action.position].skill,
            skill2: { ...state.cards[action.position].skill.skill2,
                boss: action.value
      }}}
      return {...state, cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL_VALUE:
      new_card = Object.assign({}, state.cards[action.position] ,{
          skill: Object.assign({}, state.cards[action.position].skill ,{
              value: validate(action.value, MAX_SKILL_VALUE)
          })
      })
      return {...state ,
                cards: {...state.cards,
                  [action.position]: new_card
              }}

    case CARD_SKILL2_VALUE:
      new_card = Object.assign({}, state.cards[action.position] ,{
          skill: Object.assign({}, state.cards[action.position].skill ,{
              skill2: Object.assign({}, state.cards[action.position].skill.skill2 ,{
                  value: validate(action.value, MAX_SKILL_VALUE),
                  boss: state.cards[action.position].skill.skill2.boss
              })
          })
      })
      return {...state ,
                cards: {...state.cards,
                  [action.position]: new_card
              }}

    case BOSS_ENTER:
      return {...state,
        bosstime: validateEnter({ enter: action.value, done: state.bosstime.done })
      }

    case BOSS_DONE:
      return {...state,
        bosstime: validateDone({ done: action.value, enter: state.bosstime.enter }),
      }

    default:
      return state
  }
}
