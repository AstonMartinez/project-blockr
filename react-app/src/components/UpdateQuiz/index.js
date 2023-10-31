import './UpdateQuiz.css';
import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import { useHistory, useParams } from 'react-router-dom'
import * as React from 'react';
import UpdateIndividualQA from './IndividualQA';
import { useDispatch, useSelector } from 'react-redux';
import NavDrawer from '../NavDrawer';
import { getByQuizId } from '../../store/triviaQuestions';
import { fetchSingleQuiz, updateUserQuiz } from '../../store/quiz';
import IndividualQuestion from '../CreateQuiz/IndividualQA';

const UpdateQuiz = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { quizId } = useParams()

    const quizData = useSelector(state => state.quizzes.singleQuiz)
    const quizQuestions = useSelector(state => state.questions.allQuestions)

    const questionArr = Object.values(quizQuestions)
    const qArr = []

    const startingTitle = quizData.title
    const startingDescription = quizData.description
    const startingCategory = quizData.category
    const startingStatus = quizData.status

    const [numQuestions, setNumQuestions] = React.useState(0)
    const [title, setTitle] = React.useState(startingTitle)
    const [description, setDescription] = React.useState(startingDescription)
    const [category, setCategory] = React.useState(startingCategory)
    const [status, setStatus] = React.useState(startingStatus)
    const [submitError, setSubmitError] = React.useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const allQuestions = document.querySelectorAll('#question-text')
        const firstOptions = document.querySelectorAll('#ans-opt-1')
        const secondOptions = document.querySelectorAll('#ans-opt-2')
        const thirdOptions = document.querySelectorAll('#ans-opt-3')
        const fourthOptions = document.querySelectorAll('#ans-opt-4')
        const solutions = document.querySelectorAll('#solutions')

        const resArr = []

        if(allQuestions.length > 0) {
            if(solutions.length < allQuestions.length) {
                setSubmitError('Please make sure you\'ve set a solution for each new question!')
                return
            }

            for(let i = 0; i < allQuestions.length; i++) {
                if(solutions[i].value === "") {
                    setSubmitError("Please make sure you've set a solution for each new question!")
                    return
                }

                resArr.push({
                    question: allQuestions[i].value,
                    answer_one: firstOptions[i].value,
                    answer_two: secondOptions[i].value,
                    answer_three: thirdOptions[i].value,
                    answer_four: fourthOptions[i].value,
                    solution: solutions[i].value,
                    status: status
                })
            }

            const questionInfo = { questions: resArr }
            await fetch(`/api/quizzes/${quizId}/add`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(questionInfo)
            })
        }

        const quizInfo = {
            title: title,
            description: description,
            category: category,
            status: status
        }

        dispatch(updateUserQuiz(quizInfo)).then(() => {
            history.push('/trivia')
        })

    }



    for(let i = 0; i < numQuestions; i++) {
        qArr.push({id: i, front: null, back: null})
    }

    React.useEffect(() => {
        dispatch(fetchSingleQuiz(quizId))
        dispatch(getByQuizId(quizId))
    }, [dispatch])

    return (
        <Box sx={{ display: 'flex' }}>
            <NavDrawer page={'Trivia'} />
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
            }}
            >
                <div id='update-quiz-wrapper'>
                    <div>
                        <h1>Update Quiz</h1>
                    </div>
                    <div>
                        <div>
                            <section id='update-quiz-info'>
                                <h2>Quiz Info</h2>
                                <section id='update-quiz-sec-1'>
                                    <div>
                                        <label htmlFor='title' id='quiz-title-label'>Title</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    <input
                                        id='quiz-title-input'
                                        style={{ 'width': '300px', 'marginBottom': '10px' }}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </section>
                                <section id='update-quiz-desc'>
                                    <div>
                                        <label htmlFor='description' id='quiz-desc-label'>Description</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    <textarea id='quiz-desc-input'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </section>
                            </section>
                            <section id='quiz-cat-select'>
                                <label id='quiz-cat-label'>Category</label>
                                <select
                                    className='create-quiz-select-field'
                                    defaultValue={category}
                                    value={category}
                                    onChange={(e) => setCategory(e.target.value)}
                                >
                                    <option value="Angular">Angular</option>
                                    <option value="CSharp">C#</option>
                                    <option value="C++">C++</option>
                                    <option value="General">General</option>
                                    <option value="Java">Java</option>
                                    <option value="JavaScript">JavaScript</option>
                                    <option value="NextJS">NextJS</option>
                                    <option value="Python">Python</option>
                                    <option value="React">React</option>
                                    <option value="Rust">Rust</option>
                                    <option value="Svelte">Svelte</option>
                                    <option value="TypeScript">TypeScript</option>
                                    <option value="SQL">SQL</option>
                                    <option value="Other">Other</option>
                                </select>
                            </section>
                            <section id='quiz-cat-select'>
                                <label className='update-quiz-stat-label'>Status</label>
                                <select
                                    className='update-quiz-select-field'
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <option value="Public">Public</option>
                                    <option value="Private">Private</option>
                                </select>
                            </section>
                            <section id='quiz-qs-inputs'>
                                <h2 style={{ textAlign: 'center' }}>Current Questions</h2>
                                <section id='all-fcs'>
                                    <div>
                                        {questionArr.length > 0 && questionArr.map(q => (
                                            <>
                                                <UpdateIndividualQA quizId={quizId} questionData={q} />
                                            </>
                                        ))}
                                    </div>
                                </section>
                            </section>
                            <section>
                                <h2 style={{ textAlign: 'center' }}>Add Questions</h2>
                                <section id='update-add-quiz-qs'>
                                    <label htmlFor='num-cards' id='quiz-hw-mny-label'>How Many Questions?</label>
                                    <input
                                        id='quiz-num-qs-input'
                                        type='number'
                                        defaultValue={0}
                                        min={0}
                                        max={20}
                                        value={numQuestions}
                                        onChange={(e) => setNumQuestions(e.target.value)}
                                    />
                                </section>
                                <section>
                                    <div>
                                        {qArr.map(q => (
                                            <>
                                                <IndividualQuestion />
                                            </>
                                        ))}
                                    </div>
                                </section>
                            </section>
                            <section>
                                {submitError && (<p style={{ 'color': 'red' }}>{submitError}</p>)}
                            </section>
                            <section id='update-quiz-submit'>
                                <Button size="md" onClick={handleSubmit}>Submit</Button>
                            </section>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default UpdateQuiz;
