import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt="" />
            </div>
            <div className='about-text'>
                <h2>{props.title}</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Harum saepe ipsa, a, iusto temporibus, placeat rerum totam 
                    quam amet dicta rem nesciunt. Aspernatur fugiat ratione repellendus iusto sapiente doloremque eos? 
                    Corporis dolores repudiandae nobis exercitationem!
                </p>
                <button>{props.button}</button>
            </div>
        </div>
    )
}

export default About;