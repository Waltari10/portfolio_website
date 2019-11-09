import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles(theme => {

  console.log(theme);
  return ({
    waveBody: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(24),
      backgroundColor: theme.palette.tertiary.main,
    },
    waves: {
      marginTop: theme.spacing(6),
      height: '11px',
      backgroundImage: theme.palette.type === 'dark' ? 'url(waveDark.svg)' : 'url(wave.svg)',
      backgroundRepeat: 'repeat-x',
      backgroundSize: '40px 14px',
      width: '100%',
    },
  });
});

const Decoration = (props) => {

  const classes = useStyles();

  return (
    <div
      className={classes.container}
    >
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

Decoration.propTypes = {
  paddingBottom: PropTypes.number,
  children: PropTypes.any,
};

export default Decoration;