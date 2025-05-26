import React from 'react'

const Card = () => {
    return (
        <div className='w-[480px] font-primary h-[365px] bg-[#f8f8f8]'>
            <div className='m-8 flex flex-col gap-4'>
                <div className= 'mt-4  '>
                    <h2 className='text-[20px] font-medium text-[#323232]'>Great quality!</h2>
                </div>
                <div>
                    <p className='text-[17px]  font-light leading-8 text-[#333]'>This is a great design and I hope that we will create a website with a good signature. Team90Degree team is reactive and kind. Thanks for the help so far.</p>
                </div>
                <div className='flex flex-col mt-5 gap-3'>
                    <h2 className='text-[20px] font-semibold text-[#323232]'>David smith</h2>
                    <h3 className='text-[14px] font-light'>Developer, Canada</h3>
                </div>
            </div>
        </div>
    )
}

export default Card