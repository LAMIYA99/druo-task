import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-26 p-26 ">
      <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto gap-10">


        <div>
          <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
          <p>Drou Demo Store</p>
          <p>No. 1259 Freedom, New York</p>
          <p>United States</p>
          <p className="mt-2">+91-987654321</p>
          <p>demo@exampledemo.com</p>
        </div>


        <div>
          <h3 className="font-semibold text-lg mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Product Support</a></li>
            <li><a href="#" className="hover:underline">Checkout</a></li>
            <li><a href="#" className="hover:underline">License Policy</a></li>
            <li><a href="#" className="hover:underline">Affiliate</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Redeem Voucher</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Policies & Rules</a></li>
          </ul>
        </div>


        <div>
          <h3 className="font-semibold text-lg mb-4">Download Our App</h3>
          <p className="mb-4">Download our App and get extra 15% Discount on your first Order..!</p>
          <div className="flex space-x-4">
            <img src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/app-store.jpg?v=1603274799" alt="App Store" className="h-10" />
            <img src="https://cdn.shopify.com/s/files/1/0495/8021/2387/files/google-play.jpg?v=1603274809" alt="Google Play" className="h-10" />
          </div>
        </div>

      </div>
    </footer>
    


  )
}

export default Footer