import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
	const sessionUser = useSelector(state => state.session.user);
	const history = useHistory()
	let navBarContent

	if(sessionUser) {
		navBarContent = (
			<>
				<div className='nav-option' onClick={() => {
					history.push('/dashboard')
				}}>
					Dashboard
				</div>
				<div className='nav-option' onClick={() => {
					history.push('/trivia')
				}}>
					Trivia
				</div>
				<div className='nav-option' onClick={() => {
					history.push('/flashcards')
				}}>
					Flashcards
				</div>
				<div className='nav-option' onClick={() => {
					history.push('/resources')
				}}>
					Resources
				</div>
				<div className='nav-option' onClick={() => {
					history.push('/practice')
				}}>
					Practice
				</div>
			</>
		)
	} else {
		navBarContent = (
			<>
				<div>
					Get Started
				</div>
			</>
		)
	}
	return (
		<div id='nav-bar-wrapper'>
			<div id='home-button'>
				<NavLink exact to="/">Home</NavLink>
				{navBarContent}
			</div>
			{isLoaded && (
				<div id='profile-button'>
					<ProfileButton user={sessionUser} />
				</div>
			)}
		</div>
	);
}

export default Navigation;
