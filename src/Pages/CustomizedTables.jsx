import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    textAlign: 'center', // Center text in header
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    textAlign: 'center', // Center text in body cells
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, letterGrade, gradePoints) {
  return { name, letterGrade, gradePoints };
}

const rows = [
  createData('90-100', 'A', '4.0'),
  createData('80-89', 'B', '3.0'),
  createData('70-79', 'C', '2.0'),
  createData('60-69', 'D', '1.0'),
  createData('0-59', 'F', '0.0'),
  createData('90-100', 'A', '4.0'),
  createData('80-89', 'B', '3.0'),
  createData('70-79', 'C', '2.0'),
  createData('60-69', 'D', '1.0'),
  createData('0-59', 'F', '0.0'),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table className="mx-auto" sx={{ maxWidth: 1000 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Marks Range</StyledTableCell>
            <StyledTableCell>Letter Grade</StyledTableCell>
            <StyledTableCell>Grade Points</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.letterGrade}</StyledTableCell>
              <StyledTableCell>{row.gradePoints}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
