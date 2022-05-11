import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Container } from '@mui/material';
import './authorization.css';

function Auth() {
  return (
    <Container maxWidth='sm'
    sx={{
      justifyContent: 'center',
    }}>
     <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { my: 3, width: '30vw', direction: 'column'},
        }}
        noValidate
        autoComplete="off"
      >
      <h2>Sign In</h2>
        <div>

          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </div>
        </Box>    
    </Container>
     
  );
}
export default Auth;
