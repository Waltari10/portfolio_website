import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/core/styles';

import { darkTheme, lightTheme } from './styles/theme';
import OnePager from './OnePager';

const tabsArr = [
  {
    label: 'Home',
    to: 'top',
  },
  {
    label: 'About me',
    to: 'about_me',
  },
  {
    label: 'Projects',
    to: 'commercial_projects',
  },
  {
    label: 'Contact',
    to: 'contact_me',
  },
  // {
  //   label: 'Blog',
  //   to: 'blog',
  // },
];

const scrollDurationMS = 500;

const useStyles = makeStyles(theme => ({
  tabLink: {
    display: 'flex',
  },
  tab: {
    opacity: 1,
    display: 'flex',
  },
  appBar: {
    [theme.breakpoints.down('xs')]: {
      bottom: 0,
      top: 'unset',
    },
  },
  tabs: {
    justifyContent: 'flex-end',

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
      <AppBar
        className={ classes.appBar }
        position="fixed"
      >
        <Tabs
          id="tabs"
          centered
          value={value}
          classes={{
            flexContainer: classes.tabs,
          }}
        >
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
              <Tab name={tab.label} fullWidth className={classes.tab} label={tab.label}/>
            </Link>
          )) }
        </Tabs>
      </AppBar>
      <OnePager setThemeType={setThemeType} />
    </ThemeProvider>
  );
}

export default App;
