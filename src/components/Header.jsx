import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Help from './Help.jsx';


const useStyles = makeStyles(theme => ({
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    marginLeft: '0.6rem',
    paddingTop: '0.2rem',
    paddingBottom: '0.2rem',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <AppBar>
      <Toolbar className={classes.appBar}>
        <Typography variant="h5" className={classes.title}>
          Nice to Meet You!
      </Typography>
        <Help />
      </Toolbar>
    </AppBar>
  )
}
