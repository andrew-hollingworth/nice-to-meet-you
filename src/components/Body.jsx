import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  intro: {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '1em',
    marginTop: '5em',
    textAlign: 'center',
  },
  prompt: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    // https://codepen.io/CrocoDillon/pen/fBJxu
    fontSize: 'calc(4vw + 4vh + 2vmin)',
    height: '90vh',
    textAlign: 'center',
    padding: '1rem',
  },
}));

export default function Body() {
  const classes = useStyles();

  const promptSeed = [
    'What\'s your favorite part of your job?',
    'What makes you good at what you do?',
    'What is a passion project you\'re working on?',
    'What\'s the weirdest bug you\'ve found?',
    'How did you start working with this company?',
    'What do you look for in a candidate?',
  ];

  const [currentPrompt, setPrompt] = useState(0);

  const changePrompt = () => {
    const newIndex = Math.floor(Math.random() * promptSeed.length);
    setPrompt(prevState => (prevState === newIndex ? changePrompt() : newIndex));
  };

  return (
    <div>
      <Typography className={classes.intro}>
        Introduce yourself briefly and ask...
      </Typography>
      <Typography onClick={changePrompt} className={classes.prompt}>
        {promptSeed[currentPrompt]}
      </Typography>
    </div>
  )
}
