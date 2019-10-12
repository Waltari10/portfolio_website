import Button from '@material-ui/core/Button';
import React from 'react';


const ContactButton = (props) => {
  return (
    <Button
      variant="contained"
      color="secondary"
      {...props}
    >
      Contact me
    </Button>
  );
};

export default ContactButton;

