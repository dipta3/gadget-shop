import React from 'react';

const InfoCard = ({ img, cardTitle, bgClass, cardDes }) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl rounded-tl-lg ${bgClass}`}>
            <figure>
                <img className='rounded-lg pl-5 w-48 px-2 pt-3' src={img} alt="Album" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
                <div class="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;