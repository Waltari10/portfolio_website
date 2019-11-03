import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from './styles/theme';
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
    to: 'contact_me',
  },
  // {
  //   label: 'Blog',
  //   content: 'Blog',
  //   to: 'blog',
  // },
];

const scrollDurationMS = 500;

const useStyles = makeStyles(theme => ({
  tabLink: {
    flex: 1,
    display: 'flex',
  },
  tab: {
    opacity: 1,
    flex: 1,
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      top: 'unset',
    },
  },
}));


function App() {
  const [value, setValue] = React.useState(0);
  const [themeType, setThemeType] = React.useState('light');

  const classes = useStyles();

  const handleSetActive = (tab, i) => {
    setValue(i);
    setTimeout(() => {
      location.hash = tab.to;
    }, scrollDurationMS);
  };

  const setActiveOnScroll = (tab) => {

    const i = tabsArr.findIndex((tabObj) => tabObj.to === tab);

    setValue(i);
  };

  return (
    <ThemeProvider theme={themeType === 'light' ? lightTheme : darkTheme}>
      <AppBar className={ classes.appBar } position="fixed">
        <Tabs value={value}>
          {tabsArr.map((tab, i) => (
            <Link
              className={classes.tabLink}
              onSetActive={(id) => setActiveOnScroll(id)}
              hashSpy={true}
              spy={true}
              containerId="scroll_container"
              onClick={() => handleSetActive(tab, i)}
              smooth={true}
              duration={scrollDurationMS}
              key={tab.label}
              to={tab.to}
            >
              <Tab fullWidth className={classes.tab} label={tab.label}/>
            </Link>
          )) }
        </Tabs>
      </AppBar>
      <OnePager setThemeType={setThemeType} />
    </ThemeProvider>
  );
}

export default App;
