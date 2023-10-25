import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Link from '@mui/material/Link';

const mainListItems = (
  <React.Fragment>
    <Link href="/dashboard" style={{"textDecoration": "none", "color": "black"}}>
        <ListItemButton>
        <ListItemIcon>
            <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        </ListItemButton>
    </Link>
    <Link href="/schedule" style={{"textDecoration": "none", "color": "black"}}>
        <ListItemButton>
        <ListItemIcon>
            <CalendarMonthIcon />
        </ListItemIcon>
        <ListItemText primary="Schedule" />
        </ListItemButton>
    </Link>
    <Link href="/trivia" style={{"textDecoration": "none", "color": "black"}}>
        <ListItemButton>
        <ListItemIcon>
            <PsychologyIcon />
        </ListItemIcon>
        <ListItemText primary="Trivia" />
        </ListItemButton>
    </Link>
    <Link href="/flashcards" style={{"textDecoration": "none", "color": "black"}}>
        <ListItemButton>
        <ListItemIcon>
            <FlashOnIcon />
        </ListItemIcon>
        <ListItemText primary="Flash Cards" />
        </ListItemButton>
    </Link>
    <Link href="/practice" style={{"textDecoration": "none", "color": "black"}}>
        <ListItemButton>
        <ListItemIcon>
            <AppRegistrationIcon />
        </ListItemIcon>
        <ListItemText primary="Practice" />
        </ListItemButton>
    </Link>
    <Link href="/resources" style={{"textDecoration": "none", "color": "black"}}>
        <ListItemButton>
        <ListItemIcon>
            <AddLinkIcon />
        </ListItemIcon>
        <ListItemText primary="Resources" />
        </ListItemButton>
    </Link>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

export default mainListItems;
