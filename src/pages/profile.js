import { Container, Paper, Grid, Box} from '@mui/material';
import { Typography, TextField, InputAdornment, Button  } from '@mui/material' ;
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ListForProfile from '../components/main/profile/ListForProfile';


function Profile() {

    const navigate = useNavigate();


    const [openRes, setOpenRes] = useState(false);      //------------for openDialogResults

    const handleClickOpenResults =  () => {
        setOpenRes(true);
      };
    
      const handleCloseResults = () => {
        setOpenRes(false);
      };
      const descriptionElementRef = useRef(null);
      useEffect(() => {
        if (openRes) {
          const { current: descriptionElement } = descriptionElementRef;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [openRes]);


      const [openProf, setOpenProf] = useState(false);      //---------for openDialogChangeProfile

    const handleOpenChangeProfile =  () => {
        setOpenProf(true);
      };
    
      const handleCloseChangeProfile = () => {
        setOpenProf(false);
      };
      const descriptionElementRef1 = useRef(null);
      useEffect(() => {
        if (openProf) {
          const { current: descriptionElement } = descriptionElementRef1;
          if (descriptionElement !== null) {
            descriptionElement.focus();
          }
        }
      }, [openProf]);

      const [login, setLogin] = useState(localStorage.getItem('login'));
  const [password, setPassword] = useState(localStorage.getItem('password'));
  const [passwordTwo, setPasswordTwo] = useState('');
  const [name, setName] = useState(localStorage.getItem('name'));
  const [surname, setSurname] = useState(localStorage.getItem('surname'));
  const [birthday, setBirthday] = useState(localStorage.getItem('birthday').substring(0,10));

  const handleLoginChangeProfile = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChangeProfile = (e) => {
    setPassword(e.target.value)
  }
  const handleNameChangeProfile = (e) => {
    setName(e.target.value)
  }
  const handleSurnameChangeProfile = (e) => {
    setSurname(e.target.value)
  }
  const handleBirthdayChangeProfile = (e) => {
    setBirthday(e.target.value)
  }
  const handlePasswordTwoChangeProfile = (e) => {
    setPasswordTwo(e.target.value)
  }
  


    const [bli,setBli] = useState("");                  //-----for set results
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [chest, setChest] = useState();
    const [waist, setWaist] = useState();
    const [hips, setHips] = useState();
    const [biceps, setBiceps] = useState();

    const handlerWeightChange = (e) => {
        setWeight(e.target.value)
    }
    const handlerHeightChange = (e) => {
        setHeight(e.target.value)
    }
    const handlerChestChange = (e) => {
        setChest(e.target.value)
    }
    const handlerWaistChange = (e) => {
        setWaist(e.target.value)
    }
    const handlerHipsChange = (e) => {
        setHips(e.target.value)
    }
    const handlerBicepsChange = (e) => {
        setBiceps(e.target.value)
    }


    const [arr, setArr] = useState([]);         //---------вывод последних 10 резултатов
    const [fullArr, setFullArr] = useState([]);

     useEffect(()=>{
      axios.get(`//localhost:8080/getListOfResults`, {  
        params:{
          id: localStorage.getItem('id')
        }
      })
      .then((response) => {
        setArr(Object.values(response.data.details));
      }); 

      axios.get(`//localhost:8080/getFullListOfResults`, {  
        params:{
          id: localStorage.getItem('id')
        }
      })
      .then((response) => {
        setFullArr(Object.values(response.data.details));
      }); 
      
      axios.get(`//localhost:8080/getLastResult`, {  
        params:{
          id: localStorage.getItem('id')
        }
      })
      .then((response) => {
          localStorage.setItem("weight",response.data.weight);
          setWeight(response.data.weight);
          localStorage.setItem("height",response.data.height);
          setHeight(response.data.height);
          localStorage.setItem("chest",response.data.girth_of_chest);
          setChest(response.data.girth_of_chest);
          localStorage.setItem("waist",response.data.girth_of_weist);
          setWaist(response.data.girth_of_weist);
          localStorage.setItem("hips",response.data.girth_of_hips);
          setHips(response.data.girth_of_hips);
          localStorage.setItem("biceps",response.data.girth_of_biceps);
          setBiceps(response.data.girth_of_biceps);  
          setBli((localStorage.getItem('weight'))/(Math.pow((localStorage.getItem('height'))/100), 2))       
      }); 

    }, []);

    


    const today = new Date();
    return(
        <Container maxWidth='xlg'>
            <Paper elevation={3} sx={{mt: 3}}>
            <Grid container justifyContent='space-between' direction='row' alignItems='center'>
                <Grid item>
                    <Typography sx={{mx: 3, mt: 1 }} variant='h4' color="textPrimary" fontWeight="500">
                    {localStorage.getItem('name')+' '+localStorage.getItem('surname')+', ' + Math.floor(((Date.parse(today))-(Date.parse(localStorage.getItem('birthday'))))/31536000000)}
                    </Typography>
                </Grid>
                <Grid item>
                  <Button
                    variant='contained' 
                    color='success'
                    sx={{mx: 1, mt: 1 }}
                    onClick={handleOpenChangeProfile}>
                  Редактировать профиль
                  </Button>

                          <Dialog
                               maxWidth='md'
                               minWidth='xs'
                               open={openProf}
                               onClose={handleCloseChangeProfile}
                               aria-labelledby="scroll-dialog-title"
                               aria-describedby="scroll-dialog-description"
                             >
                               <DialogTitle id="scroll-dialog-title">Редактирование профиля</DialogTitle>
                                 <DialogContentText
                                   tabIndex={-1}
                                 >
                                 <Container maxWidth="md" lg={2}>          


                                          <Grid container spacing={2} justifyContent="center" direction='row'>       
                                          <Grid item>
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
                                                    label="Ваше имя"
                                                    placeholder="Ваше имя"
                                                    onChange={handleNameChangeProfile}
                                                    value={name}
                                                  /> 
                                                </Grid>
                                                <Grid item lg={12} xs={12}>
                                                  <TextField
                                                    required
                                                    id="outlined"
                                                    label="Ваша фамилия"
                                                    placeholder="Ваша фамилия"
                                                    onChange={handleSurnameChangeProfile}
                                                    value={surname}
                                                  /> 
                                                </Grid>

                                                <Grid item lg={12} xs={12}>
                                                  <TextField
                                                    required 
                                                    type='date'
                                                    helperText='Дата рождения'
                                                    min="1950-01-01"
                                                    max="2018-01-01"
                                                    onChange={handleBirthdayChangeProfile}
                                                    value={birthday}
                                                      />
                                                </Grid> 
                                                </Box>
                                                </Grid>
                                                </Grid>
                                                <Grid item>
                                              <Grid justifyContent="center" direction='column'>  
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
                                                    value={login}
                                                    onChange={handleLoginChangeProfile}
                                                  />
                                                </Grid>
                                                <Grid item lg={12} xs={12}>
                                                  <TextField
                                                    required
                                                    id="outlined-password-input"
                                                    label="Пароль"
                                                    type="password"
                                                    value={password}
                                                    onChange={handlePasswordChangeProfile}
                                                  />
                                                </Grid>
                                                <Grid item lg={12} xs={12}>
                                                  <TextField
                                                    required
                                                    id="outlined-password-input"
                                                    label="Повторите пароль"
                                                    type="password"
                                                    onChange={handlePasswordTwoChangeProfile}
                                                  />
                                                </Grid>
                                                </Box>
                                                </Grid>
                                              </Grid>

                                              </Grid>

                                      </Container>

                                 </DialogContentText>
                               <DialogActions>
                               <Button 
                                                    type="submit" 
                                                    variant='contained'
                                                    onClick={() => {
                                                      if(password === passwordTwo){
                                                        axios
                                                        .get(`//localhost:8080/updateProfile`, {  
                                                          params:{
                                                            login: login,
                                                            password: password,
                                                            name: name,
                                                            surname: surname,
                                                            birthday: birthday,
                                                            id: localStorage.getItem("id")
                                                          }
                                                        })
                                                        .then((response) => {
                                                       
                                                        });
                                                        alert('Изменения сохранены')
                                                      }else{
                                                        alert('пароли не совпадают')
                                                      }
                                                    }}
                                                    >
                                                    Сохранить изменения
                                                  </Button>
                                 <Button onClick={handleCloseChangeProfile}>Закрыть</Button>
                               </DialogActions>
                             </Dialog>

                    <Button 
                    variant='contained' 
                    sx={{mr: 3, mt: 1 }}
                    onClick={()=>{
                        localStorage.clear();
                        navigate('/');
                    }}>Выйти</Button>
                </Grid>

            </Grid>

                <hr/>
                <Container sx={{mx: 0}}>
                <Typography variant='h6' color="textPrimary" fontWeight="400" >Мои параметры:</Typography>
                
                <Box sx={{
                    '& .MuiTextField-root': {
                        width: '8rem',
                        mb: 2
                    },
                    mt: 3
                }}>
                <Grid container spacing={2} alignItems='center' direction='row'>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                            label='Вес'
                            defaultValue={localStorage.getItem('weight')}
                            helperText='Ввести новые'
                            onChange={handlerWeightChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='Рост'
                            defaultValue={localStorage.getItem('height')}
                            helperText='Ввести новые'
                            onChange={handlerHeightChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='О.Груди'
                            defaultValue={localStorage.getItem('chest')}
                            helperText='Ввести новые'
                            onChange={handlerChestChange}
                        />
                    </Grid>
                     <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='О.Талии'
                            defaultValue={localStorage.getItem('waist')}
                            helperText='Ввести новые'
                            onChange={handlerWaistChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='О.Бедер'
                            defaultValue={localStorage.getItem('hips')}
                            helperText='Ввести новые'
                            onChange={handlerHipsChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='О.Рук'
                            defaultValue={localStorage.getItem('biceps')}
                            helperText='Ввести новые'
                            onChange={handlerBicepsChange}
                        />
                    </Grid>
                    
                    </Grid>
                </Box>

                <Grid container spacing={4} alignItems='center' direction='row'>
                        <Grid item >
                            <Typography variant='h4' color="green" fontWeight="600">
                                ИМТ:   {bli}
                            </Typography> 
                        </Grid>
                        <Grid item >
                            <Button 
                                variant='contained' 
                                color='success' 
                                onClick={() => {
                                    axios
                                        .get(`//localhost:8080/addResult`, {  
                                        params:{
                                          weight: weight,
                                          height: height,
                                          girth_of_chest: chest,
                                          girth_of_weist: waist,
                                          girth_of_hips: hips,
                                          girth_of_biceps: biceps,
                                          id: localStorage.getItem("id")
                                        }
                                        })
                                        .then((response) => {
                                        
                                        });

                                        axios.get(`//localhost:8080/getListOfResults`, {  
                                          params:{
                                            id: localStorage.getItem('id')
                                          }
                                        })
                                        .then((response) => {
                                          setArr(Object.values(response.data.details));
                                        }); 


                                        axios.get(`//localhost:8080/getLastResult`, {  
                                          params:{
                                            id: localStorage.getItem('id')
                                          }
                                        })
                                        .then((response) => {
                                            localStorage.setItem("weight",response.data.weight);
                                            setWeight(response.data.weight);
                                            localStorage.setItem("height",response.data.height);
                                            setHeight(response.data.height);
                                            localStorage.setItem("chest",response.data.girth_of_chest);
                                            setChest(response.data.girth_of_chest);
                                            localStorage.setItem("waist",response.data.girth_of_weist);
                                            setWaist(response.data.girth_of_weist);
                                            localStorage.setItem("hips",response.data.girth_of_hips);
                                            setHips(response.data.girth_of_hips);
                                            localStorage.setItem("biceps",response.data.girth_of_biceps);
                                            setBiceps(response.data.girth_of_biceps);  
                                            setBli((localStorage.getItem('weight'))/(Math.pow((localStorage.getItem('height'))/100), 2))    
                                        }); 


                                }}>
                                Ввести новые параметры
                            </Button>
                        </Grid>
                       
                    </Grid>
                </Container>
                <hr/>

                <Grid container direction='row' >
                    <Grid item xs={12} lg={8}>
                        <Container maxWidth='md' sx={{mb: 5}}>
                        <Typography variant='h5' align='center' fontWeight='500' color='textPrimary'>Последние 5 изменений</Typography>
                        
                        <Button 
                        variant='outlined' 
                        size='small'
                        onClick={handleClickOpenResults}>
                        Показать все изменения
                        </Button>

                            <Dialog
                               maxWidth='md'
                               minWidth='xs'
                               open={openRes}
                               onClose={handleCloseResults}
                               aria-labelledby="scroll-dialog-title"
                               aria-describedby="scroll-dialog-description"
                             >
                               <DialogTitle id="scroll-dialog-title">Мои изменения за все время</DialogTitle>
                                 <DialogContentText
                                   tabIndex={-1}
                                 >
                                 
                                {<ListForProfile rows={fullArr}/> } 
                                 </DialogContentText>
                               <DialogActions>
                                 <Button onClick={handleCloseResults}>Закрыть</Button>
                               </DialogActions>
                             </Dialog>
                        
                        <hr/>
                        {<ListForProfile rows={arr}/> } 
                        </Container>
                    </Grid>
                </Grid>

                
                

                <Typography variant='h6' color="textPrimary" fontWeight="600" >
                </Typography>
                

                
            </Paper>
        </Container>
    )
    
}

export default Profile;