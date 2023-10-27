import { NavLink } from 'react-router-dom';

const TopBar = () => {
    return (
        <div id='topbarouter' style={{ "margin": "20px 0px", "paddingBottom": "0", "display": "flex", "justifyContent": "space-evenly"}}>
            <NavLink exact to='/about'>
                <span>About Us</span>
            </NavLink>
            <NavLink exact to='/learn-more'>
                <span>Learn More</span>
            </NavLink>
            <NavLink exact to='/signup'>
                <span>Sign Up</span>
            </NavLink>
            <NavLink exact to='/login'>
                <span>Log In</span>
            </NavLink>
        </div>
    )
}

export default TopBar;
