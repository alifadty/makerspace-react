import React from 'react';
import FeedbackCard from './FeedbackCard';
import Slider from 'react-slick';

const Feedback = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        SlidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: true
                }
            }
        ],
    };

    return (
        <div className='w-full bg-white py-32'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
                <div className='py-4'>
                    <h1 className='py-3 text-3xl font-bold'>Students <span className='text-[#20B486]'>Feedback</span></h1>
                    <p className='text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>
                </div>

                <Slider {...settings}>
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                </Slider>
            </div>
        </div>
    );
};

export default Feedback;