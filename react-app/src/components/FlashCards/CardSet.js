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
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import Check from '@mui/icons-material/Check';
import { createNewSession } from '../../store/studySessions';

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
    const sessionData = useSelector(state => state.study.singleSession)
    const currSetQs = currSet.all_questions
    let currSetArr = []
    // const qArr = Object.values(currQs)
    const [cardNum, setCardNum] = useState(1)
    const history = useHistory()
    const [open, setOpen] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const [numCorrect, setNumCorrect] = useState(0)
    const [numIncorrect, setNumIncorrect] = useState(0)
    const [outOf, setOutOf] = useState(0)
    const [startTime, setStartTime] = useState(null)
    const [endTime, setEndTime] = useState(null)
    if(isLoaded && currSetQs) {
        currSetArr = Object.values(currSetQs)
    }

    const [questionArr, setQuestionArr] = useState(currSetArr)
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [timeSpent, setTimeSpent] = useState('')

    const toggleDrawer = () => {
        setOpen(!open);
    };

    const handleSubmitStudySession = async() => {
        if(outOf === 0) {
            return
        }

        const hourNum = 60 * 60000
        const minuteNum = 60000
        const secondNum = 1000
        let hours
        let minutes
        let seconds

        // const millis = Date.now() - startTime
        const timeElapsed = new Date() - startTime
        if(timeElapsed > hourNum) {
            hours = Math.floor(timeElapsed / hourNum)
            const timeLeft = timeElapsed - (hourNum * hours)
            minutes = Math.floor(timeLeft / minuteNum)
            const newTimeLeft = timeLeft - (minuteNum * minutes)
            seconds = Math.floor(newTimeLeft / secondNum)
        } else {
            hours = 0
            if(timeElapsed > minuteNum) {
                minutes = Math.floor(timeElapsed / minuteNum)
                const timeLeft = timeElapsed - (minuteNum * minutes)
                seconds = Math.floor(timeLeft / secondNum)
            } else {
                minutes = 0
                seconds = Math.floor(timeElapsed / secondNum)
            }
        }

        const timeSpentStr = `${hours} hours, ${minutes} minutes, ${seconds} seconds`
        setTimeSpent(timeSpentStr)
        const category = currSet?.category
        // const final = Math.floor(timeElapsed / 1000)
        const studySession = {
            num_correct: numCorrect,
            num_incorrect: numIncorrect,
            out_of: outOf,
            time_spent: timeSpentStr,
            session_type: "Flashcards",
            category: category
        }
        await dispatch(createNewSession(studySession))
        setHasSubmitted(true)
        return
    }

    const reset = () => {
        setCardNum(1)
        setNumCorrect(0)
        setNumIncorrect(0)
        setOutOf(0)
        setHasSubmitted(false)
        setIsStarted(true)
        setStartTime(new Date())
        return
    }

    useEffect(() => {
        dispatch(getOneSet(setId)).then(() => {
            setIsLoaded(true)
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
                    <div id='start-button-wrap'>
                        <Button variant="solid" color="primary" onClick={() => {
                            reset()
                        }}>Start Study Session</Button>
                        {hasSubmitted ? (
                            <div id='submitted-sess-text'>
                                <span>Great job!</span>
                                <span>You studied for {sessionData?.time_spent} and got {sessionData?.correct}/{sessionData?.out_of} correct!</span>
                            </div>
                        ) : ''}
                    </div>
                ) : (
                    <>
                        <div id='fc-options-holder'>
                            {currSetArr?.filter(item => item.id === cardNum)?.map(item => (
                                <IndividualCard front={item?.front} back={item?.back} />
                            ))}
                        </div>
                        <div id='fc-arrows-holder'>
                            <CloseIcon onClick={() => {
                                setNumIncorrect(numIncorrect + 1)
                                setOutOf(outOf + 1)
                                if(cardNum === currSetArr?.length) {
                                    setCardNum(1)
                                } else if (cardNum > currSetArr?.length) {
                                    setCardNum(1)
                                } else {
                                    setCardNum(cardNum + 1)
                                }
                            }} color="error" />
                            <Button onClick={() => {
                                setEndTime(Date.now())
                                setIsStarted(false)
                                handleSubmitStudySession()
                            }} variant="plain">End Session</Button>
                            <CheckIcon onClick={() => {
                                setNumCorrect(numCorrect + 1)
                                setOutOf(outOf + 1)
                                if(cardNum !== currSetArr?.length) {
                                    setCardNum(cardNum+1)
                                } else {
                                    setCardNum(1)
                                }
                            }} color="success" />
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
