import { Container, Paper, Grid, Box} from '@mui/material';
import { Typography, TextField, InputAdornment, Button  } from '@mui/material' ;

import { useEffect, useState } from 'react';

import { useNavigate} from 'react-router-dom';

function AdminPanel() {

    
  const navigate = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("key") == null){
            navigate('/')
        }
      });

    return(
        <Container maxWidth='xlg'>
            <Paper>
                <Typography align='center' variant='h5' color='textPrimary' fontWeight='500'>Admin panel</Typography>
                
            </Paper>
        </Container>
    )
}

export default AdminPanel;