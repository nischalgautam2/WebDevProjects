import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import store from '../../../hooks/store';


const SummaryDetail = ({ item, cartItems, setCartItems }) => {
  // console.log(cartItems)
  const [updatedQuantity, setUpdatedQuantity] = useState(item.cartQuantity)
  // console.log(updatedQuantity);
  let subPrice = updatedQuantity * item.price

  const plus = (id) => {
    // console.log(id)
    if (updatedQuantity >= item.availableQuantity) {
      setUpdatedQuantity(item.availableQuantity)
    }
    else {
      const uQuantity = cartItems?.map((item) => {
        if (item.id === id) {
          item.cartQuantity = parseInt(updatedQuantity + 1)
          return item;
        } else {
          return item;
        }
      })
      // console.log(uQuantity);
      setCartItems(uQuantity)
      store(uQuantity)
      setUpdatedQuantity(parseInt(updatedQuantity + 1))
    }
  }
  const minus = (id) => {
    if (updatedQuantity <= 1) {
      setUpdatedQuantity(updatedQuantity)
    }
    else {
      const uQuantity = cartItems?.map((item) => {
        if (item.id === id) {
          item.cartQuantity = parseInt(updatedQuantity - 1)
          return item;
        } else {
          return item;
        }
      })
      // console.log(uQuantity);
      setCartItems(uQuantity)
      store(uQuantity)
      setUpdatedQuantity(parseInt(updatedQuantity - 1))
    }
  }

  const handleRemove = (id) => {
    const removeItem = cartItems.filter((cartF) => cartF.id !== id)
    // console.log(removeItem)
    setCartItems(removeItem)
    store(removeItem)
  }


  return (
    <tr>
      <td className='py-4'>
        <div className='flex gap-x-5 items-center'>
          <button onClick={() => handleRemove(item.id)} className='px-2 py-1 bg-red-500 text-white rounded-sm'>X</button>
          <img width={100} className="h-20" src={item.image} alt={item.name} />
          <span>{item.name}</span>
        </div>
      </td>
      <td>${item.price}.00</td>
      <td>
        <div className='flex justify-around border rounded-2xl gap-x-2 px-2 py-1 w-28'>
          <button onClick={() => minus(item.id)} ><AiOutlineMinus /></button>
          <span>{updatedQuantity}</span>
          <button onClick={() => plus(item.id)} ><AiOutlinePlus /></button>
        </div>
      </td>
      <td className='text-center'>${subPrice}</td>
    </tr>
  );
};

export default SummaryDetail;