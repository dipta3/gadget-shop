import React from 'react';

const State = () => {
    return (
        <div className=' mt-20'>
            <div className="stats shadow-2xl border-none mt-5 w-full  h-48">

                <div className="stat border">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">Total Likes</div>
                    <div className="stat-value text-primary">756K</div>
                    <div className="stat-desc">33% more than last month</div>
                </div>

                <div className="stat  border">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Page Views</div>
                    <div className="stat-value text-secondary">1.1M</div>
                    <div className="stat-desc">25% more than last month</div>
                </div>

                <div className="stat  border">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://placeimg.com/128/128/people" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">96%</div>
                    <div className="stat-title">Positive Review</div>
                    <div className="stat-desc text-secondary">512 User Review Remaining</div>
                </div>

            </div>
        </div>
    );
};

export default State;