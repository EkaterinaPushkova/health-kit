import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';

export default function TableTrains({rows}) {
    return (
      <TableContainer sx={{ maxHeight: 400 }} component={Paper}>
        <Table 
        stickyHeader 
        aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Amount of rep-s</TableCell>
              <TableCell align="right">Amount of sets</TableCell>
              <TableCell align="right">Purpose</TableCell>
              <TableCell align="right">Amount in week</TableCell>
              <TableCell align="right">Day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.amount_of_reps}</TableCell>
                <TableCell align="right">{row.amount_of_sets}</TableCell>
                <TableCell align="right">{row.purpose_id}</TableCell>
                <TableCell align="right">{row.amount_in_week}</TableCell>
                <TableCell align="right">{row.day}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}