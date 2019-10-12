import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';

import theme from './styles/theme'
import LandingPage from './landing_page'

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
    content: 'AboutMe'
  }, 
  {
    label: 'Projects',
    content: 'Projects'
  }, 
  {
    label: 'Contact',
    content: 'Contact'
  }, 
  {
    label: 'Blog',
    content: 'Blog'
  }, 
]

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(theme)

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {tabsArr.map(tab => <Tab label={tab.label}/> ) }
        </Tabs>
      </AppBar>
      {tabsArr.map((tab, i) => <TabPanel value={value} index={i} children={tab.content} /> )}
    </ThemeProvider>
  );
}

export default App;
