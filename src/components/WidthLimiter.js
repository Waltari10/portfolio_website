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
    <div className={`${classes.widthLimiter}   ${props.classname}` } {...props}/>
  );
};

WidthLimiter.propTypes = {
  classname: PropTypes.string,
};

export default WidthLimiter;