import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';

export default function TableMessages({rows}) {

  
    return (
      <TableContainer sx={{ maxHeight: 360 }} component={Paper}>
        <Table 
        stickyHeader 
        aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Тема</TableCell>
              <TableCell align="right">Сообщение</TableCell>
              <TableCell align="right">Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{row.id}</TableCell>
                <TableCell align="right">{row.subject}</TableCell>
                <TableCell align="right">{row.object}</TableCell>
                <TableCell align="right">{row.date.substring(0,10)}</TableCell>
                
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}