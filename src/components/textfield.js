import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '12ch',
    },
  },
}));

export default function FormPropsTextFields(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id={`input-number-${props.position}-${props.class}`}
          label={props.label}
          type="number"
          variant="outlined"
          value={props.value}
          onChange={ (e) => {props.handleChange( props.position, e.target.value) }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </form>
  );
}
