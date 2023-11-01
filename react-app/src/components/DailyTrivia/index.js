import './DailyTrivia.css';
import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom'
import Button from '@mui/material/Button';
import { fetchAllAvailable, fetchAllPublic, fetchByCategory, fetchUserQuizzes } from '../../store/quiz';
import NavDrawer from '../NavDrawer';
import Select from '@mui/material/Select';
import QuizCard from './Card';
import CreateIcon from '@mui/icons-material/Create';

const DailyTrivia = () => {
    const dispatch = useDispatch()

    const [filter, setFilter] = React.useState('All Public')

    const handleChange = (filter) => {
        if(filter === "All Quizzes") {
            dispatch(fetchAllAvailable())
            return
        } else if (filter === "All Public") {
            dispatch(fetchAllPublic())
            return
        } else if (filter === "My Quizzes") {
            dispatch(fetchUserQuizzes())
            return
        } else if (filter === "General Knowledge Quizzes") {
            dispatch(fetchByCategory("General"))
            return
        } else if (filter === "Angular Quizzes") {
            dispatch(fetchByCategory("Angular"))
            return
        } else if (filter === "C# Quizzes") {
            dispatch(fetchByCategory("CSharp"))
            return
        } else if (filter === "C++ Quizzes") {
            dispatch(fetchByCategory("C++"))
            return
        } else if (filter === "JavaScript Quizzes") {
            dispatch(fetchByCategory("JavaScript"))
            return
        } else if (filter === "Java Quizzes") {
            dispatch(fetchByCategory("Java"))
            return
        } else if (filter === "Next.js Quizzes") {
            dispatch(fetchByCategory("Next.js"))
            return
        } else if (filter === "Python Quizzes") {
            dispatch(fetchByCategory("Python"))
            return
        } else if (filter === "React Quizzes") {
            dispatch(fetchByCategory("React"))
            return
        } else if (filter === "Rust Quizzes") {
            dispatch(fetchByCategory("Rust"))
            return
        } else if (filter === "Svelte Quizzes") {
            dispatch(fetchByCategory("Svelte"))
            return
        } else if (filter === "TypeScript Quizzes") {
            dispatch(fetchByCategory("TypeScript"))
            return
        } else if (filter === "SQL Quizzes") {
            dispatch(fetchByCategory("SQL"))
            return
        }
    }

    const allQuizzes = useSelector(state => state.quizzes.allQuizzes)
    const quizArr = Object.values(allQuizzes)

    React.useEffect(() => {
        if(filter === "All Quizzes") {
            dispatch(fetchAllAvailable())

        } else if (filter === "All Public") {
            dispatch(fetchAllPublic())

        } else if (filter === "My Quizzes") {
            dispatch(fetchUserQuizzes())

        } else if (filter === "General Knowledge Quizzes") {
            dispatch(fetchByCategory("General"))

        } else if (filter === "Angular Quizzes") {
            dispatch(fetchByCategory("Angular"))

        } else if (filter === "C# Quizzes") {
            dispatch(fetchByCategory("CSharp"))

        } else if (filter === "C++ Quizzes") {
            dispatch(fetchByCategory("C++"))

        } else if (filter === "JavaScript Quizzes") {
            dispatch(fetchByCategory("JavaScript"))

        } else if (filter === "Java Quizzes") {
            dispatch(fetchByCategory("Java"))

        } else if (filter === "Next.js Quizzes") {
            dispatch(fetchByCategory("Next.js"))

        } else if (filter === "Python Quizzes") {
            dispatch(fetchByCategory("Python"))

        } else if (filter === "React Quizzes") {
            dispatch(fetchByCategory("React"))

        } else if (filter === "Rust Quizzes") {
            dispatch(fetchByCategory("Rust"))

        } else if (filter === "Svelte Quizzes") {
            dispatch(fetchByCategory("Svelte"))

        } else if (filter === "TypeScript Quizzes") {
            dispatch(fetchByCategory("TypeScript"))

        } else if (filter === "SQL Quizzes") {
            dispatch(fetchByCategory("SQL"))

        }
    }, [dispatch, filter])


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
                        <h1>Trivia Quizzes</h1>
                    </div>
                    <div>
                        <NavLink exact to='/trivia/new'>
                            <Button variant='contained' size="medium">
                                <CreateIcon sx={{"marginRight": "5px"}} />Create Quiz
                            </Button>
                        </NavLink>
                    </div>
                    <div style={{ "margin": "30px 0px" }}>
                        <Select
                            native
                            value={filter}
                            onChange={(e) => {
                                setFilter(e.target.value)
                                handleChange(e.target.value)
                            }}
                            sx={{ width: "300px", backgroundColor: "white" }}
                        >
                            <optgroup label="By Visibility">
                                <option value="All Quizzes">All Quizzes</option>
                                <option value="All Public">All Public</option>
                                <option value="My Quizzes">My Quizzes</option>
                            </optgroup>
                            <optgroup label="By Topic">
                                <option value="General Knowledge Quizzes">General Knowledge Quizzes</option>
                                <option value="Angular Quizzes">Angular Quizzes</option>
                                <option value="C# Quizzes">C# Quizzes</option>
                                <option value="C++ Quizzes">C++ Quizzes</option>
                                <option value="JavaScript Quizzes">JavaScript Quizzes</option>
                                <option value="Java Quizzes">Java Quizzes</option>
                                <option value="Next.js Quizzes">Next.js Quizzes</option>
                                <option value="Python Quizzes">Python Quizzes</option>
                                <option value="React Quizzes">React Quizzes</option>
                                <option value="Rust Quizzes">Rust Quizzes</option>
                                <option value="Svelte Quizzes">Svelte Quizzes</option>
                                <option value="TypeScript Quizzes">TypeScript Quizzes</option>
                                <option value="SQL Quizzes">SQL Quizzes</option>
                            </optgroup>
                        </Select>
                    </div>
                    <section>
                        <div id='quiz-options-holder'>
                            {quizArr.length && quizArr.map(q => (
                                <QuizCard key={q.id} quiz={q} filter={filter} />
                            ))}
                        </div>
                    </section>
                </div>
            </Box>
        </Box>
    )
}

export default DailyTrivia;
