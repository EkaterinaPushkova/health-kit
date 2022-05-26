import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link, Route, Routes, useNavigate} from 'react-router-dom';


function AppBarHead(){

const navigate = useNavigate();

  const toProfile = (e) => {
    e.preventDefault();
    navigate('/profile')
  };

  const toCheckLists = (e) => {
    e.preventDefault();
    navigate('/main/checklists')
  }

  return(
    <Box sx={{ flexGrow: 2 }}>
        <AppBar position="static">
          <Toolbar>
            
              <Typography 
              variant="h5" 
              component='div'
              sx={{ 
                flexGrow: 1, 
                fontWeight: 600}}
              >
                HealthKit
              </Typography>
            
            

              <Button 
              color="inherit" 
              sx={{fontWeight: 'bold'}}
              onClick={toCheckLists}>
              CheckLists
              </Button>

              
                <Button 
                color="inherit"
                sx={{fontWeight: 'bold'}}
                onClick={toProfile}>Profile</Button>
              
          </Toolbar>
        </AppBar>
      </Box>
  )
}

export default AppBarHead;
