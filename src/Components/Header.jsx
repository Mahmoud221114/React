import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div id='main'>
            <Navbar />
            <div className='name'>
                <h1><span>Lanuch Your App</span>With confidece And Creativity</h1>
                <p className='details'>Lorem ipsum dolor sit, amet consectetur numquam sunt, deleniti iure quod ut reiciendis omnis eius fugiat necessitatibus?</p>
                <a href='#' className='cv-btn'>Download</a>
            </div>
        </div>
    )
}

export default Header