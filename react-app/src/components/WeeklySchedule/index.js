import DailyPlanner from "../DailyPlanner";
import './WeeklySchedule.css';
import * as React from 'react'
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router-dom'
import mainListItems from '../UserDashboard/listItems'
import PersonIcon from '@mui/icons-material/Person';
import { useDispatch } from "react-redux";
import { getByDate } from "../../store/tasks";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: 'border-box',
        ...(!open && {
          overflowX: 'hidden',
          transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),
          width: theme.spacing(7),
          [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
          },
        }),
      },
    }),
  );

const WeeklySchedule = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const [currDay, setCurrDay] = React.useState("Monday")
    const toggleDrawer = () => {
        setOpen(!open);
    };

    React.useEffect(() => {
        dispatch(getByDate(currDay))
    }, [dispatch, currDay])
    return (
        <>
        <Box sx={{ display: 'flex' }}>

<Box sx={{ display: 'flex' }}>
<CssBaseline />
<AppBar position="absolute" open={open}>
  <Toolbar
    sx={{
      pr: '24px', // keep right padding when drawer closed
      backgroundColor: "black"
    }}
  >
    <IconButton
      edge="start"
      color="inherit"
      aria-label="open drawer"
      onClick={toggleDrawer}
      sx={{
        marginRight: '36px',
        ...(open && { display: 'none' }),
      }}
    >
      <MenuIcon />
    </IconButton>
    <img src="https://i.ibb.co/dLgCNcW/projectblockr-shieldonly.png" style={{"height": "50px", "marginRight": "10px"}} alt="projectblockr-shieldonly" />
    <Typography
      component="h1"
      variant="h6"
      color="inherit"
      noWrap
      sx={{ flexGrow: 1 }}
    >
      Schedule
    </Typography>
    <IconButton color="inherit">
      <Badge badgeContent={4} color="secondary">
        <NotificationsIcon />
      </Badge>
    </IconButton>
    <IconButton color="inherit">
        <PersonIcon onClick={() => history.push('/user')} />
    </IconButton>
  </Toolbar>
</AppBar>
<Drawer variant="permanent" open={open}>
  <Toolbar
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      px: [1],
    }}
  >
    <IconButton onClick={toggleDrawer}>
      <ChevronLeftIcon />
    </IconButton>
  </Toolbar>
  <Divider />
  <List component="nav">
    {mainListItems}
  </List>
</Drawer>
</Box>

<Box component="main"
  sx={{
    backgroundColor: (theme) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[900],
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  }}>
            <div id='user-dashboard-wrapper'>
            <div id='dashboard-header'>
                <h1>Weekly Overview</h1>
            </div>
            <section className='day-of-week'>
                <span className='weekday' id='monday' onClick={() => {
                    setCurrDay("Monday")
                    dispatch(getByDate("Monday"))
                }}>Monday</span>
                <span className='weekday' id='tuesday' onClick={() => {
                    setCurrDay("Tuesday")
                    dispatch(getByDate("Tuesday"))
                }}>Tuesday</span>
                <span className='weekday' id='wednesday' onClick={() => {
                    setCurrDay("Wednesday")
                    dispatch(getByDate("Wednesday"))
                }}>Wednesday</span>
                <span className='weekday' id='thursday' onClick={() => {
                    setCurrDay("Thursday")
                    dispatch(getByDate("Thursday"))
                }}>Thursday</span>
                <span className='weekday' id='friday' onClick={() => {
                    setCurrDay("Friday")
                    dispatch(getByDate("Friday"))
                }}>Friday</span>
                <span className='weekday' id='saturday' onClick={() => {
                    setCurrDay("Saturday")
                    dispatch(getByDate("Saturday"))
                }}>Saturday</span>
                <span className='weekday' id='sunday' onClick={() => {
                    setCurrDay("Sunday")
                    dispatch(getByDate("Sunday"))
                }}>Sunday</span>
            </section>
            <section className='planners-wrapper'>
                <DailyPlanner id={1} nowDay={currDay} />
            </section>
        </div>
  </Box>
  </Box>
        </>
    )
}

export default WeeklySchedule;
