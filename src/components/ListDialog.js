import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Delete from "../components/Delete"

import listicon from '../pictures/list-icon-blue.svg';

function SimpleDialog(props) {

  const { onClose, selectedValue, open, emails } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} className="dialog">
      <div className='dialogheader'>
      <DialogTitle className='dialogtitle' >Ingredients</DialogTitle>
     
      </div>
      <div className='close' onClick={handleClose}>X</div>
      <List className='dialogcontent'>
        {emails.map((email) => (
          <ListItem onClick={() => handleListItemClick(email)} key={email}>
            <ListItemText primary={email} />
          </ListItem>
        ))}

      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
  emails: PropTypes.array.isRequired
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("default");
  const [emails, setEmails] = React.useState([])

  React.useEffect(() => {
    async function getPosts() {
      setEmails(JSON.parse(sessionStorage.getItem("ingredientslist")))
      setSelectedValue(emails[0]);
    }
    getPosts();
  }, [])

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div>

      <br />
      <Button onClick={handleClickOpen}>
        <img className="listicon" src={listicon} alt="listicon" />
      </Button>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
        emails={emails}
      />
    </div>
  );
}