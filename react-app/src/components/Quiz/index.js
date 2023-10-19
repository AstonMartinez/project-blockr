import './Quiz.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { getByQuizId } from '../../store/triviaQuestions'
import { fetchSingleQuiz } from '../../store/quiz'
import * as React from 'react'
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
import mainListItems from '../UserDashboard/listItems'
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import LoadingScreen from '../LoadingScreen'

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

const Quiz = () => {
    const { quizId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()
    const [toggleRender, setToggleRender] = useState(false)

    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const [answer1, setAnswer1] = useState('')
    const [answer2, setAnswer2] = useState('')
    const [answer3, setAnswer3] = useState('')
    const [answer4, setAnswer4] = useState('')
    const [answer5, setAnswer5] = useState('')
    const [answer6, setAnswer6] = useState('')
    const [answer7, setAnswer7] = useState('')
    const [answer8, setAnswer8] = useState('')
    const [answer9, setAnswer9] = useState('')
    const [answer10, setAnswer10] = useState('')
    const [answer11, setAnswer11] = useState('')
    const [answer12, setAnswer12] = useState('')
    const [answer13, setAnswer13] = useState('')
    const [answer14, setAnswer14] = useState('')
    const [answer15, setAnswer15] = useState('')
    const [answer16, setAnswer16] = useState('')
    const [answer17, setAnswer17] = useState('')
    const [answer18, setAnswer18] = useState('')
    const [answer19, setAnswer19] = useState('')
    const [answer20, setAnswer20] = useState('')

    const [status1, setStatus1] = useState('')
    const [status2, setStatus2] = useState('')
    const [status3, setStatus3] = useState('')
    const [status4, setStatus4] = useState('')
    const [status5, setStatus5] = useState('')
    const [status6, setStatus6] = useState('')
    const [status7, setStatus7] = useState('')
    const [status8, setStatus8] = useState('')
    const [status9, setStatus9] = useState('')
    const [status10, setStatus10] = useState('')
    const [status11, setStatus11] = useState('')
    const [status12, setStatus12] = useState('')
    const [status13, setStatus13] = useState('')
    const [status14, setStatus14] = useState('')
    const [status15, setStatus15] = useState('')
    const [status16, setStatus16] = useState('')
    const [status17, setStatus17] = useState('')
    const [status18, setStatus18] = useState('')
    const [status19, setStatus19] = useState('')
    const [status20, setStatus20] = useState('')

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [result, setResult] = useState('')
    const [resStarter, setResStarter] = useState()

    const [isLoaded, setIsLoaded] = useState(false)

    const [newArr, setNewArr] = useState(null)

    useEffect(() => {
        dispatch(fetchSingleQuiz(quizId))
        .then(() => {
            dispatch(getByQuizId(quizId))
        }).then(() => {
            setToggleRender(!toggleRender)
        }).then(() => {
            setTimeout(() => {
                setIsLoaded(true)
            }, [3000])
        }).then(() => {
            setNewArr(Object.values(questions))
            setToggleRender(!toggleRender)
        }).then(() => {
            setTimeout(() => {
                rerender()
            }, [3000])
        })
        // return rerender()
    }, [dispatch])



    const reset = () => {
        setHasSubmitted(false)
        setAnswer1('')
        setAnswer2('')
        setAnswer3('')
        setAnswer4('')
        setAnswer5('')
        setAnswer6('')
        setAnswer7('')
        setAnswer8('')
        setAnswer9('')
        setAnswer10('')
        setAnswer11('')
        setAnswer12('')
        setAnswer13('')
        setAnswer14('')
        setAnswer15('')
        setAnswer16('')
        setAnswer17('')
        setAnswer18('')
        setAnswer19('')
        setAnswer20('')

        setStatus1('')
        setStatus2('')
        setStatus3('')
        setStatus4('')
        setStatus5('')
        setStatus6('')
        setStatus7('')
        setStatus8('')
        setStatus9('')
        setStatus10('')
        setStatus11('')
        setStatus12('')
        setStatus13('')
        setStatus14('')
        setStatus15('')
        setStatus16('')
        setStatus17('')
        setStatus18('')
        setStatus19('')
        setStatus20('')

    }

    const handleSubmit = () => {
        let correctCount = 0

        if(answer1.trim().toLowerCase() === qArr[0].solution.trim().toLowerCase()){
            setStatus1("Correct")
            correctCount++
        } else {
            setStatus1("Incorrect")
        }

        if(answer2.trim().toLowerCase() === qArr[1].solution.trim().toLowerCase()){
            setStatus2("Correct")
            correctCount++
        } else {
            setStatus2("Incorrect")
        }

        if(answer3.trim().toLowerCase() === qArr[2].solution.trim().toLowerCase()){
            setStatus3("Correct")
            correctCount++
        } else {
            setStatus3("Incorrect")
        }

        if(answer4.trim().toLowerCase() === qArr[3].solution.trim().toLowerCase()){
            setStatus4("Correct")
            correctCount++
        } else {
            setStatus4("Incorrect")
        }

        if(answer5.trim().toLowerCase() === qArr[4].solution.trim().toLowerCase()){
            setStatus5("Correct")
            correctCount++
        } else {
            setStatus5("Incorrect")
        }

        if(qArr[5] && answer6.trim().toLowerCase() === qArr[5].solution.trim().toLowerCase()){
            setStatus6("Correct")
            correctCount++
        } else {
            setStatus6("Incorrect")
        }

        if(qArr[6] && answer7.trim().toLowerCase() === qArr[6].solution.trim().toLowerCase()){
            setStatus7("Correct")
            correctCount++
        } else {
            setStatus7("Incorrect")
        }

        if(qArr[7] && answer8.trim().toLowerCase() === qArr[7].solution.trim().toLowerCase()){
            setStatus8("Correct")
            correctCount++
        } else {
            setStatus8("Incorrect")
        }

        if(qArr[8] && answer9.trim().toLowerCase() === qArr[8].solution.trim().toLowerCase()){
            setStatus9("Correct")
            correctCount++
        } else {
            setStatus9("Incorrect")
        }

        if(qArr[9] && answer10.trim().toLowerCase() === qArr[9].solution.trim().toLowerCase()){
            setStatus10("Correct")
            correctCount++
        } else {
            setStatus10("Incorrect")
        }

        if(qArr[10] && answer11.trim().toLowerCase() === qArr[10].solution.trim().toLowerCase()){
            setStatus11("Correct")
            correctCount++
        } else {
            setStatus11("Incorrect")
        }

        if(qArr[11] && answer12.trim().toLowerCase() === qArr[11].solution.trim().toLowerCase()){
            setStatus12("Correct")
            correctCount++
        } else {
            setStatus12("Incorrect")
        }

        if(qArr[12] && answer13.trim().toLowerCase() === qArr[12].solution.trim().toLowerCase()){
            setStatus13("Correct")
            correctCount++
        } else {
            setStatus13("Incorrect")
        }

        if(qArr[13] && answer14.trim().toLowerCase() === qArr[13].solution.trim().toLowerCase()){
            setStatus14("Correct")
            correctCount++
        } else {
            setStatus14("Incorrect")
        }

        if(qArr[14] && answer15.trim().toLowerCase() === qArr[14].solution.trim().toLowerCase()){
            setStatus15("Correct")
            correctCount++
        } else {
            setStatus15("Incorrect")
        }

        if(qArr[15] && answer16.trim().toLowerCase() === qArr[15].solution.trim().toLowerCase()){
            setStatus16("Correct")
            correctCount++
        } else {
            setStatus16("Incorrect")
        }

        if(qArr[16] && answer17.trim().toLowerCase() === qArr[16].solution.trim().toLowerCase()){
            setStatus17("Correct")
            correctCount++
        } else {
            setStatus17("Incorrect")
        }

        if(qArr[17] && answer18.trim().toLowerCase() === qArr[17].solution.trim().toLowerCase()){
            setStatus18("Correct")
            correctCount++
        } else {
            setStatus18("Incorrect")
        }

        if(qArr[18] && answer19.trim().toLowerCase() === qArr[18].solution.trim().toLowerCase()){
            setStatus19("Correct")
            correctCount++
        } else {
            setStatus19("Incorrect")
        }

        if(qArr[19] && answer20.trim().toLowerCase() === qArr[19].solution.trim().toLowerCase()){
            setStatus20("Correct")
            correctCount++
        } else {
            setStatus20("Incorrect")
        }

        setResult(`${correctCount} / ${qArr.length}`)
        if(correctCount === qArr.length) {
            setResStarter("Amazing!")
        } else if (correctCount > Math.floor(qArr.length / 2)) {
            setResStarter("Great job!")
        } else if (correctCount < Math.floor(qArr.length / 2 && correctCount > 0)) {
            setResStarter("Solid effort!")
        } else {
            setResStarter("Ouch! Try again.")
        }
        setHasSubmitted(true)
        return
    }

    const quiz = useSelector(state => state.quizzes.singleQuiz)
    const questions = useSelector(state => state.questions.allQuestions)
    const qArr = Object.values(questions)

    const incorrectText = (
        <span style={{"color": "red"}}>Incorrect</span>
    )

    const correctText = (
        <span style={{"color": "green"}}>Correct</span>
    )

    const rerender = () => {
        setToggleRender(!toggleRender)
        return
    }

    return(
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
            marginTop: "70px"
          }}>
        <div id='quiz-wrapper'>
            {!isLoaded && (
                <LoadingScreen />
            )}
            {/* {rerender()} */}
            {isLoaded && qArr !== undefined && (
                <section>

                <section id='quiz-header'>
                    <h1>{quiz?.title}</h1>
                </section>
                <section>
                <div className='question-holder'>
                    <label htmlFor={`q-1`}>1. {qArr[0]?.question}</label>
                    {hasSubmitted && (
                        <div>
                            {status1 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                            )}
                        </div>
                    )}
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-1`}
                                type="radio"
                                value={qArr[0]?.answer_one}
                                onChange={(e) => setAnswer1(e.target.value)}
                            />{qArr[0]?.answer_one}
                        </section>
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-1`}
                                type="radio"
                                value={qArr[0]?.answer_two}
                                onChange={(e) => setAnswer1(e.target.value)}
                            />{qArr[0]?.answer_two}
                        </section>
                        {qArr[0]?.answer_three !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-1`}
                                type="radio"
                                value={qArr[0]?.answer_three}
                                onChange={(e) => setAnswer1(e.target.value)}
                                />{qArr[0]?.answer_three}
                            </section>
                        )}

                        {qArr[0]?.answer_four !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-1`}
                                type="radio"
                                value={qArr[0]?.answer_four}
                                onChange={(e) => setAnswer1(e.target.value)}
                                />{qArr[0]?.answer_four}
                            </section>
                        )}
                        {hasSubmitted && status1 === "Incorrect" ? (
                            <div>
                                <span className='incorrect-text'>Solution: {qArr[0].solution}</span>
                            </div>
                        ) : ''}
                    </div>

                    <div className='question-holder'>
                    <label htmlFor={`q-2`}>2. {qArr[1]?.question}</label>
                    {hasSubmitted && (
                        <div>
                            {status2 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-2`}
                                type="radio"
                                value={qArr[1]?.answer_one}
                                onChange={(e) => setAnswer2(e.target.value)}
                            />{qArr[1]?.answer_one}
                        </section>
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-2`}
                                type="radio"
                                value={qArr[1]?.answer_two}
                                onChange={(e) => setAnswer2(e.target.value)}
                            />{qArr[1]?.answer_two}
                        </section>
                        {qArr[1]?.answer_three !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-2`}
                                type="radio"
                                value={qArr[1]?.answer_three}
                                onChange={(e) => setAnswer2(e.target.value)}
                                />{qArr[1]?.answer_three}
                            </section>
                        )}

                        {qArr[1]?.answer_four !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-2`}
                                type="radio"
                                value={qArr[1]?.answer_four}
                                onChange={(e) => setAnswer2(e.target.value)}
                                />{qArr[1]?.answer_four}
                            </section>
                        )}
                        {hasSubmitted && status2 === "Incorrect" ? (
                            <div className='solution-holder'>
                                <span className='incorrect-text'>Solution: {qArr[1].solution}</span>
                            </div>
                        ) : ''}
                    </div>

                    <div className='question-holder'>
                    <label htmlFor={`q-3`}>3. {qArr[2]?.question}</label>
                    {hasSubmitted && (
                        <div>
                            {status3 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-3`}
                                type="radio"
                                value={qArr[2]?.answer_one}
                                onChange={(e) => setAnswer3(e.target.value)}
                            />{qArr[2]?.answer_one}
                        </section>
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-3`}
                                type="radio"
                                value={qArr[2]?.answer_two}
                                onChange={(e) => setAnswer3(e.target.value)}
                            />{qArr[2]?.answer_two}
                        </section>
                        {qArr[2]?.answer_three !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-3`}
                                type="radio"
                                value={qArr[2]?.answer_three}
                                onChange={(e) => setAnswer3(e.target.value)}
                                />{qArr[2]?.answer_three}
                            </section>
                        )}

                        {qArr[2]?.answer_four !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-3`}
                                type="radio"
                                value={qArr[2]?.answer_four}
                                onChange={(e) => setAnswer3(e.target.value)}
                                />{qArr[2]?.answer_four}
                            </section>
                        )}
                        {hasSubmitted && status3 === "Incorrect" ? (
                            <div className='solution-holder'>
                                <span className='incorrect-text'>Solution: {qArr[2].solution}</span>
                            </div>
                        ) : ''}
                    </div>

                    <div className='question-holder'>
                    <label htmlFor={`q-4`}>4. {qArr[3]?.question}</label>
                    {hasSubmitted && (
                        <div>
                            {status4 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-4`}
                                type="radio"
                                value={qArr[3]?.answer_one}
                                onChange={(e) => setAnswer4(e.target.value)}
                            />{qArr[3]?.answer_one}
                        </section>
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-4`}
                                type="radio"
                                value={qArr[3]?.answer_two}
                                onChange={(e) => setAnswer4(e.target.value)}
                            />{qArr[3]?.answer_two}
                        </section>
                        {qArr[3]?.answer_three !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-4`}
                                type="radio"
                                value={qArr[3]?.answer_three}
                                onChange={(e) => setAnswer4(e.target.value)}
                                />{qArr[3]?.answer_three}
                            </section>
                        )}

                        {qArr[3]?.answer_four !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-4`}
                                type="radio"
                                value={qArr[3]?.answer_four}
                                onChange={(e) => setAnswer4(e.target.value)}
                                />{qArr[3]?.answer_four}
                            </section>
                        )}
                        {hasSubmitted && status4 === "Incorrect" ? (
                            <div className='solution-holder'>
                                <span className='incorrect-text'>Solution: {qArr[4].solution}</span>
                            </div>
                        ) : ''}
                    </div>

                    <div className='question-holder'>
                    <label htmlFor={`q-5`}>5. {qArr[4]?.question}</label>
                    {hasSubmitted && (
                        <div>
                            {status5 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-5`}
                                type="radio"
                                value={qArr[4]?.answer_one}
                                onChange={(e) => setAnswer5(e.target.value)}
                            />{qArr[4]?.answer_one}
                        </section>
                        <section className='answer-option-wrapper'>
                            <input
                                name={`q-5`}
                                type="radio"
                                value={qArr[4]?.answer_two}
                                onChange={(e) => setAnswer5(e.target.value)}
                            />{qArr[4]?.answer_two}
                        </section>
                        {qArr[4]?.answer_three !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-5`}
                                type="radio"
                                value={qArr[4]?.answer_three}
                                onChange={(e) => setAnswer5(e.target.value)}
                                />{qArr[4]?.answer_three}
                            </section>
                        )}

                        {qArr[4]?.answer_four !== null && (
                            <section className='answer-option-wrapper'>
                                <input
                                name={`q-5`}
                                type="radio"
                                value={qArr[4]?.answer_four}
                                onChange={(e) => setAnswer5(e.target.value)}
                                />{qArr[4]?.answer_four}
                            </section>
                        )}
                        {hasSubmitted && status5 === "Incorrect" ? (
                            <div className='solution-holder'>
                                <span className='incorrect-text'>Solution: {qArr[4].solution}</span>
                            </div>
                        ) : ''}
                    </div>

                {qArr[5] ? (
                    <div className='question-holder'>
                    <label htmlFor={`q-6`}>6. {qArr[5]?.question}</label>
                    {hasSubmitted && (
                        <div>
                            {status6 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                    )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-6`}
                            type="radio"
                            value={qArr[5]?.answer_one}
                            onChange={(e) => setAnswer6(e.target.value)}
                        />{qArr[5]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-6`}
                            type="radio"
                            value={qArr[5]?.answer_two}
                            onChange={(e) => setAnswer6(e.target.value)}
                        />{qArr[5]?.answer_two}
                    </section>
                    {qArr[5]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-6`}
                            type="radio"
                            value={qArr[5]?.answer_three}
                            onChange={(e) => setAnswer6(e.target.value)}
                            />{qArr[5]?.answer_three}
                        </section>
                    )}

                    {qArr[5]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-6`}
                            type="radio"
                            value={qArr[5]?.answer_four}
                            onChange={(e) => setAnswer6(e.target.value)}
                            />{qArr[5]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status6 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[5].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[6] ? (
                <div className='question-holder'>
                <label htmlFor={`q-7`}>7. {qArr[6]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status7 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-7`}
                            type="radio"
                            value={qArr[6]?.answer_one}
                            onChange={(e) => setAnswer7(e.target.value)}
                        />{qArr[6]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-7`}
                            type="radio"
                            value={qArr[6]?.answer_two}
                            onChange={(e) => setAnswer7(e.target.value)}
                        />{qArr[6]?.answer_two}
                    </section>
                    {qArr[6]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-7`}
                            type="radio"
                            value={qArr[6]?.answer_three}
                            onChange={(e) => setAnswer7(e.target.value)}
                            />{qArr[6]?.answer_three}
                        </section>
                    )}

                    {qArr[6]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-7`}
                            type="radio"
                            value={qArr[6]?.answer_four}
                            onChange={(e) => setAnswer7(e.target.value)}
                            />{qArr[6]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status7 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[6].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[7] ? (
                <div className='question-holder'>
                <label htmlFor={`q-8`}>8. {qArr[7]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status8 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                            )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-8`}
                            type="radio"
                            value={qArr[7]?.answer_one}
                            onChange={(e) => setAnswer8(e.target.value)}
                        />{qArr[7]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-8`}
                            type="radio"
                            value={qArr[7]?.answer_two}
                            onChange={(e) => setAnswer8(e.target.value)}
                        />{qArr[7]?.answer_two}
                    </section>
                    {qArr[7]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-8`}
                            type="radio"
                            value={qArr[7]?.answer_three}
                            onChange={(e) => setAnswer8(e.target.value)}
                            />{qArr[7]?.answer_three}
                        </section>
                    )}

                    {qArr[7]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-8`}
                            type="radio"
                            value={qArr[7]?.answer_four}
                            onChange={(e) => setAnswer8(e.target.value)}
                            />{qArr[7]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status8 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[7].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[8] ? (
                <div className='question-holder'>
                <label htmlFor={`q-9`}>9. {qArr[8]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status9 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-9`}
                            type="radio"
                            value={qArr[8]?.answer_one}
                            onChange={(e) => setAnswer9(e.target.value)}
                        />{qArr[8]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-9`}
                            type="radio"
                            value={qArr[8]?.answer_two}
                            onChange={(e) => setAnswer9(e.target.value)}
                        />{qArr[8]?.answer_two}
                    </section>
                    {qArr[8]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-9`}
                            type="radio"
                            value={qArr[8]?.answer_three}
                            onChange={(e) => setAnswer9(e.target.value)}
                            />{qArr[8]?.answer_three}
                        </section>
                    )}

                    {qArr[8]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-9`}
                            type="radio"
                            value={qArr[8]?.answer_four}
                            onChange={(e) => setAnswer9(e.target.value)}
                            />{qArr[8]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status9 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[8].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[9] ? (
                <div className='question-holder'>
                <label htmlFor={`q-10`}>10. {qArr[9]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status10 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-10`}
                            type="radio"
                            value={qArr[9]?.answer_one}
                            onChange={(e) => setAnswer10(e.target.value)}
                        />{qArr[9]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-10`}
                            type="radio"
                            value={qArr[9]?.answer_two}
                            onChange={(e) => setAnswer10(e.target.value)}
                        />{qArr[9]?.answer_two}
                    </section>
                    {qArr[9]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-10`}
                            type="radio"
                            value={qArr[9]?.answer_three}
                            onChange={(e) => setAnswer10(e.target.value)}
                            />{qArr[9]?.answer_three}
                        </section>
                    )}

                    {qArr[9]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-10`}
                            type="radio"
                            value={qArr[9]?.answer_four}
                            onChange={(e) => setAnswer10(e.target.value)}
                            />{qArr[9]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status10 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[9].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}


    {qArr[10] ? (
                <div className='question-holder'>
                <label htmlFor={`q-11`}>11. {qArr[10]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status11 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-11`}
                            type="radio"
                            value={qArr[10]?.answer_one}
                            onChange={(e) => setAnswer11(e.target.value)}
                        />{qArr[10]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-11`}
                            type="radio"
                            value={qArr[10]?.answer_two}
                            onChange={(e) => setAnswer11(e.target.value)}
                        />{qArr[10]?.answer_two}
                    </section>
                    {qArr[10].answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-11`}
                            type="radio"
                            value={qArr[10]?.answer_three}
                            onChange={(e) => setAnswer11(e.target.value)}
                            />{qArr[10]?.answer_three}
                        </section>
                    )}

                    {qArr[10]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-11`}
                            type="radio"
                            value={qArr[10]?.answer_four}
                            onChange={(e) => setAnswer11(e.target.value)}
                            />{qArr[10]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status11 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[10].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[11] ? (
                <div className='question-holder'>
                <label htmlFor={`q-12`}>12. {qArr[11]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status12 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-12`}
                            type="radio"
                            value={qArr[11]?.answer_one}
                            onChange={(e) => setAnswer12(e.target.value)}
                        />{qArr[11]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-12`}
                            type="radio"
                            value={qArr[11]?.answer_two}
                            onChange={(e) => setAnswer12(e.target.value)}
                        />{qArr[11]?.answer_two}
                    </section>
                    {qArr[11]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-12`}
                            type="radio"
                            value={qArr[11]?.answer_three}
                            onChange={(e) => setAnswer12(e.target.value)}
                            />{qArr[11]?.answer_three}
                        </section>
                    )}

                    {qArr[11]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-12`}
                            type="radio"
                            value={qArr[11]?.answer_four}
                            onChange={(e) => setAnswer12(e.target.value)}
                            />{qArr[11]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status12 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[11].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[12] ? (
                <div className='question-holder'>
                <label htmlFor={`q-13`}>13. {qArr[12]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status13 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-13`}
                            type="radio"
                            value={qArr[12]?.answer_one}
                            onChange={(e) => setAnswer13(e.target.value)}
                        />{qArr[12]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-13`}
                            type="radio"
                            value={qArr[12]?.answer_two}
                            onChange={(e) => setAnswer13(e.target.value)}
                        />{qArr[12]?.answer_two}
                    </section>
                    {qArr[12]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-13`}
                            type="radio"
                            value={qArr[12]?.answer_three}
                            onChange={(e) => setAnswer13(e.target.value)}
                            />{qArr[12]?.answer_three}
                        </section>
                    )}

                    {qArr[12]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-13`}
                            type="radio"
                            value={qArr[12]?.answer_four}
                            onChange={(e) => setAnswer13(e.target.value)}
                            />{qArr[12]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status13 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[12].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[13] ? (
                <div className='question-holder'>
                <label htmlFor={`q-14`}>14. {qArr[13]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status14 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                            )}
                            </div>
                        )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-14`}
                            type="radio"
                            value={qArr[13]?.answer_one}
                            onChange={(e) => setAnswer14(e.target.value)}
                        />{qArr[13]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-14`}
                            type="radio"
                            value={qArr[13]?.answer_two}
                            onChange={(e) => setAnswer14(e.target.value)}
                        />{qArr[13]?.answer_two}
                    </section>
                    {qArr[13]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-14`}
                            type="radio"
                            value={qArr[13]?.answer_three}
                            onChange={(e) => setAnswer14(e.target.value)}
                            />{qArr[13]?.answer_three}
                        </section>
                    )}

                    {qArr[13]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-14`}
                            type="radio"
                            value={qArr[13]?.answer_four}
                            onChange={(e) => setAnswer14(e.target.value)}
                            />{qArr[13]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status14 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[13].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[14] ? (
                <div className='question-holder'>
                <label htmlFor={`q-15`}>15. {qArr[14]?.question}</label>
                {hasSubmitted && (
                    <div>
                        {status15 === "correct" ? (
                            <div>
                                {correctText}
                            </div>
                        ) : (
                            <div>
                                {incorrectText}
                            </div>
                        )}
                    </div>
                    )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-15`}
                            type="radio"
                            value={qArr[14]?.answer_one}
                            onChange={(e) => setAnswer15(e.target.value)}
                        />{qArr[14]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-15`}
                            type="radio"
                            value={qArr[14]?.answer_two}
                            onChange={(e) => setAnswer15(e.target.value)}
                        />{qArr[14]?.answer_two}
                    </section>
                    {qArr[14]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-15`}
                            type="radio"
                            value={qArr[14]?.answer_three}
                            onChange={(e) => setAnswer15(e.target.value)}
                            />{qArr[14]?.answer_three}
                        </section>
                    )}

                    {qArr[14]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-15`}
                            type="radio"
                            value={qArr[14]?.answer_four}
                            onChange={(e) => setAnswer15(e.target.value)}
                            />{qArr[14]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status15 === "Incorrect" ? (<span className='incorrect-text'>Solution: {qArr[14].solution}</span>) : ''}
                </div>
                    ) : ''}




    {qArr[15] ? (
                <div className='question-holder'>
                <label htmlFor={`q-16`}>16. {qArr[15]?.question}</label>
                {hasSubmitted && (
                    <div>
                        {status16 === "correct" ? (
                            <div>
                                {correctText}
                            </div>
                        ) : (
                            <div>
                                {incorrectText}
                            </div>
                            )}
                        </div>
                    )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-16`}
                            type="radio"
                            value={qArr[15]?.answer_one}
                            onChange={(e) => setAnswer16(e.target.value)}
                        />{qArr[15]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-16`}
                            type="radio"
                            value={qArr[15]?.answer_two}
                            onChange={(e) => setAnswer16(e.target.value)}
                        />{qArr[15]?.answer_two}
                    </section>
                    {qArr[15]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-16`}
                            type="radio"
                            value={qArr[15]?.answer_three}
                            onChange={(e) => setAnswer16(e.target.value)}
                            />{qArr[15]?.answer_three}
                        </section>
                    )}

                    {qArr[15]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-16`}
                            type="radio"
                            value={qArr[15]?.answer_four}
                            onChange={(e) => setAnswer16(e.target.value)}
                            />{qArr[15]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status16 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[15].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[16] ? (
                <div className='question-holder'>
                <label htmlFor={`q-17`}>17. {qArr[16]?.question}</label>
                {hasSubmitted && (
                    <div>
                        {status17 === "correct" ? (
                            <div>
                                {correctText}
                            </div>
                        ) : (
                            <div>

                                {incorrectText}
                            </div>
                            )}
                        </div>
                )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-17`}
                            type="radio"
                            value={qArr[16]?.answer_one}
                            onChange={(e) => setAnswer17(e.target.value)}
                        />{qArr[16]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-17`}
                            type="radio"
                            value={qArr[16]?.answer_two}
                            onChange={(e) => setAnswer17(e.target.value)}
                        />{qArr[16]?.answer_two}
                    </section>
                    {qArr[16]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-17`}
                            type="radio"
                            value={qArr[16]?.answer_three}
                            onChange={(e) => setAnswer17(e.target.value)}
                            />{qArr[16]?.answer_three}
                        </section>
                    )}

                    {qArr[16]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-17`}
                            type="radio"
                            value={qArr[16]?.answer_four}
                            onChange={(e) => setAnswer17(e.target.value)}
                            />{qArr[16]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status17 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[16].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[17] ? (
                <div className='question-holder'>
                <label htmlFor={`q-18`}>18. {qArr[17]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status18 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-18`}
                            type="radio"
                            value={qArr[17]?.answer_one}
                            onChange={(e) => setAnswer18(e.target.value)}
                        />{qArr[17]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-18`}
                            type="radio"
                            value={qArr[17]?.answer_two}
                            onChange={(e) => setAnswer18(e.target.value)}
                        />{qArr[17]?.answer_two}
                    </section>
                    {qArr[17]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-18`}
                            type="radio"
                            value={qArr[17]?.answer_three}
                            onChange={(e) => setAnswer18(e.target.value)}
                            />{qArr[17]?.answer_three}
                        </section>
                    )}

                    {qArr[17]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-18`}
                            type="radio"
                            value={qArr[17]?.answer_four}
                            onChange={(e) => setAnswer18(e.target.value)}
                            />{qArr[17]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status18 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[17].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[18] ? (
                <div className='question-holder'>
                <label htmlFor={`q-19`}>19. {qArr[18]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status19 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>)}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-19`}
                            type="radio"
                            value={qArr[18]?.answer_one}
                            onChange={(e) => setAnswer19(e.target.value)}
                        />{qArr[18]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-19`}
                            type="radio"
                            value={qArr[18]?.answer_two}
                            onChange={(e) => setAnswer19(e.target.value)}
                        />{qArr[18]?.answer_two}
                    </section>
                    {qArr[18]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-19`}
                            type="radio"
                            value={qArr[18]?.answer_three}
                            onChange={(e) => setAnswer19(e.target.value)}
                            />{qArr[18]?.answer_three}
                        </section>
                    )}

                    {qArr[18]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-19`}
                            type="radio"
                            value={qArr[18]?.answer_four}
                            onChange={(e) => setAnswer19(e.target.value)}
                            />{qArr[18]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status19 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[18].solution}</span>
                        </div>
                    ) : ''}
                </div>
                    ) : ''}

            {qArr[19] ? (
                <div className='question-holder'>
                <label htmlFor={`q-20`}>20. {qArr[19]?.question}</label>
                {hasSubmitted && (
                        <div>
                            {status20 === "correct" ? (
                                <div>
                                    {correctText}
                                </div>
                            ) : (
                                <div>
                                    {incorrectText}
                                </div>
                                )}
                            </div>
                            )}
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-20`}
                            type="radio"
                            value={qArr[19]?.answer_one}
                            onChange={(e) => setAnswer20(e.target.value)}
                        />{qArr[19]?.answer_one}
                    </section>
                    <section className='answer-option-wrapper'>
                        <input
                            name={`q-20`}
                            type="radio"
                            value={qArr[19]?.answer_two}
                            onChange={(e) => setAnswer20(e.target.value)}
                        />{qArr[19]?.answer_two}
                    </section>
                    {qArr[19]?.answer_three !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-20`}
                            type="radio"
                            value={qArr[19]?.answer_three}
                            onChange={(e) => setAnswer20(e.target.value)}
                            />{qArr[19]?.answer_three}
                        </section>
                    )}

                    {qArr[19]?.answer_four !== null && (
                        <section className='answer-option-wrapper'>
                            <input
                            name={`q-20`}
                            type="radio"
                            value={qArr[19]?.answer_four}
                            onChange={(e) => setAnswer20(e.target.value)}
                            />{qArr[19]?.answer_four}
                        </section>
                    )}
                    {hasSubmitted && status20 === "Incorrect" ? (
                        <div className='solution-holder'>
                            <span className='incorrect-text'>Solution: {qArr[19].solution}</span>)
                        </div>
                        ) : ''}
                </div>
                    ) : ''}
                </section>
                <section>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </section>
                {hasSubmitted && (
                    <section>
                        <h2>{resStarter} You got {result} correct!</h2>
                    </section>
                )}
                </section>
             )}

        </div>
          </Box>
        </Box>
    )

}

export default Quiz;