import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';



function App(){
  return(
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 600}}>
              HealthKit
            </Typography>
              <Button 
              color="inherit" 
              sx={{fontWeight: 'light'}}>Profile</Button>
              <Button 
              color="inherit"
              sx={{fontWeight: 'light'}}>Archieve</Button>
              <Button
              color="inherit"
              sx={{fontWeight: 'light'}}>Settings</Button>
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default App;
