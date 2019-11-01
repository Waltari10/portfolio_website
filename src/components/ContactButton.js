import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-scroll';
import { scrollDurationMS } from '../constants';


const handleSetActive = () => {
  setTimeout(() => {
    location.hash = 'contact_me';
  }, scrollDurationMS);
};

const useStyles = makeStyles((theme) => ({
  text: {
    color: theme.palette.common.white,
  },
}));

const ContactButton = (props) => {

  const classes = useStyles();


  return (
    <Button
      variant="contained"
      color="secondary"
      {...props}
    >
      <Link
        onClick={() => handleSetActive()}
        to="contact_me"
        containerId="scroll_container"
        smooth={true}
        duration={500}
        className={classes.text}
      >
        Contact
      </Link>
    </Button>
  );
};

export default ContactButton;

