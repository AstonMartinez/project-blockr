// import './Practice.css'
import { useState } from 'react'
import * as React from 'react'
import Box from '@mui/material/Box';
import NavDrawer from '../NavDrawer';

const Practice = () => {
    const [codeType, setCodeType] = useState(null)

    let repl;

    if(codeType === "JS") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/vanilla-vanilla?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="Vanilla"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "C#") {
        repl = (
            <div>
                <iframe title='C#' width="100%" height="475" src="https://dotnetfiddle.net/Widget/CsCons" frameborder="0"></iframe>
            </div>
        )
    } else if (codeType === "React") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/delicate-hooks-pqxflc?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="delicate-hooks-pqxflc"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "Next") {
        repl = (
            <div>
                <iframe title='next' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} src="https://codesandbox.io/p/sandbox/naughty-james-7x8zxx?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "Angular") {
        repl = (
            <div>
                <iframe title='angular' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} src="https://codesandbox.io/p/sandbox/github/codesandbox/sandbox-templates/tree/main/angular?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "C++") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/c-e79sy?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="C++"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "Python") {
        repl = (
            <div>
                <iframe title='python' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} src="https://codesandbox.io/p/sandbox/shy-platform-nnghky?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "TypeScript") {
        repl = (
            <div>
                <iframe src="https://codesandbox.io/embed/affectionate-phoebe-64d5x5?fontsize=14&hidenavigation=1&theme=dark"
                    style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}}
                    title="affectionate-phoebe-64d5x5"
                    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                ></iframe>
            </div>
        )
    } else if (codeType === "Rust") {
        repl = (
            <div>
                <iframe title='rust' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} allowfullscreen></iframe>
            </div>
        )
    } else if (codeType === "Svelte") {
        repl = (
            <div>
                <iframe title='svelte' style={{"width":"100%", "height":"500px", "border":"0", "border-radius": "4px", "overflow":"hidden"}} width="800" height="450" src="https://codesandbox.io/p/sandbox/musing-sanne-pjy4fv?embed=1" allowfullscreen></iframe>
            </div>
        )
    } else {
        repl = ''
    }

    return (
        <>
            <Box sx={{ display: 'flex', height: "100vh" }}>
              <NavDrawer page={'Practice'} />
            <Box component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            marginTop: "70px"
          }}>
            <div id='practice-page-wrapper'>
                <div style={{"display": "flex", "justifyContent": "center"}}>
                    <h1 id='practice-header'>Practice</h1>
                </div>
                <section id='languages-to-choose'>
                    <div id='what-language-text' style={{"display": "flex", "justifyContent": "center"}}>
                        <h3>Which language would you like to practice?</h3>
                    </div>
                    <div id='languages' style={{"display": "flex", "justifyContent": "space-evenly", "width": "100%", "marginBottom": "15px"}}>
                        <span className='lang' onClick={() => {
                            setCodeType("JS")
                        }}>JavaScript</span>
                        <span className='lang' onClick={() => {
                            setCodeType("C#")
                        }}>C#</span>
                        <span className='lang' onClick={() => {
                            setCodeType("C++")
                        }}>C++</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Java")
                        }}>Java</span>
                        <span className='lang' onClick={() => {
                            setCodeType("React")
                        }}>ReactJS</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Next")
                        }}>NextJS</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Angular")
                        }}>Angular</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Python")
                        }}>Python</span>
                        <span className='lang' onClick={() => {
                            setCodeType("TypeScript")
                        }}>TypeScript</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Rust")
                        }}>Rust</span>
                        <span className='lang' onClick={() => {
                            setCodeType("Svelte")
                        }}>Svelte</span>
                    </div>
                </section>
                <section>
                    {repl}
                </section>
            </div>
            </Box>
            </Box>
        </>
    )
}

export default Practice;
