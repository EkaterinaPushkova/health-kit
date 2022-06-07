import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import Button from '@mui/material/Button';

export default function TableTrains({rows}) {

  
    return (
      <TableContainer sx={{ maxHeight: 350 }} component={Paper}>
        <Table 
        stickyHeader 
        aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell align="right">Кол-во повторений</TableCell>
              <TableCell align="right">Кол-во подходов</TableCell>
              <TableCell align="right">Цель</TableCell>
              <TableCell align="right">Кол-во занятий</TableCell>
              <TableCell align="right">День занятия</TableCell>
              <TableCell align="right">Удаление</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                {row.name}
                </TableCell>
                <TableCell align="right">{row.amount_of_reps}</TableCell>
                <TableCell align="right">{row.amount_of_sets}</TableCell>
                <TableCell align="right">{row.purpose_id}</TableCell>
                <TableCell align="right">{row.amount_in_week}</TableCell>
                <TableCell align="right">{row.day}</TableCell>
                <TableCell align="right">
                <Button 
                        variant='contained' 
                        color='error'
                        onClick={() => {
                                axios.get(`//localhost:8080/deleteTraining`, {  
                                    params:{
                                      id: row.id
                                    }
                                    })
                                    .then((response) => {
                                      
                                    });
                                    
                            }
                        }>Удалить</Button>
                </TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}