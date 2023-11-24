import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PsychologyIcon from '@mui/icons-material/Psychology';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AddLinkIcon from '@mui/icons-material/AddLink';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from '@mui/material/Link';
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import NewspaperIcon from '@mui/icons-material/Newspaper';

const MainListItems = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  return (
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
    {/* <Link href="/news" style={{"textDecoration": "none", "color": "black"}}>
      <ListItemButton>
        <ListItemIcon>
          <NewspaperIcon />
      </ListItemIcon>
      <ListItemText primary="News" />
    </ListItemButton>
    </Link> */}
    <ListItemButton onClick={() => {
      dispatch(logout()).then(() => {
        history.push('/login')
      })
    }}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItemButton>
  </React.Fragment>
  )
}

export default MainListItems;
