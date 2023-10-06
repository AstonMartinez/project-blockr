import './DailyTrivia.css';
import allTriviaQs from './triviaquestions';
import { useState } from 'react'
import { useSelector } from 'react-redux';

const DailyTrivia = () => {
    const triviaLength = allTriviaQs.length
    const sessionUser = useSelector(state => state.session.user)
    let saveButton;
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const [indexOne, setIndexOne] = useState(getRandomInt(triviaLength))
    const [indexTwo, setIndexTwo] = useState(getRandomInt(triviaLength))
    const [indexThree, setIndexThree] = useState(getRandomInt(triviaLength))
    const [indexFour, setIndexFour] = useState(getRandomInt(triviaLength))
    const [indexFive, setIndexFive] = useState(getRandomInt(triviaLength))
    const [indexSix, setIndexSix] = useState(getRandomInt(triviaLength))
    const [indexSeven, setIndexSeven] = useState(getRandomInt(triviaLength))
    const [indexEight, setIndexEight] = useState(getRandomInt(triviaLength))
    const [indexNine, setIndexNine] = useState(getRandomInt(triviaLength))
    const [indexTen, setIndexTen] = useState(getRandomInt(triviaLength))

    const [answerOne, setAnswerOne] = useState('')
    const [answerTwo, setAnswerTwo] = useState('')
    const [answerThree, setAnswerThree] = useState('')
    const [answerFour, setAnswerFour] = useState('')
    const [answerFive, setAnswerFive] = useState('')
    const [answerSix, setAnswerSix] = useState('')
    const [answerSeven, setAnswerSeven] = useState('')
    const [answerEight, setAnswerEight] = useState('')
    const [answerNine, setAnswerNine] = useState('')
    const [answerTen, setAnswerTen] = useState('')

    const [answerOneStatus, setAnswerOneStatus] = useState('')
    const [answerTwoStatus, setAnswerTwoStatus] = useState('')
    const [answerThreeStatus, setAnswerThreeStatus] = useState('')
    const [answerFourStatus, setAnswerFourStatus] = useState('')
    const [answerFiveStatus, setAnswerFiveStatus] = useState('')
    const [answerSixStatus, setAnswerSixStatus] = useState('')
    const [answerSevenStatus, setAnswerSevenStatus] = useState('')
    const [answerEightStatus, setAnswerEightStatus] = useState('')
    const [answerNineStatus, setAnswerNineStatus] = useState('')
    const [answerTenStatus, setAnswerTenStatus] = useState('')
    const [submitError, setSubmitError] = useState('')
    const [numCorrect, setNumCorrect] = useState(null)
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const handleSubmit = () => {
        let correctCount = 0;
        if(answerOne === "" || answerTwo === "" || answerThree === "" || answerFour === "" || answerFive === "" || answerSix === "" || answerSeven === "" || answerEight === "" || answerNine === "" || answerTen === "") {
            setSubmitError("Please answer all questions to submit.")
            return
        } else {
            if(answerOne.toLowerCase() === allTriviaQs[indexOne].s.toLowerCase()) {
                correctCount++
                setAnswerOneStatus("correct")
            } else {
                setAnswerOneStatus("incorrect")
            }

            if(answerTwo.toLowerCase() === allTriviaQs[indexTwo].s.toLowerCase()) {
                correctCount++
                setAnswerTwoStatus("correct")
            } else {
                setAnswerTwoStatus("incorrect")
            }

            if(answerThree.toLowerCase() === allTriviaQs[indexThree].s.toLowerCase()) {
                correctCount++
                setAnswerThreeStatus("correct")
            } else {
                setAnswerThreeStatus("incorrect")
            }

            if(answerFour.toLowerCase() === allTriviaQs[indexFour].s.toLowerCase()) {
                correctCount++
                setAnswerFourStatus("correct")
            } else {
                setAnswerFourStatus("incorrect")
            }

            if(answerFive.toLowerCase() === allTriviaQs[indexFive].s.toLowerCase()) {
                correctCount++
                setAnswerFiveStatus("correct")
            } else {
                setAnswerFiveStatus("incorrect")
            }

            if(answerSix.toLowerCase() === allTriviaQs[indexSix].s.toLowerCase()) {
                correctCount++
                setAnswerSixStatus("correct")
            } else {
                setAnswerSixStatus("incorrect")
            }

            if(answerSeven.toLowerCase() === allTriviaQs[indexSeven].s.toLowerCase()) {
                correctCount++
                setAnswerSevenStatus("correct")
            } else {
                setAnswerSevenStatus("incorrect")
            }

            if(answerEight.toLowerCase() === allTriviaQs[indexEight].s.toLowerCase()) {
                correctCount++
                setAnswerEightStatus("correct")
            } else {
                setAnswerEightStatus("incorrect")
            }

            if(answerNine.toLowerCase() === allTriviaQs[indexNine].s.toLowerCase()) {
                correctCount++
                setAnswerNineStatus("correct")
            } else {
                setAnswerNineStatus("incorrect")
            }

            if(answerTen.toLowerCase() === allTriviaQs[indexTen].s.toLowerCase()) {
                correctCount++
                setAnswerTenStatus("correct")
            } else {
                setAnswerTenStatus("incorrect")
            }
        }

        setSubmitError('')
        setNumCorrect(correctCount)
        setHasSubmitted(true)
        return
    }

    if(sessionUser) {
        saveButton = (
            <button>Save Score</button>
        )
    } else {
        saveButton = ''
    }

    return (
        <div id='trivia-page-wrapper'>
            <div id='trivia-page-header'>
                <h1>Trivia Practice</h1>
            </div>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerOneStatus}`} htmlFor='question-one'>1. {allTriviaQs[indexOne].q}</label> {hasSubmitted && (
                        <span className={`answer-status-${answerOneStatus}`}> - {answerOneStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-one'
                        value={allTriviaQs[indexOne].a1}
                        onChange={(e) => setAnswerOne(e.target.value)}
                        required
                    />{allTriviaQs[indexOne].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-one'
                        value={allTriviaQs[indexOne].a2}
                        onChange={(e) => setAnswerOne(e.target.value)}
                    />{allTriviaQs[indexOne].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexOne].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-one'
                                value={allTriviaQs[indexOne].a3}
                                onChange={(e) => setAnswerOne(e.target.value)}
                            />{allTriviaQs[indexOne].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexOne].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-one'
                                value={allTriviaQs[indexOne].a4}
                                onChange={(e) => setAnswerOne(e.target.value)}
                            />{allTriviaQs[indexOne].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerTwoStatus}`} htmlFor='question-two'>2. {allTriviaQs[indexTwo].q}</label> {hasSubmitted && (
                        <span className={`answer-status-${answerTwoStatus}`}> - {answerTwoStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-two'
                        value={allTriviaQs[indexTwo].a1}
                        onChange={(e) => setAnswerTwo(e.target.value)}
                        required
                    />{allTriviaQs[indexTwo].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-two'
                        value={allTriviaQs[indexTwo].a2}
                        onChange={(e) => setAnswerTwo(e.target.value)}
                    />{allTriviaQs[indexTwo].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexTwo].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-two'
                                value={allTriviaQs[indexTwo].a3}
                                onChange={(e) => setAnswerTwo(e.target.value)}
                            />{allTriviaQs[indexTwo].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexTwo].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-two'
                                value={allTriviaQs[indexTwo].a4}
                                onChange={(e) => setAnswerTwo(e.target.value)}
                            />{allTriviaQs[indexTwo].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerThreeStatus}`} htmlFor='question-three'>3. {allTriviaQs[indexThree].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerThreeStatus}`}> - {answerThreeStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-three'
                        value={allTriviaQs[indexThree].a1}
                        onChange={(e) => setAnswerThree(e.target.value)}
                        required
                    />{allTriviaQs[indexThree].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-three'
                        value={allTriviaQs[indexThree].a2}
                        onChange={(e) => setAnswerThree(e.target.value)}
                    />{allTriviaQs[indexThree].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexThree].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-three'
                                value={allTriviaQs[indexThree].a3}
                                onChange={(e) => setAnswerThree(e.target.value)}
                            />{allTriviaQs[indexThree].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexThree].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-three'
                                value={allTriviaQs[indexThree].a4}
                                onChange={(e) => setAnswerThree(e.target.value)}
                            />{allTriviaQs[indexThree].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerFourStatus}`} htmlFor='question-four'>4. {allTriviaQs[indexFour].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerFourStatus}`}> - {answerFourStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-four'
                        value={allTriviaQs[indexFour].a1}
                        onChange={(e) => setAnswerFour(e.target.value)}
                        required
                    />{allTriviaQs[indexFour].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-four'
                        value={allTriviaQs[indexFour].a2}
                        onChange={(e) => setAnswerFour(e.target.value)}
                    />{allTriviaQs[indexFour].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexFour].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-four'
                                value={allTriviaQs[indexFour].a3}
                                onChange={(e) => setAnswerFour(e.target.value)}
                            />{allTriviaQs[indexFour].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexFour].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-four'
                                value={allTriviaQs[indexFour].a4}
                                onChange={(e) => setAnswerFour(e.target.value)}
                            />{allTriviaQs[indexFour].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerFiveStatus}`} htmlFor='question-five'>5. {allTriviaQs[indexFive].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerFiveStatus}`}> - {answerFiveStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-five'
                        value={allTriviaQs[indexFive].a1}
                        onChange={(e) => setAnswerFive(e.target.value)}
                        required
                    />{allTriviaQs[indexFive].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-five'
                        value={allTriviaQs[indexFive].a2}
                        onChange={(e) => setAnswerFive(e.target.value)}
                    />{allTriviaQs[indexFive].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexFive].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-five'
                                value={allTriviaQs[indexFive].a3}
                                onChange={(e) => setAnswerFive(e.target.value)}
                            />{allTriviaQs[indexFive].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexFive].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-five'
                                value={allTriviaQs[indexFive].a4}
                                onChange={(e) => setAnswerFive(e.target.value)}
                            />{allTriviaQs[indexFive].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerSixStatus}`} htmlFor='question-six'>6. {allTriviaQs[indexSix].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerSixStatus}`}> - {answerSixStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-six'
                        value={allTriviaQs[indexSix].a1}
                        onChange={(e) => setAnswerSix(e.target.value)}
                        required
                    />{allTriviaQs[indexSix].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-six'
                        value={allTriviaQs[indexSix].a2}
                        onChange={(e) => setAnswerSix(e.target.value)}
                    />{allTriviaQs[indexSix].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexSix].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-six'
                                value={allTriviaQs[indexSix].a3}
                                onChange={(e) => setAnswerSix(e.target.value)}
                            />{allTriviaQs[indexSix].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexSix].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-six'
                                value={allTriviaQs[indexSix].a4}
                                onChange={(e) => setAnswerSix(e.target.value)}
                            />{allTriviaQs[indexSix].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerSevenStatus}`} htmlFor='question-seven'>7. {allTriviaQs[indexSeven].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerSevenStatus}`}> - {answerSevenStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-seven'
                        value={allTriviaQs[indexSeven].a1}
                        onChange={(e) => setAnswerSeven(e.target.value)}
                        required
                    />{allTriviaQs[indexSeven].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-seven'
                        value={allTriviaQs[indexSeven].a2}
                        onChange={(e) => setAnswerSeven(e.target.value)}
                    />{allTriviaQs[indexSeven].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexSeven].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-seven'
                                value={allTriviaQs[indexSeven].a3}
                                onChange={(e) => setAnswerSeven(e.target.value)}
                            />{allTriviaQs[indexSeven].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexSeven].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-seven'
                                value={allTriviaQs[indexSeven].a4}
                                onChange={(e) => setAnswerSeven(e.target.value)}
                            />{allTriviaQs[indexSeven].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerEightStatus}`} htmlFor='question-eight'>8. {allTriviaQs[indexEight].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerEightStatus}`}> - {answerEightStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-eight'
                        value={allTriviaQs[indexEight].a1}
                        onChange={(e) => setAnswerEight(e.target.value)}
                        required
                    />{allTriviaQs[indexEight].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-eight'
                        value={allTriviaQs[indexEight].a2}
                        onChange={(e) => setAnswerEight(e.target.value)}
                    />{allTriviaQs[indexEight].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexEight].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-eight'
                                value={allTriviaQs[indexEight].a3}
                                onChange={(e) => setAnswerEight(e.target.value)}
                            />{allTriviaQs[indexEight].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexEight].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-eight'
                                value={allTriviaQs[indexEight].a4}
                                onChange={(e) => setAnswerEight(e.target.value)}
                            />{allTriviaQs[indexEight].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerNineStatus}`} htmlFor='question-nine'>9. {allTriviaQs[indexNine].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerNineStatus}`}> - {answerNineStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-nine'
                        value={allTriviaQs[indexNine].a1}
                        onChange={(e) => setAnswerNine(e.target.value)}
                        required
                    />{allTriviaQs[indexNine].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-nine'
                        value={allTriviaQs[indexNine].a2}
                        onChange={(e) => setAnswerNine(e.target.value)}
                    />{allTriviaQs[indexNine].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexNine].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-nine'
                                value={allTriviaQs[indexNine].a3}
                                onChange={(e) => setAnswerNine(e.target.value)}
                            />{allTriviaQs[indexNine].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexNine].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-nine'
                                value={allTriviaQs[indexNine].a4}
                                onChange={(e) => setAnswerNine(e.target.value)}
                            />{allTriviaQs[indexNine].a4}
                        </>
                    )}
                </div>
            </section>
            <section className='question-container'>
                <div className='question-text'>
                    <label id={`${answerTenStatus}`} htmlFor='question-ten'>10. {allTriviaQs[indexTen].q}</label>{hasSubmitted && (
                        <span className={`answer-status-${answerTenStatus}`}> - {answerTenStatus.toUpperCase()}</span>
                    )}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-ten'
                        value={allTriviaQs[indexTen].a1}
                        onChange={(e) => setAnswerTen(e.target.value)}
                        required
                    />{allTriviaQs[indexTen].a1}
                </div>
                <div className='input-container'>
                    <input
                        type='radio'
                        name='question-ten'
                        value={allTriviaQs[indexTen].a2}
                        onChange={(e) => setAnswerTen(e.target.value)}
                    />{allTriviaQs[indexTen].a2}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexTen].a3 && (
                        <>
                            <input
                                type='radio'
                                name='question-ten'
                                value={allTriviaQs[indexTen].a3}
                                onChange={(e) => setAnswerTen(e.target.value)}
                            />{allTriviaQs[indexTen].a3}
                        </>
                    )}
                </div>
                <div className='input-container'>
                    {allTriviaQs[indexTen].a4 && (
                        <>
                            <input
                                type='radio'
                                name='question-one'
                                value={allTriviaQs[indexTen].a4}
                                onChange={(e) => setAnswerTen(e.target.value)}
                            />{allTriviaQs[indexTen].a4}
                        </>
                    )}
                </div>
            </section>
            <div id='trivia-submit-container'>
                {submitError && (<p className="error-text">{submitError}</p>)}
                <button onClick={handleSubmit} disabled={hasSubmitted}>Submit</button>
            </div>
            {hasSubmitted && (
                <section>
                    <h3>You got {numCorrect}/10 correct!</h3>
                    {saveButton}
                </section>
            )}
        </div>
    )
}

export default DailyTrivia;
