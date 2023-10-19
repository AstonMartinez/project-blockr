import { getByQuizId } from '../../store/triviaQuestions'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Question = ({ question }) => {
    const dispatch = useDispatch()
    return (
        <>
            <span style={{"border": "1px solid black", "width": "500px"}}>{question?.title}</span>
        </>
    )
}

export default Question;
