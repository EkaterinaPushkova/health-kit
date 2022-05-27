import * as React from 'react';
import { Container, Paper, Grid, Box} from '@mui/material';
import { Typography, TextField, InputAdornment, Button  } from '@mui/material' ;
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle'
import ListForProfile from '../components/main/ListForProfile';
import {useEffect, useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Profile() {

    const navigate = useNavigate();

    const [open, setOpen] = React.useState(false); //for openDialog
    const [scroll, setScroll] = React.useState('paper');

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
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

    const [bli,setBli] = useState("");
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

    useEffect(() => {                           //for check id in localStorage
        if(localStorage.getItem("id") === null){
            navigate('/');
            alert('Sign in or sign up!')
        }
      });

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
                    sx={{mx: 3, mt: 1 }}
                    onClick={()=>{
                        localStorage.clear();
                        navigate('/');
                    }}>LogOut</Button>
                </Grid>

            </Grid>

                <hr/>
                <Container sx={{mx: 0}}>
                <Typography variant='h6' color="textPrimary" fontWeight="400" >Мy params:</Typography>
                
                <Box sx={{
                    '& .MuiTextField-root': {
                        width: '7rem',
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
                            label='Weight'
                            defaultValue={localStorage.getItem('weight')}
                            helperText='input new'
                            onChange={handlerWeightChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='Height'
                            defaultValue={localStorage.getItem('height')}
                            helperText='input new'
                            onChange={handlerHeightChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='Chest'
                            defaultValue={localStorage.getItem('chest')}
                            helperText='input new'
                            onChange={handlerChestChange}
                        />
                    </Grid>
                     <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='Waist'
                            defaultValue={localStorage.getItem('waist')}
                            helperText='input new'
                            onChange={handlerWaistChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='Hips'
                            defaultValue={localStorage.getItem('hips')}
                            helperText='input new'
                            onChange={handlerHipsChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            InputProps={{
                              endAdornment: <InputAdornment position="end">sm</InputAdornment>,
                            }}
                            label='Biceps'
                            defaultValue={localStorage.getItem('biceps')}
                            helperText='input new'
                            onChange={handlerBicepsChange}
                        />
                    </Grid>
                    
                    </Grid>
                </Box>

                <Grid container spacing={4} alignItems='center' direction='row'>
                        <Grid item >
                            <Typography variant='h4' color="green" fontWeight="600">
                                BМI:   {bli}
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
                                Change params
                            </Button>
                        </Grid>
                       
                    </Grid>
                </Container>
                <hr/>

                <Grid container direction='row' >
                    <Grid item xs={12} lg={8}>
                        <Container maxWidth='md' sx={{mb: 5}}>
                        <Typography variant='h5' align='center' fontWeight='500' color='textPrimary'>Last 5 results</Typography>
                        <Button 
                        variant='outlined' 
                        size='small'
                        onClick={handleClickOpen('paper')}>Show all results</Button>
                            <Dialog
                               maxWidth='md'
                               minWidth='xs'
                               open={open}
                               onClose={handleClose}
                               scroll={scroll}
                               aria-labelledby="scroll-dialog-title"
                               aria-describedby="scroll-dialog-description"
                             >
                               <DialogTitle id="scroll-dialog-title">Your results for all time</DialogTitle>
                               <DialogContent dividers={scroll === 'paper'}>
                                 <DialogContentText
                                   tabIndex={-1}
                                 >
                                 
                                {<ListForProfile rows={fullArr}/> } 
                                 </DialogContentText>
                               </DialogContent>
                               <DialogActions>
                                 <Button onClick={handleClose}>Cancel</Button>
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