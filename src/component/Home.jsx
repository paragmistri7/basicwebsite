import React from 'react';
import iamges from "../Images/animal.png"
import Common from './comonfile';

const Home = () => {
    return (

       <Common  iamges= {iamges}  title = "Welcome To Animal Gallery" name = 'Parag Gohil' btn = "Get Started" dir = "/product" />
    );
};

export default Home;