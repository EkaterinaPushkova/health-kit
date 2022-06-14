import { Container, Paper, Grid, Box} from '@mui/material';
import { Typography, TextField, Select, Button, MenuItem  } from '@mui/material' ;
import TableTrains from '../components/admin/TableTrains';
import TableMessages from '../components/admin/TableMessages';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function AdminPanel() {



    const [trArr, setTrArr] = useState([]);
    const [mesArr, setMesArr] = useState([]);
    const navigate = useNavigate();

    
    useEffect(() => {
        if(localStorage.getItem("key") == null){
            navigate('/')
        }else{
            axios
                        .get(`//62.113.96.113:8080/getFullListOfTrainings`, {  
                            params:{
                                purpose: purposeSort,
                                week: weekSort,
                                day: daySort
                              }
                        })
                        .then((response) => {
                          setTrArr(Object.values(response.data.details));
                        });
                        axios
                        .get(`//62.113.96.113:8080/getMessages`, {  
                            params:{
                               
                              }
                        })
                        .then((response) => {
                          setMesArr(Object.values(response.data.details));
                        });
        }
                    
      });

      //-----for table
      const [name, setName] = useState(''); 
      const [reps, setReps] = useState('');
      const [sets, setSets] = useState('');

    const handlerNameChange = (e) => {
        setName(e.target.value)
    }
    const handlerRepsChange = (e) => {
        setReps(e.target.value)
    }
    const handlerSetsChange = (e) => {
        setSets(e.target.value)
    }
    //-----for sort
    const [purposeSort, setPurposeSort] = useState(1);
    const [weekSort, setWeekSort] = useState(1);
    const [daySort, setDaySort] = useState(1);

    const handlePurposeChangeSort = (e) => {
        setPurposeSort(e.target.value)
        axios
                        .get(`//62.113.96.113:8080/getFullListOfTrainings`, {  
                            params:{
                                purpose: purposeSort,
                                week: weekSort,
                                day: daySort
                              }
                        })
                        .then((response) => {
                          setTrArr(Object.values(response.data.details));
                        });
    }
    const handleWeekChangeSort = (e) => {
        setWeekSort(e.target.value)
        axios
        .get(`//62.113.96.113:8080/getFullListOfTrainings`, {  
            params:{
                purpose: purposeSort,
                week: weekSort,
                day: daySort
              }
        })
        .then((response) => {
          setTrArr(Object.values(response.data.details));
        });
    }
    const handleDayChangeSort = (e) => {
        setDaySort(e.target.value)
        axios
                        .get(`//62.113.96.113:8080/getFullListOfTrainings`, {  
                            params:{
                                purpose: purposeSort,
                                week: weekSort,
                                day: daySort
                              }
                        })
                        .then((response) => {
                          setTrArr(Object.values(response.data.details));
                        });
    }


    return(
        <Container maxWidth='xlg'>
            <Paper>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid item>
                <Typography align='center' variant='h5' color='textPrimary' fontWeight='500'>Панель администрирования
                </Typography>
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

                <Grid 
                    container 
                    spacing={1} 
                    direction='row' 
                    justifyContent='center' 
                    alignItems='center'>

                <Grid item lg={8} xs={12}>
                <Container
                maxWidth='md'>

                <Grid 
                    container 
                    spacing={2} 
                    direction='row' 
                    justifyContent='center' 
                    alignItems='center'>
                        <Grid item >
                        <Typography>Показать программу по :</Typography>
                        </Grid>
                        <Grid item>
                            <Select
                                size="small"
                                onChange={handlePurposeChangeSort}
                                value={purposeSort}
                                  >
                                <MenuItem value={1}>Сброс веса</MenuItem>
                                <MenuItem value={2}>Набор массы тела</MenuItem>
                                <MenuItem value={3}>Поддержание здоровья</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select
                                size="small"
                                onChange={handleWeekChangeSort}
                                value={weekSort}
                                  >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item>
                            <Select
                                size="small"
                                onChange={handleDayChangeSort} 
                                value={daySort}
                                  >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                            </Select>
                        </Grid>
                    </Grid>
                    </Container>
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
                </Grid>
                <Grid container justifyContent='center'>
                    <Grid item>
                        <Button 
                        variant='contained'
                        onClick={ () => {
                            axios
                      .get(`//62.113.96.113:8080/addTraining`, {  
                      params:{
                        name: name,
                        amount_of_reps: reps,
                        amount_of_sets: sets,
                        purpose_id: purposeSort,
                        amount_in_week: weekSort,
                        day: daySort
                      }
                      })
                      .then((response) => {
                        
                      });
                      
                      axios
                        .get(`//62.113.96.113:8080/getFullListOfTrainings`, {  
                            params:{
                                purpose: purposeSort,
                                week: weekSort,
                                day: daySort
                              }
                        })
                        .then((response) => {
                          setTrArr(Object.values(response.data.details));
                        });
      
                        }
                            
                        }>Добавить</Button>
                    </Grid>
                </Grid>
                </Box>
                </Grid>

                <Grid item lg={4} xs={12}>
                    <Container 
                    maxWidth='xs' 
                    sx={{mb: 6}}>
                        {<TableMessages rows={mesArr}/> }
                    </Container>
                </Grid>

                </Grid>
            </Paper>
        </Container>
        
    )
}

export default AdminPanel;