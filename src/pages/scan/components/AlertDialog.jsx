import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import './AlertDialog.css'

export default function AlertDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    location.href = '/'
  };

  useEffect(() => {
    handleClickOpen(); // Chama a função handleClickOpen ao renderizar o componente
  }, []); // O segundo argumento vazio garante que useEffect só será executado uma vez, equivalente a componentDidMount

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className='caixa-dialogo'>
          <DialogContentText id="alert-dialog-description">
          Parábens! Seus tokens foram resgatados com sucesso e em breve estarão disponíveis na sua conta!
          </DialogContentText>
        </DialogContent>
        <DialogActions className='caixa-dialogo-2'>
        <Button className='botao-modal' onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
