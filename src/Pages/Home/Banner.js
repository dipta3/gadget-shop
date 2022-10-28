import React from 'react';
import banner1 from '../../images/banner.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={banner1} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl font-bold">Find Your Favourite Gadgets Here!</h1>
                    <p class="py-6">With 5 years of experience in the technology sales and services industry,  Gadgets Zone are the experts in dealing with gadgets, from the everyday phones, tablets and laptops to the unusual commercial coffee grinder and high-end vacuum cleaners.
                        <br />

                        Whatever the issue is, they will have the solution for you. Call Gadgets Zone to discuss your technological woes.</p>
                    <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary ...">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;