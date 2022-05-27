import React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, FormHelperText, Paper, TextField, Typography, DialogContent, DialogActions, Dialog, DialogTitle } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

function Auth() {

  const navigate = useNavigate();

 
  useEffect(() => {
    if(localStorage.getItem("id") != null){
        navigate('/profile')
    }
  });


  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');


  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  

  const [open, setOpen] = React.useState(false); //for openDialog

  const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open]);

  const keyAdmin = 'qaws123';
  const [key, setKey] = useState('');

  const handlerAdminChange = (e) => {
    setKey(e.target.value);
  }
  
  return (
    <Container maxWidth="sm">
      <Paper elevation={7} sx={{mt: 3}}>
        <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Sign In</Typography>
        <Grid container justifyContent="center" direction='column'>
          <Box sx={{
            '& .MuiTextField-root': {
             width: '100%',
             mb: 3,
            },
            alignItems: 'center',
            mx: 10,
            my: 2
          }}>
          <Grid item>
          <TextField
              required
              id="outlined-required"
              label="Login"
              placeholder="Hello World"
              onChange={handleLoginChange}
            />
          </Grid>
          <Grid item>
          <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
          </Grid>
          <Grid item>
          </Grid>
          
          </Box>
        </Grid>
        <Container maxWidth="sm">
          <Box sx={{
            '& .MuiButton-root':{
              mb: 0
            },
            justify: 'center'
          }}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item>
              
              <Button 
                  type="submit" 
                  variant='contained'
                  onClick={() => {
                    if(key === keyAdmin){
                      navigate('/adminpanel')
                    }else{
                      axios
                      .get(`//localhost:8080/authentification`, {
                        params:{
                          login: login,
                          password: password,
                          // keyAdmin: keyAdmin
                        }
                      })
                      .then((response) => {
                        if (response.data.ok === true){
                          localStorage.setItem('name',response.data.name);
                          localStorage.setItem('id',response.data.id);
                          localStorage.setItem('surname',response.data.surname);
                          localStorage.setItem('birthday',response.data.birthday);
                          localStorage.setItem('login',response.data.login);
                          localStorage.setItem('password',response.data.password);
                         navigate('/main/selectPurpose');
              
                        }else if(response.data.ok === false){
                          alert("bad");
                        }
                      })
                      .catch(error => {
                        alert(error)
                      });
                    }
                    
                  }}>Login
                </Button>
              
                
              </Grid>
              <Grid item>

              <Link to='/registration'>
                <Button 
                type="submit" 
                variant="outlined">Sign Up</Button>
                <FormHelperText>Don`t sign up?</FormHelperText>
              </Link>
              

              <Grid item>
              <Button 
              size='small'
              onClick={handleClickOpen}>For moders</Button>
              </Grid>

              <Dialog
                  maxWidth='sm'
                  minWidth='xs'
                  open={open}
                  onClose={handleClose}
                >
                  <DialogTitle >Enter key</DialogTitle>
                  <DialogContent >
                  <TextField
                  type='password'
                  label='key'
                  onChange={handlerAdminChange}></TextField>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={() => {
                          if(key === keyAdmin){
                      
                      localStorage.setItem('key','yes');
                      navigate('/adminpanel')}
                      else{
                        alert('incorrect key');
                      }
                    }
                      
                    }>OK</Button>
                  </DialogActions>
                </Dialog>
           
             
              </Grid>
            </Grid>
          </Box>
        </Container>    
          
        </Container>
      </Paper>
    </Container>
  );
}
export default Auth;
