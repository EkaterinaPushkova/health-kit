import { Button , TextField} from '@mui/material';
import { Container, Grid, Box, Paper } from '@mui/material';
import {useEffect, useState} from 'react';
import axios from 'axios';
import ListTrain from './ListTrain';
import ListDiets from './ListDiet';
import { useNavigate } from 'react-router-dom';



function CheckLists() {
  
    const navigate = useNavigate();

    const [food,setFood] = useState('');
    const [calories,setCalories] = useState(localStorage.getItem('calories'));
    const [foodArr,setFoodArr] = useState(JSON.parse(localStorage.getItem('diet')));
    const [sumCalories,setSumCalories] = useState(0);

    const handleChangeFood = (event) => {
      setFood(event.target.value);
  }
  const handleChangeCalories = (event) => {
    setCalories(event.target.value);
  }
  
    const [arr, setArr] = useState([]);   //for trainings

    useEffect(() => {   
        // for check user for login
      if(localStorage.getItem("id") === null){
          navigate('/');
          alert('Войдите или зарегистрируйтесь!')
      }
      
    });


     useEffect(()=>{                  // for get list of trainings for setArr checklist
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
                    Выбрать другие параметры
                    </Button>
           </Grid>
           <Grid container justifyContent='center'>
          <Grid item>                                     
          <Button 
          variant="contained" 
          color="primary" 
          sx={{mt: 1}} 
          onClick={()=>{
                      if(localStorage.getItem('day')<localStorage.getItem('amount_in_week')){ 
                        var day = (parseInt(localStorage.getItem('day'))+1);
                        localStorage.setItem("day", day.toString());
                      }else{
                        localStorage.setItem('day',1);
                      };
                      setArr([]);
                      setFoodArr([]);
                      setSumCalories(0)
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
                    }}>Следующий день</Button>
          </Grid>
        </Grid>
           <Grid container maxWidth='xs' justifyContent='center' direction='row'>
                <Grid item>
                  <Paper elevation={5} sx={{pb: 3, pt: 1, m: 2}}>
                    {arr.map(el=><ListTrain item={el}/>) }   
                  </Paper>
                </Grid>
                <Grid item>
                <Container maxWidth='xs'>
                      <Paper elevation={3} sx={{mt: 1}}>
                      <Grid container justifyContent="center" direction='row'>
                      <Box sx={{
                        '& .MuiTextField-root': {
                        width: '6rem',
                        mb: 2
                        },
                        mt: 1
                      }}>
                             <TextField
                                size='small'
                                 label='блюдо'
                                 onChange={handleChangeFood}
                             /> 
                             <TextField
                                 size='small'
                                 label='калории'
                                 onChange={handleChangeCalories}
                             /> 
                        </Box>
                             <Button
                             size='small'
                             onClick={()=>{ 
                                  setSumCalories(sumCalories+(+calories))
                                 setFoodArr([...foodArr,{food:food,calories:calories}])
                                 localStorage.setItem('diet',JSON.stringify(foodArr))
                                 localStorage.setItem('calories',sumCalories)
                                 }}>{sumCalories}</Button>
              
                      </Grid>
                      </Paper>
                      </Container>
                  <Paper elevation={5} sx={{pb: 3, pt: 1, m: 1}}>
                    {foodArr.map(newE =><ListDiets newE={newE}/>) }   
                  </Paper>
                </Grid>
            
            </Grid>

        
        
        
           
         </Box>
         
         
        

        </Paper>
        </Container>
        
       
    )
    
}

export default CheckLists;