import { Typography, ButtonGroup, Button } from '@mui/material';
import { Container, Grid, Box, Paper } from '@mui/material';
import {useEffect, useState} from 'react';
import axios from 'axios';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import List from './List'
import { useNavigate } from 'react-router-dom';



function CheckLists() {
  
    const navigate = useNavigate();
  
    const [arr, setArr] = useState([]);

    useEffect(() => {
      if(localStorage.getItem("id") === null){
          navigate('/');
          alert('Sign in or sign up!')
      }
    });


     useEffect(()=>{
      axios.get(`//localhost:8080/getListOfTrainings`, {  
        params:{
          id: localStorage.getItem('purpose_id'),
          amount: localStorage.getItem('amount_in_week'),
          day:localStorage.getItem('day')
        }
      })
      .then((response) => {
        setArr(Object.values(response.data.details));
      });        
    }, []);

    return(
        <Container maxWidth="lg"> 
        <Paper elevation={7} sx={{mt: 3}}>
        <Box sx={{
             mb: 3,
             mt: 3,
            justify: 'center'
         }}>
           <Grid container justifyContent="center" >
                    <Button 
                    variant="contained" 
                    color="success"
                    onClick={()=>{
                        localStorage.removeItem('purpose_id');
                        localStorage.removeItem('amount_in_week');
                        localStorage.removeItem('day');
                        navigate('/main/selectPurpose');
                    }}>
                    Select other params
                    </Button>
           </Grid>
           <Container maxWidth='xs'>
           <Paper elevation={5} sx={{pb: 3, pt: 1, m: 2}}>
            {arr.map(el=><List item={el}/>) }   
            </Paper> 
            </Container>
        
        <Grid container justifyContent='center'>
          <Grid item>
          <Button variant="contained" color="primary" onClick={()=>{
                      if(localStorage.getItem('day')<localStorage.getItem('amount_in_week')){
                        var day = (parseInt(localStorage.getItem('day'))+1);
                        localStorage.setItem("day", day.toString());
                      }else{
                        localStorage.setItem('day',1);
                      }
                      axios.get(`//localhost:8080/getListOfTrainings`, {  
                                params:{
                                  id: localStorage.getItem('purpose_id'),
                                  amount: localStorage.getItem('amount_in_week'),
                                  day:localStorage.getItem('day')
                                }
                              })
                              .then((response) => {
                                setArr(Object.values(response.data.details));
                              });                 
                    }}>day is done!</Button>
          </Grid>
        </Grid>
        
           
         </Box>
         
        </Paper>
        </Container>
       
    )
    
}

export default CheckLists;