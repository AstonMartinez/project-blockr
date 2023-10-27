import './DailyTrivia.css';
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom'
import Button from '@mui/material/Button';
import { fetchAllPublic } from '../../store/quiz';
import NavDrawer from '../NavDrawer';

const DailyTrivia = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    React.useEffect(() => {
        dispatch(fetchAllPublic())
    }, [dispatch])

    const allQuizzes = useSelector(state => state.quizzes.allQuizzes)
    const quizArr = Object.values(allQuizzes)

    return (
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
            </Box>
        </Box>
    )
}

export default DailyTrivia;
