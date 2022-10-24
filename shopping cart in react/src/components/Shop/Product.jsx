import React, { useEffect, useState } from 'react';
import { FaSmile } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Product = ({ product, handleBuy }) => {
  const [quantity, setQuantity] = useState(0)
  const [error, setError] = useState('')

  useEffect(() => {
    if (quantity < 0) {
      setError(`Be positive`);
    } else if (quantity > product.availableQuantity) {
      setError(`Max available ${product.availableQuantity}`);
    } else {
      setError('');
    }
  }, [product.availableQuantity, quantity])

  return (
    <tr>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <img width={100} className="h-20" src={product?.image} alt={product.name} />
      </td>
      <td className="p-3 text-sm font-[500] capitalize text-[#00A0C6] underline whitespace-nowrap">
        {product.name}
      </td>

      <td className="p-3 text-sm font-[500] capitalize text-[#00A0C6] underline whitespace-nowrap">
        {product.color}
      </td>

      <td className="p-3 text-sm  font-semibold whitespace-nowrap">
        {product.availableQuantity > 0 ? (
          <p className='flex gap-x-1 items-center text-[#32d28c]'> <FaSmile className='text-green-500' /> In Stock</p>
        ) : (
          <p className='text-red-500'>Out Of Stock</p>
        )}
      </td>
      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        ${product.price}.00
      </td>
      <td className=" pl-5 lg:pl-10 text-sm  text-gray-700 whitespace-nowrap">
        {product.availableQuantity}
      </td>

      <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <div>
          <div className='flex justify-center items-center gap-x-2 '>
            <span>
              {product.availableQuantity > 0 ? (
                <>
                  <input
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    className='w-12 p-1  text-center border border-[#9c9b9b] rounded-sm'
                  />
                </>
              ) : (
                <input type="" disabled className='w-12 cursor-not-allowed  p-1 text-center bg-[#efebeb]' title='Out of Stock' />
              )}
            </span>
            <AiOutlineShoppingCart className='text-3xl w-16 py-1 rounded-sm text-[#f2efef] bg-[#383838]' />
            {product.availableQuantity > 0 && !error ? (
              <input disabled={quantity < 1} onChange={(e) => handleBuy(product, e, quantity)} type="checkbox" name="" id="" className='cursor-pointer' />
            ) : (
              <input disabled type="checkbox" className='cursor-not-allowed' />
            )}
          </div>
          <p className="text-xs text-red-500 text-center mt-2">{error}</p>
        </div>
      </td>
    </tr>
  );
};

export default Product;