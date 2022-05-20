import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Container, Grid } from '@mui/material';
import { Link, useNavigate} from 'react-router-dom';

function Purpose() {
    const navigate = useNavigate();

    return(
        <Container maxWidth="md">
         <Paper elevation={7} sx={{mt: 3}}>
         <Box sx={{
            '& .MuiButton-root':{
              mb: 3,
              mt: 3,
              color: 'secondary'
            },
            justify: 'center'
          }}>
          <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Select the purpose for yourself!</Typography>
            <Grid container spacing={3} justifyContent="center" direction='row' mb={2} >
                <Grid item>
                    <Button 
                    variant='contained' 
                    color='error'
                    onClick={
                    navigate('/checklists')}>fat buring</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='secondary'>body weight gain</Button>
                </Grid>
                <Grid item>
                    <Button variant='contained' color='success'>maitaining health</Button>
                </Grid>
                
            </Grid>
          </Box>
            
         </Paper>
        
        </Container>
       
    )
}

export default Purpose;