import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';
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
          <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Select the purpose for yourself!</Typography>
            <Container maxWidth='sm'>
            <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="fat buring"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="body weight gain"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="maintaining health"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                </RadioGroup>
            </Box>
            
            </Container>
                
                
            <hr/>
            <Typography variant="h5" align="center" color="textPrimary" fontWeight="500">Select amount of day training per week</Typography>
            <Container maxWidth='md'>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <RadioGroup row>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="one day/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="two days/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="three days/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="four days/week"
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
                        Go!
                </Button>
                </Box>
          </Box>
            
          
         </Paper>
        
        </Container>
       
    )
}

export default Purpose;