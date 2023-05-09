import React from 'react';
import { cta } from '../assets';

const CTA = () => {
    return (
        <div className='w-full bg-[#F0FBF7] py-24'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2 gap-8 items-center'>
                <img className='w-[500px] mx-auto' src={cta} alt="cta-image" />

                <div>
                    <h1 className='py-2 text-3xl font-semibold'><span className='text-[#20B486]'>Percetakan 3D</span> pembawa dampak signifikan pada dunia kreatif</h1>
                    <p className='py-2 text-lg text-gray-600'>Bergabung sekarang juga dengan klik tombol join dibawah ini!</p>
                    <button className='max-[780]:w-full my-4 px-8 py-5 rounded-md bg-[#20B486] text-white font-bold'>Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default CTA;
