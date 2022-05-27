import { Container, Grid, Paper, Typography, TextField, Box, Button, FormHelperText } from "@mui/material";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import axios from 'axios';
import { Link} from 'react-router-dom'
import { useState} from 'react';


function Register() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [badhabits, setBadhabits] = useState('');
  const [contr, setContr] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleSurnameChange = (e) => {
    setSurname(e.target.value)
  }
  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  }
  const handleBadhabitsChange = (e) => {
    setBadhabits(e.target.value)
  }
  const handleContrChange = (e) => {
    setContr(e.target.value)
  }


    return(
    <Container maxWidth="md" lg={2}>                       {/* main container*/} 
      <Paper elevation={7} sx={{mt: 3}}>
        
        <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Sign Up</Typography>
        
        <Grid container justifyContent="center" direction='row'>        {/*grid for 2 containers */}

            <Grid  justifyContent="center" direction='column'>        {/*first grid container inputs */}
              <Box sx={{
                '& .MuiTextField-root': {
                 width: '100%',
                 mb: 3,
                },
                alignItems: 'center',
                // mr: 10,
                my: 2,
                mx: 2
              }}>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  id="outlined-helperText"
                  label="Your name"
                  placeholder="Your name"
                  onChange={handleNameChange}
            
                /> 
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  id="outlined"
                  label="Your surname"
                  placeholder="Your surname"
                  onChange={handleSurnameChange}
            
                /> 
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  id="outlined-required"
                  label="Login"
                  placeholder="login@mail.com"
                  onChange={handleLoginChange}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                />
              </Grid>
              </Box>
              </Grid>
            
            <Grid justifyContent="center" direction='column'>  {/*second grid inputs container*/}
            <Box sx={{
                '& .MuiTextField-root': {
                 width: '100%',
                 mb: 3,
                },
                mt: 2, 
                mx: 2}}>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  label="Birthday" //*add validation to form '2022-12-31' 
                  helperText='Input date in format: "YYYY-ММ-DD" '
                  onChange={handleBirthdayChange}
                />
              </Grid>
              <Box sx={{
              '& .MuiTextField-root': {
                 width: '100%',
                 mb: 3,
                }}}>
              <Grid item lg={12} xs={12}>
                <TextField
                    label="Bad habits" //*add validation to numeric
                    onChange={handleBadhabitsChange}
                  />
                </Grid>
                <Grid item lg={12} xs={12}>
                <FormControl fullWidth>
                <InputLabel >Age</InputLabel>
                    <Select
                      defaultValue={contr}
                      label="Age"
                      onChange={handleContrChange}
                    >
                      <MenuItem value={0}>None</MenuItem>
                      <MenuItem value={1}>Citrus</MenuItem>
                      <MenuItem value={2}>Milk</MenuItem>
                      <MenuItem value={3}>Eggs</MenuItem>
                      <MenuItem value={4}>Meal</MenuItem>
                    </Select>
                    </FormControl>
              </Grid>
            </Box>  
              
            </Box>
            </Grid>
            
            </Grid>
        
        

        <Container maxWidth="sm">         {/*Container for buttons */}
          <Box sx={{
            '& .MuiButton-root':{
              mb: 0,
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
                      .get(`//localhost:8080/registration`, {  //add new input to DB!! + config validation 
                        params:{
                          login: login,
                          password: password,
                          name: name,
                          surname: surname,
                          birthday: birthday,
                          badhabits: badhabits,
                          contr: contr
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
              <FormHelperText>Already sign up?</FormHelperText>
              </Link>
              </Grid>
            </Grid>
          </Box>
              
        </Container>    
        </Paper>
    {/* </Grid> */}
      
    </Container>
    )
}

export default Register;