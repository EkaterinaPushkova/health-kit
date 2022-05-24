import { Container, Grid, Checkbox, FormControlLabel, Paper, Typography} from '@mui/material'
import { useState } from 'react';

function List({item}) {
    // const [x, remX] = useState('');
    // const isCheck = (e) => {
    //     if (x === 'Checked'){
    //         remX(){

    //         }
    //     }
    // }

    return(
        <Container maxWidth='xs'>
        <Paper elevation={3} sx={{mt: 1}}>
        <Grid container justifyContent="center" direction='column'>
                <Grid item>
                    <FormControlLabel control={<Checkbox  defaultUnchecked/>} label={item.name+' '+item.amount_of_reps+'р/'+item.amount_of_sets+'п'}/>
                </Grid>
            </Grid>
        </Paper>
        </Container>
    )
}

export default List;