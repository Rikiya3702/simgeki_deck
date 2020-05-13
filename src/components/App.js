import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { SelectSkill, SelectBossAttr, SelectTempSkill} from './select.js'
import InputNumber from './textfield.js'
import { CardsTable, BossTable } from './table.js'
import BossSlider from './slider.js'
import { Helps } from './click_events.js'

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
  input_boss_lv,
  input_boss_attr,
  input_tscore
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
import select_chars from '../data/select_chars.js'

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
    const attrs = [
      { label: FIRE,
        value: FIRE
      },
      { label: AQUA,
        value: AQUA
      },
      { label: LEAF,
        value: LEAF
      },
    ]

    return (
<React.Fragment>
  <div id="App">
  <Container maxWidth="xl">
    <header>
      <Grid container justify="center" spacing={1}>
        <Grid item xs={12}>
          <h1>オンゲキ デッキ シミュレーター</h1>
        </Grid>
        <hr />
      </Grid>
    </header>
    <Helps content={helpAtk}/>

    <Grid container alignItems="center" spacing={1}>
      <Grid item xs></Grid>
      <Grid item xs={12} sm={10} >
        <Card>
          <CardHeader
            title="カード テンプレート"
            subheader="テンプレートから選択してデッキを作成"
            />
          <CardContent >
            <Grid container alignItems="center">
              <Grid item>
                <SelectSkill label="キャラクター名" position="sample" class="cardname" items={select_chars} value={props.sample.name} handleChange={props.card_sample_name} />
              </Grid>
              <Grid item xs={1}>
                <Helps content={helpChar}/>
              </Grid>
            </Grid>
            <Grid container alignItems="center">
              <Grid item>
                <SelectTempSkill label="スキル" class="tempskill" items={card_templete} value={this.state.card_temp_select} handleChange={this.onSelect} />
              </Grid>
              <Grid item xs={1}>
                <Helps content={helpSkill}/>
              </Grid>
            </Grid>
            <CardData card={props.sample} />
          </CardContent>
          <CardActions disableSpacing>
            <Grid container justify="space-evenly" alignItems="center" spacing={1}>
              <Grid item >
                <Button variant="contained" onClick={ () => props.card_sample('left', card_templete[this.state.card_temp_select].data) }>LEFTにセット</Button>
              </Grid>
              <Grid item >
                <Button variant="contained" onClick={ () => props.card_sample('center', card_templete[this.state.card_temp_select].data) }>CENTERにセット</Button>
              </Grid>
              <Grid item >
                <Button variant="contained" onClick={ () => props.card_sample('right', card_templete[this.state.card_temp_select].data) }>RIGHTにセット</Button>
              </Grid>
            </Grid>
          </CardActions>

        </Card>
      </Grid>
    </Grid>
    <hr />

    <Grid container spacing={1}>
      <Grid item xs>
        <CustomCard
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
        <CustomCard
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
        <CustomCard
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

    <Card>
      <CardContent className={`back-${props.boss.attr}`}>
        <h1>ボス情報</h1>
        <SelectBossAttr label="属性" class="bossattr" items={attrs} value={props.boss.attr} handleChange={props.input_boss_attr} />

        <BossSlider label="テクニカルスコア" class="tscore" marks="tscore" step={100} min={970000} max={1010000} value={props.tscore} handleChange={props.input_tscore}/>
        <BossSlider label="ボスレベル" class="bosslv" marks="lv" step={1} min={1} max={70} value={props.boss.lv} handleChange={props.input_boss_lv}/>
        <BossSlider label="ボス出現タイミング" class="bossenter" marks="boss" step={1} min={0} max={100} value={props.bosstime.enter} handleChange={props.boss_enter}/>
        <BossSlider label="ボス撃破タイミング" class="bossdone" marks="boss" step={1} min={0} max={100} value={props.bosstime.done} handleChange={props.boss_done}/>
      </CardContent>
    </Card>
    <hr />

    <hr />
    <CardsTable cards={props.cards} atk={props.atk}
      atksL={getAtk('left', props.cards, props.bosstime, props.boss.attr)}
      atksC={getAtk('center', props.cards, props.bosstime, props.boss.attr)}
      atksR={getAtk('right', props.cards, props.bosstime, props.boss.attr)}
       />
     <h3>デッキの総攻撃力</h3><h1>[{Math.ceil(props.atk.left + props.atk.center + props.atk.right)}]</h1>

    <BossTable atk={props.atk} />
    </Container>
  </div>
</React.Fragment>

  )}
}

function CustomCard(props) {
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
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });
  const classes = useStyles();
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

  return (
    <Card className={classes.root}>
      <CardContent className={`back-${props.card.attr}`}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h2" gutterBottom>
              【{props.position.toUpperCase()}】
            </Typography>
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs>
            <SelectSkill label="キャラクター名" position={props.position} class="cardname" items={select_chars} value={props.card.name} handleChange={props.cardName} />
          </Grid>
          <Grid item xs>
            <InputNumber label="攻撃力" position={props.position} class="atk" value={props.card.atk} handleChange={props.cardAtk} />
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs>
            <div className={`back-${props.card.skill.type}`}>
              <SelectSkill label="スキルタイプ" position={props.position} class="skilltype" items={skill_items.type} value={props.card.skill.type} handleChange={props.cardSkillType} />
            </div>
          </Grid>
          <Grid item xs>
            <InputNumber label="スキル効果" position={props.position} class="skillvalue" value={props.card.skill.value} handleChange={props.cardSkillValue} />
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs>
            <SelectSkill label="発動タイミング" position={props.position} class="skillboss" items={skill_items.boss} value={props.card.skill.boss} handleChange={props.cardSkillBoss} />
          </Grid>
          <Grid item xs>
            { props.card.skill.type === ATTACK &&
              <SelectSkill label="フュージョン" position={props.position} class="skillfusion" items={skill_items.fusion} value={props.card.skill.fusion} handleChange={props.cardSkillFusion} />
            }
            {props.card.skill.type === BOOST &&
              <SelectSkill label="ブースト対象" position={props.position} class="skilltarget" items={skill_items.target} value={props.card.skill.target} handleChange={props.cardSkillTarget} />
            }
          </Grid>
        </Grid>

        <Grid container alignItems="center">
          <Grid item xs>
            <SelectSkill label="追加スキル" position={props.position} class="skillboss2" items={skill_items.boss2} value={props.card.skill.skill2.boss} handleChange={props.cardSkillSkill2} />
          </Grid>
          <Grid item xs>
            {props.card.skill.skill2.boss !== NONE &&
              <InputNumber label="追加スキル効果" position={props.position} class="skillvalue2" value={props.card.skill.skill2.value} handleChange={props.cardSkillValue2} />
            }
          </Grid>
        </Grid>
        <hr />
        <Typography variant="body1" component="p">
          【{props.position.toUpperCase()}】{props.card.name} [{props.card.attr}]
        </Typography>
        <Typography variant="body2" component="p">
          {skillName(props.card)}
          <br />
          {skillInfo(props.card)}
        </Typography>
      </CardContent>
    </Card>
  );
}

const CardData = props => {
  return(
    <React.Fragment>
      <div className={`back-${props.card.attr}`}>
        <Grid container spacing={2} alignItems="center" >
          <Grid item xs>
            <Typography color="textSecondary" gutterBottom>
              ({props.card.attr})
            </Typography>
            <Typography variant="h6" gutterBottom>
              【{props.card.name}】
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography variant="body2" component="p">
              <br />
              攻撃力：{ props.card.atk }
              <br />
              スキル：{ props.card.skill.type }
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Typography variant="body2" component="p">
              { skillName(props.card) }
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Typography variant="body2" component="p">
              { skillInfo(props.card) }
            </Typography>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  )
}

const helpChar = () => {
  return(
    <React.Fragment>
      <Typography variant="body2" gutterBottom>
      ・キャラ名は表示と属性、フュージョン計算のみに影響します。
      <br />・ユニット型ブーストなどの自分以外の指定キャラが発動条件のスキルシミュレートは未実装です。
      <br />
      </Typography>
    </React.Fragment>
  )
}
const helpSkill = () => {
  return(
    <React.Fragment>
      <List dense>
        <ListItem>
          <ListItemText primary="ノーダメ・まんたん・トラストなどの条件は100%満たしているとして計算します。" />
        </ListItem>
        <ListItem>
          <ListItemText primary="[キャラ名]ブーストは[ATTACK]指定がない場合、自身もブーストが乗ります。" />
        </ListItem>
        <ListItem>
          <ListItemText primary="ユニット型ブーストなどの自分以外の指定キャラが発動条件のスキルシミュレートは未実装です。" />
        </ListItem>
      </List>
    </React.Fragment>
  )
}
const helpAtk = () => {
  return(
    <React.Fragment>
      <Typography variant="body2" gutterBottom>
      攻撃力
      <br />Lv.50 - Lv.55 - Lv.60 - Lv.65 - 超開花 の数値
      <br />SSR、SRにおいて、CD付属やコラボ系は-5の値です
      <br />
      <br />【SSR】デイドリ・SUMMER以降
      <br />262 - 285 - 300 - 312 - 327
      <br />【SSR】SUMMER以前ガチャ産
      <br />257 - 280 - 295 - 317 - 322
      <br />【SR+】
      <br />240 - 263 - 278 - 290 - 300
      <br />【SR】
      <br />227 - 242 - 257 - 272 - 287
      <br />【R】
      <br />197 - 212 - 227 - 242 - 257
      <br />【N】
      <br />197 - 212 - 227 - 242 - 257
      <br />272 - 287 - 302 - 317 - 332 - 347
      <br />
      </Typography>
    </React.Fragment>
  )
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
  let attr_boost = 1.1
  if(cards[self].attr === boss_attr) {
    attr_boost = 1
  }else if(
    (cards[self].attr === FIRE && boss_attr === AQUA ) ||
    (cards[self].attr === LEAF && boss_attr === FIRE ) ||
    (cards[self].attr === AQUA && boss_attr === LEAF )) {
      attr_boost = 0.9
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
      atk: Math.round(cards[self].atk * (100+ cards[self].skill.value *boss_attack/100 +skill2 +alfa_boost +beta_boost ) * attr_boost )/100,
      attr: Math.round(cards[self].atk * (100+ cards[self].skill.value *boss_attack/100 +skill2 +alfa_boost +beta_boost ) * (attr_boost -1) )/100,
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
    atk: Math.round(cards[self].atk * (100+ cards[self].skill.value *boss_attack/100 +skill2 +alfa_boost +beta_boost ) * attr_boost )/100,
    attr: Math.round(cards[self].atk * (100+ cards[self].skill.value *boss_attack/100 +skill2 +alfa_boost +beta_boost ) * (attr_boost -1) )/100,
    alfa: Math.round(cards[self].atk * alfa_boost )/100,
    beta: Math.round(cards[self].atk * beta_boost )/100,
    skill2: Math.round(cards[self].atk * skill2 )/100,
    self: Math.round(cards[self].atk * (cards[self].skill.value *fusion *boss_attack/100) )/100,
  }

  return atkdata
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
      mes += `(バトル後半で、さらに自身の攻撃力${props.skill.skill2.value}%アップ)`
      break
    case SENSEI:
      mes += `(対戦相手撃破まで、さらに自身の攻撃力${props.skill.skill2.value}%アップ)`
      break
    case TUIGEKI:
      mes += `(対戦相手ライフ0%時、さらに攻撃力${props.skill.skill2.value}%アップ)`
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
export const atk2Bp = (atk, boss_lv, difficult) => {
  let bp = 0
  const tscore = 1
  const bs_coe = (199 + boss_lv) *100 /3 *difficult
  const note_coe = 1

  bp += atk.left * tscore * bs_coe * note_coe
  bp += atk.center * tscore * bs_coe * note_coe
  bp += atk.right * tscore * bs_coe * note_coe

  return Math.ceil(bp)
}

const validate = values => {
  const errors = {}
  return errors
}
const mapStateToProps = state => ({
  cards: state.input.cards,
  sample: state.input.sample,
  bosstime: state.input.bosstime,
  boss: {
    lv: state.input.boss_lv,
    attr: state.input.boss_attr,
  },
  tscore: state.input.tscore,
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
  input_boss_lv,
  input_boss_attr,
  input_tscore
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm( {validate, form: 'simgeki_deck'})(App))
