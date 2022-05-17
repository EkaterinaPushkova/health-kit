// import React from 'react';
import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { Link} from 'react-router-dom';
// import Register from '../../pages/Registration/registration';
import axios from 'axios';
//   Route, BrowserRouter, , Routes
let login = "";
let password = "";

function Auth() {
  function getDataForLogin(val){
      login = val.target.value;
  }
  function getDataForPassword(val){
    password = val.target.value;
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
              onChange={getDataForLogin}
            />
          </Grid>
          <Grid item>
          <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={getDataForPassword}
            />
          </Grid>
            </Box>
        </Grid>
        <Container maxWidth="sm">
          <Box sx={{
            '& .MuiButton-root':{
              mb: 2
            },
            justify: 'center'
          }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Button 
                  type="submit" 
                  variant='contained'
                  onClick={() => {
                    axios
                      .get(`//localhost:8080/authentification`, {
                        params:{
                          login: login,
                          password: password
                        }
                      });
                      // .then((response) => {
                      //   if (response.data.ok === true){
                      //     alert("good");
                      //   }else{
                      //     alert("bad");
                      //   }
                      // });
                  }}>Login
                </Button>
              </Grid>
              <Grid item>

              <Link to='/registration'>
                <Button type="submit" variant="outlined">Sign Up</Button>
              </Link>
              
             
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
