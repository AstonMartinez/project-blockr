import './UserDashboard.css';
import { useState, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import DailyPlanner from '../DailyPlanner';

const UserDashboard = () => {
    const history = useHistory()
    const sessionUser = useSelector(state => state.session.user)
    if(!sessionUser) history.push('/login')

    return (
        <div id='user-dashboard-wrapper'>
            <div id='dashboard-header'>
                <h1>Weekly Overview</h1>
            </div>
            <section className='day-of-week'>
                <span className='weekday' id='monday'>Monday</span>
                <span className='weekday' id='tuesday'>Tuesday</span>
                <span className='weekday' id='wednesday'>Wednesday</span>
                <span className='weekday' id='thursday'>Thursday</span>
                <span className='weekday' id='friday'>Friday</span>
                <span className='weekday' id='saturday'>Saturday</span>
                <span className='weekday' id='sunday'>Sunday</span>
            </section>
            <section className='planners-wrapper'>
                <DailyPlanner id={1} />
                <DailyPlanner id={2} />
                <DailyPlanner id={3} />
                <DailyPlanner id={4} />
                <DailyPlanner id={5} />
                <DailyPlanner id={6} />
                <DailyPlanner id={7} />
            </section>
        </div>
    )
}

export default UserDashboard;
