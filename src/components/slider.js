import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Slider from '@material-ui/core/Slider'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
  },
  margin: {
    height: theme.spacing(3),
  },
}))

const marks = {
  boss: [
    { value: 0,
      label: '0%',
    },
    { value: 50,
      label: '50%',
    },
    { value: 100,
      label: '100%',
    }
  ],
  lv: [
    { value: 0,
      label: '0'
    },
    { value: 10,
      label: '10'
    },
    { value: 50,
      label: '50'
    },
    { value: 70,
      label: '70'
    }
  ],
  tscore: [
    { value: 970000,
      label: 'S'
    },
    { value: 990000,
      label: 'SS'
    },
    { value: 1000000,
      label: 'SSS'
    },
    { value: 1007500,
      label: 'SSS+'
    },
    { value: 1010000,
      label: 'AB+'
    }
  ]
}

function valuetext(value) {
  return `${value}%`
}

export default function BossSlider(props) {
  const classes = useStyles()
  const handleSliderChange = (event, newValue) => {
    if(newValue !== props.value) {
      props.handleChange(newValue)
    }

  }

  return (
    <div className={classes.root}>
      <Typography id={`${props.class}-slider`} gutterBottom>
        {props.label}
      </Typography>
      <Slider
        value={props.value}
        onChange={handleSliderChange}
        getAriaValueText={valuetext}
        aria-labelledby={`${props.class}-slider`}
        step={props.step}
        min={props.min}
        max={props.max}
        marks={marks[props.marks]}
        valueLabelDisplay="on"
      />
    </div>
  )
}
