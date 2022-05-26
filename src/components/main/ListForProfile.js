import { Container, Grid, Checkbox, FormControlLabel, Paper, Typography} from '@mui/material'
import { useState } from 'react';

function ListForProfile({item}) {
    
    return(
        <Container maxWidth='xs'>
        <Paper elevation={3} sx={{mt: 1}}>
        <Grid container justifyContent="center" direction='column'>
                <Grid item>
                    <FormControlLabel control={<Checkbox />} label={item.date.substring(0,10) +'   '+item.weight+'kg '+item.height+'sm'}/>
                </Grid>
            </Grid>
        </Paper>
        </Container>
    )
}

export default ListForProfile;