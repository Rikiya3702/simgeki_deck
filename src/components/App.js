import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SelectSkill from './select.js';
import InputNumber from './textfield.js';
import ClickListener from './clicklistener.js';

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
    console.log(e)
    this.setState( {card_temp_select: e.key} )
    this.props.card_sample_skill(card_templete[e.key].data)
  }

  render(){
    const props = this.props
    const atk_left = Math.round(getAtk2('left', props.cards, props.bosstime)*10)/10
    const atk_center = Math.round(getAtk2('center', props.cards, props.bosstime)*10)/10
    const atk_right = Math.round(getAtk2('right', props.cards, props.bosstime)*10)/10
    const atk_sum = Math.round((atk_left + atk_center + atk_right)*10)/10

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
  <Container maxWidth="xl">
    <header>
      <h1>オンゲキ デッキ シミュレーター</h1>
      <hr />
      <Grid container spacing={1}>
        <Grid item xs>
          <SimpleCard
            card={props.cards.left}
            position="left"
            charNames={options_character_name}
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
            charNames={options_character_name}
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
            charNames={options_character_name}
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

    <div id="Simulate" className="c-left">
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
            <td colSpan="2" style={{width:200 }}>{setumei(props.cards.left)}</td>
            <td colSpan="2" style={{width:200 }}>{setumei(props.cards.center)}</td>
            <td colSpan="2" style={{width:200 }}>{setumei(props.cards.right)}</td>
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

      <hr />
      <BossSlider label={"ボス出現"} value={props.bosstime.enter} handleChange={props.boss_enter}/>
      <BossSlider label={"ボス撃破"} value={props.bosstime.done} handleChange={props.boss_done}/>
      </div>
      <hr />

      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right">LEFT</TableCell>
            <TableCell align="right">CENTER</TableCell>
            <TableCell align="right">RIGHT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">{props.cards.left.name}</TableCell>
            <TableCell align="right">{props.cards.center.name}</TableCell>
            <TableCell align="right">{props.cards.right.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">ATK</TableCell>
            <TableCell align="right">{props.cards.left.atk}</TableCell>
            <TableCell align="right">{props.cards.center.atk}</TableCell>
            <TableCell align="right">{props.cards.right.atk}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">Skill</TableCell>
            <TableCell align="right">{props.cards.left.skill.type}</TableCell>
            <TableCell align="right">{props.cards.center.skill.type}</TableCell>
            <TableCell align="right">{props.cards.right.skill.type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">Atk on skills</TableCell>
            <TableCell align="right">{atk_left}</TableCell>
            <TableCell align="right">{atk_center}</TableCell>
            <TableCell align="right">{atk_right}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
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
  const bull = <span className={classes.bullet}>•</span>;

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
          【{props.position.toUpperCase()}】{props.card.name} [{props.card.attr}] [{props.card.skill.type}]
          <br />{setumei(props.card)}
        </Typography>
      </CardContent>
    </Card>
  );
}

class InputTableNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      select_skill_attack: 0,
      select_skill_boost: 0
    }
    this.onSelectSkillAttack = this.onSelectSkillAttack.bind(this);
    this.onSelectSkillBoost = this.onSelectSkillBoost.bind(this);
  }
  onSelectSkillAttack = (e) => {
  this.setState( {select_skill_attack: e.target.value} )
  }
  onSelectSkillBoost = (e) => {
  this.setState( {select_skill_boost: e.target.value} )
  }

  render(){
    const props = this.props

    const attack_skill_options = attack_skill_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    )
    const boost_skill_options = boost_skill_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    )
  return(
    <div className="input-table">
      <table>
        <thead>
          <tr><th colSpan="2">【{props.position.toUpperCase()}】</th></tr>
        </thead>
        <tbody className={`back-${props.card.attr}`}>
          <tr>
            <td><SelectSkill label="キャラクター名" position={props.position} class="cardname" items={select_chars} value={props.card.name} handleChange={props.cardName} /></td>
            <td><InputNumber label="攻撃力" position={props.position} class="atk" value={props.card.atk} handleChange={props.cardAtk} /></td>
          </tr>
          <tr>
            <td className={`back-${props.card.skill.type}`}>
              <td><SelectSkill label="スキルタイプ" position={props.position} class="skilltype" items={skill_items.type} value={props.card.skill.type} handleChange={props.cardSkillType} /></td>
              <br />
              {props.card.skill.type === ATTACK &&
                <React.Fragment>
                  <select value={this.state.select_skill_attack} onChange={ this.onSelectSkillAttack }>
                    { attack_skill_options }
                  </select>
                  <button onClick={ () => {props.cardSkill(props.position, attack_skill_templete[this.state.select_skill_attack].data.skill)}} >{props.position.toUpperCase()}をこれにする</button>
                </React.Fragment>
              }
              {props.card.skill.type === BOOST &&
                <React.Fragment>
                  <select value={this.state.select_skill_boost} onChange={ this.onSelectSkillBoost }>
                    { boost_skill_options }
                  </select>
                  <button onClick={ () => {props.cardSkill(props.position, boost_skill_templete[this.state.select_skill_boost].data.skill)}} >{props.position.toUpperCase()}をこれにする</button>
                </React.Fragment>
              }
            </td>
            <td><InputNumber label="スキル効果" position={props.position} class="skillvalue" value={props.card.skill.value} handleChange={props.cardSkillValue} /></td>
          </tr>
          <tr>
            <td><SelectSkill label="発動タイミング" position={props.position} class="skillboss" items={skill_items.boss} value={props.card.skill.boss} handleChange={props.cardSkillBoss} /></td>
            {props.card.skill.type === ATTACK &&
              <td><SelectSkill label="フュージョン" position={props.position} class="skillfusion" items={skill_items.fusion} value={props.card.skill.fusion} handleChange={props.cardSkillFusion} /></td>
            }
            {props.card.skill.type === BOOST &&
              <td><SelectSkill label="ブースト対象" position={props.position} class="skilltarget" items={skill_items.target} value={props.card.skill.target} handleChange={props.cardSkillTarget} /></td>
            }
          </tr>

          <tr>
            <td><SelectSkill label="追加スキル" position={props.position} class="skillboss2" items={skill_items.boss2} value={props.card.skill.skill2.boss} handleChange={props.cardSkillSkill2} /></td>
            {props.card.skill.skill2.boss !== NONE &&
            <td><InputNumber label="追加スキル効果" position={props.position} class="skillvalue2" value={props.card.skill.skill2.value} handleChange={props.cardSkillValue2} /></td>
            }

          </tr>
        </tbody>
      </table>
    </div>
  )}
}
class InputTable extends Component {
  constructor(props){
    super(props)
    this.state = {
      select_skill_attack: 0,
      select_skill_boost: 0
    }
    this.onSelectSkillAttack = this.onSelectSkillAttack.bind(this);
    this.onSelectSkillBoost = this.onSelectSkillBoost.bind(this);
  }
  onSelectSkillAttack = (e) => {
  this.setState( {select_skill_attack: e.target.value} )
  }
  onSelectSkillBoost = (e) => {
  this.setState( {select_skill_boost: e.target.value} )
  }

  render(){
    const props = this.props

    const attack_skill_options = attack_skill_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    )
    const boost_skill_options = boost_skill_templete.map(
      (t, index)=>(
        <option key={ index } value={ index }>
          {t.label}
        </option>
      )
    )
  return(
    <div className="input-table">
      <table>
        <thead>
          <tr><th colSpan="2">【{props.position.toUpperCase()}】</th></tr>
        </thead>
        <tbody className={`back-${props.card.attr}`}>
          <tr>
            <td><SelectSkill label="キャラクター名" position={props.position} class="cardname" items={select_chars} value={props.card.name} handleChange={props.cardName} /></td>
            <td><InputNumber label="攻撃力" position={props.position} class="atk" value={props.card.atk} handleChange={props.cardAtk} /></td>
          </tr>
          <tr>
            <td className={`back-${props.card.skill.type}`}>
              <td><SelectSkill label="スキルタイプ" position={props.position} class="skilltype" items={skill_items.type} value={props.card.skill.type} handleChange={props.cardSkillType} /></td>
              <br />
              {props.card.skill.type === ATTACK &&
                <React.Fragment>
                  <select value={this.state.select_skill_attack} onChange={ this.onSelectSkillAttack }>
                    { attack_skill_options }
                  </select>
                  <button onClick={ () => {props.cardSkill(props.position, attack_skill_templete[this.state.select_skill_attack].data.skill)}} >{props.position.toUpperCase()}をこれにする</button>
                </React.Fragment>
              }
              {props.card.skill.type === BOOST &&
                <React.Fragment>
                  <select value={this.state.select_skill_boost} onChange={ this.onSelectSkillBoost }>
                    { boost_skill_options }
                  </select>
                  <button onClick={ () => {props.cardSkill(props.position, boost_skill_templete[this.state.select_skill_boost].data.skill)}} >{props.position.toUpperCase()}をこれにする</button>
                </React.Fragment>
              }
            </td>
            <td><InputNumber label="スキル効果" position={props.position} class="skillvalue" value={props.card.skill.value} handleChange={props.cardSkillValue} /></td>
          </tr>
          <tr>
            <td><SelectSkill label="発動タイミング" position={props.position} class="skillboss" items={skill_items.boss} value={props.card.skill.boss} handleChange={props.cardSkillBoss} /></td>
            {props.card.skill.type === ATTACK &&
              <td><SelectSkill label="フュージョン" position={props.position} class="skillfusion" items={skill_items.fusion} value={props.card.skill.fusion} handleChange={props.cardSkillFusion} /></td>
            }
            {props.card.skill.type === BOOST &&
              <td><SelectSkill label="ブースト対象" position={props.position} class="skilltarget" items={skill_items.target} value={props.card.skill.target} handleChange={props.cardSkillTarget} /></td>
            }
          </tr>

          <tr>
            <td><SelectSkill label="追加スキル" position={props.position} class="skillboss2" items={skill_items.boss2} value={props.card.skill.skill2.boss} handleChange={props.cardSkillSkill2} /></td>
            {props.card.skill.skill2.boss !== NONE &&
            <td><InputNumber label="追加スキル効果" position={props.position} class="skillvalue2" value={props.card.skill.skill2.value} handleChange={props.cardSkillValue2} /></td>
            }

          </tr>
        </tbody>
      </table>
    </div>
  )}
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

const SkillType = props => {
  const classes = useStyles();
  return(
    <React.Fragment>
      <FormControl className={classes.formControl}>
        <InputLabel id={`select-skilltype-${props.position}-label`}>スキルタイプ</InputLabel>
        <Select
          labelId={`select-skilltype-${props.position}-label`}
          id={`select-skilltype-${props.position}`}
          value={props.value}
          onChange={ (e) => props.handleChange(props.position, e.target.value) }
        >
          <MenuItem value="" disabled>
            スキルタイプ
          </MenuItem>
          <MenuItem value={ATTACK}>【ATTACK】</MenuItem>
          <MenuItem value={BOOST}>【BOOST】</MenuItem>
        </Select>
      </FormControl>
    </React.Fragment>
  )
}

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
            <td>{ setumei(props.card) }</td>
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

const setumei = props => {
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
  card_skill_skill2,
  card_skill_value,
  card_skill2_value,
  card_sample,
  card_sample_name,
  card_sample_skill,
  boss_enter,
  boss_done
})

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm( {validate, form: 'simgeki_deck'})(App))
