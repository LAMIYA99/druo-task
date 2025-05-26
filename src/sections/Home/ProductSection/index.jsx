import React from 'react'
import ProductCard from '../../../shared/ProductCard'
import { useCart } from '../../../Providers/CardProvider'
import { toast } from 'sonner';


const ProductSection = () => {
    const{addToCart, cart, removeFromCart, clearCart, IncreaseCart,getTotalPrice}=useCart();
    const productSection = [
        {
            id: 1,
            image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/13_large.jpg?v=1674275345",
            hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345",
            title: "Drou watch ultra",
            newPrice: 70.00,
            oldPrice: 85.00
        },
        {
            id: 2,
            image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_large.jpg?v=1674275324",
            hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p1_c084b79e-4c5b-4790-a7fe-00b1eb18b040_large.jpg?v=1674275324",
            title: "Droubook space gray",
            newPrice: 70.00,
            oldPrice: 85.00
        },
        {
            id: 3,
            image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/11_c6c97b67-edac-48bd-8e5c-cf0de5e9e3cb_large.jpg?v=1674275302",
            hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302",
            title: "Homepod mini 2022",
            newPrice: 70.00,
            oldPrice: 85.00
        },
        {
            id: 4,
            image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_large.jpg?v=1674275306",
            hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p5_020e3c58-9f57-4388-b8d8-bb40db3b4c5e_large.jpg?v=1674275306",
            title: "DroSafe Charger",
            newPrice: 70.00,
            oldPrice: 85.00
        },
        {
            id: 5,
            image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p9_large.jpg?v=1674275297",
            hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_6fe3391a-c2d0-4342-bd4c-70b486ce88ae_large.jpg?v=1674275297",
            title: "Home entertainment",
            newPrice: 70.00,
            oldPrice: 85.00
        },

    ]
    console.log(cart)
    return (
        <section className='my-16 font-primary font-medium'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <h3 className='text-[30px] '>This week's deals</h3>
                    <ul className='flex gap-4 py-0.5 px-8 bg-[#e4573d] items-center '>
                        <li className='text-[18px] font-normal text-[#fff]'>End in:</li>
                        <li className='text-[#fff] text-[23px] font-semibold'>214 : 03 : 43 : 38</li>
                    </ul>
                </div>
                <div className='my-10 grid sm:grid-cols-5'>

                    {
                        productSection && productSection.map((item, idx) => (
                            <ProductCard
                                key={idx}
                                title={item.title}
                                newPrice={item.newPrice}
                                oldPrice={item.oldPrice}
                                image={item.image}
                                hoverImg={item.hoverImg}
                                addToCart={() => {
                                    addToCart(item)
                                    toast.success("Added to cart successfully",{
                                        description: `${item.title} has been added to your cart`,
                                        duration:3000,
                                        Image: `${item.image}`,
                                        NewPrice: `${item.newPrice}`,
                                        icon:``,
                                        style:{
                                            backgroundColor: `white`,
                                            color:`black`
                                        }
                                    })
                                }} 

                            />
                        ))
                    }

                </div>
            </div>
        </section>
    )
}

export default ProductSection






















// import React from 'react'
// import ProductCard from '../../../shared/ProductCard'
// import { useCart } from '../../../Providers/CardProvider'
// import CartNotification from '../../../shared/CartNotification'

// const ProductSection = () => {
//     const { addToCart, cart, showNotification } = useCart()

//     const productSection = [
//         {
//             id: 1,
//             image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/13_large.jpg?v=1674275345",
//             hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p4_b019dfc8-3740-44ac-8916-6db66a336feb_large.jpg?v=1674275345",
//             title: "Drou watch ultra",
//             newPrice: 70.00,
//             oldPrice: 85.00
//         },
//         {
//             id: 2,
//             image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_large.jpg?v=1674275324",
//             hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p1_c084b79e-4c5b-4790-a7fe-00b1eb18b040_large.jpg?v=1674275324",
//             title: "Droubook space gray",
//             newPrice: 70.00,
//             oldPrice: 85.00
//         },
//         {
//             id: 3,
//             image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/11_c6c97b67-edac-48bd-8e5c-cf0de5e9e3cb_large.jpg?v=1674275302",
//             hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p3_0dd10fdb-44b3-415b-b7c3-91896ecb3ee2_large.jpg?v=1674275302",
//             title: "Homepod mini 2022",
//             newPrice: 70.00,
//             oldPrice: 85.00
//         },
//         {
//             id: 4,
//             image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p10_large.jpg?v=1674275306",
//             hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p5_020e3c58-9f57-4388-b8d8-bb40db3b4c5e_large.jpg?v=1674275306",
//             title: "DroSafe Charger",
//             newPrice: 70.00,
//             oldPrice: 85.00
//         },
//         {
//             id: 5,
//             image: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p9_large.jpg?v=1674275297",
//             hoverImg: "https://drou-electronics-store.myshopify.com/cdn/shop/products/p7_6fe3391a-c2d0-4342-bd4c-70b486ce88ae_large.jpg?v=1674275297",
//             title: "Home entertainment",
//             newPrice: 70.00,
//             oldPrice: 85.00
//         },

//     ]

//     return (
//         <section className='my-16 font-primary font-medium'>
//             <div className='container mx-auto'>
//                 <div className='flex justify-between items-center'>
//                     <h3 className='text-[30px]'>This week's deals</h3>
//                     <ul className='flex gap-4 py-0.5 px-8 bg-[#e4573d] items-center '>
//                         <li className='text-[18px] font-normal text-[#fff]'>End in:</li>
//                         <li className='text-[#fff] text-[23px] font-semibold'>214 : 03 : 43 : 38</li>
//                     </ul>
//                 </div>


//                 {showNotification && <CartNotification />}

//                 <div className='my-10 grid sm:grid-cols-5'>
//                     {
//                         productSection.map((item, idx) => (
//                             <ProductCard
//                                 key={idx}
//                                 title={item.title}
//                                 newPrice={item.newPrice}
//                                 oldPrice={item.oldPrice}
//                                 image={item.image}
//                                 hoverImg={item.hoverImg}
//                                 addToCart={() => addToCart(item)}
//                             />
//                         ))
//                     }
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default ProductSection