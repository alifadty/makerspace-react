import React from 'react';
import { blogImg1 } from '../assets';
import StarRating from './StarRating';

const Card = () => {
    return (
        <div className='z-10 bg-white drop-shadow-md overflow-hidden rounded-2xl mr-2 my-4'>
            <img className='h-40 w-full object-cover' src={blogImg1} alt="blog-image-1" />

            <div className='p-5 border border-b'>
                <h1 className='py-2 truncate'>JavaScript Programming</h1>
                <StarRating rating={2} />
            </div>

            <h3 className='p-5 text-xl'>$12</h3>

            <div className='absolute top-0 bg-white m-3 px-2 py-[2.5px] rounded font-bold'>
                JavaScript
            </div>
        </div>
    );
};

export default Card;
