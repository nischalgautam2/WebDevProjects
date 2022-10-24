import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import SummaryDetail from './SummaryDetail/SummaryDetail';

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const items = Object.values(getStoredCart())
  // console.log(items)
  const navigate = useNavigate()

  useEffect(() => {
    setCartItems(items)
  }, [])

  let totalPrice = 0
  cartItems?.forEach(element => {
    totalPrice = Number(totalPrice + (element.price * element.cartQuantity))
  });

  const thanks = (items) => {
    navigate('/thank-you')
    deleteShoppingCart(items)
  }

  return (
    <div className='my-12 container mx-auto px-5 lg:px-12'>
      <h2 className='text-center py-5 text-2xl font-bold'>The checkout summary page </h2>
      <div>
        <div className="flex gap-x-5 flex-col lg:flex-row">
          <div className="basis-3/4">
            {/* Checkout Product Summary Products */}
            <div className="w-full mt-2 overflow-x-auto">
              <table className="table-auto text-left w-full">
                <thead className="bg-[#f7f7f7]">
                  <tr>
                    <th className="p-3 text-sm font-semibold text-left pl-12 ">
                      Product
                    </th>
                    <th className="p-3 text-sm font-semibold text-left ">
                      Price
                    </th>
                    <th className="p-3 text-sm font-semibold text-left pl-5">
                      Quantity
                    </th>
                    <th className="p-3 text-sm font-semibold text-center">
                      Subtotal
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.length > 0 ? (
                    <>
                      {cartItems.map((item, index) => <SummaryDetail
                        key={index}
                        item={item}
                        setCartItems={setCartItems}
                        cartItems={cartItems}
                      />)}
                    </>
                  ) : (
                    <h2 className='text-2xl  font-semibold text-[#FA7070] py-5'>No Product Found</h2>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="basis-1/4">
            <div className='border mt-5 shadow-md rounded-md px-3'>
              <h2 className='text-lg md:text-2xl py-5 font-[500]'>Cart Totals </h2>
              <div className='flex justify-between pb-1'>
                <span className='font-semibold'>Subtotal</span>
                <span>${totalPrice}</span>
              </div>
              <hr />
              <div className='flex justify-between py-5 text-lg font-bold'>
                <span>Total</span>
                <span>${totalPrice}</span>
              </div>
              {
                totalPrice === 0 ? (
                  <button className='uppercase text-white bg-[#FA7070] rounded-lg text-center mb-2 px-4 py-2 container cursor-not-allowed' disabled >Proceed to checkout</button>
                ) : (
                  <button className='uppercase text-white bg-[#FA7070] rounded-lg text-center mb-2 px-4 py-2 container ' onClick={thanks}>Proceed to checkout</button>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;