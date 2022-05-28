import { Container, Paper, Grid, Box} from '@mui/material';
import { Typography, TextField, InputAdornment, Button  } from '@mui/material' ;
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

      const [id, setId] = useState('');
      const [name, setName] = useState('');
      const [reps, setReps] = useState('');
      const [sets, setSets] = useState('');
      const [purpose, setPurpose] = useState('');
      const [week, setWeek] = useState('');
      const [day, setDay] = useState('');

      const handlerIdChange = (e) => {
        setId(e.target.value)
    }
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
                <Typography align='center' variant='h5' color='textPrimary' fontWeight='500'>Admin panel</Typography>
                <hr/>
                <Container 
                maxWidth='md' 
                sx={{mb: 3}}>
                {<TableTrains rows={trArr}/> }
                </Container>
                <Box sx={{
                    '& .MuiTextField-root': {
                    width: '9rem',
                    mb: 3
                    },
                    '& .MuiButton-root':{
                    mb: 3
                    }
                }}
                >
                <Grid container spacing={2} direction='row' justifyContent='center'>
                    <Grid item>
                        <TextField
                            label='name'
                            onChange={handlerNameChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='amount of reps'
                            onChange={handlerRepsChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='amount of sets'
                            onChange={handlerSetsChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='purpose'
                            onChange={handlerPurposeChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='amount in week'
                            onChange={handlerWeekChange}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label='day'
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
                            
                        }>Add</Button>
                    </Grid>
                </Grid>
                <Grid container spacing={3} justifyContent='center' alignItems='center'>
                    <Grid item>
                        <TextField
                            label='id'
                            onChange={handlerIdChange}
                        />
                    </Grid>
                    <Grid item>
                        <Button 
                        variant='contained' 
                        color='error'
                        onClick={() => {
                                axios
                                    .get(`//localhost:8080/deleteTraining`, {  
                                    params:{
                                      id: id
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
                        }>Delete</Button>
                    </Grid>
                </Grid>

                </Box>
            </Paper>
        </Container>
    )
}

export default AdminPanel;