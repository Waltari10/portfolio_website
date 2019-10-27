import Button from '@material-ui/core/Button';
import React from 'react';
import { Link } from 'react-scroll';

const ContactButton = (props) => {

  // const handleSetActive = (tab, i) => {
  //   setValue(i);
  //   setTimeout(() => {
  //     location.hash = tab.to;
  //   }, scrollDurationMS);
  // };

  return (
    <Button
      variant="contained"
      color="secondary"
      {...props}
    >
      <Link
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

