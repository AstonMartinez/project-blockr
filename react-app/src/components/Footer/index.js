import './Footer.css'
import { Typography, Link } from '@mui/material';

const Footer = (props) => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <Typography variant="body2" color="text.secondary" align="left" {...props}>
                <Link href='/about' color="inherit">
                    About Us
                </Link>
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center" {...props}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                Project Blockr
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="right" {...props}>
                <Link href='/learn-more' color="inherit">
                    Learn More
                </Link>
            </Typography>
        </div>
    )
}

export default Footer;
