import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss'

import {
  input
  } from '../actions'

import {
  ITEM_S
  } from '../actions/'
import {
  ATTACK,
  BOOST,
  BOSS,
  SENSEI,
  TUIGEKI,
  AKARI,
  AOI,
  YUZU
} from '../reducers/input.js'
import card_templete from '../data/index.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      card_temp_select: 1
    }
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect = (e) => {
  this.setState( {card_temp_select: e.target.value} )
  }

render(){
  const props = this.props
  const card_options = card_templete.map(
    (t, index)=>(
      <option key={ index } value={ index }>
        {t.label}
      </option>
    )
  );
  return (
<React.Fragment>
  <div id="App">
    <header>
      <h1>オンゲキ デッキ シミュレーター</h1>
      <hr />
      <select className="" value={this.state.card_temp_select} onChange={ this.onSelect }>
        { card_options }
      </select>
      {this.state.card_temp_select}
      <Card card={card_templete[this.state.card_temp_select].data} />
      <hr /><hr />
      <Card card={props.cards.left} />
      <Card card={props.cards.center} />
      <Card card={props.cards.right} />

    </header>
  </div>
</React.Fragment>
  )
}}
const Card = props => {
  return(
    <React.Fragment>
      <hr />
      <table>
        <thead>
          {console.log(props.card)}
          <tr><th colSpan="2">カードでーた【{props.card.name}】({props.card.attr})</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>ATK</td>
            <td>{ props.card.atk }</td>
          </tr>
          <tr>
            <td>スキルタイプ</td>
            <td>{props.card.skill.type}<input type="text" value={props.card.skill.value} /></td>
          </tr>
          <tr>
            <td>せつめい</td>
            <td>{setumei(props.card.skill)}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}
const setumei = props => {
  let mes = ''
  switch(props.boss){
    case BOSS:
      mes += 'バトル後半で、'
      break
    case SENSEI:
      mes += 'バトル前半で、'
      break
    case TUIGEKI:
      mes += '対戦相手を撃破後、'
      break
    default:
      break
  }
  if(props.fusion){
    mes += '同じキャラのカード1枚につき'
  }
  switch(props.type){
    case ATTACK:
      mes += `自身の攻撃力${props.value}%アップ`
      break
    default:
      break
  }
  switch(props.skill2.boss){
    case BOSS:
      mes += `(さらにバトル後半で、自身の攻撃力${props.skill2.value}%アップ)`
      break
    case SENSEI:
      mes += `(さらにバトル前半で、自身の攻撃力${props.skill2.value}%アップ)`
      break
    case TUIGEKI:
      mes += `(さらに対戦相手を撃破後、自身の攻撃力${props.skill2.value}%アップ)`
      break
    default: break
  }
  return mes
}
const validate = values => {
  const errors = {}
  return errors
}

const mapStateToProps = state => ({
  cards: state.input.cards,
  lv: state.input.lv,
 })

const mapDispatchToProps = ({
  input
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm( {validate, form: 'simgeki_deck'})(App))
