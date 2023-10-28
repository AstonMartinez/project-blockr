import './Quiz.css'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getByQuizId } from '../../store/triviaQuestions'
import { fetchSingleQuiz } from '../../store/quiz'
import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LoadingScreen from '../LoadingScreen'
import NavDrawer from '../NavDrawer'
import QuizQuestion from '../DailyTrivia/QuizQuestion'
import { createNewSession } from '../../store/studySessions'

const Quiz = () => {
    const { quizId } = useParams()
    const dispatch = useDispatch()
    const [toggleRender, setToggleRender] = useState(false)

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [result, setResult] = useState('')
    const [resStarter, setResStarter] = useState('')

    const [isLoaded, setIsLoaded] = useState(false)

    const startTime = new Date()

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
            setToggleRender(!toggleRender)
        })
    }, [dispatch])

    const quiz = useSelector(state => state.quizzes.singleQuiz)
    const questions = useSelector(state => state.questions.allQuestions)
    const qArr = Object.values(questions)

    const handleSubmit = () => {
        let numCorrect = 0

        const userAnswers = document.querySelectorAll('#quiz-user-answer')
        const solutions = document.querySelectorAll('#quiz-question-solution')
        for(let i = 0; i < userAnswers.length; i++) {
            if(userAnswers[i].value === solutions[i].value) {
                numCorrect++
            }
        }
        const hourNum = 60 * 60000
        const minuteNum = 60000
        const secondNum = 1000
        let hours
        let minutes
        let seconds

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
        const category = quiz?.category
        const quizLength = qArr.length
        const numIncorrect = quizLength - numCorrect

        const studySession = {
            num_correct: numCorrect,
            num_incorrect: numIncorrect,
            out_of: quizLength,
            time_spent: timeSpentStr,
            session_type: "Quizzes",
            category: category
        }

        dispatch(createNewSession(studySession))

        setResult(`${numCorrect}/${quizLength}`)

        if(numCorrect === quizLength) {
            setResStarter("Amazing!")
        } else if (numCorrect > Math.floor(quizLength / 2)) {
            setResStarter("Great job!")
        } else if (numCorrect < Math.floor(quizLength / 2 && numCorrect > 0)) {
            setResStarter("Solid effort!")
        } else {
            setResStarter("Ouch! Try again.")
        }

        setHasSubmitted(true)
        return
    }

    return(
        <Box sx={{ display: 'flex' }}>
            <NavDrawer page={'Trivia'} />
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
            {isLoaded && qArr !== undefined && (
                <section>

                <section id='quiz-header'>
                    <h1>{quiz?.title}</h1>
                </section>
                <section>
                {qArr?.length > 0 && qArr.map((q) => (
                    <>
                        <QuizQuestion hasSubmitted={hasSubmitted} key={q.id} questionData={q} />
                    </>
                    ))}
                </section>
                <section style={{ "display": "flex", "justifyContent": "center", "margin": "50px 0px 20px 0px" }}>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                </section>
                {hasSubmitted && (
                    <section style={{ "display": "flex", "justifyContent": "center" }}>
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
