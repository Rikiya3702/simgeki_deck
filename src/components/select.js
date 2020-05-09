import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  return(
    <React.Fragment>
      <FormControl className={classes.formControl} variant="outlined">
        <InputLabel id={`select-${props.class}-${props.position}-label`}>{props.label}</InputLabel>
        <Select
          labelId={`select-${props.class}-${props.position}-label`}
          id={`select-${props.class}-${props.position}`}
          label={props.label}
          value={props.value}
          onChange={ (e) => props.handleChange(props.position, e.target.value) }
        >
          <MenuItem key={99} value="" disabled>
            <em>{props.label}</em>
          </MenuItem>
          { props.items.map( (m, index)=>(
              <MenuItem key={index} value={ m.value }>
                {m.label}
              </MenuItem>
            ))
          }
        </Select>
      </FormControl>
    </React.Fragment>
  )
}
