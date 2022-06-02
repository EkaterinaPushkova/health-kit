import { Container, Paper, Grid, Box} from '@mui/material';
import { Typography, TextField, Select, Button, MenuItem  } from '@mui/material' ;
import TableTrains from '../components/main/TableTrains';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function AdminPanel() {



    const [trArr, setTrArr] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        if(localStorage.getItem("key") == null){
            navigate('/')
        }
        axios
        .get(`//localhost:8080/getFullListOfTrainings`, {  

        })
        .then((response) => {
          setTrArr(Object.values(response.data.details));
        });

      });

      const [name, setName] = useState('');
      const [reps, setReps] = useState('');
      const [sets, setSets] = useState('');
      const [purpose, setPurpose] = useState('');
      const [week, setWeek] = useState('');
      const [day, setDay] = useState('');

    const handlerNameChange = (e) => {
        setName(e.target.value)
    }
    const handlerRepsChange = (e) => {
        setReps(e.target.value)
    }
    const handlerSetsChange = (e) => {
        setSets(e.target.value)
    }
    const handlerPurposeChange = (e) => {
        setPurpose(e.target.value)
    }
    const handlerWeekChange = (e) => {
        setWeek(e.target.value)
    }
    const handlerDayChange = (e) => {
        setDay(e.target.value)
    }

    return(
        <Container maxWidth='xlg'>
            <Paper>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item>
                <Typography align='center' variant='h5' color='textPrimary' fontWeight='500'>Admin panel</Typography>
                </Grid>
                <Grid item>
                    <Button 
                    variant='contained' 
                    sx={{ml:'10%', mt: 1 }}
                    onClick={()=>{
                        localStorage.clear();
                        navigate('/');
                    }}>Выйти</Button>
                </Grid>

            </Grid>
                <hr/>
                <Container 
                maxWidth='md' 
                sx={{mb: 1}}>
                {<TableTrains rows={trArr}/> }
                </Container>
                <Box sx={{
                    '& .MuiTextField-root':{
                    width: '9rem',
                    mb: 1
                    },
                    '& .MuiButton-root':{
                        mb: 0
                    },
                    '& .MuiSelect-root':{
                    width: '9rem'  
                    }
                }}
                >
                <Grid container spacing={2} direction='row' justifyContent='center'>
                    <Grid item>
                        <TextField
                            size="small"
                            label='Название'
                            onChange={handlerNameChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            size="small"
                            label='К-во повторений'
                            onChange={handlerRepsChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            size="small"
                            label='К-во подходов'
                            onChange={handlerSetsChange}
                        />
                    </Grid>
                    <Grid item>
                        <Select
                            label="Цель"
                            size="small"
                            onChange={handlerPurposeChange}
                            defaultValue={1}
                            value={purpose}
                              >
                            <MenuItem value={1}>Сброс веса</MenuItem>
                            <MenuItem value={2}>Набор массы тела</MenuItem>
                            <MenuItem value={3}>Поддержание здоровья</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item>
                        <TextField
                        size="small"
                            label='Кол-во занятий в неделю'
                            onChange={handlerWeekChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                        size="small"
                            label='День занятия'
                            onChange={handlerDayChange}
                        />
                    </Grid>
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Button 
                        variant='contained'
                        onClick={ () => {
                            axios
                      .get(`//localhost:8080/addTraining`, {  
                      params:{
                        name: name,
                        amount_of_reps: reps,
                        amount_of_sets: sets,
                        purpose_id: purpose,
                        amount_in_week: week,
                        day: day
                      }
                      })
                      .then((response) => {
                        
                      });
                      axios
                        .get(`//localhost:8080/getFullListOfTrainings`, {  

                        })
                        .then((response) => {
                          setTrArr(Object.values(response.data.details));
                        });

                        }
                            
                        }>Добавить</Button>
                    </Grid>
                </Grid>
               

                </Box>
            </Paper>
        </Container>
    )
}

export default AdminPanel;