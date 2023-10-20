import './DailyTrivia.css';
import * as React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
// import * as React from 'react';
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
import Button from '@mui/material/Button';
import { fetchAllPublic } from '../../store/quiz';

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

const DailyTrivia = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    React.useEffect(() => {
        dispatch(fetchAllPublic())
    }, [dispatch])

    // const triviaLength = allTriviaQs.length
    const sessionUser = useSelector(state => state.session.user)
    const allQuizzes = useSelector(state => state.quizzes.allQuizzes)
    const quizArr = Object.values(allQuizzes)
    let saveButton;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    if(sessionUser) {
        saveButton = (
            <button>Save Score</button>
        )
    } else {
        saveButton = ''
    }

    return (
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
              Trivia
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
            <div id='trivia-quiz-wrapper' style={{"marginTop": "70px"}}>
                <div>
                    <h1>Trivia</h1>
                </div>
                <div>
                    <Button variant='contained' onClick={() => {
                        history.push('/trivia/new')
                    }}>Create Quiz</Button>
                </div>
                <section>
                    <h2>All Public</h2>
                    <div>
                        {quizArr.length && quizArr.map(q => (
                            <div>
                                <h3>{q?.title}</h3>
                                <span>{q?.description}</span>
                                <button onClick={() => {
                                    history.push(`/quizzes/${q.id}`)
                                }}>Take Quiz</button>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

                {/* <div id='trivia-page-header'>
                    <h1>Trivia Practice</h1>
                </div>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerOneStatus}`} htmlFor='question-one'>1. {allTriviaQs[indexOne].q}</label> {hasSubmitted && (
                            <span className={`answer-status-${answerOneStatus}`}> - {answerOneStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-one'
                            value={allTriviaQs[indexOne].a1}
                            onChange={(e) => setAnswerOne(e.target.value)}
                            required
                        />{allTriviaQs[indexOne].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-one'
                            value={allTriviaQs[indexOne].a2}
                            onChange={(e) => setAnswerOne(e.target.value)}
                        />{allTriviaQs[indexOne].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexOne].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-one'
                                    value={allTriviaQs[indexOne].a3}
                                    onChange={(e) => setAnswerOne(e.target.value)}
                                />{allTriviaQs[indexOne].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexOne].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-one'
                                    value={allTriviaQs[indexOne].a4}
                                    onChange={(e) => setAnswerOne(e.target.value)}
                                />{allTriviaQs[indexOne].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerTwoStatus}`} htmlFor='question-two'>2. {allTriviaQs[indexTwo].q}</label> {hasSubmitted && (
                            <span className={`answer-status-${answerTwoStatus}`}> - {answerTwoStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-two'
                            value={allTriviaQs[indexTwo].a1}
                            onChange={(e) => setAnswerTwo(e.target.value)}
                            required
                        />{allTriviaQs[indexTwo].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-two'
                            value={allTriviaQs[indexTwo].a2}
                            onChange={(e) => setAnswerTwo(e.target.value)}
                        />{allTriviaQs[indexTwo].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexTwo].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-two'
                                    value={allTriviaQs[indexTwo].a3}
                                    onChange={(e) => setAnswerTwo(e.target.value)}
                                />{allTriviaQs[indexTwo].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexTwo].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-two'
                                    value={allTriviaQs[indexTwo].a4}
                                    onChange={(e) => setAnswerTwo(e.target.value)}
                                />{allTriviaQs[indexTwo].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerThreeStatus}`} htmlFor='question-three'>3. {allTriviaQs[indexThree].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerThreeStatus}`}> - {answerThreeStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-three'
                            value={allTriviaQs[indexThree].a1}
                            onChange={(e) => setAnswerThree(e.target.value)}
                            required
                        />{allTriviaQs[indexThree].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-three'
                            value={allTriviaQs[indexThree].a2}
                            onChange={(e) => setAnswerThree(e.target.value)}
                        />{allTriviaQs[indexThree].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexThree].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-three'
                                    value={allTriviaQs[indexThree].a3}
                                    onChange={(e) => setAnswerThree(e.target.value)}
                                />{allTriviaQs[indexThree].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexThree].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-three'
                                    value={allTriviaQs[indexThree].a4}
                                    onChange={(e) => setAnswerThree(e.target.value)}
                                />{allTriviaQs[indexThree].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerFourStatus}`} htmlFor='question-four'>4. {allTriviaQs[indexFour].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerFourStatus}`}> - {answerFourStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-four'
                            value={allTriviaQs[indexFour].a1}
                            onChange={(e) => setAnswerFour(e.target.value)}
                            required
                        />{allTriviaQs[indexFour].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-four'
                            value={allTriviaQs[indexFour].a2}
                            onChange={(e) => setAnswerFour(e.target.value)}
                        />{allTriviaQs[indexFour].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexFour].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-four'
                                    value={allTriviaQs[indexFour].a3}
                                    onChange={(e) => setAnswerFour(e.target.value)}
                                />{allTriviaQs[indexFour].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexFour].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-four'
                                    value={allTriviaQs[indexFour].a4}
                                    onChange={(e) => setAnswerFour(e.target.value)}
                                />{allTriviaQs[indexFour].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerFiveStatus}`} htmlFor='question-five'>5. {allTriviaQs[indexFive].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerFiveStatus}`}> - {answerFiveStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-five'
                            value={allTriviaQs[indexFive].a1}
                            onChange={(e) => setAnswerFive(e.target.value)}
                            required
                        />{allTriviaQs[indexFive].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-five'
                            value={allTriviaQs[indexFive].a2}
                            onChange={(e) => setAnswerFive(e.target.value)}
                        />{allTriviaQs[indexFive].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexFive].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-five'
                                    value={allTriviaQs[indexFive].a3}
                                    onChange={(e) => setAnswerFive(e.target.value)}
                                />{allTriviaQs[indexFive].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexFive].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-five'
                                    value={allTriviaQs[indexFive].a4}
                                    onChange={(e) => setAnswerFive(e.target.value)}
                                />{allTriviaQs[indexFive].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerSixStatus}`} htmlFor='question-six'>6. {allTriviaQs[indexSix].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerSixStatus}`}> - {answerSixStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-six'
                            value={allTriviaQs[indexSix].a1}
                            onChange={(e) => setAnswerSix(e.target.value)}
                            required
                        />{allTriviaQs[indexSix].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-six'
                            value={allTriviaQs[indexSix].a2}
                            onChange={(e) => setAnswerSix(e.target.value)}
                        />{allTriviaQs[indexSix].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexSix].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-six'
                                    value={allTriviaQs[indexSix].a3}
                                    onChange={(e) => setAnswerSix(e.target.value)}
                                />{allTriviaQs[indexSix].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexSix].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-six'
                                    value={allTriviaQs[indexSix].a4}
                                    onChange={(e) => setAnswerSix(e.target.value)}
                                />{allTriviaQs[indexSix].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerSevenStatus}`} htmlFor='question-seven'>7. {allTriviaQs[indexSeven].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerSevenStatus}`}> - {answerSevenStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-seven'
                            value={allTriviaQs[indexSeven].a1}
                            onChange={(e) => setAnswerSeven(e.target.value)}
                            required
                        />{allTriviaQs[indexSeven].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-seven'
                            value={allTriviaQs[indexSeven].a2}
                            onChange={(e) => setAnswerSeven(e.target.value)}
                        />{allTriviaQs[indexSeven].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexSeven].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-seven'
                                    value={allTriviaQs[indexSeven].a3}
                                    onChange={(e) => setAnswerSeven(e.target.value)}
                                />{allTriviaQs[indexSeven].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexSeven].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-seven'
                                    value={allTriviaQs[indexSeven].a4}
                                    onChange={(e) => setAnswerSeven(e.target.value)}
                                />{allTriviaQs[indexSeven].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerEightStatus}`} htmlFor='question-eight'>8. {allTriviaQs[indexEight].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerEightStatus}`}> - {answerEightStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-eight'
                            value={allTriviaQs[indexEight].a1}
                            onChange={(e) => setAnswerEight(e.target.value)}
                            required
                        />{allTriviaQs[indexEight].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-eight'
                            value={allTriviaQs[indexEight].a2}
                            onChange={(e) => setAnswerEight(e.target.value)}
                        />{allTriviaQs[indexEight].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexEight].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-eight'
                                    value={allTriviaQs[indexEight].a3}
                                    onChange={(e) => setAnswerEight(e.target.value)}
                                />{allTriviaQs[indexEight].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexEight].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-eight'
                                    value={allTriviaQs[indexEight].a4}
                                    onChange={(e) => setAnswerEight(e.target.value)}
                                />{allTriviaQs[indexEight].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerNineStatus}`} htmlFor='question-nine'>9. {allTriviaQs[indexNine].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerNineStatus}`}> - {answerNineStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-nine'
                            value={allTriviaQs[indexNine].a1}
                            onChange={(e) => setAnswerNine(e.target.value)}
                            required
                        />{allTriviaQs[indexNine].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-nine'
                            value={allTriviaQs[indexNine].a2}
                            onChange={(e) => setAnswerNine(e.target.value)}
                        />{allTriviaQs[indexNine].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexNine].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-nine'
                                    value={allTriviaQs[indexNine].a3}
                                    onChange={(e) => setAnswerNine(e.target.value)}
                                />{allTriviaQs[indexNine].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexNine].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-nine'
                                    value={allTriviaQs[indexNine].a4}
                                    onChange={(e) => setAnswerNine(e.target.value)}
                                />{allTriviaQs[indexNine].a4}
                            </>
                        )}
                    </div>
                </section>
                <section className='question-container'>
                    <div className='question-text'>
                        <label id={`${answerTenStatus}`} htmlFor='question-ten'>10. {allTriviaQs[indexTen].q}</label>{hasSubmitted && (
                            <span className={`answer-status-${answerTenStatus}`}> - {answerTenStatus.toUpperCase()}</span>
                        )}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-ten'
                            value={allTriviaQs[indexTen].a1}
                            onChange={(e) => setAnswerTen(e.target.value)}
                            required
                        />{allTriviaQs[indexTen].a1}
                    </div>
                    <div className='input-container'>
                        <input
                            type='radio'
                            name='question-ten'
                            value={allTriviaQs[indexTen].a2}
                            onChange={(e) => setAnswerTen(e.target.value)}
                        />{allTriviaQs[indexTen].a2}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexTen].a3 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-ten'
                                    value={allTriviaQs[indexTen].a3}
                                    onChange={(e) => setAnswerTen(e.target.value)}
                                />{allTriviaQs[indexTen].a3}
                            </>
                        )}
                    </div>
                    <div className='input-container'>
                        {allTriviaQs[indexTen].a4 && (
                            <>
                                <input
                                    type='radio'
                                    name='question-one'
                                    value={allTriviaQs[indexTen].a4}
                                    onChange={(e) => setAnswerTen(e.target.value)}
                                />{allTriviaQs[indexTen].a4}
                            </>
                        )}
                    </div>
                </section>
                <div id='trivia-submit-container'>
                    {submitError && (<p className="error-text">{submitError}</p>)}
                    <button onClick={handleSubmit} disabled={hasSubmitted}>Submit</button>
                </div>
                {hasSubmitted && (
                    <section>
                        <h3>You got {numCorrect}/10 correct!</h3>
                        {saveButton}
                    </section>
                )} */}
                </Box>
        </Box>
            // </div>
    )
}

export default DailyTrivia;
