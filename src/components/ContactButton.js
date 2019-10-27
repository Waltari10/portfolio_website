import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-scroll';
import { scrollDurationMS } from '../constants';


const handleSetActive = () => {
  setTimeout(() => {
    location.hash = 'contact_me';
  }, scrollDurationMS);
};

const ContactButton = (props) => {


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
        duration={500 }
      >
        Contact me
      </Link>
    </Button>
  );
};

export default ContactButton;

