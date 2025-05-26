import React from 'react'
import {
  ChevronDown,
  Search,
  Heart,
  ShoppingBag,
  UserRound,
  AlignJustify

} from 'lucide-react';
import { useNavigate } from 'react-router';
import { useCart } from '../../Providers/CardProvider';


const Header = () => {
  const navigate = useNavigate()

  const { cart} = useCart()
  return (
    <header className=''>
      <div className='bg-[#f3f3f3]'>
        <div className='container mx-auto mt-3 '>
          <div className='flex p-5 bg-[#f3f3f3] justify-between'>
            <div className='left '>
              <ul className='flex gap-3 items-center'>
                <li className='text-[14px] font-medium text-[#444] font-primary'>(08)123 456 7890</li>
                <li className='text-gray-300'>|</li>
                <li className='text-[14px] font-medium text-[#444] font-primary'>Store location</li>
              </ul>
            </div>
            <div>
              <p className='text-[14px] font-normal text-[#444] font-primary '>We are open with limited hours and staff.</p>
            </div>
            <div className='right flex '>
              <ul className='flex gap-2.5 items-center'>
                <li className='flex text-[13px] items-center font-primary text-[#444] font-bold'>USD <ChevronDown className='w-[20px] text-black font-bold' /> </li>
                <li className='text-gray-300'>|</li>
                <li className='text-[14px] font-medium font-primary text-[#444]'>Log in</li>
                <li>/</li>
                <li className='text-[14px] font-medium font-primary text-[#444]'>Sign Up</li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      <div className='container mx-auto'>
        <nav className="border-b border-gray-200">
          <div className="bg-white py-4 ">
            <div className="container mx-auto flex justify-between items-center px-4">
              <div className="flex items-center space-x-2">
                <img src="	https://drou-electronics-store.myshopify.com/cdn/shop/files/logo_300x300.png?v=1674276674" alt=""
                  className="w-[160px] object-cover" />
              </div>

              <div className="flex-grow mx-8">
                <div className="relative w-full max-w-xl mx-auto">
                  <input type="text" placeholder="Search our store" className="w-full border border-gray-300  py-3 px-4 focus:outline-none" />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#e52e06]">
                    <Search />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-gray-600">
                <a href="#"><Heart className='w-[30px] h-[30px] ' /></a>
                <a href="/checkout" className="relative">
                  <ShoppingBag
                    onClick={() => {
                      navigate("/checkout")
                    }}
                    className='w-[30px] h-[30px]' />
                  <span className="absolute top-3 -right-2 text-xs bg-[#e52e06] text-white rounded-full w-5 h-5 flex items-center justify-center">
                    {
                      cart?.length > 0 ? cart?.length : 0
                    }
                  </span>
                </a>
                <a href="#"><UserRound className='w-[30px] h-[30px]' /></a>
              </div>
            </div>
          </div>


          <div className='container mx-auto p-6 mt-3 '>
            <div className='flex justify-between items-center'>
              <div className='flex gap-2.5'>
                <button className="bg-[#e52e06] text-white font-semibold px-10 py-5 rounded-md flex items-center space-x-2">
                  <AlignJustify />
                  <span className='text-[16px] font-primary font-semibold'>ALL CATEGORIES </span>
                  <ChevronDown />
                </button>
              </div>

              <div className='flex'>
                <ul className="flex gap-5 text-[15px] font-primary text-black font-medium">
                  <li><a href="#" className="relative hover:text-gray-200 flex">Home<ChevronDown className='w-[15px]' />
                    <span className="absolute top-[-18px] right-3 text-[10px] bg-[#e52e06] text-white  w-11 h-[18px] flex items-center rounded-t-full rounded-br-full justify-center">NEW</span>

                  </a></li>
                  <li><a href="#" className="hover:text-gray-200 flex">Electronics<ChevronDown className='w-[15px]' /></a></li>
                  <li><a href="#" className="hover:text-gray-200 flex">Blog<ChevronDown className='w-[15px]' /></a></li>
                  <li><a href="#" className="hover:text-gray-200 flex">Pages<ChevronDown className='w-[15px]' /></a></li>
                  <li><a href="#" className=" hover:text-gray-200 flex">Contact<ChevronDown className='w-[15px]' /></a></li>
                </ul>
              </div>

              <div className='flex'>
                <div className="flex gap-3 items-center font-extralight text-[14px]">
                  Hotline <span className="text-black font-semibold text-[18px]">1800 - 1102</span>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header