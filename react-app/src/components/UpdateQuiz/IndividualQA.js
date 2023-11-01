import { useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/joy/Button';
import { useDispatch } from 'react-redux';
import { getByQuizId } from '../../store/triviaQuestions';


const UpdateIndividualQA = ({ quizId, questionData }) => {
    const dispatch = useDispatch()
    const [question, setQuestion] = useState(questionData.question)
    const [answerOne, setAnswerOne] = useState(questionData.answer_one)
    const [answerTwo, setAnswerTwo] = useState(questionData.answer_two)
    const [answerThree, setAnswerThree] = useState(questionData?.answer_three)
    const [answerFour, setAnswerFour] = useState(questionData?.answer_four)
    const [solution, setSolution] = useState(questionData.solution)
    const [isEditing, setIsEditing] = useState(false)
    const [saveError, setSaveError] = useState([])

    const deleteQuestion = async () => {
        const response = await fetch(`/api/quizzes/${questionData.id}/delete`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            }
        })

        if (response.ok) {
            const data = await response.json()
            await dispatch(getByQuizId(quizId))
            return data
        } else {
            const errors = await response.json()
            setSaveError(errors)
            return
        }

    }

    const updateQuestion = async () => {
        const updatedQuestion = {
            question: question,
            answer_one: answerOne,
            answer_two: answerTwo,
            answer_three: answerThree,
            answer_four: answerFour,
            solution: solution
        }

        const response = await fetch(`/api/quizzes/${questionData.id}/update`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedQuestion)
        })

        if(response.ok) {
            const data = await response.json()
            questionData = data
            setIsEditing(false)
            await dispatch(getByQuizId(quizId))
            return
        } else {
            const errors = await response.json()
            setSaveError(errors)
            return
        }
    }

    return (
        <div id='update-question-card-wrapper'>
            <section id='update-question-input-holder'>
                <label className='create-quiz-card-label'>Question</label>
                <textarea
                    id='update-question-text'
                    value={question}
                    placeholder="Question (i.e., 2 + 2 = ?)"
                    onChange={(e) => setQuestion(e.target.value)}
                    disabled={isEditing ? false : true}
                    required
                />
            </section>
            <section id='question-answer-opt-holder'>
                <div id='answer-opt-top' className='update-answer-opt-row'>
                    <div className='right-wrong-icon-holder'>
                        <CloseIcon sx={{color: solution !== answerOne ? "red" : "gray"}} />
                        <CheckCircleOutlineIcon sx={{color: solution === answerOne ? "green" : "gray", marginRight: "10px"}} onClick={() => {
                            if(isEditing) {
                                setSolution(answerOne)
                            } else {
                                return
                            }
                        }} />
                    </div>
                    <div>
                        <textarea
                            id='update-ans-opt-1'
                            className='update-quiz-card-textarea left-outer'
                            value={answerOne}
                            placeholder="Option one"
                            onChange={(e) => setAnswerOne(e.target.value)}
                            disabled={isEditing ? false : true}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id='update-ans-opt-2'
                            className='update-quiz-card-textarea right-outer'
                            value={answerTwo}
                            placeholder="Option two"
                            onChange={(e) => setAnswerTwo(e.target.value)}
                            disabled={isEditing ? false : true}
                            required
                        />
                    </div>
                    <div className='right-wrong-icon-holder'>
                        <CheckCircleOutlineIcon sx={{color: solution === answerTwo ? "green" : "gray", marginLeft: "10px"}} onClick={() => {
                            if(isEditing) {
                                setSolution(answerTwo)
                            } else {
                                return
                            }
                        }} />
                        <CloseIcon sx={{color: solution !== answerTwo ? "red" : "gray"}} />
                    </div>
                </div>
                <div id='answer-opt-bottom' className='update-answer-opt-row'>
                    <div className='right-wrong-icon-holder'>
                        <CheckCircleOutlineIcon sx={{color: solution === answerThree ? "green" : "gray", marginLeft: "10px"}} onClick={() => {
                            if(isEditing) {
                                setSolution(answerThree)
                            } else {
                                return
                            }
                        }} />
                        <CloseIcon sx={{color: solution !== answerThree ? "red" : "gray"}} />
                    </div>
                    <div>
                        <textarea
                            id='update-ans-opt-3'
                            className='update-quiz-card-textarea left-outer'
                            value={answerThree}
                            onChange={(e) => setAnswerThree(e.target.value)}
                            placeholder="Option three"
                            disabled={isEditing ? false : true}
                        />
                    </div>
                    <div>
                        <textarea
                            id='update-ans-opt-4'
                            className='update-quiz-card-textarea right-outer'
                            value={answerFour}
                            placeholder='Option four'
                            onChange={(e) => setAnswerFour(e.target.value)}
                            disabled={isEditing ? false : true}
                        />
                    </div>
                    <div className='right-wrong-icon-holder'>
                        <CheckCircleOutlineIcon sx={{color: solution === answerFour ? "green" : "gray", marginLeft: "10px"}} onClick={() => {
                            if(isEditing) {
                                setSolution(answerFour)
                            } else {
                                return
                            }
                        }} />
                        <CloseIcon sx={{color: solution !== answerFour ? "red" : "gray"}} />
                    </div>
                </div>
            </section>
            <section id='update-card-solution-holder'>
                <span style={{ 'fontWeight': 'bold' }}>Solution: </span>
                <input id='update-solutions' style={{ 'border': 'none', 'textAlign': 'center', 'fontSize': '15px' }} value={solution} disabled='true' required></input>
            </section>
            <section>
                <Button variant='contained' onClick={deleteQuestion}>Delete Question</Button>
                {isEditing === false && (
                    <Button variant='contained' onClick={() => setIsEditing(true)}>Edit Question</Button>
                )}
                {isEditing && (
                    <Button variant='contained' onClick={updateQuestion}>Save Edits</Button>
                )}
            </section>
            {saveError && (
                <p>{saveError}</p>
            )}
        </div>
    )
}

export default UpdateIndividualQA;
