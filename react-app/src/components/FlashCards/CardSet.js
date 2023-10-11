import { useParams } from 'react-router-dom'
import IndividualCard from './IndividualCard';
import { javaScriptCards } from './flashcardlist';

const CardSet = ({set}) => {
    console.log(javaScriptCards)
    return (
        <div style={{"marginTop": "70px"}} id='flash-card-page-wrapper'>
            <div id='fc-options-holder'>

                {javaScriptCards.map(card => (
                        <IndividualCard front={card.front} back={card.back} />
                ))}
            </div>
        </div>
    )
}

export default CardSet;
