import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

  waveBody: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(24),
    backgroundColor: theme.palette.tertiary.main,
  },
  waves: {
    marginTop: theme.spacing(6),
    height: '10px',
    backgroundImage: 'url(wave.svg)',
    backgroundRepeat: 'repeat-x',
    backgroundSize: '40px 10px', // 1:4
    width: '100%',
  },
}));

const Decoration = (props) => {

  const classes = useStyles();

  return (
    <div>
      <div
        className={classes.waves}
      />
      <div
        style={{
          paddingBottom: `${props.paddingBottom }px`,
        }}
        className={classes.waveBody}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Decoration;