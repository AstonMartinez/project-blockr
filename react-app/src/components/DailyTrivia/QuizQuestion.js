import { useState } from 'react';

const QuizQuestion = ({ questionData, hasSubmitted }) => {
    const [answer, setAnswer] = useState('')
    // console.log(questionData)
    return (
        <>
            <div className='question-holder'>
            <label htmlFor={`question`}>{questionData?.question}</label>
            {hasSubmitted && questionData.solution === answer ? (
                <p>Correct</p>
            ) : ''}
            {hasSubmitted && questionData.solution !== answer ? (
                <>
                    <p>Incorrect</p>
                    {/* <p>Your answer: {answer}</p> */}
                    <p>Solution: {questionData.solution}</p>
                </>
            ) : ''}
                <section className='answer-option-wrapper'>
                    <input
                        name={`question`}
                        type="radio"
                        value={questionData?.answer_one}
                        onChange={(e) => setAnswer(e.target.value)}
                    />{questionData?.answer_one}
                </section>
                <section className='answer-option-wrapper'>
                    <input
                        name={`question`}
                        type="radio"
                        value={questionData?.answer_two}
                        onChange={(e) => setAnswer(e.target.value)}
                    />{questionData?.answer_two}
                </section>
                {questionData?.answer_three !== null && (
                    <section className='answer-option-wrapper'>
                        <input
                        name={`question`}
                        type="radio"
                        value={questionData?.answer_three}
                        onChange={(e) => setAnswer(e.target.value)}
                        />{questionData?.answer_three}
                    </section>
                )}

                {questionData?.answer_four !== null && (
                    <section className='answer-option-wrapper'>
                        <input
                        name={`question`}
                        type="radio"
                        value={questionData?.answer_four}
                        onChange={(e) => setAnswer(e.target.value)}
                        />{questionData?.answer_four}
                    </section>
                )}
                <input id='quiz-user-answer' style={{ "display": "none" }} value={answer} />
                <input id='quiz-question-solution' style={{ "display": "none" }} value={questionData?.solution} />
            </div>
        </>
    )
}

export default QuizQuestion;
