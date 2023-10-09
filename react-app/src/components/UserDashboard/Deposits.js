import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>My Stats</Title>
      <Typography component="p" variant="h4">
        Trivia - 5/10
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 6 October, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Stats
        </Link>
      </div>
    </React.Fragment>
  );
}
