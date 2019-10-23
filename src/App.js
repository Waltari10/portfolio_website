import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import theme from './styles/theme';
import LandingPage from './landing_page';
import aboutMe from './about_me';
import CommercialProjects from './commercial_projects';
import Contact from './contact_me';
import OnePager from './OnePager';

const tabsArr = [
  {
    label: 'Home',
    content: LandingPage,
    to: 'top',
  },
  {
    label: 'About me',
    content: aboutMe,
    to: 'about_me',
  },
  {
    label: 'Projects',
    content: CommercialProjects,
    to: 'commercial_projects',
  },
  {
    label: 'Contact',
    content: Contact,
    to: 'contact',
  },
  {
    label: 'Blog',
    content: 'Blog',
    to: 'blog',
  },
];

const scrollDurationMS = 500;

const useStyles = makeStyles(theme => ({

  appBar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      top: 'unset',
    },
  },
}));


function App() {
  const [value, setValue] = React.useState(0);

  const classes = useStyles();

  const handleSetActive = (tab, i) => {
    setValue(i);
    setTimeout(() => {
      location.hash = tab.to;
    }, scrollDurationMS);
  };

  return (
    <ThemeProvider theme={theme}>
      <a
        name="top"
      />
      <AppBar className={ classes.appBar } position="fixed">
        <Tabs value={value}>
          {tabsArr.map((tab, i) => (
            <Link
              onClick={() => handleSetActive(tab, i)}
              smooth={true}
              duration={scrollDurationMS}
              key={tab.label}
              to={tab.to}
            >
              <Tab label={tab.label}/>
            </Link>
          )) }
        </Tabs>
      </AppBar>
      <OnePager />
    </ThemeProvider>
  );
}

export default App;
