import React from 'react';
import {NavLink} from 'react-router-dom';
function Navbar(){

    return (
        <div>
            <div id='navbar'>
                <ul type='none' id='flex-list'>
                    <li><NavLink to="/home" className={({isActive})=>(isActive ? 'active-class':'nonactive-class')}>Home</NavLink></li>
                    <li><NavLink to="/student" className={({isActive})=>(isActive ? 'active-class':'nonactive-class')}>Student</NavLink></li>
                    <li><NavLink to="/contact" className={({isActive})=>(isActive ? 'active-class':'nonactive-class')}>Contact Us</NavLink></li>
                </ul>
            </div>
        </div>
    )
}
export default Navbar;