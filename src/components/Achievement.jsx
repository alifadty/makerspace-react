import React from 'react';
import { achievement } from '../assets';
import { SlGraduation, SlPeople } from 'react-icons/sl';
import { FiVideo } from 'react-icons/fi';

const Achievement = () => {
    return (
        <div className='w-full bg-white py-24'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto grid md:grid-cols-2'>
                <div className='flex flex-col justify-center'>
                    <h1 className='md:leading-[72px] text-3xl font-bold'>Our <span className='text-[#20B486]'>Achievement</span></h1>
                    <p className='text-lg text-gray-600'>General access 3D printing lab, yang dapat diakses oleh seluruh lapisan masyarakat melalui persetujuan pemerintah berbasis Web App.</p>

                    <div className='grid grid-cols-2 py-16'>
                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#E9F8F3] rounded-xl'>
                                <SlGraduation size={30} style={{ color: '#1A906B' }} />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>50</h1>
                                <p className='text-[#6D737A]'>Instructor</p>
                            </div>
                        </div>

                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#FFFAF5] rounded-xl'>
                                <FiVideo size={30} style={{ color: '#FFC27A' }} />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>600+</h1>
                                <p className='text-[#6D737A]'>Videos</p>
                            </div>
                        </div>

                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#FFEEF0] rounded-xl'>
                                <SlGraduation size={30} style={{ color: '#ED4459' }} />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>2,000+</h1>
                                <p className='text-[#6D737A]'>Students</p>
                            </div>
                        </div>

                        <div className='py-6 flex'>
                            <div className='p-4 bg-[#F0F7FF] rounded-xl'>
                                <SlPeople size={30} style={{ color: '#0075FD' }} />
                            </div>
                            <div className='px-3'>
                                <h1 className='text-2xl font-semibold'>5,000+</h1>
                                <p className='text-[#6D737A]'>Users</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img className='m-auto md:order-last order-first' src={achievement} alt="achievement-image" />
            </div>
        </div>
    )
}

export default Achievement;
