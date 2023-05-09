import React from 'react';
import Card from './Card';
import Slider from 'react-slick';

const Courses = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        SlidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
        <div className='w-full bg-[#E9F8F3B2] py-32'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
                <h1 className='py-3 text-3xl font-bold'>Most Popular <span className='text-[#20B486]'>Courses</span></h1>
                <p className='py-2 text-[#6D737A]'>Various versions have evolved over the years, sometimes by accident.</p>

                <Slider {...settings}>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Slider>
            </div>
        </div>
    );
};

export default Courses;
