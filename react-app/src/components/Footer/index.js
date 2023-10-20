import './Footer.css'
import { Typography, Link } from '@mui/material';
const Footer = (props) => {
    return (
        <>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                Project Blockr
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </>
        // <div id='footer-wrap'>
        //     Footer
        // </div>
    )
}

export default Footer;
