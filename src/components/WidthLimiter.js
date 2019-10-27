import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';


const useStyles = makeStyles(() => ({
  widthLimiter: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
    position: 'relative',
  },
}));


const WidthLimiter = (props) => {

  const classes = useStyles();

  return (
    <div {...props} className={`${classes.widthLimiter} ${props.className}` }/>
  );
};

WidthLimiter.propTypes = {
  className: PropTypes.string,
};

export default WidthLimiter;