import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

import ContactMe from '../ContactMe';
import LandingPage from '../LandingPage';
import CommercialProjects from '../CommercialProjects';
import AboutMe from '../AboutMe';
import Blog from '../Blog';
import Footer from '../Footer';

const useStyles = makeStyles(theme => {


  return ({
    container: {
      backgroundColor: theme.palette.appBackground,
      top: theme.spacing(6),
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      overflowY: 'scroll',
      [theme.breakpoints.down('xs')]: {
        bottom: theme.spacing(6),
        top: '0px',
      },
    },
  }
  );
});

const OnePager = ({ setThemeType }) => {
  const classes = useStyles();
  return (
    <div id="scroll_container" className={classes.container}>
      <LandingPage setThemeType={setThemeType}/>
      <AboutMe/>
      <CommercialProjects/>
      <Blog />
      <ContactMe/>
      <Footer/>
    </div>
  );
};

OnePager.propTypes = {
  setThemeType: PropTypes.func.isRequired,
};

export default OnePager;