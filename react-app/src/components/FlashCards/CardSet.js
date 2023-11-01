import { useParams } from 'react-router-dom';
import IndividualCard from './IndividualCard';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getOneSet } from '../../store/cards';
import Box from '@mui/material/Box';
import Button from '@mui/joy/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { createNewSession } from '../../store/studySessions';
import NavDrawer from '../NavDrawer';

const CardSet = () => {
    const { setId } = useParams()
    const dispatch =  useDispatch()

    const currSet = useSelector(state => state.cards.singleSet)
    const sessionData = useSelector(state => state.study.singleSession)
    const currSetQs = currSet.all_questions
    let currSetArr = []

    const [cardNum, setCardNum] = useState(1)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isStarted, setIsStarted] = useState(false)
    const [numCorrect, setNumCorrect] = useState(0)
    const [numIncorrect, setNumIncorrect] = useState(0)
    const [outOf, setOutOf] = useState(0)
    const [startTime, setStartTime] = useState(new Date())
    if(isLoaded && currSetQs) {
        currSetArr = Object.values(currSetQs)
    }

    const [hasSubmitted, setHasSubmitted] = useState(false)

    const handleSubmitStudySession = async() => {
        if(outOf === 0) {
            return
        }

        const hourNum = 60 * 60000
        const minuteNum = 60000
        const secondNum = 1000
        let hours
        let minutes
        let seconds

        const timeElapsed = new Date() - startTime
        if(timeElapsed > hourNum) {
            hours = Math.floor(timeElapsed / hourNum)
            const timeLeft = timeElapsed - (hourNum * hours)
            minutes = Math.floor(timeLeft / minuteNum)
            const newTimeLeft = timeLeft - (minuteNum * minutes)
            seconds = Math.floor(newTimeLeft / secondNum)
        } else {
            hours = 0
            if(timeElapsed > minuteNum) {
                minutes = Math.floor(timeElapsed / minuteNum)
                const timeLeft = timeElapsed - (minuteNum * minutes)
                seconds = Math.floor(timeLeft / secondNum)
            } else {
                minutes = 0
                seconds = Math.floor(timeElapsed / secondNum)
            }
        }

        const timeSpentStr = `${hours} hours, ${minutes} minutes, ${seconds} seconds`
        const category = currSet?.category

        const studySession = {
            num_correct: numCorrect,
            num_incorrect: numIncorrect,
            out_of: outOf,
            time_spent: timeSpentStr,
            session_type: "Flashcards",
            category: category
        }

        await dispatch(createNewSession(studySession))
        setHasSubmitted(true)
        return
    }

    const reset = () => {
        setCardNum(1)
        setNumCorrect(0)
        setNumIncorrect(0)
        setOutOf(0)
        setHasSubmitted(false)
        setIsStarted(true)
        setStartTime(new Date())
        return
    }

    useEffect(() => {
        dispatch(getOneSet(setId)).then(() => {
            setIsLoaded(true)
        })
    }, [dispatch, setId])



    return (
        <Box sx={{ display: 'flex'}}>
        <NavDrawer />
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
            {isLoaded && (
            <div id='flash-card-page-wrapper'>
                <div id='fc-name-description'>
                    <h1>{currSet?.title}</h1>
                    <p>{currSet?.description}</p>
                </div>
                {!isStarted ? (
                    <div id='start-button-wrap'>
                        <Button variant="solid" color="primary" onClick={() => {
                            reset()
                        }}>Start Study Session</Button>
                        {hasSubmitted ? (
                            <div id='submitted-sess-text'>
                                <span>Great job!</span>
                                <span>You studied for {sessionData?.time_spent} and got {sessionData?.correct}/{sessionData?.out_of} correct!</span>
                            </div>
                        ) : ''}
                    </div>
                ) : (
                    <>
                        <div id='fc-options-holder'>
                            {currSetArr?.filter(item => item.id === cardNum)?.map(item => (
                                <IndividualCard front={item?.front} back={item?.back} />
                            ))}
                        </div>
                        <div id='fc-arrows-holder'>
                            <CloseIcon onClick={() => {
                                setNumIncorrect(numIncorrect + 1)
                                setOutOf(outOf + 1)
                                if(cardNum === currSetArr?.length) {
                                    setCardNum(1)
                                } else if (cardNum > currSetArr?.length) {
                                    setCardNum(1)
                                } else {
                                    setCardNum(cardNum + 1)
                                }
                            }} color="error" />
                            <Button onClick={() => {
                                setIsStarted(false)
                                handleSubmitStudySession()
                            }} variant="plain">End Session</Button>
                            <CheckIcon onClick={() => {
                                setNumCorrect(numCorrect + 1)
                                setOutOf(outOf + 1)
                                if(cardNum !== currSetArr?.length) {
                                    setCardNum(cardNum+1)
                                } else {
                                    setCardNum(1)
                                }
                            }} color="success" />
                        </div>
                    </>
                )}
            </div>
            )}
        </Box>
        </Box>
    )
}

export default CardSet;
