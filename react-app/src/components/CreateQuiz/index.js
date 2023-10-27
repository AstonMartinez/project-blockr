import './CreateQuiz.css'
import { useState } from 'react'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Button from '@mui/joy/Button';
import Box from '@mui/material/Box';
import { useHistory } from 'react-router-dom'
import * as React from 'react'
import IndividualQuestion from './IndividualQA';
import { useDispatch } from 'react-redux';
import { createNewQuiz } from '../../store/quiz';
import NavDrawer from '../NavDrawer';

const CreateQuiz = () => {
    let qArr = []
    const dispatch = useDispatch()
    const history = useHistory()
    const [numQuestions, setNumQuestion] = useState(1)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('General')
    const [status, setStatus] = useState('Public')
    const [submitError, setSubmitError] = useState('')

    for(let i = 0; i < numQuestions; i++) {
        qArr.push({id: i, front: null, back: null})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const allQuestions = document.querySelectorAll('#question-text')
        const firstOptions = document.querySelectorAll('#ans-opt-1')
        const secondOptions = document.querySelectorAll('#ans-opt-2')
        const thirdOptions = document.querySelectorAll('#ans-opt-3')
        const fourthOptions = document.querySelectorAll('#ans-opt-4')
        const solutions = document.querySelectorAll('#solutions')
        const resArr = []

        if(solutions.length < allQuestions.length) {
            setSubmitError("Please make sure you've set a solution for each question!")
            return
        }

        for(let i = 0; i < allQuestions.length; i ++) {
            if(solutions[i].value === "") {
                setSubmitError("Please make sure you've set a solution for each question!")
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
        const quizInfo = {
            title: title,
            description: description,
            category: category,
            status: status,
            length: numQuestions
        }

        const questionInfo = { questions: resArr }

        dispatch(createNewQuiz(quizInfo))
        .then(async(res) => {
          await fetch(`/api/quizzes/${res.id}/add`, {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(questionInfo)
          })
        }).then(() => {
            history.push('/trivia')
        })
    }

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
            }}>
                <div id='create-fc-wrapper'>
                    <div>
                        <h1>Create a Quiz</h1>
                    </div>
                    <div>
                        <div>
                            <section id='create-fc-info'>
                                <h2>Set Info</h2>
                                <section style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "marginTop": "10px" }}>
                                    <div>
                                        <label htmlFor='title' id='quiz-title-label'>Title</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    <input id='quiz-title-input' sx={{"width": "300px", marginBottom: "10px"}}
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                </section>
                                <section  style={{ "display": "flex", "flexDirection": "column", "alignItems": "center", "marginTop": "10px" }}>
                                    <div>
                                        <label htmlFor='description' id='quiz-desc-label'>Description</label><span style={{ "color": "red" }}>*</span>
                                    </div>
                                    <textarea id='quiz-desc-input' sx={{"height": "100px", "width": "300px"}}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        required
                                    />
                                </section>
                            </section>
                            <section id='fc-cat-select'>
                                <label id='quiz-cat-label'>Category</label>
                                <Select defaultValue="General" onChange={(e) => setCategory(e.target.value)} sx={{"width": "300px"}}>
                                    <Option value="Angular">Angular</Option>
                                    <Option value="C#">C#</Option>
                                    <Option value="C++">C++</Option>
                                    <Option value="General">General</Option>
                                    <Option value="Java">Java</Option>
                                    <Option value="JavaScript">JavaScript</Option>
                                    <Option value="NextJS">NextJS</Option>
                                    <Option value="Python">Python</Option>
                                    <Option value="React">React</Option>
                                    <Option value="Rust">Rust</Option>
                                    <Option value="Svelte">Svelte</Option>
                                    <Option value="TypeScript">TypeScript</Option>
                                    <Option value="Other">Other</Option>
                                </Select>
                            </section>
                            <section id='fc-cat-select'>
                                <label className='create-fc-set-label'>Status</label>
                                <Select defaultValue="Public" onChange={(e) => setStatus(e.target.value)} sx={{"width": "300px"}}>
                                    <Option value="Public">Public</Option>
                                    <Option value="Private">Private</Option>
                                </Select>
                            </section>
                            <section id='fc-num-select'>
                                <label htmlFor='num-cards' id='quiz-hw-mny-label'>How Many Questions?</label>
                                <input
                                    id='quiz-num-qs-input'
                                    type="number"
                                    defaultValue={1}
                                    min={1}
                                    max={20}
                                    value={numQuestions}
                                    onChange={(e) => setNumQuestion(e.target.value)}
                                />
                            </section>
                            <section id='fc-cards-inputs'>
                                <h2>Questions</h2>
                                <section id='all-fcs'>
                                    <div>
                                        {qArr.map(q => (
                                            <>
                                                <IndividualQuestion />
                                            </>
                                        ))}
                                    </div>
                                </section>
                            </section>
                            <section style={{ "marginLeft": "50px" }}>
                                {submitError && (<p style={{ "color": "red" }}>{submitError}</p>)}
                            </section>
                            <section id='create-quiz-submit'>
                                <Button size="md" onClick={handleSubmit}>Submit</Button>
                            </section>
                        </div>
                    </div>
                </div>
            </Box>
        </Box>
    )
}

export default CreateQuiz;
