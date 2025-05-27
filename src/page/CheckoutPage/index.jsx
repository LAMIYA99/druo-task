
import React from 'react'
import {
  Plus,
  Minus,

} from 'lucide-react';
import { useCart } from '../../Providers/CardProvider';


const CheckoutPage = () => {

  const { cart, removeFromCart, clearCart, increaseCart, getTotalPrice } = useCart()


  return (
    <section className='font-primary'>
      <div className='bg-[#f3f3f3] mt-6 w-full h-32'>
        <div className='container mx-auto'>
          <ul className='flex gap-3 px-48 py-14 items-center'>
            <li className='text-[14px] text-[#666] '><a href="/">Home</a></li>
            <li className='text-[#666] text-[10px]'>/</li>
            <li className='text-[14px] text-[#e52e06]'>Your Shopping Cart</li>
          </ul>
        </div>
      </div>
      <div className='container mx-auto'>

        {
          cart.length === 0 ? <div>No items in cart</div> :

            <div className="mt-20  py-8">
              <div className="container mx-auto">

                <div className="flex flex-col justify-center md:flex-row gap-4">
                  <div className="md:w-3/4">
                    <div className="bg-white flex flex-col gap-15 rounded-lg shadow-md p-6 mb-4">
                      <table className="w-full ">
                        <thead >
                          <tr>
                            <th className="text-left font-semibold">Product</th>
                            <th className="text-left font-semibold">Price</th>
                            <th className="text-left font-semibold">Quantity</th>
                            <th className="text-left font-semibold">Total</th>
                          </tr>
                        </thead>
                        <tbody>

                          {cart && cart.map((item, idx) => (
                            <tr key={idx}>
                              <td className="py-4">
                                <div className="flex items-center">
                                  <img className="h-16 w-16 mr-4" src={item?.image} alt="Product image" />
                                  <span className="font-semibold">{item?.title}</span>
                                </div>
                              </td>
                              <td className="py-4">${item?.newPrice}</td>
                              <td className="py-4">
                                <div className="flex items-center">
                                  <button
                                    onClick={() => removeFromCart(item)}
                                    className="border rounded-md py-2 px-4 mr-2"><Minus /></button>
                                  <span className="text-center w-8">{item?.quantity}</span>
                                  <button
                                    onClick={() => increaseCart(item?.id)}
                                    className="border rounded-md py-2 px-4 ml-2"><Plus /></button>
                                </div>
                              </td>
                              <td className="py-4">{
                                item.quantity * item.newPrice}$</td>
                              <td className='flex justify-end mt-10'>
                                <button
                                  onClick={() => clearCart()}
                                  className='w-[144px] h-[px45px] rounded-3xl bg-red-600 text-white font-primary text-[13px] p-3.5'>Clear cart</button>

                              </td>
                            </tr>
                          ))}

                        </tbody>
                      </table>


                    </div>
                  </div>

                </div>
              </div>
            </div>
        }


      </div>
    </section>
  )
}

export default CheckoutPage




{/* <div className='flex justify-end mt-10'>
                  <button className='w-[144px] h-[px45px] rounded-3xl bg-red-600 text-white font-primary text-[13px] p-3.5'>Clear cart</button>
                </div> */}