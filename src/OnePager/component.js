import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import ContactMe from '../contact_me';
import LandingPage from '../landing_page';
import CommercialProjects from '../commercial_projects';
import AboutMe from '../about_me';
// import Blog from '../blog';
import Footer from '../footer';

const useStyles = makeStyles(theme => ({
  container: {
    top: '48px',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    overflowY: 'scroll',
    [theme.breakpoints.down('xs')]: {
      bottom: '48px',
      top: '0px',
    },
  },
}));

const OnePager = () => {
  const classes = useStyles();
  return (
    <div id="scroll_container" className={classes.container}>
      <LandingPage/>
      <AboutMe/>
      <CommercialProjects/>
      <ContactMe/>
      {/* <Blog/> */}
      <Footer/>
    </div>
  );
};

export default OnePager;