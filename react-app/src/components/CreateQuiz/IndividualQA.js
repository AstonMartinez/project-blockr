import { useState } from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CloseIcon from '@mui/icons-material/Close';

const IndividualQuestion = () => {
    const [question, setQuestion] = useState('')
    const [answerOne, setAnswerOne] = useState('')
    const [answerTwo, setAnswerTwo] = useState('')
    const [answerThree, setAnswerThree] = useState('')
    const [answerFour, setAnswerFour] = useState('')
    const [solution, setSolution] = useState(null)

    return (
        <div id='question-card-wrapper'>
            <section id='question-input-holder'>
                <label className='create-quiz-card-label'>Question</label>
                <textarea
                    id='question-text'
                    value={question}
                    placeholder="Question (i.e., 2 + 2 = ?)"
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
            </section>
            <section id='question-answer-opt-holder'>
                <div id='answer-opt-top' className='answer-opt-row'>
                    <div className='right-wrong-icon-holder'>
                        <CloseIcon sx={{color: solution !== answerOne ? "red" : "gray"}} />
                        <CheckCircleOutlineIcon sx={{color: solution === answerOne ? "green" : "gray", marginRight: "10px"}} onClick={() => setSolution(answerOne)} />
                    </div>
                    <div>
                        <textarea
                            id='ans-opt-1'
                            className='create-quiz-card-textarea left-outer'
                            value={answerOne}
                            placeholder="Option one"
                            onChange={(e) => setAnswerOne(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <textarea
                            id='ans-opt-2'
                            className='create-quiz-card-textarea right-outer'
                            value={answerTwo}
                            placeholder="Option two"
                            onChange={(e) => setAnswerTwo(e.target.value)}
                            required
                        />
                    </div>
                    <div className='right-wrong-icon-holder'>
                        <CheckCircleOutlineIcon sx={{color: solution === answerTwo ? "green" : "gray", marginLeft: "10px"}} onClick={() => setSolution(answerTwo)} />
                        <CloseIcon sx={{color: solution !== answerTwo ? "red" : "gray"}} />
                    </div>
                </div>
                <div id='answer-opt-bottom' className='answer-opt-row'>
                    <div className='right-wrong-icon-holder'>
                        <CloseIcon sx={{color: solution !== answerThree ? "red" : "gray"}} />
                        <CheckCircleOutlineIcon sx={{color: solution === answerThree ? "green" : "gray", marginRight: "10px"}} onClick={() => setSolution(answerThree)} />
                    </div>
                    <div>
                        <textarea
                            id='ans-opt-3'
                            className='create-quiz-card-textarea left-outer'
                            value={answerThree}
                            placeholder="Option three"
                            onChange={(e) => setAnswerThree(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            id='ans-opt-4'
                            className='create-quiz-card-textarea right-outer'
                            value={answerFour}
                            placeholder="Option four"
                            onChange={(e) => setAnswerFour(e.target.value)}
                        />
                    </div>
                    <div className='right-wrong-icon-holder'>
                        <CheckCircleOutlineIcon sx={{color: solution === answerFour ? "green" : "gray", marginLeft: "10px"}} onClick={() => setSolution(answerFour)} />
                        <CloseIcon sx={{color: solution !== answerFour ? "red" : "gray"}} />
                    </div>
                </div>
            </section>
            <section id='card-solution-holder'>
                <span style={{ "fontWeight": "bold" }}>Solution: </span>
                <input id='solutions' style={{ "border": "none", "textAlign": "center", "fontSize": "15px" }} value={solution} disabled="true" required></input>
            </section>
        </div>
    )
}

export default IndividualQuestion;
