import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor, cardDes, cardContract }) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl rounded-tl-lg ${bgColor}`}>
            <figure>
                <img className='rounded-lg pl-5 w-48 px-2 pt-3' src={img} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <div>
                    <p>{cardDes}</p>
                    <p>{cardContract}</p>
                </div>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
    );
};

export default InfoCard;