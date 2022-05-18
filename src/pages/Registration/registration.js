import { Container, Grid, Paper, Typography, TextField, Box, Button, Select, MenuItem, FormControl } from "@mui/material";
import axios from 'axios';
import { Link} from 'react-router-dom'
import { useState} from 'react';
import { DatePicker, InputNumber, Space } from 'antd';



function Register() {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [badhabits, setBadhabits] = useState('');

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
    setBirthday(e.target.value)
  }
  const handleWeightChange = (e) => {
    setWeight(e.target.value)
  }
  const handleHeightChange = (e) => {
    setHeight(e.target.value)
  }
  const handleBadhabitsChange = (e) => {
    setBadhabits(e.target.value)
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
                mr: 10,
                my: 2
              }}>
              <Grid item lg={12} xs={12}>
                <TextField
                  id="outlined-helperText"
                  label="Your name"
                  placeholder="Your name"
                  onChange={handleNameChange}
            
                /> 
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
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
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  onChange={handlePasswordChange}
                />
              </Grid>
              </Box>
              </Grid>
            
            <Grid item>
            <Box sx={{mt: 3}}>
              <Space direction="vertical">
                {/* <p>Your birthday</p> */}              
                  <DatePicker                           //Birthday
                    onChange={handleBirthdayChange}  
                  />
                {/* <p>Your weight</p> */}                         
                  <InputNumber                              // Weight 
                    size="large" 
                    min={30} 
                    max={180} 
                    defaultValue={70}
                    prefix='kg' 
                    onChange={handleWeightChange}  
                    helperText='label'
                  />
                  <InputNumber                               // Height 
                    size="large" 
                    min={140} 
                    max={230} 
                    defaultValue={160}
                    prefix='sm' 
                    onChange={handleHeightChange}  
                    helperText='label'
                  />
                  <FormControl sx={{mt: 0, minWidth: 120 }}>  {/* bad habits */}
                 <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    // value={age}
                    label="Age"
                    onChange={handleBadhabitsChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem> 
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                  </FormControl>
              </Space>
            </Box>
              
            </Grid>
            
            </Grid>
        
        

        <Container maxWidth="sm">         {/*Container for buttons */}
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
                          surname: surname,
                          birthday: birthday,
                          weight: weight,
                          height: height,
                          badhabits: badhabits
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
        </Paper>
    {/* </Grid> */}
      
    </Container>
    )
}

export default Register;