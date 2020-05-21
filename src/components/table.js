import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { skillName, atk2Bp, SkillIcon } from './App.js'

const useStyles = makeStyles({
  table: {
    minWidth: 350,
    maxWidth: 750,
  },
})

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: 'rgba(100, 100, 100, 0.9)',
    color: '#fff'
  }
}))(TableCell);

export function CardsTable(props) {
  const classes = useStyles()

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">LEFT</StyledTableCell>
            <StyledTableCell align="right">CENTER</StyledTableCell>
            <StyledTableCell align="right">RIGHT</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">名前</TableCell>
            <TableCell align="right">{props.cards.left.name}</TableCell>
            <TableCell align="right">{props.cards.center.name}</TableCell>
            <TableCell align="right">{props.cards.right.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">攻撃力</TableCell>
            <TableCell align="right">{props.cards.left.atk}</TableCell>
            <TableCell align="right">{props.cards.center.atk}</TableCell>
            <TableCell align="right">{props.cards.right.atk}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">スキル</TableCell>
            <TableCell align="right"><SkillIcon type={props.cards.left.skill.type} /></TableCell>
            <TableCell align="right"><SkillIcon type={props.cards.center.skill.type} /></TableCell>
            <TableCell align="right"><SkillIcon type={props.cards.right.skill.type} /></TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">スキル効果</TableCell>
            <TableCell align="right">{skillName(props.cards.left)}</TableCell>
            <TableCell align="right">{skillName(props.cards.center)}</TableCell>
            <TableCell align="right">{skillName(props.cards.right)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">自スキル効果値</TableCell>
            <TableCell align="right">{props.atksL.self}</TableCell>
            <TableCell align="right">{props.atksC.self}</TableCell>
            <TableCell align="right">{props.atksR.self}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">ブースト１効果値</TableCell>
            <TableCell align="right">{props.atksL.alfa}</TableCell>
            <TableCell align="right">{props.atksC.alfa}</TableCell>
            <TableCell align="right">{props.atksR.alfa}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">ブースト２効果値</TableCell>
            <TableCell align="right">{props.atksL.beta}</TableCell>
            <TableCell align="right">{props.atksC.beta}</TableCell>
            <TableCell align="right">{props.atksR.beta}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">追加スキル効果値</TableCell>
            <TableCell align="right">{props.atksL.skill2}</TableCell>
            <TableCell align="right">{props.atksC.skill2}</TableCell>
            <TableCell align="right">{props.atksR.skill2}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">属性ボーナス値</TableCell>
            <TableCell align="right">{props.atksL.attr}</TableCell>
            <TableCell align="right">{props.atksC.attr}</TableCell>
            <TableCell align="right">{props.atksR.attr}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">最終攻撃力</TableCell>
            <TableCell align="right">{props.atksL.atk}</TableCell>
            <TableCell align="right">{props.atksC.atk}</TableCell>
            <TableCell align="right">{props.atksR.atk}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">デッキ総合攻撃力</TableCell>
            <TableCell align="right">{}</TableCell>
            <TableCell align="right">{}</TableCell>
            <TableCell align="right">{props.atksL.atk + props.atksC.atk + props.atksR.atk}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export function BossTable(props) {
  const classes = useStyles()

  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" colSpan={4}>BP予想</StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align="right">ボスレベル</StyledTableCell>
            <StyledTableCell align="right" className={classes.tc}>EXPERT</StyledTableCell>
            <StyledTableCell align="right" className={classes.tc}>MASTER</StyledTableCell>
            <StyledTableCell align="right" className={classes.tc}>LUNATIC</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="right">1</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 1, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 1, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 1, 1.25)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">10</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 10, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 10, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 10, 1.25)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">30</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 30, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 30, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 30, 1.25)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">50</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 50, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 50, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 50, 1.25)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">60</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 60, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 60, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 60, 1.25)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">70</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 70, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 70, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 70, 1.25)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
