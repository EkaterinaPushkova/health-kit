import { Container, Grid, Paper, Typography, TextField } from "@mui/material";


function Register() {
    return(
        <Container maxWidth='sm'>
        <Paper elevation={7} sx={{mt: 3}}>
            <Grid container justifyContent='center' direction='column'>
                <Grid item>
                    <Typography variant="h5" align="center" color="textPrimary" fontWeight="600">Sign Up</Typography>
                </Grid>
                <Grid item>
                    <h1>kdsjfksjdhf</h1>
                </Grid>
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
            </Grid>
        </Paper>
        </Container>
    )
}

export default Register;