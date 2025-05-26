import React from 'react'
import Card from '../../../shared/Card'

const CustomerSection = () => {
    return (
        <section className='container mx-auto mt-20 font-primary'>
            <div className=''>
                <h1 className='text-[30px] font-medium text-[#323232]'>Customer love</h1>
            </div>
            <div className='grid md:grid-cols-3 mt-6'>
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    )
}

export default CustomerSection