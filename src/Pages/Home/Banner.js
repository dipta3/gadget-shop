import React from 'react';
import banner1 from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner1} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Find Your Favourite Gadgets Here!</h1>
                    <p className="py-6">With 5 years of experience in the technology sales and services industry,  Gadgets Zone are the experts in dealing with gadgets, from the everyday phones, tablets and laptops to the unusual commercial coffee grinder and high-end vacuum cleaners.
                        <br />

                        Whatever the issue is, they will have the solution for you. Call Gadgets Zone to discuss your technological woes.</p>
                    <a href="/shop"><button className="btn btn-primary uppercase font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary ...">Start Shopping</button></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;