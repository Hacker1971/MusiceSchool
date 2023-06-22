import React from 'react';
import Container from '../sheare/navber/Container';
import Carosale from './Carosale';
import Supported from './Supported';
import ABOUT from './ABOUT';
import Class from './Class';
import Choose from './Choose';
import Instructor from './Instructor';

const Home = () => {
    return (
       <Container>
        <div>
        <Carosale/>
        </div>
        <div>
            <Supported/>
        </div>
        <div>
            <ABOUT/>
        </div>
        <div>
            <Class/>
        </div>
        <div className='my-24'>
            <Choose/>
        </div>
        <div>
            <Instructor/>
        </div>
       </Container>
    );
};

export default Home;