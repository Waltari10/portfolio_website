
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';

import Logo from '../assets/Logo.js';
import face from '../assets/face.jpg';
import ContactButton from '../components/ContactButton';
import WidthLimiter from '../components/WidthLimiter';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    marginBottom: theme.spacing(8),
    [theme.breakpoints.down('xs')]: {
      top: theme.spacing(0),
    },
  },
  subtitle: {
    margin: '0 auto',
    color: theme.palette.grey[600],
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  content: {
    paddingTop: theme.spacing(12),
    textAlign: 'center',
  },
  logo: {
    height: '39px',
    width: '49px',
    position: 'absolute',
    top: theme.spacing(4),
    left: theme.spacing(2),
  },
  face: {
    minWidth: '125px',
    minHeight: '125px',
    marginTop: theme.spacing(4),
    width: '14vw',
    height: '14vw',
    borderRadius: '50%',
    margin: '0 auto',
  },
  header: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    color: theme.palette.type === 'dark' ? theme.palette.common.white : '',
  },
  darkmodeIcon: {
    color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.common.black,
    float: 'left',
  },
  darkmodeIconButton: {
    marginRight: theme.spacing(2),
  },
  actionsContainer: {
    position: 'absolute',
    top: '22px',
    right: theme.spacing(2),
  },
}));

const LandingPage = ({ setThemeType }) => {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      name="top"
      className={classes.wrapper}
      style={{
        height: window.innerHeight - 207,
        minHeight: 366,
      }}
    >
      <WidthLimiter>
        {
          <Logo
            className={classes.logo}
            color={theme.palette.secondary.main}
          />
        }
        <div
          className={classes.actionsContainer}
        >
          {
            theme.palette.type === 'dark' ?
              <IconButton
                onClick={() => setThemeType('light')}
                className={classes.darkmodeIconButton}
              >
                <Brightness4Icon
                  fontSize="large"
                  className={classes.darkmodeIcon}
                />
              </IconButton>
              :
              <IconButton 
                onClick={() => setThemeType('dark')}
                className={classes.darkmodeIconButton}
              >
                <Brightness7Icon
                  fontSize="large"
                  className={classes.darkmodeIcon}
                />
              </IconButton>
          }
          <ContactButton
            className={classes.button}
          />
        </div>

        <div
          className={classes.content}
        >
          <Typography
            variant="h4"
            align="center"
            classes={{
              root: classes.header,
            }}
          >
                Full-stack developer and designer
          </Typography>
          <Typography
            classes={{
              root: classes.subtitle,
            }}
            variant="h5"
            align="center"
          >
                I solve difficult problems and enjoy the process
          </Typography>

          <img src={face} className={classes.face} alt="me"></img>
        </div>
      </WidthLimiter>
    </div>
  );
};

LandingPage.propTypes = {
  setThemeType: PropTypes.func.isRequired,
};

export default LandingPage;