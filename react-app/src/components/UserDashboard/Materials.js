import { useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { fetchMaterials } from '../../store/materials';
import { useDispatch, useSelector } from "react-redux";
import Title from './Title';
import Button from "@mui/joy/Button";

const MaterialsDisplay = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const allMaterials = useSelector(state => state.materials.allMaterials)

    const userCards = allMaterials.cards
    const userQuizzes = allMaterials.quizzes

    useEffect(() => {
        dispatch(fetchMaterials())
    }, [dispatch])

    return (
        <>
            <div>
                <Title>My Flash Cards</Title>
                {!userCards ? (
                    <div>
                        <h3>You haven't made any flash cards yet!</h3>
                        <button onClick={() => history.push('/sets/new')}>Create Set</button>
                    </div>
                ) : (
                    <div style={{ "display": "flex", "flexDirection": "column", "flexWrap": "wrap", "height": "200px", "alignItems": "center" }}>
                        {Object.values(userCards).map((set) => (
                            <div style={{ "display": "flex" }}>
                                <p className='materials-list-item'><NavLink exact to={`/sets/${set.id}`}>{set.title}</NavLink></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div style={{ "border": "0.5px solid lightgray", "marginBottom": "20px" }}></div>
            <div>
                <Title>My Quizzes</Title>
                {!userQuizzes ? (
                    <div>
                        <h3>You haven't made any quizzes yet!</h3>
                        <button onClick={() => history.push('/trivia/new')}>Create Quiz</button>
                    </div>
                ) : (
                    <div style={{ "display": "flex", "flexDirection": "column", "flexWrap": "wrap", "height": "200px", "alignItems": "center", "textAlign": "center" }}>
                        {Object.values(userQuizzes).map((quiz) => (
                            <div style={{ "display": "flex" }}>
                                <p className='materials-list-item'><NavLink exact to={`/quizzes/${quiz.id}`}>{quiz.title}</NavLink></p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    )

}

export default MaterialsDisplay;
