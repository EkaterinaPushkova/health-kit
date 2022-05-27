import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ListForProfile({rows}) {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Entry date</TableCell>
              <TableCell align="right">Weight&nbsp;(kg)</TableCell>
              <TableCell align="right">Height&nbsp;(sm)</TableCell>
              <TableCell align="right">Girth of chest&nbsp;(sm)</TableCell>
              <TableCell align="right">Girth of waist&nbsp;(sm)</TableCell>
              <TableCell align="right">Girth of hips&nbsp;(sm)</TableCell>
              <TableCell align="right">Girth of biceps&nbsp;(sm)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.date.substring(5,10)}
                </TableCell>
                <TableCell align="right">{row.weight}</TableCell>
                <TableCell align="right">{row.height}</TableCell>
                <TableCell align="right">{row.girth_of_chest}</TableCell>
                <TableCell align="right">{row.girth_of_weist}</TableCell>
                <TableCell align="right">{row.girth_of_hips}</TableCell>
                <TableCell align="right">{row.girth_of_biceps}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}