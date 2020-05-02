import {
  INPUT,
} from '../actions'

const updateMessage = () =>{
  let mes = []
  mes.push("更新履歴")
  mes.push("")
  mes.push("2020/04/12　公開")
  return mes
}

const initialState = {  mes: ["ようこそ"],
                        updated: updateMessage(),
                        lv:  {now: 0, goal: 600},
                        exp: {now: 0, goal: 29700},
                        item: {s: 0, m: 0, l: 0 },
                        money: 0,
                        juwel: {end: 0, all: 0},
                        itemflag: {s: true, m: true, l: true, money: true, jall: true},
                        changed: {lv: [], goal:[], items: [], itemm: [], iteml: [], money: [], jend: [], jall: []}
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
