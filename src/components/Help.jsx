import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import HelpIcon from '@material-ui/icons/Help';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  dialogFont: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 400,
    textAlign: 'center',
  },
  dialogTitle: {
    fontFamily: '"Poppins", sans-serif',
    fontWeight: 500,
    fontSize: '2em',
  },
  closeX: {
    position: 'absolute',
    right: '0.7em',
    top: '0.7em',
  },
  actions: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

export default function Help() {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // CITATION: https://stackoverflow.com/questions/271171/sending-emails-with-javascript/271172#271172
  const sendMail = () => {
    const link = 'mailto:andrew.hollingworth@gmail.com'
      + '?cc='
      + '&subject=' + escape('A Suggestion for Nice To Meet You')
      + '&body=' + escape('');
    window.location.href = link;
  }

  return (
    <div>
      <IconButton onClick={handleClickOpen}>
        <HelpIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} aria-labelledby="what-is-this-app">
        <DialogTitle className={classes.dialogTitle} disableTypography={true} >
          What IS this? <CloseIcon
            fontSize='inherit'
            color='primary'
            className={classes.closeX}
            onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <DialogContentText className={classes.dialogFont} >My name is Andrew and I'm a software engineer that struggles with networking. I realized that I have a hard time walking up to strangers and starting a conversation without any context, even if it's in the spirit of "networking". So, I decided to build a super simple tool to help anchor a conversation and an introduction! Tap the screen for a new prompt and get networking!
          </DialogContentText>
        </DialogContent>
        <DialogActions className={classes.actions}>
          <Button rel='noreferrer' target='_blank' href='https://github.com/andrew-hollingworth/nice-to-meet-you' color="primary">
            Check out project on Github
          </Button>
          <Button onClick={sendMail} color="primary">
            Suggest another prompt
          </Button>
          <Button rel='noreferrer' target='_blank' href='https://andrewhollingworth.com' color="primary">
            Check out my portfolio
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
