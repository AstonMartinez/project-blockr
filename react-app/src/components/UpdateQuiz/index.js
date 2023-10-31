import './UpdateQuiz.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useHistory, useParams } from 'react-router-dom'
import * as React from 'react';
import UpdateIndividualQA from './IndividualQA';
import { useDispatch, useSelector } from 'react-redux';
import NavDrawer from '../NavDrawer';
import { getByQuizId } from '../../store/triviaQuestions';
import { fetchSingleQuiz, updateUserQuiz } from '../../store/quiz';
import IndividualQuestion from '../CreateQuiz/IndividualQA';
import CreateIcon from '@mui/icons-material/Create';

const UpdateQuiz = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const { quizId } = useParams()

    const quizData = useSelector(state => state.quizzes.singleQuiz)
    const quizQuestions = useSelector(state => state.questions.allQuestions)

    const questionArr = Object.values(quizQuestions)
    const qArr = []
    const [editingQuizInfo, setEditingQuizInfo] = React.useState(false)
    const [numQuestions, setNumQuestions] = React.useState(0)
    const [title, setTitle] = React.useState(quizData.title)
    const [description, setDescription] = React.useState(quizData.description)
    const [category, setCategory] = React.useState(quizData.category)
    const [status, setStatus] = React.useState(quizData.status)
    const [submitError, setSubmitError] = React.useState('')

    const handleChangeQuizInfo = async () => {
        const quizInfo = {
            title: title,
            description: description,
            category: category,
            status: status
        }

        dispatch(updateUserQuiz(quizInfo))
    }

    const handleAddQuestions = async () => {
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
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

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
                    marginTop: '70px'
            }}
            >
                <div id='update-quiz-wrapper'>
                    <div>
                        <h1>Update Quiz</h1>
                    </div>
                    <div>
                        <div>
                            <section id='update-quiz-info'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <h2>Quiz Info</h2> <CreateIcon sx={{marginLeft: '5px'}} onClick={() => setEditingQuizInfo(true)} />
                                </div>
                                <section id='update-quiz-sec-1'>
                                    <div>
                                        <label htmlFor='title' id='quiz-title-label'>Title</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    {!editingQuizInfo && (
                                        <p>{quizData.title}</p>
                                    )}
                                    {editingQuizInfo && (
                                        <input
                                            id='quiz-title-input'
                                            style={{ 'width': '300px', 'marginBottom': '10px' }}
                                            defaultValue={quizData.title}
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            required
                                        />
                                    )}
                                </section>
                                <section id='update-quiz-desc'>
                                    <div>
                                        <label htmlFor='description' id='quiz-desc-label'>Description</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    {!editingQuizInfo && (
                                        <p>{quizData.description}</p>
                                    )}
                                    {editingQuizInfo && (
                                        <textarea id='quiz-desc-input'
                                            defaultValue={quizData.description}
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            required
                                        />
                                    )}
                                </section>
                            </section>
                            <section id='update-quiz-cat-select'>
                                <label id='quiz-cat-label'>Category</label>
                                {!editingQuizInfo && (
                                    <p>{quizData.category}</p>
                                )}
                                {editingQuizInfo && (
                                    <select
                                        className='create-quiz-select-field'
                                        defaultValue={quizData.category}
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
                                )}
                            </section>
                            <section id='update-quiz-cat-select'>
                                <label className='update-quiz-stat-label'>Status</label>
                                {!editingQuizInfo && (
                                    <p>{quizData.status}</p>
                                )}
                                {editingQuizInfo && (
                                    <select
                                        className='update-quiz-select-field'
                                        defaultValue={quizData.status}
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                    >
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                    </select>
                                )}
                            </section>
                            <section style={{display: 'flex', justifyContent: 'space-around', width: '250px', margin: '15px auto'}}>
                                {editingQuizInfo && (
                                    <>
                                        <Button variant="contained" onClick={handleChangeQuizInfo}>Save Changes</Button>
                                        <Button variant="contained" onClick={() => setEditingQuizInfo(false)}>Cancel</Button>
                                    </>
                                )}
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
                                <section>
                                    <div id='update-quiz-submit'>
                                        {numQuestions > 0 && (
                                            <Button variant="contained" onClick={handleAddQuestions}>Save New Questions</Button>
                                        )}
                                    </div>
                                </section>
                            </section>
                            <section>
                                {submitError && (<p style={{ 'color': 'red' }}>{submitError}</p>)}
                            </section>
                            <section id='update-quiz-submit'>
                                <Button size="md" variant='contained' onClick={() => {
                                    history.push('/trivia')
                                }}>Done Editing</Button>
                            </section>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default UpdateQuiz;
