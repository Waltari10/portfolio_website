import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import YouTubeIcon from '@material-ui/icons/YouTube';
import Link from '@material-ui/core/Link';

import Logo from '../assets/Logo.js';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.secondary.main,
    marginTop: theme.spacing(8),
  },
  icon: {
    display: 'flex',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    borderStyle: 'solid',
    borderWidth: '2px',
    borderRadius: '100%',
    borderColor: theme.palette.primary.main,
    width: '45px',
    height: '45px',
    position: 'relative',
    transition: 'background-color 200ms linear',
    ['&:hover']: {
      backgroundColor: theme.palette.primary.main,
      transition: 'background-color 200ms linear',
    },
  },
  logo: {
    height: '55px',
    width: '55px',
    display: 'flex',
  },
  logoContainer: {
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    paddingTop: theme.spacing(6),
  },
  linksContainer: {
    justifyContent: 'center',
    width: '100%',
    display: 'flex',
    marginTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  linkIcon: {
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  copyrightText: {
    color: 'white',
    paddingBottom: theme.spacing(6),
    paddingTop: theme.spacing(6),
  },
  sourceCodeLink: {
    color: 'white',
    textDecoration: 'underline',
  },
}));


const Footer = () => {

  const classes = useStyles();
  const theme = useTheme();

  const linksArr = [
    {
      icon: <LinkedInIcon className={classes.linkIcon} fontSize="large"/>,
      to: 'https://www.linkedin.com/in/lainevaltteri/',
      name: 'Open Valtteri\'s Linkedin profile',
    },
    {
      icon: <GitHubIcon className={classes.linkIcon} fontSize="large"/>,
      to: 'https://github.com/Waltari10',
      name: 'Open Valtteri\'s Github profile',
    },
    {
      icon: <EmailIcon className={classes.linkIcon} fontSize="large"/>,
      to: 'mailto:valtteri.e.laine@gmail.com',
      name: 'Send email to Valtteri',
    },
    {
      icon: <YouTubeIcon className={classes.linkIcon} fontSize="large"/>,
      to: 'https://www.youtube.com/playlist?list=PL4oj9XO-O8SZIwewGuU0YXhz93RSrgJ4W',
      name: 'Open Valtteri\'s Youtube developer project Playlist',
    },
  ];


  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Logo
          className={classes.logo}
          color={theme.palette.common.white}
        />
      </div>
      <div className={classes.linksContainer}>
        {linksArr.map((linkObj) => (
          <a
            name={linkObj.name}
            className={classes.icon}
            target="blank"
            href={linkObj.to}
            key={linkObj.to}
            aria-label={linkObj.name}
          >
            {linkObj.icon}
          </a>
        ))}
      </div>
      <Typography
        variant="subtitle1"
        fullWidth
        align='center'
      >
        <Link
          aria-label="Open source code for frontend"
          name="source code frontend"
          target="_blank"
          href="https://github.com/Waltari10/portfolio_website"
          className={classes.sourceCodeLink}
        >
          Source code frontend
        </Link>
      </Typography>
      <Typography
        variant="subtitle1"
        fullWidth
        align='center'
      >
        <Link
          aria-label="Open source code for backend"
          name="source code backend"
          target="_blank"
          href="https://github.com/Waltari10/portfolio-backend"
          className={classes.sourceCodeLink}
        >
          Source code backend
        </Link>
      </Typography>
      <Typography
        variant="subtitle1"
        fullWidth
        align='center'
      >
        <Link
          aria-label="Open source code for proxy server"
          name="source code proxy server"
          target="_blank"
          href="https://github.com/Waltari10/nginxPortfolioProxy"
          className={classes.sourceCodeLink}
        >
          Source code proxy server
        </Link>
      </Typography>

      <Typography
        className={classes.copyrightText}
        variant="subtitle1"
        fullWidth
        align='center'
      >
        {'Copyright © Valtteri Laine'}

      </Typography>
    </div>
  );
};

export default Footer;