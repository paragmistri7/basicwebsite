import React from 'react';
import Common from './comonfile';
import iamges from "../sphere.png"

const About = () => {
    return (
        <>
           <Common iamges= {iamges}  title = "Welcome To My Website" name = 'Parag Mistry' btn = "Continue" dir = "/contact"/>
        </>
    );
};

export default About 