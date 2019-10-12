import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

import theme from './styles/theme';
import LandingPage from './landing_page';
import aboutMe from './about_me';
import CommercialProjects from './commercial_projects';
import Contact from './contact_me';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

const tabsArr = [
  {
    label: 'Home',
    content: LandingPage,
  },
  {
    label: 'About me',
    content: aboutMe,
  },
  {
    label: 'Projects',
    content: CommercialProjects,
  },
  {
    label: 'Contact',
    content: Contact,
  },
  {
    label: 'Blog',
    content: 'Blog',
  },
];

function App() {
  const [value, setValue] = React.useState(3);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(theme);

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {tabsArr.map(tab => <Tab key={tab.label} label={tab.label}/>) }
        </Tabs>
      </AppBar>
      {tabsArr.map((tab, i) => <TabPanel key={tab.label} value={value} index={i}>{tab.content}</TabPanel>)}
    </ThemeProvider>
  );
}

export default App;
