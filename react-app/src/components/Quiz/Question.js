const Question = ({ question }) => {
    return (
        <>
            <span style={{"border": "1px solid black", "width": "500px"}}>{question?.title}</span>
        </>
    )
}

export default Question;
