import React from 'react';
import CategoryCard from './CategoryCard';
import { BsVectorPen } from 'react-icons/bs';
import { TiHtml5 } from 'react-icons/ti';

const Categories = () => {
    return (
        <div className='w-full bg-[#F0FBF7] py-24'>
            <div className='md:max-w-[1480px] max-w-[600px] m-auto'>
                <h1 className='md:leading-[72px] text-3xl font-bold'>Most <span className='text-[#20B486]'>Popular Categories</span></h1>
                <p className='text-lg text-gray-600'>General access 3D printing lab, yang dapat diakses oleh seluruh lapisan masyarakat melalui persetujuan pemerintah berbasis Web App.</p>

                <div className='grid lg:grid-cols-4 grid-cols-2 py-12 gap-4'>
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Design'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Development'} />
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Marketing'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Business'} />

                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Lifestyle'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Photography'} />
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Music'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Data Science'} />

                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Personal Develop'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Health & Fitness'} />
                    <CategoryCard icons={<BsVectorPen size={30} />} title={'Finance'} />
                    <CategoryCard icons={<TiHtml5 size={30} />} title={'Teaching'} />
                </div>
            </div>
        </div>
    );
};

export default Categories;
