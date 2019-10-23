import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import ContactButton from '../components/ContactButton';
import WidthLimiter from '../components/WidthLimiter';
import Decoration from '../components/Decoration';
import cdmLogo from '../assets/cdm_logo.png';
import smLogo from '../assets/sitemanager_logo-white.png';
import meruLogo from '../assets/meru_white.svg';
import PDLogo from '../assets/pd_logo.png';


const useStyles = makeStyles(theme => ({
  text: {
    color: 'white',
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
  cdmContainer: {
    backgroundColor: '#002141',
  },
  cdmLogo: {
    width: '119px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
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
  },
  PDLogo: {
    height: '68px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  meruLogo: {
    height: '40px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  projectText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    width: `calc(100% - ${ theme.spacing(2)}px)`,
  },
  container: {
    marginBottom: theme.spacing(8),
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
            <div className={`${classes.projectContainer } ${ classes.cdmContainer}`}>
              {isHoverCDM ?
                <Typography
                  variant="body1"
                  classes={{
                    root: classes.projectText,
                  }}
                >
                    Front-end and design<br/>
                    Finlands largest airport, around 230 flights a day<br/>
                    Complete UI overhaul for flight management
                </Typography>
                :
                <img className={classes.cdmLogo} src={cdmLogo}></img>}
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
              {
                isHoverSM ? <Typography
                  variant="body1"
                  classes={{
                    root: classes.projectText,
                  }}
                >
                    Fullstack development and design<br/>
                    Web application for consturction management<br/>
                    35 000 companies<br/>
                    125 000 users
                </Typography> : <img className={classes.smLogo} src={smLogo}></img>
              }
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
              { isHoverMeru ? <Typography
                variant="body1"
                classes={{
                  root: classes.projectText,
                }}
              >
                Fullstack and mobile development for healthcare<br/>
                practitioner dashboard, and patient mobile app<br/>
                Y-combinator healthcare startup
              </Typography> : <img className={classes.meruLogo} src={meruLogo}></img>
              }
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
              { isHoverPD ? <Typography
                variant="body1"
                classes={{
                  root: classes.projectText,
                }}
              >
                Co-Founder / Mobile developer<br/>
                Made alpha version of game to attract investors <br/>
                Achieved Rovio founder Peter Vesterbacka as investor
              </Typography> : <img className={classes.PDLogo} src={PDLogo}></img>
              }
            </div>
          </Grid>

        </Grid>
      </WidthLimiter>


    </div>
  );
};

export default CommercialProjects;