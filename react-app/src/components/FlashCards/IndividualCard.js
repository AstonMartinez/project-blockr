import * as React from 'react'
import { useState } from 'react'
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card'


const IndividualCard = ({front, back}) => {
    const [cardSide, setCardSide] = useState("front")
    let cardContent;

    if(cardSide === "front") {
        cardContent = front
    } else {
        cardContent = back
    }

    const card = (
            <React.Fragment sx={{border: "1px solid lightgray"}}>
            <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                {cardContent}
            </Typography>
            </CardContent>
            <CardActions>
            <Button onClick={() => {
                cardSide === "front" ? setCardSide("back") : setCardSide("front")
            }} size="small">See {cardSide === "front" ? "back" : "front"}</Button>
            </CardActions>
        </React.Fragment>
    )

    return (
        // <div>
            // <div>
            <Card className='fc-set-wrapper' variant="outlined">{card}</Card>
            // </div>
        // </div>
    )
}

export default IndividualCard;
