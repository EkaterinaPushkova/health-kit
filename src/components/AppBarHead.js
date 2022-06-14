import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import {useEffect, useState, useRef} from 'react';
import { Container, Grid, TextField} from "@mui/material";
import axios from 'axios';


function AppBarHead(){

  const [openMail, setOpenMail] = useState(false);      //---------for openDialogMail

  const handleOpenMail =  () => {
      setOpenMail(true);
    };
  
    const handleCloseMail = () => {
      setOpenMail(false);
    };
    const descriptionElementRef = useRef(null);
    useEffect(() => {
      if (openMail) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [openMail]);

    const [object, setObject] = useState('');
    const [message, setMessage] = useState('');

    const handleObjectChange = (e) => {
      setObject(e.target.value)
    }
    const handleMessageChange = (e) => {
      setMessage(e.target.value)
    }



  const navigate = useNavigate();         //----- for redirect

  const toProfile = (e) => {    
    navigate('/profile')
  };

  const toCheckLists = (e) => {
    navigate('/main/checklists')
  }

  return(
    <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            
              <Typography 
              variant="h5" 
              component='div'
              sx={{ 
                flexGrow: 1, 
                fontWeight: 600}}
              >
                HealthKit
              </Typography>
            
            
              <Button 
              color="inherit" 
              sx={{fontWeight: 'bold'}}
              onClick={() => {
                  if(localStorage.getItem("id") === null){
                  navigate('/');
                  alert('Войдите или зарегистрируйтесь');
                  }else{handleOpenMail()};
                }}
                >
              Обратная связь
              </Button>
                          <Dialog
                               maxWidth='md'
                               minWidth='xs'
                               open={openMail}
                               onClose={handleCloseMail}
                               aria-labelledby="scroll-dialog-title"
                               aria-describedby="scroll-dialog-description"
                             >
                               <DialogTitle id="scroll-dialog-title">Написать письмо администратору</DialogTitle>
                                 <DialogContentText
                                   tabIndex={-1}
                                 >
                                  <Container maxWidth='md' minWidth='xs'>
                                  <Grid  justifyContent="center" direction='column'>      
                                      <Box sx={{
                                        '& .MuiTextField-root': {
                                         width: '100%',
                                         mb: 3,
                                        },
                                        alignItems: 'center',
                                        mt: 2
                                      }}>
                                      <Grid item lg={12} xs={12}>
                                        <TextField
                                          required
                                          id="outlined-helperText"
                                          label="Тема"
                                          placeholder="Тема"
                                          onChange={handleObjectChange}
                                        /> 
                                      </Grid>
                                      <Grid item lg={12} xs={12}>
                                        <TextField
                                          id="outlined-multiline-static"
                                          multiline
                                          rows={8}
                                          label="Сообщение"
                                          placeholder="Сообщение"
                                          onChange={handleMessageChange}
                                        /> 
                                      </Grid>
                                      </Box>
                                      </Grid>
                                  </Container>
                                 </DialogContentText>
                               <DialogActions>
                               <Button 
                               onClick={() => {
                                if(object.length > 1 && message.length > 1){
                                       axios
                                          .get(`//62.113.96.113:8080/addMessage`, {  
                                            params:{
                                              subject: object,
                                              object: message,
                                              id: localStorage.getItem("id")
                                            }
                                          })
                                          .then((response) => {
                                            if (response.status === 200){
                                              alert("good");
                                            }else {
                                              alert("bad");
                                            }
                                          });
                                          handleCloseMail();
                                          alert('сообщение отправлено');
                                        }else{
                                          alert('введите тему и сообщение');
                                        }
                                      }}>
                               Отправить
                               </Button>
                                 <Button 
                                 onClick={handleCloseMail}>
                                 Закрыть
                                 </Button>
                               </DialogActions>
                             </Dialog>


              <Button 
              color="inherit" 
              sx={{fontWeight: 'bold'}}
              onClick={() => {
                  if(localStorage.getItem("id") === null){
                  navigate('/');
                  alert('Войдите или зарегистрируйтесь');
                  }else if(localStorage.getItem("purpose_id") === null){
                  navigate('/main/selectPurpose/');
                  alert('Выберите цель');;
                  }else{toCheckLists()};
                }}
                >
              Чек-листы
              </Button>

              
                <Button 
                color="inherit"
                sx={{fontWeight: 'bold'}}
                onClick={() => {
                  if(localStorage.getItem("id") === null){
                  navigate('/');
                  alert('Войдите или зарегистрируйтесь');
                  }else{toProfile()};
                }
                }>Профиль</Button>

                
              
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default AppBarHead;
