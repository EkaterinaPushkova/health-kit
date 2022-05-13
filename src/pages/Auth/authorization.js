import Box from '@mui/material/Box';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { Container, Grid } from '@mui/material';

function Auth() {
  return (
    <Container maxWidth="sm">
      <Paper elevation={7} sx={{mt: 3}}>
        <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Sign In</Typography>
        <Grid container justifyContent="center" direction='column'>
          <Box sx={{
            '& .MuiTextField-root': {
             width: '100%',
             mb: 3,
            },
            alignItems: 'center',
            mx: 10,
            my: 2
          }}>
          <Grid item>
          <TextField
              required
              id="outlined-required"
              label="Login"
              placeholder="Hello World"
            />
          </Grid>
          <Grid item>
          <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </Grid>
          <Grid item>
          <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              // helperText="Some important text"
            /> 
          </Grid>
            </Box>
        </Grid>
        <Container maxWidth="sm">
          <Box sx={{
            '& .MuiButton-root':{
              mb: 2
            },
            justify: 'center'
          }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item>
                <Button 
                  type="submit" 
                  variant='contained'
                  onClick={() => {
                    alert('LoL');
                  }}>Login
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="outlined">Sign Up</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>    
          
        </Container>
      </Paper>
    </Container>
  );
}
export default Auth;
