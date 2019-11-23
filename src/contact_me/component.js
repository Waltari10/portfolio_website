import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import WidthLimiter from '../components/WidthLimiter';
import { post } from './http';
import useStyles from './styles';


function validateEmail(email) {
  // eslint-disable-next-line max-len, no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const ContactMe = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const classes = useStyles();


  const postComment = (name, email, message) => {

    if (!message) {
      setError({
        message: 'Message field is required',
      });
      return;
    }

    if (!email) {
      setError({
        message: 'Email field is required',
      });
      return;
    }

    if (!validateEmail(email)) {
      setError({
        message: 'Email is not valid!',
      });
      return;
    }

    setError();
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
        setError({
          message: 'Something went wrong! Please try again, or send me an email at valtteri.e.laine@gmail.com.',
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <WidthLimiter
      name="contact_me"
      className={classes.container}
      style={{ maxWidth: '600px' }}
    >
      <a name="contact_me" />
      <div className={classes.title}>
        <Typography gutterBottom align="center" variant="h4">Start a conversation</Typography>
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
            inputProps={{ 'aria-label': 'Your name' }}
            name="your name"
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
            inputProps={{ 'aria-label': 'Your email' }}
            name="email"
            fullWidth
            variant="outlined"
            type="your email"
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
          inputProps={{ 'aria-label': 'Your message' }}
          name="your message"
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
          name="Send comment"
          onClick={() => postComment(name, email, message)}
          classes={{ root: classes.button }}
          color="secondary"
          disabled={isLoading}
          variant="contained"
        >
          {isLoading && <CircularProgress size={24} className={classes.buttonProgress} />}
          Send
        </Button>

        {
          error && <Typography
            color="error"
            variant="subtitle1"
            className={classes.statusText}
          >
            {error.message}
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