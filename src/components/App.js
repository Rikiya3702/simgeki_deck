import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import SelectSkill from './select.js';
import InputNumber from './textfield.js';
import { CardsTable, BossTable } from './table.js'

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
  card_skill_skill2,
  card_skill_value,
  card_skill2_value,
  card_sample,
  card_sample_name,
  card_sample_skill,
  boss_enter,
  boss_done,
  boss_lv,
  boss_attr
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
  CHA,
  FIRE,
  AQUA,
  LEAF
} from '../reducers/input.js'

import card_templete from '../data/cards_data.js'
import attack_skill_templete from '../data/skill_attacks.js'
import boost_skill_templete from '../data/skill_boosts.js'
import select_chars from '../data/select_chars.js'

const skill_items = {
  type: [
    { label: "【ATTACK】",
      value: ATTACK
    },
    { label: "【BOOST】",
      value: BOOST
    }
  ],
  boss: [
    { label: "通常",
      value: NORMAL
    },
    { label: "ボス",
      value: BOSS
    }
  ],
  fusion:[
    { label: "なし",
      value: false
    },
    { label: "フュージョン",
      value: true
    }
  ],
  target:[
    { label: "[ATTACK]ブースト",
      value: ATK
    },
    { label: "[ATTACK][属性]ブースト",
      value: ATR
    },
    { label: "[ATTACK][キャラ]ブースト",
      value: ATC
    },
    { label: "[キャラ]ブースト",
      value: CHA
    }
  ],
  boss2:[
    { label: "なし",
      value: NONE
    },
    { label: "通常",
      value: NORMAL
    },
    { label: "ボス",
      value: BOSS
    },
    { label: "先制",
      value: SENSEI
    },
    { label: "追撃",
      value: TUIGEKI
    }
  ]
}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      card_temp_select: 0,
    }
    this.onSelect = this.onSelect.bind(this);
  }
  onSelect = (e) => {
    this.setState( {card_temp_select: e.key} )
    this.props.card_sample_skill(card_templete[e.key].data)
  }

  render(){
    const props = this.props

    return (
<React.Fragment>
  <div id="App">
  <Container maxWidth="xl">
    <header>
      <h1>オンゲキ デッキ シミュレーター</h1>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs>
          <SimpleCard
            card={props.cards.left}
            position="left"
            cardName={props.card_name}
            cardSkill={props.card_skill}
            cardSkillType={props.card_skill_type}
            cardSkillBoss={props.card_skill_boss}
            cardSkillFusion={props.card_skill_fusion}
            cardSkillTarget={props.card_skill_target}
            cardSkillSkill2={props.card_skill_skill2}
            cardAtk={props.card_atk}
            cardSkillValue={props.card_skill_value}
            cardSkillValue2={props.card_skill2_value}
          />
        </Grid>
        <Grid item xs>
          <SimpleCard
            card={props.cards.center}
            position="center"
            cardName={props.card_name}
            cardSkill={props.card_skill}
            cardSkillType={props.card_skill_type}
            cardSkillBoss={props.card_skill_boss}
            cardSkillFusion={props.card_skill_fusion}
            cardSkillTarget={props.card_skill_target}
            cardSkillSkill2={props.card_skill_skill2}
            cardAtk={props.card_atk}
            cardSkillValue={props.card_skill_value}
            cardSkillValue2={props.card_skill2_value}
          />
        </Grid>
        <Grid item xs>
          <SimpleCard
            card={props.cards.right}
            position="right"
            cardName={props.card_name}
            cardSkill={props.card_skill}
            cardSkillType={props.card_skill_type}
            cardSkillBoss={props.card_skill_boss}
            cardSkillFusion={props.card_skill_fusion}
            cardSkillTarget={props.card_skill_target}
            cardSkillSkill2={props.card_skill_skill2}
            cardAtk={props.card_atk}
            cardSkillValue={props.card_skill_value}
            cardSkillValue2={props.card_skill2_value}
          />
        </Grid>
      </Grid>
      <hr />
    </header>
    <Card>
      <CardContent className={`back-${props.sample.attr}`}>
        <SelectSkill label="キャラクター名" position="sample" class="cardname" items={select_chars} value={props.sample.name} handleChange={props.card_sample_name} />
        <FormControl variant="outlined">
          <InputLabel id={`select-skill-templete-label`}>スキル</InputLabel>
          <Select
            labelId={`select-skill-templete-label`}
            id={`select-skill-templete`}
            label="スキル"
            value={this.state.card_temp_select}
            onChange={ (e,v) => this.onSelect(v) }
          >
            <MenuItem key={99} value="" disabled>
              <em>スキル</em>
            </MenuItem>
            { card_templete.map( (m, index)=>(
                <MenuItem key={index} value={ index }>
                  {m.label}
                </MenuItem>
              ))
            }
          </Select>
        </FormControl>
        <CardData card={props.sample} />
        <Button variant="contained" onClick={ () => props.card_sample('left', card_templete[this.state.card_temp_select].data) }>set to left</Button>
        <Button variant="contained" onClick={ () => props.card_sample('center', card_templete[this.state.card_temp_select].data) }>set to center</Button>
        <Button variant="contained" onClick={ () => props.card_sample('right', card_templete[this.state.card_temp_select].data) }>set to right</Button>
      </CardContent>
    </Card>
    <hr />

    <hr />
    <BossSlider label={"ボス出現"} value={props.bosstime.enter} handleChange={props.boss_enter}/>
    <BossSlider label={"ボス撃破"} value={props.bosstime.done} handleChange={props.boss_done}/>

    <hr />
    <CardsTable cards={props.cards} atk={props.atk}
      atksL={getAtk('left', props.cards, props.bosstime, props.boss_attr)}
      atksC={getAtk('center', props.cards, props.bosstime, props.boss_attr)}
      atksR={getAtk('right', props.cards, props.bosstime, props.boss_attr)}
       />
    <h3>合計の攻撃力</h3><h1>[{Math.ceil(props.atk.left + props.atk.center + props.atk.right)}]</h1>

    <BossTable atk={props.atk} />
    </Container>
  </div>
</React.Fragment>

  )}
}

function SimpleCard(props) {
  const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={`back-${props.card.attr}`}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          【{props.position.toUpperCase()}】
        </Typography>
        <SelectSkill label="キャラクター名" position={props.position} class="cardname" items={select_chars} value={props.card.name} handleChange={props.cardName} />
        <InputNumber label="攻撃力" position={props.position} class="atk" value={props.card.atk} handleChange={props.cardAtk} />
        <div className={`back-${props.card.skill.type}`}>
          <SelectSkill label="スキルタイプ" position={props.position} class="skilltype" items={skill_items.type} value={props.card.skill.type} handleChange={props.cardSkillType} />
        </div>
        <InputNumber label="スキル効果" position={props.position} class="skillvalue" value={props.card.skill.value} handleChange={props.cardSkillValue} />

        <SelectSkill label="発動タイミング" position={props.position} class="skillboss" items={skill_items.boss} value={props.card.skill.boss} handleChange={props.cardSkillBoss} />
        { props.card.skill.type === ATTACK &&
          <SelectSkill label="フュージョン" position={props.position} class="skillfusion" items={skill_items.fusion} value={props.card.skill.fusion} handleChange={props.cardSkillFusion} />
        }
        {props.card.skill.type === BOOST &&
          <SelectSkill label="ブースト対象" position={props.position} class="skilltarget" items={skill_items.target} value={props.card.skill.target} handleChange={props.cardSkillTarget} />
        }

        <SelectSkill label="追加スキル" position={props.position} class="skillboss2" items={skill_items.boss2} value={props.card.skill.skill2.boss} handleChange={props.cardSkillSkill2} />
        {props.card.skill.skill2.boss !== NONE &&
          <InputNumber label="追加スキル効果" position={props.position} class="skillvalue2" value={props.card.skill.skill2.value} handleChange={props.cardSkillValue2} />
        }

        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          【{props.position.toUpperCase()}】{props.card.name} [{props.card.attr}]
          <br />{skillName(props.card)}
          <br />{skillInfo(props.card)}
        </Typography>
      </CardContent>
    </Card>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
  '& .MuiTextField-root': {
    margin: theme.spacing(1),
    width: '25ch',
    flexGrow: 1,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

const CardData = props => {
  return(
    <React.Fragment>
      <hr />
      <table className={`back-${props.card.attr}`}>
        <thead>
          <tr><th colSpan="2">【{props.card.name}】({props.card.attr})</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>ATK</td>
            <td>{ props.card.atk }</td>
          </tr>
          <tr>
            <td>スキルタイプ</td>
            <td>{ props.card.skill.type }</td>
          </tr>
          <tr>
            <td>せつめい</td>
            <td>{ skillInfo(props.card) }</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

const BossSlider = props => {
  const classes = useStyles(
    makeStyles({
      root: { width: 250, },
      input: { width: 42, },
    })
  )

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        {props.label}
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            value={ props.value }
            onChange={ (e,v) => {props.handleChange(v)} }
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={props.value}
            margin="dense"
            onChange={ (e,v) => {props.handleChange(v)} }
            inputProps={{
              step: 10,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export const skillInfo = props => {
  let mes = ''

  switch(props.skill.boss){
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
  switch(props.skill.target){
    case ATK:
      mes += '[ATTACK]の'
      break
    case ATR:
      mes += `[ATTACK]かつ[${props.attr}]の`
      break
    case ATC:
      mes += `[ATTACK]かつ[${props.name}]の`
      break
    case CHA:
      mes += `[${props.name}]の`
      break
    default:
      break
  }
  if(props.skill.fusion){
    mes += `[${props.name}]のカード1枚につき`
  }
  switch(props.skill.type){
    case ATTACK:
      mes += `自身の攻撃力${props.skill.value}%アップ`
      break
    case BOOST:
      mes += `攻撃力${props.skill.value}%アップ`
      break
    default:
      break
  }
  switch(props.skill.skill2.boss){
    case NORMAL:
      mes += `(さらに自身の攻撃力${props.skill.skill2.value}%アップ)`
      break
    case BOSS:
      mes += `(さらにバトル後半で、自身の攻撃力${props.skill.skill2.value}%アップ)`
      break
    case SENSEI:
      mes += `(さらに対戦相手を撃破するまで、自身の攻撃力${props.skill.skill2.value}%アップ)`
      break
    case TUIGEKI:
      mes += `(さらに対戦相手のライフ0%の時、自身の攻撃力${props.skill.skill2.value}%アップ)`
      break
    default: break
  }
  return mes
}
export const skillName = props => {
  let mes = ''

    switch(props.skill.boss){
    case BOSS:
      mes += 'ボス'
      break
    case SENSEI:
      mes += '先制'
      break
    case TUIGEKI:
      mes += '追撃'
      break
    default:
      break
  }
  switch(props.skill.target){
    case ATR:
      mes += `${props.attr}`
      break
    case ATC:
    case CHA:
      mes += `${props.name}`
      break
    case ATK:
    default:
      break
  }
  if(props.skill.fusion){
    mes += `フュージョン ＋${props.skill.value}`
  }else{
    switch(props.skill.type){
      case ATTACK:
        mes += `アタック ＋${props.skill.value}`
        break
      case BOOST:
        mes += `ブースト ＋${props.skill.value}`
        break
      default:
        break
    }
  }
  switch(props.skill.skill2.boss){
    case NORMAL:
      mes += ` (アタック＋ ${props.skill.skill2.value})`
      break
    case BOSS:
      mes += ` (ボスアタック＋ ${props.skill.skill2.value})`
      break
    case SENSEI:
      mes += ` (先制＋ ${props.skill.skill2.value})`
      break
    case TUIGEKI:
      mes += ` (追撃＋ ${props.skill.skill2.value})`
      break
    default: break
  }
  return mes
}

const getAtk = (self, cards, bosstime, boss_attr) => {
  let atkdata = {
    atk: 0,
    attr: 0,
    alfa: 0,
    beta: 0,
    skill2: 0,
    self: 0
  }

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

  //属性補正
  let attr_boost = 10
  if(cards[self].attr === boss_attr){
    attr_boost = 0
  }else if(
    (cards[self].attr === FIRE && boss_attr === AQUA ) ||
    (cards[self].attr === LEAF && boss_attr === FIRE ) ||
    (cards[self].attr === AQUA && boss_attr === LEAF ) ){
      attr_boost = -10
  }

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
    if( cards[beta].skill.target === CHA &&
        cards[self].name === cards[beta].name) {
      beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
    }

    atkdata = {
      atk: Math.round(cards[self].atk * (100+ cards[self].skill.value *boss_attack/100 +skill2 +alfa_boost +beta_boost +attr_boost) )/100,
      attr: Math.round(cards[self].atk * attr_boost )/100,
      alfa: Math.round(cards[self].atk * alfa_boost )/100,
      beta: Math.round(cards[self].atk * beta_boost )/100,
      skill2: Math.round(cards[self].atk * skill2 )/100,
      self: Math.round(cards[self].atk * self_boost )/100,
    }
    return atkdata

  //自身がATTACK
  }else {

    boss_attack = correctionBosstime(cards[self].skill.boss, bosstime)

    //自身がATTACKかつalfaがBOOST
    if(cards[alfa].skill.type === BOOST) {
      switch(cards[alfa].skill.target) {
        case ATK:
          alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
          break
        case ATR:
          if(cards[self].attr === cards[alfa].attr) {
            alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
          }
          break
        case ATC:
        case CHA:
          if(cards[self].name === cards[alfa].name) {
            alfa_boost = cards[alfa].skill.value * correctionBosstime(cards[alfa].skill.boss, bosstime) /100
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
          beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
          break
        case ATR:
          if(cards[self].attr === cards[beta].attr) {
            beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
          }
          break
        case ATC:
        case CHA:
          if(cards[self].name === cards[beta].name) {
            beta_boost = cards[beta].skill.value * correctionBosstime(cards[beta].skill.boss, bosstime) /100
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

  atkdata = {
    atk: Math.round(cards[self].atk * (100 + cards[self].skill.value *fusion *boss_attack/100 +skill2 +alfa_boost +beta_boost +attr_boost) )/100,
    attr: Math.round(cards[self].atk * attr_boost )/100,
    alfa: Math.round(cards[self].atk * alfa_boost )/100,
    beta: Math.round(cards[self].atk * beta_boost )/100,
    skill2: Math.round(cards[self].atk * skill2 )/100,
    self: Math.round(cards[self].atk * (cards[self].skill.value *fusion *boss_attack/100) )/100,
  }

  return atkdata
}

export const atk2Bp = (atk, boss_lv, difficult) => {
  let bp = 0
  const tscore = 1
  const bs_coe = (199 + boss_lv) *100 /3 *difficult
  const note_coe = 1.15

  bp += atk.left * tscore * bs_coe * note_coe
  bp += atk.center * tscore * bs_coe * note_coe
  bp += atk.right * tscore * bs_coe * note_coe

  return Math.ceil(bp)
}

const correctionBosstime = (boss, bosstime) => {
  switch(boss) {
    case BOSS:
      return 100 - bosstime.enter
    case SENSEI:
      return  bosstime.done
    case TUIGEKI:
      return 100 - bosstime.done
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
  sample: state.input.sample,
  bosstime: state.input.bosstime,
  atk: {
    left: Math.round(getAtk('left', state.input.cards, state.input.bosstime, state.input.boss_attr).atk *10) /10,
    center: Math.round(getAtk('center', state.input.cards, state.input.bosstime, state.input.boss_attr).atk *10) /10,
    right: Math.round(getAtk('right', state.input.cards, state.input.bosstime, state.input.boss_attr).atk*10) /10,
  }
 })

const mapDispatchToProps = ({
  card_atk,
  card_name,
  card_skill,
  card_skill_type,
  card_skill_boss,
  card_skill_fusion,
  card_skill_target,
  card_skill_skill2,
  card_skill_value,
  card_skill2_value,
  card_sample,
  card_sample_name,
  card_sample_skill,
  boss_enter,
  boss_done,
  boss_lv,
  boss_attr
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm( {validate, form: 'simgeki_deck'})(App))
