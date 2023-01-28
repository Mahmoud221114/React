import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/1.svg';
import featureimage2 from '../images/2.svg';
import featureimage3 from '../images/3.svg';
import featureimage4 from '../images/4.svg';

function Feature() {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <FeatureBox image={featureimage1} title="WeightLifting"/>
                <FeatureBox image={featureimage2} title="Specific Muscle"/>
                <FeatureBox image={featureimage3} title="Flex Your Muscle"/>
                <FeatureBox image={featureimage4} title="Cardio Exercise"/>
                
            </div>
        </div>
    )
}

export default Feature;