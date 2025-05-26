import React from 'react'
import {
    Heart,
    ShoppingBag,
    ChartNoAxesColumnIncreasing
} from 'lucide-react';

const ProductCard = ({ image, hoverImg, title, newPrice, oldPrice, addToCart }) => {
    return (
        <div className='w-[276px] font-primary bg-white h-[375px] overflow-hidden shadow-xl group'>
            <div className='relative'>
                <img src={image}
                    alt=""
                    className='w-full h-full object-cover overflow-hidden'
                />
                <div className='hover-img absolute overflow-hidden inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500  '>
                    <img src={hoverImg}
                        alt=""
                        className='w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover overflow-hidden'
                    />
                    <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2'>
                        <ul className='flex gap-2'>
                            <li 
                              onClick={addToCart}
                             className='w-11 h-11 bg-[#343a40] rounded-full flex items-center justify-center text-white hover:bg-[#E52E06] transition'>
                                <ShoppingBag
                                  
                                    className="w-4 h-4 text-white" />
                            </li>
                            <li className='w-11 h-11 bg-[#343a40] rounded-full flex items-center justify-center text-white hover:bg-[#E52E06] transition'>
                                <Heart className="w-4 h-4 text-white" />
                            </li>
                            <li className='w-11 h-11 bg-[#343a40] rounded-full flex items-center justify-center text-white hover:bg-[#E52E06] transition'>
                                <ChartNoAxesColumnIncreasing className="w-4 h-4 text-white" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='mt-3'>
                <ul className='flex flex-col justify-center items-center gap-3'>
                    <li className='text-[17px] text-[#333333] font-normal'>{title}</li>
                    <li className='font-bold flex gap-2 items-center text-[18px] text-[#E52E06]'>
                        ${newPrice.toFixed(2)}
                        <span className='text-[14px] text-[#515151] line-through font-normal'>
                            ${oldPrice.toFixed(2)}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ProductCard