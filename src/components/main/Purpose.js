import Box from '@mui/material/Box';
import { Button, Paper, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import axios from 'axios';


function Purpose() {
    const navigate = useNavigate();

    const [purpose, setPurpose] = useState('');
    const [days, setDays] = useState('');

    const handlePurpose = (e) => {
        setPurpose(e.target.value)
    };
    const handleDays = (e) => {
        setDays(e.target.value)
    };

    const onSubmit = (e) =>{
        e.preventDefault();

        localStorage.setItem('purpose_id', purpose);
        localStorage.setItem('amount_in_week', days);
        localStorage.setItem('day',1);
        navigate('/main/checklists');
    }

    return(
        <Container maxWidth="md">
         <Paper elevation={7} sx={{mt: 3}}>
         <Box sx={{
            '& .MuiRadio-root':{
              mb: 0,
              mt: 3,
              color: 'secondary'
            },
            justify: 'center'
          }}>
          <Typography variant="h5" align="center" color="textPrimary" fontWeight="500">Выбор цели</Typography>
            <Container maxWidth='sm'>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="Сброс веса"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="Набор массы тела"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="Поддержание здоровья"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                </RadioGroup>
            </Box>
            
            </Container>
                
                
            <hr/>
            <Typography variant="h5" align="center" color="textPrimary" fontWeight="500">Выбор количества занятий в неделю</Typography>
            <Container maxWidth='md'>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="1 день в неделю"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="2 дня в неделю"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="3 дня в неделю"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="4 дня в неделю"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    
                </RadioGroup>
            </Box>
            
            </Container>
            <hr/>
            <Box sx={{display: 'flex', justifyContent: 'center', m: 2}}>
            <Button
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    >
                        Ок
                </Button>
                </Box>
          </Box>
            
          
         </Paper>
        
        </Container>
       
    )
}

export default Purpose;