
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

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
  },
  subtitle: {
    margin: '0 auto',
    color: 'gray',
  },
  button: {
    position: 'absolute',
    top: theme.spacing(4),
    right: theme.spacing(2),
  },
  content: {
    paddingTop: '15%',
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
    marginTop: theme.spacing(4),
    width: '14vw',
    height: '14vw',
    borderRadius: '7vw',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderWidth: '3px',
    margin: '0 auto',
  },
}));

const AboutMe = () => {

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      className={classes.wrapper}
      style={{
        height: window.innerHeight - 154,
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
        <ContactButton
          className={classes.button}
        />

        <div
          className={classes.content}
        >
          <Typography
            variant="h4"
            align="center"
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

export default AboutMe;