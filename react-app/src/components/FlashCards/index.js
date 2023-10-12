import './FlashCards.css'
import { javaScriptCards, pythonCards, reactCards, cSharpCards, javaCards, cPlusPlusCards, angularCards, nextJSCards, rustCards, typeScriptCards, svelteCards } from './flashcardlist'
import Card from '@mui/material/Card'
import * as React from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory, NavLink } from 'react-router-dom'
import mainListItems from '../UserDashboard/listItems'
import PersonIcon from '@mui/icons-material/Person';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCardSets } from '../../store/cards';
import CreateIcon from '@mui/icons-material/Create';

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

const FlashCards = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const allSets = useSelector(state => state.cards.allSets)
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
      setOpen(!open);
  };

  useEffect(() => {
    dispatch(getCardSets()).then(() => {
      console.log(allSets)
    })

  }, [dispatch])

  const setsArr = Object.values(allSets)

  return (
      <Box sx={{ display: 'flex'}}>
      <Box sx={{ display: 'flex'}}>
  <CssBaseline />
  <AppBar position="absolute" open={open}>
    <Toolbar
      sx={{
        pr: '24px', // keep right padding when drawer closed
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
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        Dashboard
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
      <div style={{"marginTop": "70px"}} id='flash-card-page-wrapper'>
            <div id='fc-header'>
                <h1>Flash Cards</h1>
            </div>
            <div>
              <NavLink exact to='/sets/new'>
                <Button variant="contained" size="medium">
                  <CreateIcon sx={{"marginRight": "5px"}} />Create Set
                </Button>
              </NavLink>
            </div>
            <section id='fc-options-holder'>
              {setsArr.length && setsArr.map(set => (
                <Card className='fc-set-wrapper' variant="outlined">
                  <CardContent>
                    <Typography sx={{ fontSize: 20, textAlign: 'center' }} color="text.secondary" gutterBottom>
                      {set.title}
                    </Typography>
                    <Typography sx={{ fontSize: 13, textAlign: 'center' }} color="text.secondary" gutterBottom>
                      {set.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <NavLink exact to={`/sets/${set.id}`}>
                      <Button size="small">Practice</Button>
                    </NavLink>
                  </CardActions>
                </Card>
              ))}
            </section>
        </div>
      </Box>
      </Box>
    )
}

export default FlashCards;
