import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({

  title: {
    marginTop: theme.spacing(4),
  },
  breadText: {
    marginBottom: theme.spacing(4),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  button: {
    position: 'relative',
    marginBottom: theme.spacing(2),
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
  buttonProgress: {
    position: 'absolute',
  },
  statusText: {

  },
}));