import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, score) {
  return { id, date, score };
}

const rows = [
  createData(
    0,
    '02 Oct, 2023',
    '8/10',
    // 'Tupelo, MS',
    // 'VISA ⠀•••• 3719',
    // 312.44,
  ),
  createData(
    1,
    '03 Oct, 2023',
    '6/10',
    // 'London, UK',
    // 'VISA ⠀•••• 2574',
    // 866.99,
  ),
  createData(2, '04 Oct, 2023', '8/10'),
  createData(
    3,
    '05 Oct, 2023',
    '10/10',
    // 'Gary, IN',
    // 'AMEX ⠀•••• 2000',
    // 654.39,
  ),
  createData(
    4,
    '06 Oct, 2023',
    '9/10',
    // 'Long Branch, NJ',
    // 'VISA ⠀•••• 5919',
    // 212.79,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>My Study Materials</Title>

      {/* <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more stats
      </Link> */}
    </React.Fragment>
  );
}
