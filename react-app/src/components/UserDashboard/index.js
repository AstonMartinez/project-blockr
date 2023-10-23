import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
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
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router-dom'
import mainListItems from './listItems';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../Footer';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar'
import { fetchMaterials } from '../../store/materials';
import { getByDate } from '../../store/tasks';
import TaskDisplay from './Tasks';
import { NavLink } from 'react-router-dom';

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

const dayConvert = (day) => {
  if(day === 'Mon') {
    return 'Monday'
  } else if(day === 'Tue') {
    return 'Tuesday'
  } else if(day === 'Wed') {
    return 'Wednesday'
  } else if(day === 'Thu') {
    return 'Thursday'
  } else if(day === 'Fri') {
    return 'Friday'
  } else if(day === 'Sat') {
    return 'Saturday'
  } else if(day === 'Sun') {
    return 'Sunday'
  }
}

const defaultTheme = createTheme();

export default function UserDashboard() {
  const dispatch = useDispatch()
  const allMaterials = useSelector(state => state.materials.allMaterials)
  const allTasks = useSelector(state => state.tasks.allTasks)

  const userCards = allMaterials.cards
  const userQuizzes = allMaterials.quizzes

  const currentDay = new Date().toDateString().split(" ")[0]
  const [dayOfWeek, setDayOfWeek] = React.useState(dayConvert(currentDay))

  let materialsDisplay

  if(!userCards && !userQuizzes) {
    materialsDisplay = (
      <>
        <h3>Looks like you haven't added any materials!</h3>
        <button>Create flash cards</button>
        <button>Create quiz</button>
      </>
    )
  }

  if(userCards && !userQuizzes) {
    materialsDisplay = (
      <>
        <h4>Flash Cards:</h4>
        <div style={{ "display": "flex", "flexDirection": "column", "flexWrap": "wrap", "height": "200px", "alignItems": "center" }}>
          {Object.values(userCards).map((set) => (
            <div style={{ "display": "flex" }}>
              <p className='materials-list-item'><NavLink exact to={`/sets/${set.id}`}>{set.title}</NavLink></p>
            </div>
          ))}
        </div>
      </>
    )
  } else if ((!userCards) && userQuizzes) {
    materialsDisplay = (
      <>
        <h4>Quizzes</h4>
        <div style={{ "display": "flex", "flexDirection": "column", "flexWrap": "wrap", "height": "200px", "alignItems": "center" }}>
          {Object.values(userQuizzes).map((quiz) => (
            <div style={{ "display": "flex" }}>
              <p className='materials-list-item'><NavLink exact to={`/quizzes/${quiz.id}`}>{quiz.title}</NavLink></p>
            </div>
          ))}
        </div>
      </>
    )
  } else if(userCards && userQuizzes) {
    materialsDisplay = (
      <div style={{ "textAlign": "center" }}>
        <h4>Flash Cards</h4>
        <div style={{ "display": "flex", "flexDirection": "column", "flexWrap": "wrap", "height": "200px", "alignItems": "center" }}>
          {Object.values(userCards).map((set) => (
            <div style={{ "display": "flex" }}>
              <p className='materials-list-item'><NavLink exact to={`/sets/${set.id}`}>{set.title}</NavLink></p>
            </div>
          ))}
        </div>
        <div style={{ "border": "0.5px solid lightgray" }}></div>
        <h4>Quizzes</h4>
        <div style={{ "display": "flex", "flexDirection": "column", "flexWrap": "wrap", "height": "200px", "alignItems": "center" }}>
          {Object.values(userQuizzes).map((quiz) => (
            <div style={{ "display": "flex" }}>
              <p className='materials-list-item'><NavLink exact to={`/quizzes/${quiz.id}`}>{quiz.title}</NavLink></p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const sessionUser = useSelector(state => state.session.user)
  const history = useHistory()
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
      setOpen(!open);
  };

    if(!sessionUser) {
      history.push('/login')
    }

    React.useEffect(() => {
      dispatch(fetchMaterials())
      dispatch(getByDate(dayOfWeek))
    }, [dispatch])

  return (
    <ThemeProvider theme={defaultTheme}>
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
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            marginTop: "70px"
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    justifyContent: 'center',
                    height: 240,
                  }}
                >
                  <Avatar style={{"backgroundColor": "purple", "height": "200px", "width": "200px", "margin": "0 auto", "fontSize": "45px"}}>{sessionUser.firstName[0]}{sessionUser.lastName[0]}</Avatar>
                </Paper>
              </Grid>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                    sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                  >
                    <div style={{ "display": "flex", "justifyContent": "space-between" }}>
                      <div style={{ "width": "48%", "height": "28vh", "maxHeight": "200px" }}>
                        <div>
                          <h5>Name: </h5>
                          <p>{sessionUser.firstName} {sessionUser.lastName}</p>
                        </div>
                        <div>
                          <h5>Email: </h5>
                          <p>{sessionUser.email}</p>
                        </div>
                      </div>
                      <div style={{ "height": "98%", "borderLeft": "1px solid lightgray" }}></div>
                      <div style={{ "width": "48%", "height": "28vh", "maxHeight": "200px", "overflow": "auto" }}>
                        <h5>About Me:</h5>
                        <p style={{ "fontSize": "14px" }}>{sessionUser.bio}</p>
                      </div>
                    </div>
                  </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <TaskDisplay />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  {materialsDisplay}
                </Paper>
              </Grid>
            </Grid>
            <Footer sx={{marginTop: "20px"}} />
          </Container>
          {/* <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
=              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
=              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposits />
                </Paper>
              </Grid>
=              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Footer sx={{marginTop: "20px"}} />
          </Container> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
