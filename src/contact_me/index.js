import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import WidthLimiter from '../components/WidthLimiter';

const useStyles = makeStyles(theme => ({

  title: {
    marginTop: theme.spacing(4),
  },
  breadText: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
  name: {
    paddingRight: theme.spacing(1),
    width: 'calc(100% - 8px)',
  },
  email: {
    paddingLeft: theme.spacing(1),
    width: 'calc(100% - 8px)',
  },
  container: {
    marginBottom: theme.spacing(8),
  },

}));


const DEFAULT_PARAMS = {
  // 'Access-Control-Allow-Origin': true,
  credentials: 'include',
  cache: 'no-store',
  headers: {
    'Content-Type': 'application/json',
  },
};

const tryParseJson = async (res) => {

  try {
    res = await res.json();
  } catch (err) {
    console.warn(err);
  }

  return res;
};

export const post = async (uri, body = {}, type = 'json') => {

  let res = await fetch(uri, {
    ...DEFAULT_PARAMS,
    method: 'POST',
    body: JSON.stringify(body),
  });

  const ok = res.ok;

  if (type === 'json') {
    res = await tryParseJson(res);
  }

  if (!ok) {
    return Promise.reject(res);
  }


  return res;
};

const postComment = (name, email, message) => {


  post('api/comment', {
    name,
    email,
    message,
  });
};

const ContactMe = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const classes = useStyles();


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
        <Typography classes={{ root: classes.breadText }} gutterBottom variant="body1">Is there something I can help you with? Feel free to
throw me a question or a new opportunity! I’d love to
hear from you.</Typography>
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
          rows={8}
        />
      </div>
      <div>
        <Button
          onClick={() => postComment(name, email, message)}
          classes={{ root: classes.button }}
          color="secondary"
          variant="contained"
        >SEND</Button>
      </div>
    </WidthLimiter>
  );
};

export default ContactMe;