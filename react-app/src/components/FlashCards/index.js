import './FlashCards.css'
import { javaScriptCards, pythonCards, reactCards, cSharpCards, javaCards, cPlusPlusCards, angularCards, nextJSCards, rustCards, typeScriptCards, svelteCards } from './flashcardlist'

const FlashCards = () => {
    return (
        <div id='flash-card-page-wrapper'>
            <div id='fc-header'>
                <h1>Flash Cards</h1>
            </div>
            <section id='fc-options-holder'>
                <div className='fc-set-wrapper'>
                    <h3>JavaScript</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>Python</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>React</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>C#</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>C++</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>Java</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>Angular</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>Next.js</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>Rust</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>TypeScript</h3>
                </div>
                <div className='fc-set-wrapper'>
                    <h3>Svelte</h3>
                </div>
            </section>
        </div>
    )
}

export default FlashCards;
