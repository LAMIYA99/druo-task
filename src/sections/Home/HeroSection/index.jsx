import React from 'react'

const HeroSection = () => {
    return (
       <section className='container font-primary mx-auto mt-20 group overflow-hidden relative'>
    <img
        src="https://drou-electronics-store.myshopify.com/cdn/shop/files/slide61.jpg?v=1674276677"
        alt=""
        className='w-full h-full transition-transform duration-500 overflow-hidden group-hover:scale-105 object-cover'
    />
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/1 text-center'>
        <ul className='flex flex-col gap-3'>
            <li className='text-[15px] text-[#666]'>30 NOV - 03 DEC</li>
            <li className='text-[23px] font-normal text-[#323232]'>The wait is on iPhone 14 max pro</li>
            <li className='text-[25px] font-bold text-[#E4573D]'>$999.00</li>
        </ul>
        <div className='mt-4'>
            <button className='px-5 py-2.5 text-white rounded-3xl text-[14px] font-semibold bg-[#E52E06]'>
                Shop Now
            </button>
        </div>
    </div>
</section>
    )
}

export default HeroSection