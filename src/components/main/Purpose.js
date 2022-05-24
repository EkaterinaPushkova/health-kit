import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography, FormControlLabel, Radio } from '@mui/material';
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
            <Grid container spacing={3} justifyContent="center" direction='row' >
                
                <Grid item>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="fat buring"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="body weight gain"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="maintaining health"
                      labelPlacement="bottom"
                      onChange={handlePurpose}
                    />
                </Grid>
            </Grid>
            <hr/>
            <Typography variant="h5" align="center" color="textPrimary" fontWeight="500">Select amount of day training per week</Typography>
            <Grid container spacing={3} justifyContent="center" direction='row' >
            <Grid item>
                    <FormControlLabel
                      value="1"
                      control={<Radio />}
                      label="one day/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                      value="2"
                      control={<Radio />}
                      label="two days/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                      value="3"
                      control={<Radio />}
                      label="three days/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                </Grid>
                <Grid item>
                    <FormControlLabel
                      value="4"
                      control={<Radio />}
                      label="four days/week"
                      labelPlacement="bottom"
                      onChange={handleDays}
                    />
                </Grid>
            </Grid>
            <hr/>
            <Button
                    variant="contained"
                    size="large"
                    onClick={onSubmit}
                    >
                        Go!
                </Button>
          </Box>
            
          
            
         </Paper>
        
        </Container>
       
    )
}

export default Purpose;