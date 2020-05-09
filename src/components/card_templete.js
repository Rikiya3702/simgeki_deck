import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SelectSkill from './select.js';
import InputNumber from './textfield.js';

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

export default function SimpleCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card  className={`back-${props.card.attr}`}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          【{props.position.toUpperCase()}】
        </Typography>
        <Typography variant="h5" component="h2">
          <SelectSkill label="キャラクター名" position={props.position} class="cardname" items={select_chars} value={props.card.name} handleChange={props.cardName} />
        </Typography>
        <div className={`back-${props.card.skill.type}`}>
          <SelectSkill label="スキルタイプ" position={props.position} class="skilltype" items={skill_items.type} value={props.card.skill.type} handleChange={props.cardSkillType} />
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
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
