
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ContactButton from '../components/ContactButton';
import WidthLimiter from '../components/WidthLimiter';
import Decoration from '../components/Decoration';


const useStyles = makeStyles(theme => ({

  waveBody: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(24),
    backgroundColor: theme.palette.tertiary.main,
  },
  text: {
    color: 'white',
  },
  skills: {
    color: theme.palette.type === 'dark' ? theme.palette.common.white : '',
    borderRadius: '24px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: theme.palette.grey[300],
    marginTop: `-${ theme.spacing(18)}px`,
    backgroundColor: theme.palette.appBackground,
    marginBottom: theme.spacing(8),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  skillContainer: {
    padding: theme.spacing(4),
  },
  centerSkillContainer: {
    borderStyle: 'solid',
    borderColor: theme.palette.grey[300],

    [theme.breakpoints.up('sm')]: {
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderLeftWidth: '0.5px',
      borderRightWidth: '0.5px',
    },

    [theme.breakpoints.down('xs')]: {
      borderTopWidth: '0.5px',
      borderBottomWidth: '0.5px',
      borderLeftWidth: 0,
      borderRightWidth: 0,
    },
  },
  widthLimiter: {
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  breadText: {
    marginLeft: theme.spacing(6),
    marginRight: theme.spacing(6),
    color: theme.palette.type === 'dark' ? theme.palette.common.white : '',
  },
  container: {
    marginBottom: theme.spacing(8),
  },
  link: {
    height: theme.spacing(6),
    textDecoration: 'none',
    pointerEvents: 'none',
  },
}));

const frontEndSkillsArr = [
  'ReactJS', 'Redux', 'AngularJs', 'React-Native', 'EcmaScript 2016', 'HTML5/CSS3', 'Webpack', 'Unity',
  'jQuery', 'Wordpress', 'HTML canvas', 'Augmented Reality', 'ThreeJS', 'Android', 'iOS',
];
const designerSkillsArr = ['Responsive', 'Sketch', 'Figma', 'Balsamiq', 'User interviews', 'Bootstrap', 'Material-UI'];
const backEndSkillsArr = ['NodeJS', 'Java', 'Firebase', 'Continuous integration (CI)', 'REST', 'Docker'];

const renderSkill = (skill) => <Typography key={skill}>{skill}</Typography>;

const AboutMe = () => {

  const classes = useStyles();

  return (
    <div
      name="about_me"
      className={classes.container}
    >
      <a
        aria-label="Anchor for about me page"
        href="#about_me"
        name="about_me"
        className={classes.link}
      >
      &nbsp;
      </a>
      <Decoration>
        <WidthLimiter>
          <Typography
            gutterBottom
            align="center"
            variant="h4"
            classes={{
              root: classes.text,
            }}
          >
            Hey, I’m Valtteri Laine.<br/>Nice to meet you!
          </Typography>
          <Typography
            variant="body1"
            classes={{
              root: `${classes.text } ${ classes.breadText}`,
            }}
          >
            {// eslint-disable-next-line max-len
              'I have always been passionate about computers and everything related to them. 4 years ago I graduated from Karelia University of Applied Sciences. I participated in the first course in Europe done in colloboration with NASA, where we studied NASAs innovative methods. In addition I have worked at a y-combinator startup. I’m naturally curious, ambitious, and always improving one small step at a time.'
            }
          </Typography>
        </WidthLimiter>
      </Decoration>

      <WidthLimiter>
        <div
          className={classes.skills}
        >
          <Grid container justify='space-evenly'>

            <Grid xs={12} sm={4} item classes={{ root: classes.skillContainer }}>
              <Typography className={classes.skillText} gutterBottom variant="h6">Front-End Developer</Typography>
              {frontEndSkillsArr.map(renderSkill)}
            </Grid>


            <Grid xs={12} sm={4} item classes={{ root: `${classes.skillContainer } ${ classes.centerSkillContainer}` }}>
              <Typography className={classes.skillText} gutterBottom variant="h6">Designer</Typography>
              {designerSkillsArr.map(renderSkill)}
            </Grid>

            <Grid xs={12} sm={4} item classes={{ root: classes.skillContainer }}>
              <Typography className={classes.skillText} gutterBottom variant="h6">Back-End Developer</Typography>
              {backEndSkillsArr.map(renderSkill)}
            </Grid>
          </Grid>
        </div>
        <ContactButton
          className={classes.button}
        />
      </WidthLimiter>


    </div>
  );
};

export default AboutMe;