import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import { Help } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    maxWidth: 300,
    top: 28,
    right: 0,
    left: 0,
    zIndex: 5,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}))

export function Helps(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen((prev) => !prev);
  }

  const handleClickAway = () => {
    setOpen(false);
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.root}>
        <IconButton onClick={handleClick}>
          <Help />
        </IconButton>
        {open ? (
          <div className={classes.dropdown}>
            {props.content()}
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  )
}
