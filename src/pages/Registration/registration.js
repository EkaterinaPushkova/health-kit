import { Container, Grid, Paper, Typography, TextField, Box, Button } from "@mui/material";


function Register() {
    return(
    <Container maxWidth="sm">
      <Paper elevation={7} sx={{mt: 3}}>
        <Container maxWidth="sm">
        <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Sign Up</Typography>
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
              id="outlined-helperText"
              label="Your name"
              placeholder="Your name"
              // helperText="Some important text"
            /> 
          </Grid>
          <Grid item>
            <TextField
              id="outlined-helperText"
              label="Your surname"
              placeholder="Your surname"
              // helperText="Some important text"
            /> 
          </Grid>
          <Grid item>
            <TextField
              required
              id="outlined-required"
              label="Login"
              placeholder="login@mail.com"
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
                  }}>Sign Up
                </Button>
              </Grid>
              <Grid item>
                <Button type="submit" variant="outlined">Login</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>    
        </Container>
        </Paper>
    </Container>
    )
}

export default Register;