import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';
import { FaRegHeart } from 'react-icons/fa';
import Link from 'next/link';

const Products = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/Data.json`);
    const products = await res.json();
    const sortedByRating = [...products].sort((a, b) => b.rating - a.rating);
    const featuredProduct = sortedByRating?.[0];
    const sideProducts = sortedByRating?.slice(1, 3) || [];
  return (
    <div>
      <div className='max-w-[80%] mx-auto mt-12 mb-10 md:mt-14 lg:mt-15'>
        {/* heading  */}
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between animate__animated animate__fadeInDown'>
            <div>
                <h1 className='text-xl font-bold text-gray-900 md:text-2xl'>
                    Popular Products
                </h1>
                <p className='text-sm text-gray-700 mt-2 md:text-base'>
                    Our community's most love pieces for a coastal lifestyle.
                </p>
            </div>
            <div>
                <p>
                    <a className='group flex gap-2.5 items-center text-sm md:text-base transition-colors duration-300 hover:text-[#008080]' href="/products/all-products/default">
                        View All <span className='transition-transform duration-300 group-hover:translate-x-1.5'><FaArrowRight></FaArrowRight></span>
                    </a>
                </p>
            </div>
        </div>
        {/* top Products  */}
        <div className='mt-8 grid grid-cols-1 gap-5 lg:grid-cols-3'>
            {/* Product 1  */}
          <div className='group rounded-2xl bg-[#f4f5f6] p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 lg:row-span-2 animate__animated animate__fadeInUp animate__delay-1s'>
            <div className='relative overflow-hidden rounded-xl'>
              <img
                src={featuredProduct?.image}
                alt={featuredProduct?.name}
                className='h-[260px] w-full object-cover md:h-[320px] group-hover:scale-110 transition-transform duration-500'
              />
              <button className='absolute right-3 top-3 rounded-full bg-white p-2.5 text-[#c97c6f] shadow'>
                <FaRegHeart />
              </button>
            </div>
            <div className='mt-4 flex items-start justify-between gap-3'>
              <h3 className='text-xl font-bold text-[#1c2f34] md:text-2xl'>{featuredProduct?.name}</h3>
              <p className='text-2xl font-semibold text-[#218a8a] md:text-3xl'>${featuredProduct?.price}.00</p>
            </div>
            <p className='mt-2 text-sm font-medium text-[#3d555b] md:text-base'>Rating: {featuredProduct?.rating}</p>
            <Link href={`/products/product/${featuredProduct?.id}`}>
              <button className='mt-4 w-full rounded-xl bg-[#edcf9f] py-2.5 font-semibold text-[#2e2b25] transition-colors duration-200 hover:bg-[#e5c189]'>
                View Details
              </button>
            </Link>
          </div>

          {/* Product 2-3  */}
          {sideProducts.map((item, index) => (
            <div key={item.id} className={`group rounded-2xl bg-[#f4f5f6] p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 animate__animated animate__fadeInUp animate__delay-${index + 1}s`}>
              <div className="overflow-hidden rounded-xl">
                <img src={item.image} alt={item.name} className='h-[180px] w-full object-cover group-hover:scale-110 transition-transform duration-500' />
              </div>
              <h4 className='mt-3 text-xl font-bold text-[#24363c] md:text-2xl'>{item.name}</h4>
              <p className='mt-1 text-sm font-medium text-[#3d555b] md:text-base'>Rating: {item.rating}</p>
              <p className='mt-1 text-xl font-semibold text-[#218a8a] md:text-2xl'>${item.price}.00</p>
              <Link href={`/products/product/${item.id}`}>
                <button className='mt-4 w-full rounded-xl border border-[#cae1dd] py-2.5 font-semibold text-[#2d8383] transition-colors duration-200 hover:bg-white'>
                  View Details
                </button>
              </Link>
            </div>
          ))}


          {/* See more Card  */}
          <div className='group rounded-2xl bg-gradient-to-r from-[#0c757a] to-[#0d6672] p-5 text-white shadow-sm transition-colors duration-300 hover:from-[#0f8489] hover:to-[#0f707d] md:p-6 lg:col-span-2 animate__animated animate__zoomIn animate__delay-2s'>
            <div className='flex flex-col items-start justify-between gap-4 md:flex-row md:items-center md:gap-6'>
              <div>
                <h3 className='text-2xl font-bold md:text-3xl lg:text-4xl'>Discover More Summer Essentials</h3>
                <p className='mt-2 text-xs text-[#9be0df] md:text-sm'>Looking for more? Explore 15+ more items including beach floats, skincare,<br /> and trendy outfits to complete your collection.</p>
              </div>
              <Link href="/products/all-products/default">
              <button className='rounded-full bg-white px-6 py-2.5 text-base font-semibold text-[#176a73] transition-colors duration-200 hover:bg-[#eafafa] md:px-8 md:py-3 md:text-lg'>
                See more Products
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
