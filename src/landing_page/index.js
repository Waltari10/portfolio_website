import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTheme } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';

import Logo from '../assets/Logo.js';
import face from '../assets/face.jpg';

const useStyles = makeStyles(theme => ({
  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  subtitle: {
    margin: '0 auto',
    color: 'gray',
  },
  button: {
    position: 'absolute',
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
  content: {
    paddingTop: '15%',
    textAlign: 'center',
  },
  logo: {
    position: 'absolute',
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
  face: {
    marginTop: theme.spacing(4),
    width: '25vw',
    height: '25vw',
    borderRadius: '12.5vw',
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main,
    borderWidth: '4px',
    margin: '0 auto',
  },
}));

const AboutMe = (props) => {
  console.log(props);

  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      className={classes.wrapper}
    >
      {
        <Logo
          className={classes.logo}
          color={theme.palette.secondary.main}
        />
      }
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
      >
            Contact
      </Button>

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
    </div>
  );
};

export default AboutMe;