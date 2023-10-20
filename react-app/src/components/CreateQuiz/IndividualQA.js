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
                    id='question-card-top-input'
                    value={question}
                    placeholder="Question (i.e., 2 + 2 = ?)"
                    onChange={(e) => setQuestion(e.target.value)}
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
                            className='create-quiz-card-textarea left-outer'
                            value={answerOne}
                            placeholder="Option one"
                            onChange={(e) => setAnswerOne(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
                            className='create-quiz-card-textarea right-outer'
                            value={answerTwo}
                            placeholder="Option two"
                            onChange={(e) => setAnswerTwo(e.target.value)}
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
                            className='create-quiz-card-textarea left-outer'
                            value={answerThree}
                            placeholder="Option three"
                            onChange={(e) => setAnswerThree(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea
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
                <span>Solution: </span>
                <span>{solution}</span>
            </section>
        </div>
        // <div id='question-card-wrapper'>
        //     <div className='q-card-field'>
        //         <label className='create-qa-label' htmlFor='question'>Question</label>
        //         <textarea
        //             id='question-text'
        //             name='question'
        //             value={question}
        //             onChange={(e) => setQuestion(e.target.value)}
        //         />
        //     </div>
        //     <div className='q-card-field'>
        //         <label className='create-qa-label' htmlFor='option-1'>Answer Option One</label>
        //         <div className='ans-and-but'>
        //             <textarea
        //                 id='ans-opt-1'
        //                 name='option-1'
        //                 value={answerOne}
        //                 onChange={(e) => setAnswerOne(e.target.value)}
        //             />
        //             {/* <button className='cor-ans-but' onClick={() => {
        //                 setSolution(answerOne)
        //             }}>Correct Answer?</button> */}
        //             <CheckCircleOutlineIcon sx={{color: solution === answerOne ? "green" : "gray", marginLeft: "10px" }} onClick={() => setSolution(answerOne)} />
        //             <CloseIcon sx={{color: solution !== answerOne ? "red" : "gray"}} />
        //         </div>
        //     </div>
        //     <div className='q-card-field'>
        //         <label className='create-qa-label' htmlFor='option-2'>Answer Option Two</label>
        //         <div className='ans-and-but'>
        //             <textarea
        //                 id='ans-opt-2'
        //                 name='option-2'
        //                 value={answerTwo}
        //                 onChange={(e) => setAnswerTwo(e.target.value)}
        //             />
        //             <CheckCircleOutlineIcon sx={{color: solution === answerTwo ? "green" : "gray", marginLeft: "10px"}} onClick={() => setSolution(answerTwo)} />
        //             <CloseIcon sx={{color: solution !== answerTwo ? "red" : "gray"}} />
        //         </div>
        //     </div>
        //     <div className='q-card-field'>
        //         <label className='create-qa-label' htmlFor='option-3'>Answer Option Three</label>
        //         <div className='ans-and-but'>
        //             <textarea
        //                 id='ans-opt-3'
        //                 name='option-3'
        //                 value={answerThree}
        //                 onChange={(e) => setAnswerThree(e.target.value)}
        //             />
        //             <CheckCircleOutlineIcon sx={{color: solution === answerThree ? "green" : "gray", marginLeft: "10px" }} onClick={() => setSolution(answerThree)} />
        //             <CloseIcon sx={{color: solution !== answerThree ? "red" : "gray"}} />
        //         </div>
        //     </div>
        //     <div className='q-card-field'>
        //         <label className='create-qa-label' htmlFor='option-4'>Answer Option Four</label>
        //         <div className='ans-and-but'>
        //             <textarea
        //                 id='ans-opt-4'
        //                 name='option-4'
        //                 value={answerFour}
        //                 onChange={(e) => setAnswerFour(e.target.value)}
        //             />
        //             <CheckCircleOutlineIcon sx={{color: solution === answerFour ? "green" : "gray", marginLeft: "10px" }} onClick={() => setSolution(answerFour)} />
        //             <CloseIcon sx={{color: solution !== answerFour ? "red" : "gray"}} />
        //         </div>
        //     </div>
        //     <div id='q-solution-holder'>
        //         <span>Solution: </span><span id='solutions'>{solution}</span>
        //     </div>
        // </div>
    )
}

export default IndividualQuestion;
