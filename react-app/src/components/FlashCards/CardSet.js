import { useParams } from 'react-router-dom';
import IndividualCard from './IndividualCard';
import { javaScriptCards } from './flashcardlist';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getOneSet } from '../../store/cards';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useHistory } from 'react-router-dom'
import mainListItems from '../UserDashboard/listItems'
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../Footer';
import Button from '@mui/joy/Button';


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

const CardSet = () => {
    const { setId } = useParams()
    const dispatch =  useDispatch()
    // const allSets = useSelector(state => state.cards.allSets)
    // const currSet = allSets[setId]
    const currSet = useSelector(state => state.cards.singleSet)
    const [questionArr, setQuestionArr] = useState([])
    // const qArr = Object.values(currQs)
    const [cardNum, setCardNum] = useState(1)
    const history = useHistory()
    const [open, setOpen] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        dispatch(getOneSet(setId)).then(() => {
            setIsLoaded(true)
            const currQs = currSet?.all_questions
            if(currQs) {
                setQuestionArr(Object.values(currQs))
            }
            return
        })
    }, [dispatch])

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
            {isLoaded && (
            <div id='flash-card-page-wrapper'>
                <div id='fc-name-description'>
                    <h1>{currSet?.title}</h1>
                    <p>{currSet?.description}</p>
                </div>
                {!isStarted ? (
                    <div>
                        <Button variant="solid" color="primary" onClick={() => setIsStarted(true)}>Start Study Session</Button>
                    </div>
                ) : (
                    <>
                        <div id='fc-options-holder'>
                            {questionArr && questionArr?.filter(item => item.id === cardNum)?.map(item => (
                                <IndividualCard front={item?.front} back={item?.back} />
                            ))}
                        </div>
                        <div id='fc-arrows-holder'>
                            <ArrowBackIosIcon onClick={() => {
                                if(cardNum === 1) {
                                    setCardNum(questionArr?.length)
                                } else {
                                    setCardNum(cardNum - 1)
                                }
                            }} sx={{color: 'black[100]'}} />
                            <Button onClick={() => setIsStarted(false)} variant="plain">End Session</Button>
                            <ArrowForwardIosIcon onClick={() => {
                                if(cardNum === questionArr?.length) {
                                    setCardNum(1)
                                } else {
                                    setCardNum(cardNum + 1)
                                }
                            }} sx={{color: 'black[100]'}} />
                        </div>
                    </>
                )}
            </div>
            )}
        </Box>
        </Box>
    )
}

export default CardSet;
