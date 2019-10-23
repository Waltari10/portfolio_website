import React from 'react';

import ContactMe from '../contact_me';
import LandingPage from '../landing_page';
import CommercialProjects from '../commercial_projects';
import AboutMe from '../about_me';
import Blog from '../blog';

const OnePager = () => {
  return (
    <div>
      <LandingPage/>
      <AboutMe/>
      <CommercialProjects/>
      <ContactMe/>
      <Blog/>
    </div>
  );
};

export default OnePager;