import {
  INPUT,
} from '../actions'

export const ATTACK = 'ATTACK'
export const BOOST = 'BOOST'

export const BOSS = 'BOSS'
export const SENSEI = 'SENSEI'
export const TUIGEKI = 'TUIGEKI'

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
  mes.push('2020/04/12　公開')
  return mes
}

 /*
 ＾＾＾アタック＾＾＾
 タイミング（ノーマル・先制・ボス・追撃、フュー・先制フュー・ボスフュー・追撃フュー）
X
 追加スキル（なし・全部・先制・ボス・追撃）
＾＾＾＾＾＾

＾＾＾ブースト＾＾＾

ATACCKかつ属性の攻撃力％アップ（全部・ボス）
ATACCKかつキャラの攻撃力％アップ（全部・ボス）
キャラの攻撃力％アップ（全部・ボス）
全ての攻撃力％アップ（全部・ボス）
＾＾＾＾＾＾

 フュージョン（なし・全部・先制・後半・撃破後）
自身の攻撃力％アップ
自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）
自身の攻撃力％アップ
バトル後半で、自身の攻撃力％アップ
バトル前半で、自身の攻撃力％アップ
ボス撃破後、自身の攻撃力％アップ
のカード一枚につき自身の攻撃力％アップ
のカード一枚につき自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）
のカード一枚につき自身の攻撃力％アップ（自身の攻撃力％アップ）
のカード一枚につき自身の攻撃力％アップ

自身の攻撃力％アップ
バトル後半で、自身の攻撃力％アップ
バトル前半で、自身の攻撃力％アップ
ボス撃破後、自身の攻撃力％アップ
のカード一枚につき自身の攻撃力％アップ

自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）
バトル後半で、自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）
バトル前半で、自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）
ボス撃破後、自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）
のカード一枚につき自身の攻撃力％アップ（バトル後半で、自身の攻撃力％アップ）

 */
const initialCard = {
  atk: 317,
  name: AKARI,
  attr: FIRE,
  skill: {
    type: ATTACK,
    boss: BOSS,
    fusion: false,
    value: 15,
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
    value: 5,
    skill2: {
      boss: SENSEI,
      value: 6
    }
  }
})
const initialState = {  mes: ['ようこそ'],
                        updated: updateMessage(),
                        cards: {left : initialCardLeft,
                                center: initialCard,
                                right: initialCardRight,
                              }
                      }

export default (state = initialState, action) => {

  switch(action.type){
    case INPUT:
      return Object.assign({}, state,{
        exp: { goal: state.exp.goal },
        lv:  { goal: state.lv.goal },
      })

    default:
      return state
  }
}
