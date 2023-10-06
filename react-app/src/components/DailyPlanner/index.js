import './DailyPlanner.css';
import { useState } from 'react';
import sampleTasks from './sampletaskdata';

const DailyPlanner = () => {
    const [fillOne, setFillOne] = useState("none")
    const [fillTwo, setFillTwo] = useState("none")
    const [fillThree, setFillThree] = useState("none")
    const [fillFour, setFillFour] = useState("none")
    const [fillFive, setFillFive] = useState("none")
    const [fillSix, setFillSix] = useState("none")
    const [fillSeven, setFillSeven] = useState("none")
    const [fillEight, setFillEight] = useState("none")
    const [fillNine, setFillNine] = useState("none")
    const [fillTen, setFillTen] = useState("none")

    const [fillEleven, setFillEleven] = useState("none")
    const [fillTwelve, setFillTwelve] = useState("none")
    const [fillThirteen, setFillThirteen] = useState("none")
    const [fillFourteen, setFillFourteen] = useState("none")
    const [fillFifteen, setFillFifteen] = useState("none")
    const [fillSixteen, setFillSixteen] = useState("none")
    const [fillSeventeen, setFillSeventeen] = useState("none")
    const [fillEighteen, setFillEighteen] = useState("none")
    const [fillNineteen, setFillNineteen] = useState("none")
    const [fillTwenty, setFillTwenty] = useState("none")

    const [fillTwentyOne, setFillTwentyOne] = useState("none")
    const [fillTwentyTwo, setFillTwentyTwo] = useState("none")
    const [fillTwentyThree, setFillTwentyThree] = useState("none")
    const [fillTwentyFour, setFillTwentyFour] = useState("none")
    const [fillTwentyFive, setFillTwentyFive] = useState("none")
    const [fillTwentySix, setFillTwentySix] = useState("none")
    const [fillTwentySeven, setFillTwentySeven] = useState("none")
    const [fillTwentyEight, setFillTwentyEight] = useState("none")
    const [fillTwentyNine, setFillTwentyNine] = useState("none")
    const [fillThirty, setFillThirty] = useState("none")

    const [fillThirtyOne, setFillThirtyOne] = useState("none")
    const [fillThirtyTwo, setFillThirtyTwo] = useState("none")
    const [fillThirtyThree, setFillThirtyThree] = useState("none")
    const [fillThirtyFour, setFillThirtyFour] = useState("none")
    const [fillThirtyFive, setFillThirtyFive] = useState("none")
    const [fillThirtySix, setFillThirtySix] = useState("none")
    const [fillThirtySeven, setFillThirtySeven] = useState("none")
    const [fillThirtyEight, setFillThirtyEight] = useState("none")
    const [fillThirtyNine, setFillThirtyNine] = useState("none")
    const [fillForty, setFillForty] = useState("none")

    const [fillFortyOne, setFillFortyOne] = useState("none")
    const [fillFortyTwo, setFillFortyTwo] = useState("none")
    const [fillFortyThree, setFillFortyThree] = useState("none")
    const [fillFortyFour, setFillFortyFour] = useState("none")
    const [fillFortyFive, setFillFortyFive] = useState("none")
    const [fillFortySix, setFillFortySix] = useState("none")
    const [fillFortySeven, setFillFortySeven] = useState("none")
    const [fillFortyEight, setFillFortyEight] = useState("none")
    const [fillFortyNine, setFillFortyNine] = useState("none")
    const [fillFifty, setFillFifty] = useState("none")

    const [fillFiftyOne, setFillFiftyOne] = useState("none")
    const [fillFiftyTwo, setFillFiftyTwo] = useState("none")
    const [fillFiftyThree, setFillFiftyThree] = useState("none")
    const [fillFiftyFour, setFillFiftyFour] = useState("none")
    const [fillFiftyFive, setFillFiftyFive] = useState("none")
    const [fillFiftySix, setFillFiftySix] = useState("none")

    const [spanOneText, setSpanOneText] = useState('')
    const [spanTwoText, setSpanTwoText] = useState('')
    const [spanThreeText, setSpanThreeText] = useState('')
    const [spanFourText, setSpanFourText] = useState('')
    const [spanFiveText, setSpanFiveText] = useState('')
    const [spanSixText, setSpanSixText] = useState('')
    const [spanSevenText, setSpanSevenText] = useState('')
    const [spanEightText, setSpanEightText] = useState('')
    const [spanNineText, setSpanNineText] = useState('')
    const [spanTenText, setSpanTenText] = useState('')

    const [spanElevenText, setSpanElevenText] = useState('')
    const [spanTwelveText, setSpanTwelveText] = useState('')
    const [spanThirteenText, setSpanThirteenText] = useState('')
    const [spanFourteenText, setSpanFourteenText] = useState('')
    const [spanFifteenText, setSpanFifteenText] = useState('')
    const [spanSixteenText, setSpanSixteenText] = useState('')
    const [spanSeventeenText, setSpanSeventeenText] = useState('')
    const [spanEighteenText, setSpanEighteenText] = useState('')
    const [spanNineteenText, setSpanNineteenText] = useState('')
    const [spanTwentyText, setSpanTwentyText] = useState('')

    const [spanTwentyOneText, setSpanTwentyOneText] = useState('')
    const [spanTwentyTwoText, setSpanTwentyTwoText] = useState('')
    const [spanTwentyThreeText, setSpanTwentyThreeText] = useState('')
    const [spanTwentyFourText, setSpanTwentyFourText] = useState('')
    const [spanTwentyFiveText, setSpanTwentyFiveText] = useState('')
    const [spanTwentySixText, setSpanTwentySixText] = useState('')
    const [spanTwentySevenText, setSpanTwentySevenText] = useState('')
    const [spanTwentyEightText, setSpanTwentyEightText] = useState('')
    const [spanTwentyNineText, setSpanTwentyNineText] = useState('')
    const [spanThirtyText, setSpanThirtyText] = useState('')

    const [spanThirtyOneText, setSpanThirtyOneText] = useState('')
    const [spanThirtyTwoText, setSpanThirtyTwoText] = useState('')
    const [spanThirtyThreeText, setSpanThirtyThreeText] = useState('')
    const [spanThirtyFourText, setSpanThirtyFourText] = useState('')
    const [spanThirtyFiveText, setSpanThirtyFiveText] = useState('')
    const [spanThirtySixText, setSpanThirtySixText] = useState('')
    const [spanThirtySevenText, setSpanThirtySevenText] = useState('')
    const [spanThirtyEightText, setSpanThirtyEightText] = useState('')
    const [spanThirtyNineText, setSpanThirtyNineText] = useState('')
    const [spanFortyText, setSpanFortyText] = useState('')

    const [spanFortyOneText, setSpanFortyOneText] = useState('')
    const [spanFortyTwoText, setSpanFortyTwoText] = useState('')
    const [spanFortyThreeText, setSpanFortyThreeText] = useState('')
    const [spanFortyFourText, setSpanFortyFourText] = useState('')
    const [spanFortyFiveText, setSpanFortyFiveText] = useState('')
    const [spanFortySixText, setSpanFortySixText] = useState('')
    const [spanFortySevenText, setSpanFortySevenText] = useState('')
    const [spanFortyEightText, setSpanFortyEightText] = useState('')
    const [spanFortyNineText, setSpanFortyNineText] = useState('')
    const [spanFiftyText, setSpanFiftyText] = useState('')

    const [spanFiftyOneText, setSpanFiftyOneText] = useState('')
    const [spanFiftyTwoText, setSpanFiftyTwoText] = useState('')
    const [spanFiftyThreeText, setSpanFiftyThreeText] = useState('')
    const [spanFiftyFourText, setSpanFiftyFourText] = useState('')
    const [spanFiftyFiveText, setSpanFiftyFiveText] = useState('')
    const [spanFiftySixText, setSpanFiftySixText] = useState('')

    const [taskDropdown, setTaskDropdown] = useState(false)
    const [selectedSlot, setSelectedSlot] = useState(null)

    const handleAssignment = (slot, task) => {
        if(slot === "one") {
            setFillOne(task.color)
            setSpanOneText(task.title)
            return
        } else if (slot === "two") {
            setFillTwo(task.color)
            setSpanTwoText(task.title)
            return
        } else if (slot === "three") {
            setFillThree(task.color)
            setSpanThreeText(task.title)
            return
        } else if (slot === "four") {
            setFillFour(task.color)
            setSpanFourText(task.title)
            return
        } else if (slot === "five") {
            setFillFive(task.color)
            setSpanFiveText(task.title)
            return
        } else if (slot === "six") {
            setFillSix(task.color)
            setSpanSixText(task.title)
            return
        } else if (slot === "seven") {
            setFillSeven(task.color)
            setSpanSevenText(task.title)
            return
        } else if (slot === "eight") {
            setFillEight(task.color)
            setSpanEightText(task.title)
            return
        } else if (slot === "nine") {
            setFillNine(task.color)
            setSpanNineText(task.title)
            return
        } else if (slot === "ten") {
            setFillTen(task.color)
            setSpanTenText(task.title)
            return
        } else if (slot === "eleven") {
            setFillEleven(task.color)
            setSpanElevenText(task.title)
            return
        } else if (slot === "twelve") {
            setFillTwelve(task.color)
            setSpanTwelveText(task.title)
            return
        } else if (slot === "thirteen") {
            setFillThirteen(task.color)
            setSpanThirteenText(task.title)
            return
        } else if (slot === "fourteen") {
            setFillFourteen(task.color)
            setSpanFourteenText(task.title)
            return
        } else if (slot === "fifteen") {
            setFillFifteen(task.color)
            setSpanFifteenText(task.title)
            return
        } else if (slot === "sixteen") {
            setFillSixteen(task.color)
            setSpanSixteenText(task.title)
            return
        } else if (slot === "seventeen") {
            setFillSeventeen(task.color)
            setSpanSeventeenText(task.title)
            return
        } else if (slot === "eighteen") {
            setFillEighteen(task.color)
            setSpanEighteenText(task.title)
            return
        } else if (slot === "nineteen") {
            setFillNineteen(task.color)
            setSpanNineteenText(task.title)
            return
        } else if (slot === "twenty") {
            setFillTwenty(task.color)
            setSpanTwentyText(task.title)
            return
        } else if (slot === "twentyOne") {
            setFillTwentyOne(task.color)
            setSpanTwentyOneText(task.title)
            return
        } else if (slot === "twentyTwo") {
            setFillTwentyTwo(task.color)
            setSpanTwentyTwoText(task.title)
            return
        } else if (slot === "twentyThree") {
            setFillTwentyThree(task.color)
            setSpanTwentyThreeText(task.title)
            return
        } else if (slot === "twentyFour") {
            setFillTwentyFour(task.color)
            setSpanTwentyFourText(task.title)
            return
        } else if (slot === "twentyFive") {
            setFillTwentyFive(task.color)
            setSpanTwentyFiveText(task.title)
            return
        } else if (slot === "twentySix") {
            setFillTwentySix(task.color)
            setSpanTwentySixText(task.title)
            return
        } else if (slot === "twentySeven") {
            setFillTwentySeven(task.color)
            setSpanTwentySevenText(task.title)
            return
        } else if (slot === "twentyEight") {
            setFillTwentyEight(task.color)
            setSpanTwentyEightText(task.title)
            return
        } else if (slot === "twentyNine") {
            setFillTwentyNine(task.color)
            setSpanTwentyNineText(task.title)
            return
        } else if (slot === "thirty") {
            setFillThirty(task.color)
            setSpanThirtyText(task.title)
            return
        } else if (slot === "thirtyOne") {
            setFillThirtyOne(task.color)
            setSpanThirtyOneText(task.title)
            return
        } else if (slot === "thirtyTwo") {
            setFillThirtyTwo(task.color)
            setSpanThirtyTwoText(task.title)
            return
        } else if (slot === "thirtyThree") {
            setFillThirtyThree(task.color)
            setSpanThirtyThreeText(task.title)
            return
        } else if (slot === "thirtyFour") {
            setFillThirtyFour(task.color)
            setSpanThirtyFourText(task.title)
            return
        } else if (slot === "thirtyFive") {
            setFillThirtyFive(task.color)
            setSpanThirtyFiveText(task.title)
            return
        } else if (slot === "thirtySix") {
            setFillThirtySix(task.color)
            setSpanThirtySixText(task.title)
            return
        } else if (slot === "thirtySeven") {
            setFillThirtySeven(task.color)
            setSpanThirtySevenText(task.title)
            return
        } else if (slot === "thirtyEight") {
            setFillThirtyEight(task.color)
            setSpanThirtyEightText(task.title)
            return
        } else if (slot === "thirtyNine") {
            setFillThirtyNine(task.color)
            setSpanThirtyEightText(task.title)
            return
        } else if (slot === "forty") {
            setFillForty(task.color)
            setSpanFortyText(task.title)
            return
        } else if (slot === "fortyOne") {
            setFillFortyOne(task.color)
            setSpanFortyOneText(task.title)
            return
        } else if (slot === "fortyTwo") {
            setFillFortyTwo(task.color)
            setSpanFortyTwoText(task.title)
            return
        } else if (slot === "fortyThree") {
            setFillFortyThree(task.color)
            setSpanFortyThreeText(task.title)
            return
        } else if (slot === "fortyFour") {
            setFillFortyFour(task.color)
            setSpanFortyFourText(task.title)
            return
        } else if (slot === "fortyFive") {
            setFillFortyFive(task.color)
            setSpanFortyFiveText(task.title)
            return
        } else if (slot === "fortySix") {
            setFillFortySix(task.color)
            setSpanFortySixText(task.title)
            return
        } else if (slot === "fortySeven") {
            setFillFortySeven(task.color)
            setSpanFortySevenText(task.title)
            return
        } else if (slot === "fortyEight") {
            setFillFortyEight(task.color)
            setSpanFortyEightText(task.title)
            return
        } else if (slot === "fortyNine") {
            setFillFortyNine(task.color)
            setSpanFortyOneText(task.title)
            return
        } else if (slot === "fifty") {
            setFillFifty(task.color)
            setSpanFiftyText(task.title)
            return
        } else if (slot === "fiftyOne") {
            setFillFiftyOne(task.color)
            setSpanFiftyOneText(task.title)
            return
        } else if (slot === "fiftyTwo") {
            setFillFiftyTwo(task.color)
            setSpanFiftyTwoText(task.title)
            return
        } else if (slot === "fiftyThree") {
            setFillFiftyThree(task.color)
            setSpanFiftyThreeText(task.title)
            return
        } else if (slot === "fiftyFour") {
            setFillFiftyFour(task.color)
            setSpanFiftyFourText(task.title)
            return
        } else if (slot === "fiftyFive") {
            setFillFiftyFive(task.color)
            setSpanFiftyFiveText(task.title)
            return
        } else {
            setFillFiftySix(task.color)
            setSpanFiftySixText(task.title)
            return
        }
    }

    const tasksOptions = sampleTasks.map(task => (
        <div onClick={() => {
            handleAssignment(selectedSlot, task)
        }}>{task.title}</div>
    ))

    const dropdown = (
        <div id={`task-dropdown-${taskDropdown}`}>
            {tasksOptions}
        </div>
    )

    return (
        <div id='daily-planner-wrapper'>
            {dropdown}
            <section className='time-container'>
                <span>8:00 AM</span>
                <span>8:15 AM</span>
                <span>8:30 AM</span>
                <span>8:45 AM</span>
                <span>9:00 AM</span>
                <span>9:15 AM</span>
                <span>9:30 AM</span>
                <span>9:45 AM</span>
                <span>10:00 AM</span>
                <span>10:15 AM</span>
                <span>10:30 AM</span>
                <span>10:45 AM</span>
                <span>11:00 AM</span>
                <span>11:15 AM</span>
                <span>11:30 AM</span>
                <span>11:45 AM</span>
                <span>12:00 PM</span>
                <span>12:15 PM</span>
                <span>12:30 PM</span>
                <span>12:45 PM</span>
                <span>1:00 PM</span>
                <span>1:15 PM</span>
                <span>1:30 PM</span>
                <span>1:45 PM</span>
                <span>2:00 PM</span>
                <span>2:15 PM</span>
                <span>2:30 PM</span>
                <span>2:45 PM</span>
                <span>3:00 PM</span>
                <span>3:15 PM</span>
                <span>3:30 PM</span>
                <span>3:45 PM</span>
                <span>4:00 PM</span>
                <span>4:15 PM</span>
                <span>4:30 PM</span>
                <span>4:45 PM</span>
                <span>5:00 PM</span>
                <span>5:15 PM</span>
                <span>5:30 PM</span>
                <span>5:45 PM</span>
                <span>6:00 PM</span>
                <span>6:15 PM</span>
                <span>6:30 PM</span>
                <span>6:45 PM</span>
                <span>7:00 PM</span>
                <span>7:15 PM</span>
                <span>7:30 PM</span>
                <span>7:45 PM</span>
                <span>8:00 PM</span>
                <span>8:15 PM</span>
                <span>8:30 PM</span>
                <span>8:45 PM</span>
                <span>9:00 PM</span>
                <span>9:15 PM</span>
                <span>9:30 PM</span>
                <span>9:45 PM</span>
            </section>
            <section className='space-container'>
                <div className={`fifteen-min-span ${fillOne}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("one")
                }}>
                    <span>{spanOneText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwo}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("two")
                }}>
                    <span>{spanTwoText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThree}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("three")
                }}>
                    <span>{spanThreeText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFour}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("four")
                }}>
                    <span>{spanFourText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFive}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("five")
                }}>
                    <span>{spanFiveText}</span>
                </div>
                <div className={`fifteen-min-span ${fillSix}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("six")
                }}>
                    <span>{spanSixText}</span>
                </div>
                <div className={`fifteen-min-span ${fillSeven}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("seven")
                }}>
                    <span>{spanSevenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillEight}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("eight")
                }}>
                    <span>{spanEightText}</span>
                </div>
                <div className={`fifteen-min-span ${fillNine}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("nine")
                }}>
                    <span>{spanNineText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("ten")
                }}>
                    <span>{spanTenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillEleven}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("eleven")
                }}>
                    <span>{spanElevenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwelve}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twelve")
                }}>
                    <span>{spanTwelveText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirteen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirteen")
                }}>
                    <span>{spanThirteenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFourteen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fourteen")
                }}>
                    <span>{spanFourteenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFifteen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fifteen")
                }}>
                    <span>{spanFifteenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillSixteen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("sixteen")
                }}>
                    <span>{spanSixteenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillSeventeen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("seventeen")
                }}>
                    <span>{spanSeventeenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillEighteen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("eighteen")
                }}>
                    <span>{spanEighteenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillNineteen}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("nineteen")
                }}>
                    <span>{spanNineteenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwenty}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twenty")
                }}>
                    <span>{spanTwentyText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyOne}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyOne")
                }}>
                    <span>{spanTwentyOneText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyTwo}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyTwo")
                }}>
                    <span>{spanTwentyTwoText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyThree}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyThree")
                }}>
                    <span>{spanTwentyThreeText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyFour}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyFour")
                }}>
                    <span>{spanTwentyFourText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyFive}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyFive")
                }}>
                    <span>{spanTwentyFiveText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentySix}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentySix")
                }}>
                    <span>{spanTwentySixText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentySeven}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentySeven")
                }}>
                    <span>{spanTwentySevenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyEight}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyEight")
                }}>
                    <span>{spanTwentyEightText}</span>
                </div>
                <div className={`fifteen-min-span ${fillTwentyNine}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("twentyNine")
                }}>
                    <span>{spanTwentyNineText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirty}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirty")
                }}>
                    <span>{spanThirtyText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyOne}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyOne")
                }}>
                    <span>{spanThirtyOneText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyTwo}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyTwo")
                }}>
                    <span>{spanThirtyTwoText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyThree}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyThree")
                }}>
                    <span>{spanThirtyThreeText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyFour}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyFour")
                }}>
                    <span>{spanThirtyFourText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyFive}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyFive")
                }}>
                    <span>{spanThirtyFiveText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtySix}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtySix")
                }}>
                    <span>{spanThirtySixText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtySeven}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtySeven")
                }}>
                    <span>{spanThirtySevenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyEight}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyEight")
                }}>
                    <span>{spanThirtyEightText}</span>
                </div>
                <div className={`fifteen-min-span ${fillThirtyNine}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("thirtyNine")
                }}>
                    <span>{spanThirtyNineText}</span>
                </div>
                <div className={`fifteen-min-span ${fillForty}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("forty")
                }}>
                    <span>{spanFortyText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyOne}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyOne")
                }}>
                    <span>{spanFortyOneText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyTwo}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyTwo")
                }}>
                    <span>{spanFortyTwoText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyThree}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyThree")
                }}>
                    <span>{spanFortyThreeText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyFour}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyFour")
                }}>
                    <span>{spanFortyFourText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyFive}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyFive")
                }}>
                    <span>{spanFortyFiveText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortySix}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortySix")
                }}>
                    <span>{spanFortySixText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortySeven}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortySeven")
                }}>
                    <span>{spanFortySevenText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyEight}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyEight")
                }}>
                    <span>{spanFortyEightText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFortyNine}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fortyNine")
                }}>
                    <span>{spanFortyNineText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFifty}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fifty")
                }}>
                    <span>{spanFiftyText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFiftyOne}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fiftyOne")
                }}>
                    <span>{spanFiftyOneText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFiftyTwo}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fiftyTwo")
                }}>
                    <span>{spanFiftyTwoText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFiftyThree}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fiftyThree")
                }}>
                    <span>{spanFiftyThreeText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFiftyFour}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fiftyFour")
                }}>
                    <span>{spanFiftyFourText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFiftyFive}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fiftyFive")
                }}>
                    <span>{spanFiftyFiveText}</span>
                </div>
                <div className={`fifteen-min-span ${fillFiftySix}`} onClick={() => {
                    taskDropdown === true ? setTaskDropdown(false) : setTaskDropdown(true)
                    taskDropdown === true ? setSelectedSlot(null) : setSelectedSlot("fiftySix")
                }}>
                    <span>{spanFiftySixText}</span>
                </div>
            </section>
        </div>
    )
}

export default DailyPlanner;
