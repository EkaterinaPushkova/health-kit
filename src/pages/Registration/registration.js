import { Container, Grid, Paper, Typography, TextField, Box, Button } from "@mui/material";
import axios from 'axios';
import { Link} from 'react-router-dom'
// import { Route, Routes} from 'react-router-dom';

let login = '';
let password = '';
let name = '';
let surname = '';

function Register() {
  function getDataForLogin(val){
    login = val.target.value;
  }
  function getDataForPassword(val){
    password = val.target.value;
  }
  function getDataForName(val){
    name = val.target.value;
  }
  function getDataForSurname(val){
    surname = val.target.value;
  }
    return(
    <Container maxWidth="sm">
      <Paper elevation={7} sx={{mt: 3}}>
        <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Sign Up</Typography>
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
              id="outlined-helperText"
              label="Your name"
              placeholder="Your name"
              onChange={getDataForName}
              
            /> 
          </Grid>
          <Grid item>
            <TextField
              id="outlined"
              label="Your surname"
              placeholder="Your surname"
              onChange={getDataForSurname}
              
            /> 
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Login"
              placeholder="login@mail.com"
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
              mb: 2,
              mt: 0
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
                      .get(`//localhost:8080/registration`, {
                        params:{
                          login: login,
                          password: password,
                          name: name,
                          surname: surname
                        }
                      })
                      .then((response) => {
                        if (response.status === 200){
                          alert("good");
                        }else {
                          alert("bad");
                        }
                      });
                  }}>Sign Up
                </Button>
              </Grid>
              <Grid item>
              <Link to='/'>
              <Button type="submit" variant="outlined">Login</Button>
              </Link>
              </Grid>
            </Grid>
          </Box>
              
        </Container>    
        </Container>
        </Paper>
    </Container>
    )
}

export default Register;