import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import WidthLimiter from '../components/WidthLimiter';
import Decoration from '../components/Decoration';
import cdmLogo from '../assets/cdm_logo.png';
import smLogo from '../assets/sitemanager_logo-white.png';
import meruLogo from '../assets/meru_white.svg';
import PDLogo from '../assets/pd_logo.png';

const animationDurationMS = 300;

const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  projectContainer: {
    borderRadius: '20px',
    margin: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: 0,
    textAlign: 'center',
    position: 'relative',
    height: '200px',
  },
  projectGridContainer: {
    marginTop: `-${ theme.spacing(12) }px`,
    marginBottom: theme.spacing(3),
    marginRight: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  meruContainer: {
    backgroundColor: '#5EAF76',
  /*   backgroundImage: 'linear-gradient(120deg, #5EAF76 , #3F995A)', */
  },
  smContainer: {
    backgroundImage: 'linear-gradient(120deg, #2A70DF , #184EA4)',
  },
  PDContainer: {
    backgroundImage: 'radial-gradient(left, circle, #F395B6, #E25C7F)',
  },
  smLogo: {
    height: '100px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: `filter ${ animationDurationMS }ms linear`,
  },
  PDLogo: {
    height: '68px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: `filter ${ animationDurationMS }ms linear`,
  },
  meruLogo: {
    height: '40px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: `filter ${ animationDurationMS }ms linear`,
  },
  projectText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: `calc(100% - ${ theme.spacing(2)}px)`,
    opacity: 0,
    transition: `opacity ${ animationDurationMS }ms linear`,
  },
  container: {
    marginBottom: theme.spacing(8),
  },
  cdmContainer: {
    backgroundColor: '#002141',
    opacity: 1,
  },
  cdmLogo: {
    width: '119px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: `filter ${ animationDurationMS }ms linear`,
    filter: 'blur(0px)',
  },
  textHover: {
    opacity: 1,
    transition: `opacity ${ animationDurationMS }ms linear`,
  },
  logoHover: {
    transition: `filter ${ animationDurationMS }ms linear`,
    filter: 'blur(8px)',
  },
}));

const CommercialProjects = () => {

  const classes = useStyles();

  const [isHoverCDM, setHoverCDM] = useState(false);
  const [isHoverSM, setHoverSM] = useState(false);
  const [isHoverPD, setHoverPD] = useState(false);
  const [isHoverMeru, setHoverMeru] = useState(false);

  return (
    <div
      name="commercial_projects"
      className={classes.container}
    >
      <a name="commercial_projects" />
      <Decoration
        paddingBottom={120}
      >
        <WidthLimiter>
          <Typography
            gutterBottom
            align="center"
            variant="h4"
            classes={{
              root: classes.text,
            }}
          >
          Commercial products<br/>I have worked on
          </Typography>
          <Typography
            variant="body1"
            classes={{
              root: classes.text,
            }}
          >
            Commercial products I have worked on with a team, since I graduated around 4 years ago.
          </Typography>
        </WidthLimiter>
      </Decoration>

      <WidthLimiter>
        <Grid
          classes={{ root: classes.projectGridContainer }}
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
        >
          <Grid
            xs={12}
            sm={6}
            md={4}
            item
            onMouseEnter={() => setHoverCDM(true)}
            onMouseLeave={() => setHoverCDM(false)}
          >
            <div
              className={
                classNames(
                  classes.projectContainer,
                  classes.cdmContainer,
                )
              }
            >
              <img
                className={
                  classNames(classes.cdmLogo, {
                    [classes.logoHover]: isHoverCDM,
                  })
                }
                src={cdmLogo}
              />
              <Typography
                variant="body1"
                classes={{
                  root: classes.projectText,
                }}
                className={
                  { [classes.textHover]: isHoverCDM }
                }
              >
                    Front-end and design<br/>
                    Finlands largest airport, around 230 flights a day<br/>
                    Complete UI overhaul for flight management
              </Typography>
            </div>
          </Grid>

          <Grid
            onMouseEnter={() => setHoverSM(true)}
            onMouseLeave={() => setHoverSM(false)}
            xs={12}
            sm={6}
            md={4}
            item
          >
            <div className={`${classes.projectContainer } ${ classes.smContainer} ${classes.middleProjectContainer}`}>
              <img
                src={smLogo}
                className={
                  classNames(classes.smLogo, {
                    [classes.logoHover]: isHoverSM,
                  })
                }
              />
              <Typography
                variant="body1"
                classes={{
                  root: classes.projectText,
                }}
                className={
                  { [classes.textHover]: isHoverSM }
                }
              >
                    Fullstack development and design<br/>
                    Web application for consturction management<br/>
                    35 000 companies<br/>
                    125 000 users
              </Typography>

            </div>
          </Grid>

          <Grid
            onMouseEnter={() => setHoverMeru(true)}
            onMouseLeave={() => setHoverMeru(false)}
            xs={12}
            sm={6}
            md={4}
            item
          >
            <div className={`${classes.projectContainer } ${ classes.meruContainer}`}>
              <img
                src={meruLogo}
                className={
                  classNames(classes.meruLogo, {
                    [classes.logoHover]: isHoverMeru,
                  })
                }
              />
              <Typography
                variant="body1"
                classes={{
                  root: classes.projectText,
                }}
                className={
                  { [classes.textHover]: isHoverMeru }
                }
              >
                Fullstack and mobile development for healthcare<br/>
                practitioner dashboard, and patient mobile app<br/>
                Y-combinator healthcare startup
              </Typography>
            </div>
          </Grid>

          <Grid
            onMouseEnter={() => setHoverPD(true)}
            onMouseLeave={() => setHoverPD(false)}
            xs={12}
            sm={6}
            md={4}
            item
          >
            <div className={`${classes.projectContainer } ${ classes.PDContainer}`}>
              <img
                className={
                  classNames(classes.PDLogo, {
                    [classes.logoHover]: isHoverPD,
                  })
                }
                src={PDLogo}
              />
              <Typography
                variant="body1"
                classes={{
                  root: classes.projectText,
                }}
                className={
                  { [classes.textHover]: isHoverPD }
                }
              >
                Co-Founder / Mobile developer<br/>
                Made alpha version of game to attract investors <br/>
                Achieved Rovio founder Peter Vesterbacka as investor
              </Typography>
            </div>
          </Grid>

        </Grid>
      </WidthLimiter>


    </div>
  );
};

export default CommercialProjects;