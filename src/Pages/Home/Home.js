import React from 'react';
import Banner from './Banner';
import Footer from './Footer';
import Info from './Info';
import State from './State';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <State></State>
            <Footer></Footer>
        </div>
    );
};

export default Home;