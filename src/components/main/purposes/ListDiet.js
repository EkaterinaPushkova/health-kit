import { Container, Grid, Checkbox, FormControlLabel, Paper, Button, TextField} from '@mui/material'
import { useState } from 'react';

function ListDiet({newE}) {

   

  


    return(
        <Container maxWidth='xs'>
        <Paper elevation={3} sx={{mt: 1}}>
        <Grid container justifyContent="center" direction='column'>
        <Grid item>
        <FormControlLabel control={<Checkbox  />} label={newE.food+', '+newE.calories+' cl'}/>
        </Grid>
        </Grid>
        </Paper>
        </Container>
    )
}

export default ListDiet;