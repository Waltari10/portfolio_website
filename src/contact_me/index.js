import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import WidthLimiter from '../components/WidthLimiter';
import { post } from './http';
import useStyles from './styles';


// TODO: Validate that email and message exists, and that email is valid

const ContactMe = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);

  const classes = useStyles();


  const postComment = (name, email, message) => {
    setIsError(false);
    setIsSuccess(false);
    setIsLoading(true);

    post('api/comment', {
      name,
      email,
      message,
    })
      .then(() => {
        setIsSuccess(true);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <WidthLimiter
      name="contact"
      classname={classes.container}
      style={{ maxWidth: '600px' }}
    >
      <a name="contact_me" />
      <div className={classes.title}>
        <Typography gutterBottom align="center" variant="h4">Contact me</Typography>
      </div>
      <div>
        <Typography
          classes={{ root: classes.breadText }}
          gutterBottom
          variant="body1"
        >
          Is there something I can help you with? Feel free to
          throw me a question or a new opportunity! I’d love to
          hear from you.
        </Typography>
      </div>

      <Grid container>
        <Grid xs={6} item>
          <TextField
            fullWidth
            classes={{ root: `${classes.textField } ${ classes.name}` }}
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            variant="outlined"
            disabled={isLoading}
          />
        </Grid>
        <Grid xs={6} item>
          <TextField
            fullWidth
            variant="outlined"
            type="email"
            classes={{ root: `${classes.textField } ${ classes.email}` }}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="email"
            disabled={isLoading}
            required
          />
        </Grid>
      </Grid>
      <div>
        <TextField
          fullWidth
          variant="outlined"
          multiline
          classes={{ root: classes.textField }}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder="Message"
          required
          rows={8}
          disabled={isLoading}
        />
      </div>

      <div>
        <Button
          onClick={() => postComment(name, email, message)}
          classes={{ root: classes.button }}
          color="secondary"
          disabled={isLoading}
          variant="contained"
        >
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}

          SEND
        </Button>

        {
          isError && <Typography
            color="error"
            variant="subtitle1"
            className={classes.statusText}
          >
        Something went wrong! Please try again, or send me an email at valtteri.e.laine@gmail.com.
          </Typography>
        }
        {
          isSuccess && <Typography
            color="primary"
            variant="subtitle1"
            className={classes.statusText}
          >
          Message sent! I will get back to you shortly.
          </Typography>
        }
        {
          isLoading && <Typography
            variant="subtitle1"
            className={classes.statusText}
          >
          Loading...
          </Typography>
        }
      </div>
    </WidthLimiter>
  );
};

export default ContactMe;