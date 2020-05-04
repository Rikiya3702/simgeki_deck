import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.scss'

import {
  card_atk,
  card_name,
  card_skill,
  card_skill_type,
  card_skill_boss,
  card_skill_fusion,
  card_skill_target,
  card_skill_value,
  card_skill2_value,
  boss_enter,
  boss_done
} from '../actions'

import {
  ATTACK,
  BOOST,
  NORMAL,
  BOSS,
  SENSEI,
  TUIGEKI,
  NONE,
  ATK,
  ATR,
  ATC,
  CHA
} from '../reducers/input.js'
import card_templete from '../data/index.js'
import attack_skill_templete from '../data/skill_attacks.js'
import boost_skill_templete from '../data/skill_boosts.js'
import select_chars from '../data/select_chars.js'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      card_temp_select: 1,
      select_skill_attack: 1,
      select_skill_boost: 1
    }
    this.onSelect = this.onSelect.bind(this);
    this.onSelectSkillAttack = this.onSelectSkillAttack.bind(this);
    this.onSelectSkillBoost = this.onSelectSkillBoost.bind(this);
  }
  onSelect = (e) => {
  this.setState( {card_temp_select: e.target.value} )
  }
  onSelectSkillAttack = (e) => {
  this.setState( {select_skill_attack: e.target.value} )
  }
  onSelectSkillBoost = (e) => {
  this.setState( {select_skill_boost: e.target.value} )
  }

  render(){
    const props = this.props
    const atk_left = Math.round(getAtk2('left', props.cards, props.bosstime)*10)/10
    const atk_center = Math.round(getAtk2('center', props.cards, props.bosstime)*10)/10
    const atk_right = Math.round(getAtk2('right', props.cards, props.bosstime)*10)/10
    const atk_sum = Math.round((atk_left + atk_center + atk_right)*10)/10

    const card_options = card_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    );
    const attack_skill_options = attack_skill_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    );
    const boost_skill_options = boost_skill_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    );
    const options_character_name = select_chars.map(
        (m, index)=>(
          <option key={ index } value={ m.value }>
            {m.label}
          </option>
        )
      )


    return (

<React.Fragment>
  <div id="App">
    <header>
      <h1>オンゲキ デッキ シミュレーター</h1>
      <hr />
    </header>
    <select className="" value={this.state.card_temp_select} onChange={ this.onSelect }>
      { card_options }
    </select>
    {this.state.card_temp_select}
    <Card card={card_templete[this.state.card_temp_select].data} />
    <hr /><hr />
    <Card card={props.cards.left} position="left"/>
    <Card card={props.cards.center} />
    <Card card={props.cards.right} />

    <br />
    <select className="" value={this.state.select_skill_attack} onChange={ this.onSelectSkillAttack }>
      { attack_skill_options }
    </select>
    <button onClick={ () => {props.card_skill('center', attack_skill_templete[this.state.select_skill_attack].data.skill)}} >centerをこれにする</button>

    <br />
    <select className="" value={this.state.select_skill_boost} onChange={ this.onSelectSkillBoost }>
      { boost_skill_options }
    </select>
    <button onClick={ () => {props.card_skill('center', boost_skill_templete[this.state.select_skill_boost].data.skill)}} >centerをこれにする</button>

    <hr />
    <select value={props.cards['left'].name} onChange={ (e) => props.card_name('left', e.target.value) }>
      { options_character_name }
    </select>
    <br />
    ATK
    <input tyep="text" value={props.cards['center'].atk} onChange={ (e) => props.card_atk('center', e.target.value) } /><br />
    Skill value
    <input tyep="text" value={props.cards['center'].skill.value} onChange={ (e) => props.card_skill_value('center', e.target.value) } /><br />
    Skill2 value
    <input tyep="text" value={props.cards['center'].skill.skill2.value} onChange={ (e) => props.card_skill2_value('center', e.target.value) } /><br />

    <br />
    Skill Type
    <select value={props.cards['center'].skill.type} onChange={ (e) => props.card_skill_type('center', e.target.value) }>
      <option value={ATTACK}>ATTACK</option>
      <option value={BOOST}>BOOST</option>
    </select>

    <br />
    Skill Boss
    <select value={props.cards['center'].skill.boss} onChange={ (e) => props.card_skill_boss('center', e.target.value) }>
      <option value={NORMAL}>通常</option>
      <option value={BOSS}>ボス</option>
      <option value={SENSEI}>先制</option>
      <option value={TUIGEKI}>追撃</option>
    </select>

    <br />
    Skill Fusion
    <select value={props.cards['center'].skill.fusion} onChange={ (e) => props.card_skill_fusion('center', e.target.value) }>
      <option value={false}>なし</option>
      <option value={true}>フージョン</option>
    </select>

    <br />
    Skill Target
    <select value={props.cards['center'].skill.target} onChange={ (e) => props.card_skill_target('center', e.target.value) }>
      <option value={NONE}>なし</option>
      <option value={ATK}>[ATTACK]ブースト</option>
      <option value={ATR}>[ATTACK][属性]ブースト</option>
      <option value={ATC}>[ATTACK][キャラ]ブースト</option>
      <option value={CHA}>[キャラ]ブースト</option>
    </select>

    <div id="Simulate">
      <hr />
      <h2>#しみゅれーと</h2>
      <table>
        <thead>
          <tr>
            <th>シミュレート</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2">LEFT</td>
            <td colSpan="2">CENTER</td>
            <td colSpan="2">RIGHT</td>
          </tr>
          <tr>
            <td className={`back-${props.cards.left.attr}`}>{props.cards.left.name}({props.cards.left.attr})</td>
            <td className={`back-${props.cards.left.skill.type}`}>[{props.cards.left.skill.type}]</td>
            <td className={`back-${props.cards.center.attr}`}>{props.cards.center.name}({props.cards.center.attr})</td>
            <td className={`back-${props.cards.center.skill.type}`}>[{props.cards.center.skill.type}]</td>
            <td className={`back-${props.cards.right.attr}`}>{props.cards.right.name}({props.cards.right.attr})</td>
            <td className={`back-${props.cards.right.skill.type}`}>[{props.cards.right.skill.type}]</td>
          </tr>
          <tr>
            <td colSpan="2" style={{width:200 }}>{setumei(props.cards.left.skill)}</td>
            <td colSpan="2" style={{width:200 }}>{setumei(props.cards.center.skill)}</td>
            <td colSpan="2" style={{width:200 }}>{setumei(props.cards.right.skill)}</td>
          </tr>
          <tr>
            <td>素ATK</td>
            <td>{props.cards.left.atk}</td>
            <td>素ATK</td>
            <td>{props.cards.center.atk}</td>
            <td>素ATK</td>
            <td>{props.cards.right.atk}</td>
          </tr>
          <tr>
            <td>自スキルATK</td>
            <td>{getAtkSelf('left',props.cards)}</td>
            <td>自スキルATK</td>
            <td>{getAtkSelf('center',props.cards)}</td>
            <td>自スキルATK</td>
            <td>{getAtkSelf('right',props.cards)}</td>
          </tr>
          <tr>
            <td>最大ATK</td>
            <td>{getAtk('left',props.cards)}</td>
            <td>最大ATK</td>
            <td>{getAtk('center',props.cards)}</td>
            <td>最大ATK</td>
            <td>{getAtk('right',props.cards)}</td>
          </tr>
          <tr>
            <td>ATK期待値</td>
            <td>{ atk_left }</td>
            <td>ATK期待値</td>
            <td>{ atk_center }</td>
            <td>ATK期待値</td>
            <td>{ atk_right }</td>
          </tr>
        </tbody>
      </table>
      <h3>合計の攻撃力</h3><h1>[{atk_sum}]</h1>
      <span>ボス出現</span>
      <input type="range" max="100" min="0" step="1" autoComplete="off" value={ props.bosstime.enter } onChange={ (e) => { props.input_boss_enter(e.target.value) }} />
      <span>{ props.bosstime.enter }</span>
      <br />
      <span>ボス撃破</span>
      <input type="range" max="100" min="0" step="1" autoComplete="off" value={ props.bosstime.done } onChange={ (e) => { props.input_boss_done(e.target.value) }} />
      <span>{ props.bosstime.done }</span>
    </div>

  </div>
</React.Fragment>

  )}
}

const Card = props => {
  return(
    <React.Fragment>
      <hr />
      <table className={`back-${props.card.attr}`}>
        <thead>
          <tr><th colSpan="2">カードでーた【{props.card.name}】({props.card.attr})</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>ATK</td>
            <td>{ props.card.atk }</td>
          </tr>
          <tr>
            <td>スキルタイプ</td>
            <td>{props.card.skill.type}</td>
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
      mes += '対戦相手を撃破するまで、'
      break
    case TUIGEKI:
      mes += '対戦相手のライフ0%の時、'
      break
    default:
      break
  }
  switch(props.target){
    case ATK:
      mes += '[ATTACK]の'
      break
    case ATR:
      mes += '[ATTACK]かつ[同属性]の'
      break
    case ATC:
      mes += '[ATTACK]かつ[同キャラ]の'
      break
    case CHA:
      mes += '[同キャラ]の'
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
    case BOOST:
      mes += `攻撃力${props.value}%アップ`
      break
    default:
      break
  }
  switch(props.skill2.boss){
    case NORMAL:
      mes += `(さらに自身の攻撃力${props.skill2.value}%アップ)`
      break
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

const getAtkSelf = (self, cards) => {
  let count = 0
  if(cards[self].skill.fusion) {
    if(cards[self].name === cards.left.name) count += 1
    if(cards[self].name === cards.center.name) count += 1
    if(cards[self].name === cards.right.name) count += 1
  }else {
    count += 1
  }
  return cards[self].atk * (100 + cards[self].skill.value * count ) /100
}

const getAtk = (self, cards) => {
  let alfa = ''
  let beta = ''
  switch(self) {
    case 'left':
      alfa = 'center'
      beta = 'right'
      break
    case 'center':
      alfa = 'left'
      beta = 'right'
      break
    case 'right':
      alfa = 'center'
      beta = 'left'
      break
    default:
      break
  }

  let boost = 0

  if(cards[self].skill.type === BOOST) {
    // CHAの時のみ自身にもブーストがかかる
    // BOOSTなのでfusionは無視
    if(cards[self].skill.target === CHA) {
      boost += cards[self].skill.value
    }
    //selfもalfaもCHAの場合
    if( cards[alfa].skill.target === CHA &&
        cards[self].name === cards[alfa].name) {
      boost += cards[alfa].skill.value
    }
    //selfもbetaもCHAの場合
    if( cards[self].skill.target === CHA &&
        cards[self].name === cards[beta].name) {
      boost += cards[beta].skill.value
    }
      return cards[self].atk * (100 + boost ) /100
  }else {
    //自身がATTACKかつalfaがBOOST
    if(cards[alfa].skill.type === BOOST) {
      switch(cards[alfa].skill.target) {
        case ATK:
          boost += cards[alfa].skill.value
          break
        case ATR:
          if( cards[self].attr === cards[alfa].attr) {
            boost += cards[alfa].skill.value
          }
          break
        case ATC:
          if( cards[self].name === cards[alfa].name) {
            boost += cards[alfa].skill.value
          }
          break
        default:
        break
      }
    }
    //自身がATTACKかつbetaがBOOST
    if(cards[beta].skill.type === BOOST) {
      switch(cards[beta].skill.target) {
        case ATK:
          boost += cards[beta].skill.value
          break
        case ATR:
          if( cards[self].attr === cards[beta].attr) {
            boost += cards[beta].skill.value
          }
          break
        case ATC:
          if( cards[self].name === cards[beta].name) {
            boost += cards[beta].skill.value
          }
          break
        default:
          break
      }
    }
  }

  let fusion = 1
  if(cards[self].skill.fusion) {
    if(cards[self].name === cards[alfa].name) fusion += 1
    if(cards[self].name === cards[beta].name) fusion += 1
  }
  return cards[self].atk * (100 + cards[self].skill.value * fusion + boost ) /100

}

const getAtk2 = (self, cards, bosstime) => {
  let alfa = ''
  let beta = ''
  switch(self) {
    case 'left':
      alfa = 'center'
      beta = 'right'
      break
    case 'center':
      alfa = 'left'
      beta = 'right'
      break
    case 'right':
      alfa = 'center'
      beta = 'left'
      break
    default:
      break
  }

  let boss_attack = 100

  let self_boost = 0
  let alfa_boost = 0
  let beta_boost = 0

  //追加スキル持ちBOOSTも居る
  let skill2 = 0
  if(cards[self].skill.skill2.value) {
    skill2 = cards[self].skill.skill2.value * correctionBosstime(cards[self].skill.skill2.boss, bosstime) /100
  }

  if(cards[self].skill.type === BOOST) {
    // CHAの時のみ自身にもブーストがかかる
    // BOOSTなのでfusionは無視
    if(cards[self].skill.target === CHA) {
      self_boost = cards[self].skill.value * correctionBosstime(cards[self].skill.boss, bosstime) /100
    }
    //selfもalfaもCHAの場合
    if( cards[alfa].skill.target === CHA &&
        cards[self].name === cards[alfa].name) {
      alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
    }
    //selfもbetaもCHAの場合
    if( cards[self].skill.target === CHA &&
        cards[self].name === cards[beta].name) {
      beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
    }
    if( cards[self].skill.skill2.boss !== NORMAL){

    }
    return cards[self].atk * (100 + self_boost + alfa_boost + beta_boost + skill2) /100
  }else {

    boss_attack = correctionBosstime(cards[self].skill.boss, bosstime)

    //自身がATTACKかつalfaがBOOST
    if(cards[alfa].skill.type === BOOST) {
      switch(cards[alfa].skill.target) {
        case ATK:
          alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
          break
        case ATR && cards[self].attr === cards[alfa].attr:
          alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
          break
        case ATC && cards[self].name === cards[alfa].name:
          alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
          break
        default:
          break
      }
    }
    //自身がATTACKかつbetaがBOOST
    if(cards[beta].skill.type === BOOST) {
      switch(cards[beta].skill.target) {
        case ATK:
          beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
          break
        case ATR && cards[self].attr === cards[beta].attr:
          beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
          break
        case ATC && cards[self].name === cards[beta].name:
          beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
          break
        default:
          break
      }
    }
  }

  let fusion = 1
  if(cards[self].skill.fusion) {
    if(cards[self].name === cards[alfa].name) fusion += 1
    if(cards[self].name === cards[beta].name) fusion += 1
  }


  return Math.round(cards[self].atk * (100 + cards[self].skill.value *fusion *boss_attack/100 + skill2 + alfa_boost + beta_boost ) )/100

}

const correctionBosstime = (boss, bosstime) => {
  switch(boss) {
    case BOSS:
      return 100 - bosstime.enter
    case SENSEI:
      return  bosstime.done
      break
    case TUIGEKI:
      return 100 - bosstime.done
      break
    case NORMAL:
    default:
      return 100
  }
}

const validate = values => {
  const errors = {}
  return errors
}
const mapStateToProps = state => ({
  cards: state.input.cards,
  bosstime: state.input.bosstime
 })
const mapDispatchToProps = ({
  card_atk,
  card_name,
  card_skill,
  card_skill_type,
  card_skill_boss,
  card_skill_fusion,
  card_skill_target,
  card_skill_value,
  card_skill2_value,
  boss_enter,
  boss_done
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm( {validate, form: 'simgeki_deck'})(App))
