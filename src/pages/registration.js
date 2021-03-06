import { Container, Grid, Paper, Typography, TextField, Box, Button } from "@mui/material";
import axios from 'axios';
import { Link, useNavigate} from 'react-router-dom'
import { useState} from 'react';


function Register() {

  const navigate = useNavigate();

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');

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

    return(
    <Container maxWidth="md" lg={2}>                       {/* main container*/} 
      <Paper elevation={7} sx={{mt: 3}}>
        
        <Typography 
          variant="h5" 
          align="center" 
          color="textPrimary" 
          fontWeight="500">
          Регистрация</Typography>
        
        <Grid container spacing={2} justifyContent="center" direction='row'>        {/*grid for 2 containers */}
        <Grid item>
            <Grid  justifyContent="center" direction='column'>        {/*first grid container inputs */}
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
                  label="Ваше имя"
                  placeholder="Ваше имя"
                  onChange={handleNameChange}
            
                /> 
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  id="outlined"
                  label="Ваша фамилия"
                  placeholder="Ваша фамилия"
                  onChange={handleSurnameChange}
            
                /> 
              </Grid>
              
              <Grid item lg={12} xs={12}>
                <TextField
                  required 
                  type='date'
                  helperText='Дата рождения'
                  min="1950-01-01"
                  max="2018-01-01"
                  onChange={handleBirthdayChange}
                    />
              </Grid> 
              </Box>
              </Grid>
              </Grid>
              <Grid item>
            <Grid justifyContent="center" direction='column'>  {/*second grid inputs container*/}
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
                  id="outlined-required"
                  label="Логин"
                  placeholder="login@mail.com"
                  onChange={handleLoginChange}
                />
              </Grid>
              <Grid item lg={12} xs={12}>
                <TextField
                  required
                  id="outlined-password-input"
                  label="Пароль"
                  type="password"
                  onChange={handlePasswordChange}
                />
              </Grid>
              </Box>
              </Grid>
            </Grid>
            
            </Grid>
        
        

        <Container maxWidth="sm">         {/*Container for buttons */}
          <Box sx={{
            '& .MuiButton-root':{
              mb: 2
            },
            justify: 'center'
          }}>
            <Grid container spacing={2} justifyContent="center" direction='row'>
              <Grid item>
                <Button 
                  type="submit" 
                  variant='contained'
                  onClick={() => {
                    if(name.length > 1 && surname.length > 1 && birthday !== null && login.length > 1 && password.length > 1){axios
                      .get(`//62.113.96.113:8080/registration`, {  
                        params:{
                          login: login,
                          password: password,
                          name: name,
                          surname: surname,
                          birthday: birthday
                        }
                      })
                      .then((response) => {
                        if (response.status === 200){
                          alert("good");
                        }else {
                          alert("bad");
                        }
                      });
                      navigate('/');}else{
                        alert('Заполните все поля')
                      }
                  }}>Зарегистрироваться
                </Button>
              </Grid>
              <Grid item>
                <Link to='/'>
                <Button type="submit" variant="outlined">Войти</Button>
                {/* <FormHelperText>Есть аккаунт?</FormHelperText> */}
                </Link>
              </Grid>
            </Grid>
          </Box>
              
        </Container>    
        </Paper>
      
    </Container>
    )
}

export default Register;