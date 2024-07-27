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
    '&:first-child': {
      textAlign: 'left', // Align left for the first cell in each row (name)
    },
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
  createData('Online Admission Form open', ':', 'September 05, 2023 (Tuesday)'),
  createData('Deadline for Online Admission Form Submission', ':', 'September 05, 2023 (Tuesday)'),
  createData('Deadline for Online Admission Form Payment', ':', 'September 05, 2023 (Tuesday)'),
  createData('Admission Written & Viva Examination', ':', 'September 05, 2023 (Tuesday)'),
  createData('Final Result', ':', 'September 05, 2023 (Tuesday)'),
  createData('Admission & Registration', ':', 'September 05, 2023 (Tuesday)'),
  createData('Orientation', ':', 'September 05, 2023 (Tuesday)'),
  createData('Class Starts', ':', 'September 05, 2023 (Tuesday)'),
];

export default function Schedule() {
  return (
    <TableContainer component={Paper}>
      <Table className="mx-auto" sx={{ maxWidth: 1000 }} aria-label="customized table">
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
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
