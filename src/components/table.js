import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { skillName, atk2Bp } from './App.js'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tc: {
    maxWidth: 250,
  },
});

export function CardsTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right"></TableCell>
            <TableCell align="right" className={classes.tc} >LEFT</TableCell>
            <TableCell align="right" className={classes.tc} >CENTER</TableCell>
            <TableCell align="right" className={classes.tc} >RIGHT</TableCell>
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
            <TableCell align="right">Skill info</TableCell>
            <TableCell align="right">{skillName(props.cards.left)}</TableCell>
            <TableCell align="right">{skillName(props.cards.center)}</TableCell>
            <TableCell align="right">{skillName(props.cards.right)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right">Atk on skills & attribute</TableCell>
            <TableCell align="right">{props.atk.left}</TableCell>
            <TableCell align="right">{props.atk.center}</TableCell>
            <TableCell align="right">{props.atk.right}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export function BossTable(props) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Boos Lv.</TableCell>
            <TableCell align="right" className={classes.tc} >EXPERT</TableCell>
            <TableCell align="right" className={classes.tc} >MASTER</TableCell>
            <TableCell align="right" className={classes.tc} >LUNATIC</TableCell>
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
            <TableCell align="right">50</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 50, 1.15)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 50, 1.2)}</TableCell>
            <TableCell align="right">{atk2Bp(props.atk, 50, 1.25)}</TableCell>
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
  );
}
