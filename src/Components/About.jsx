import React from 'react';
import aboutimege from '../images/about.png'
function About() {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimege} alt="" />
            </div>
            <div className='about-text'>
                <h2>LEARN MORE ABOUT US</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum saepe ipsa, a, iusto temporibus, placeat rerum totam 
                    quam amet dicta rem nesciunt. Aspernatur fugiat ratione repellendus iusto sapiente doloremque eos? 
                    Corporis dolores repudiandae nobis exercitationem!
                </p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}

export default About;