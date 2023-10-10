import './FlashCards.css'
import { javaScriptCards, pythonCards, reactCards, cSharpCards, javaCards, cPlusPlusCards, angularCards, nextJSCards, rustCards, typeScriptCards, svelteCards } from './flashcardlist'
import Card from '@mui/material/Card'
import * as React from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const FlashCards = () => {

      const jsCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              JavaScript
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const pyCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Python
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const reCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              React
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const csCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              C#
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const cpCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              C++
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const jaCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Java
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const anCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Angular
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const neCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              NextJS
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const ruCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Rust
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const tsCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              TypeScript
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );

      const svCard = (
        <React.Fragment>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Svelte
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Practice</Button>
          </CardActions>
        </React.Fragment>
      );
    return (
        <div id='flash-card-page-wrapper'>
            <div id='fc-header'>
                <h1>Flash Cards</h1>
            </div>
            <section id='fc-options-holder'>
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{jsCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{pyCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{reCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{csCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{cpCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{jaCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{anCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{neCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{ruCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{tsCard}</Card>
                {/* </div> */}
                {/* <div className='fc-set-wrapper'> */}
                    <Card className='fc-set-wrapper' variant="outlined">{svCard}</Card>
                {/* </div> */}
            </section>
        </div>
    )
}

export default FlashCards;
