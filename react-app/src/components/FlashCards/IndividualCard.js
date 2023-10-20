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

    return (
        <div id='fc-card-holder'>
            <Card variant="outlined" id='flsh-crd'>
                <React.Fragment>
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
            </Card>
        </div>
    )
}

export default IndividualCard;
