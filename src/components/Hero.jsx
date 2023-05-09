import React from 'react';
import { heroImg } from '../assets';

const Hero = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-start gap-4'>
                    <p className='py-2 text-2xl text-[#20B486] font-medium'>Makerspace</p>
                    <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>3D Printing Creative Hub</h1>
                    <p className='py-2 text-lg text-gray-600'>General access 3D printing lab, yang dapat diakses oleh seluruh lapisan masyarakat melalui persetujuan pemerintah berbasis Web App.</p>
                </div>

                <div className='p-2 shadow-lg rounded-md'>
                    <img className='md:order-last order-first' src={heroImg} alt="hero-image" />
                </div>
            </div>
        </div>
    )
}

export default Hero;
