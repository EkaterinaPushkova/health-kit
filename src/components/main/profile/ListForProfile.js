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
      <TableContainer sx={{ maxHeight: 400 }}component={Paper}>
        <Table 
          stickyHeader
          sx={{ minWidth: 650 }} 
          aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Дата изменения</TableCell>
              <TableCell align="right">Вес&nbsp;(kg)</TableCell>
              <TableCell align="right">Рост&nbsp;(sm)</TableCell>
              <TableCell align="right">Обхват груди&nbsp;(sm)</TableCell>
              <TableCell align="right">Обхват талии&nbsp;(sm)</TableCell>
              <TableCell align="right">Обхват бедер&nbsp;(sm)</TableCell>
              <TableCell align="right">Обхват рук&nbsp;(sm)</TableCell>
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