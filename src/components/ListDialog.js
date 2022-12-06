import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ListIcon from "../pictures/list-icon-blue.svg"

export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

;

  return (
    <div>
      <Button onClick={handleClickOpen('paper')}><img className="listicon" src={ListIcon} alt="ListIcon" /></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        className="dialog"
      >
        <div className='dialogheader'>

        <DialogTitle id="scroll-dialog-title" className="dialogtitle">Prep list</DialogTitle>
        <DialogActions>
          <Button className="dialogclose" onClick={handleClose}>X</Button>
          </DialogActions>
        </div>
     
       
        <DialogContent className="dialogcontent" dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
    
            tabIndex={-1}
          >
            {[...new Array(10)]
              .map(
                () => `List here.`
              )
              }
          </DialogContentText>
        </DialogContent>

      </Dialog>
    </div>
  );
}