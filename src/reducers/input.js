import {
  INPUT_BOSS_ENTER,
  INPUT_BOSS_DONE
} from '../actions'

export const ATTACK = 'ATTACK'
export const BOOST = 'BOOST'

export const BOSS = 'BOSS'
export const SENSEI = 'SENSEI'
export const TUIGEKI = 'TUIGEKI'

export const ATK = 'ATK'
export const ATR = 'ATR'
export const ATC = 'ATC'
export const CHA = 'CHA'

export const FIRE = 'FIRE'
export const LEAF = 'LEAF'
export const AQUA = 'AQUA'

export const AKARI = '星咲あかり'
export const AOI = '三角葵'
export const YUZU = '藤沢柚'

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
    boss: null,
    fusion: false,
    target: ATK,
    value: 20,
    skill2: {
      boss: null,
      value: null
    }
  }
}
const initialCardLeft = Object.assign({}, initialCard,{
  name: AOI,
  skill: {
    type: ATTACK,
    boss: TUIGEKI,
    fusion: false,
    target:null,
    value: 20,
    skill2: {
      boss: null,
      value: null
    }
  }
})
const initialCardRight = Object.assign({}, initialCard,{
  name: YUZU,
  skill: {
    type: ATTACK,
    boss: null,
    fusion: true,
    target:null,
    value: 5,
    skill2: {
      boss: SENSEI,
      value: 6
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
export default (state = initialState, action) => {

  switch(action.type){
    case INPUT_BOSS_ENTER:
      return Object.assign({}, state,{
        bosstime: validateEnter({ enter: action.value, done: state.bosstime.done }),
      })

    case INPUT_BOSS_DONE:
      return Object.assign({}, state,{
        bosstime: validateDone({ done: action.value, enter: state.bosstime.enter }),
      })

    default:
      return state
  }
}
