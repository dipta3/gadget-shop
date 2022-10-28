import React from 'react';
import InfoCard from './InfoCard';
import infopic1 from '../../images/Infoimg1.png'
import infopic2 from '../../images/Infoimg2.png'
import infopic3 from '../../images/Infoimg3.png'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-5'>
            <InfoCard cardTitle="Opening Hours" cardDes="We provide our services 24×7" bgClass="bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200"  img={infopic1}></InfoCard>
            <InfoCard cardTitle="Our Location" bgClass="Pastel bg-gradient-to-tr from-violet-500 to-orange-300" img={infopic2}></InfoCard>
            <InfoCard cardTitle="Contract Us" bgClass="bg-gradient-to-r from-indigo-300 to-purple-400" img={infopic3}></InfoCard>
        </div>
    );
};

export default Info;