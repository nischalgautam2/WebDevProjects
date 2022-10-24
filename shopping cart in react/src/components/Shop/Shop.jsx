import React, { useEffect, useState } from 'react';
import { productList } from '../../data';
import { BsArrow90DegLeft } from 'react-icons/bs';
import Product from './Product';
import { useNavigate } from 'react-router-dom';
import store from '../../hooks/store';


const Shop = ({ products, setProducts , cartItems , setCartItems}) => {
  const [searchInput, setSerachInput] = useState('')
  const [selectCategory, setSelectCategory] = useState('')
  const [selectSize, setSelectSize] = useState('')
  const navigate = useNavigate()

  // Filtering 
  const filtering = () => {
    let updatedList = productList
    setProducts(updatedList)

    // Category 
    if (selectSize) {
      updatedList = updatedList.filter((item) => item.size.toLowerCase().search(selectSize.toLowerCase().trim()) !== -1);
      setProducts(updatedList)
    }

    // Size 
    if (selectCategory) {
      updatedList = updatedList.filter((item) => item.category.toLowerCase().search(selectCategory.toLowerCase().trim()) !== -1);
      setProducts(updatedList)
    }

    // Search 
    if (searchInput) {
      updatedList = updatedList.filter((product) => product.name.toLowerCase().search(searchInput.toLowerCase().trim()) !== -1);
      setProducts(updatedList);
    }

  }

  useEffect(() => {
    filtering();
  }, [selectCategory, selectSize, searchInput]);

  const handleReset = () => {
    setProducts(productList)
    setSerachInput('')
    setSelectCategory('')
    setSelectSize('')
  }

  // Handle Buy 
  const handleBuy = (product, e, quantity) => {
    const newCart = { ...cartItems }
    const cartQuantity = parseInt(quantity)
    if (e.target.checked) {
      newCart[product.id] = { ...product, cartQuantity }
    }else {
      delete newCart[product.id]
      localStorage.removeItem(product.id)
    }
    setCartItems(newCart)
    store(newCart)
  }
  // console.log(cartItems)



  return (
    <div className='container mx-auto px-5 my-8'>
      {/* Top Bar  */}
      <div className='flex flex-col lg:flex-row gap-y-3 justify-between '>

        {/* Top Left  */}
        <div className='flex gap-x-4 order-2 lg:order-1'>
          <select className='border border-[#706f6f] rounded-md cursor-pointer'
            value={selectCategory}
            onChange={(e) => setSelectCategory(e.target.value)}
          >
            <option >Category</option>
            <option >Hoodie</option>
            <option >Pant</option>
            <option >Shirt</option>
          </select>
          <select className='border border-[#706f6f] rounded-md px-2 cursor-pointer'
            value={selectSize}
            onChange={(e) => setSelectSize(e.target.value)}
          >
            <option >Size</option>
            <option>M</option>
            <option>Lg</option>
            <option>Xl</option>
          </select>
          <span onClick={handleReset} className='flex gap-1 text-[#00A0C6] font-semibold cursor-pointer items-center'> <BsArrow90DegLeft /> Reset</span>
        </div>

        {/* Top Right */}
        <div className='flex items-center gap-x-2 order-1 lg:order-2'>
          <span className='hidden lg:block'>Search:</span>
          <input type="text" placeholder='Seach for an item...' className='pl-2 border border-[#706f6f] rounded-md' value={searchInput}
            onChange={(e) => setSerachInput(e.target.value)}
          />
          <button onClick={() => navigate('/cart/checkout')} className='px-4 py-1 bg-[#00A0C6] text-white'>Add To Cart</button>
        </div>

      </div>


      {/* Display Products */}
      <div className="w-full mt-2 overflow-x-auto">
        <table className="table-auto text-left w-full">
          <thead className="bg-[#f7f7f7]">
            <tr>
              <th className="p-3 text-sm font-semibold text-left pl-10">
                Image
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Name
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Color
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Stock
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Price
              </th>
              <th className="p-3 text-sm font-semibold text-left">
                Total Available
              </th>
              <th className="p-3 text-sm font-semibold text-center">
                Buy
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.length > 0 ? (
              <>
                {products.map((product, index) => <Product
                  product={product}
                  key={index}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                  handleBuy={handleBuy}
                />)}
              </>
            ) : (
              <h2 className='text-2xl  font-semibold text-[#9c6c6c] py-5'>No Product Found</h2>
            )}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Shop;