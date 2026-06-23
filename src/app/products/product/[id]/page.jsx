import React from 'react'
import Link from 'next/link'

const ProductDetailsPage = async ({ params }) => {
  const routeParams = await params
  const productId = Number(routeParams?.id)

  await new Promise((resolve) => setTimeout(resolve, 300))
  const res = await fetch('https://suncart-by-abid.vercel.app/Data.json', { cache: 'no-store' })
  const products = await res.json()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return (
      <div className='bg-[#f2f4f5] py-12'>
        <div className='animate__animated animate__fadeIn mx-auto max-w-[80%] rounded-xl bg-white p-8 text-center'>
          <h1 className='text-2xl font-bold text-[#2f4247]'>Product not found</h1>
          <Link
            href='/products/all-products/default'
            className='mt-5 inline-flex rounded-lg bg-[#008080] px-5 py-2 text-sm font-semibold text-white'
          >
            Go Back Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#f2f4f5] py-10 md:py-12'>
      <div key={productId} className='animate__animated animate__fadeInUp mx-auto max-w-[80%] rounded-2xl border border-[#dfe7e9] bg-[#f7f8f8] p-4 md:p-6 lg:p-8'>
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8'>
          <div>
            <img src={product.image} alt={product.name} className='h-[320px] w-full rounded-xl object-cover md:h-[420px]' />
          </div>
          <div className='flex flex-col justify-center'>
            <p className='text-sm font-semibold text-[#0f767c]'>{product.category}</p>
            <h1 className='mt-2 text-3xl font-bold text-[#2f4247] md:text-4xl'>{product.name}</h1>
            <p className='mt-3 text-lg text-[#52686d]'>Brand: {product.brand}</p>
            <p className='mt-1 text-lg text-[#52686d]'>Rating: {product.rating}</p>
            <p className='mt-1 text-lg text-[#52686d]'>Stock: {product.stock}</p>
            <p className='mt-3 text-4xl font-bold text-[#0f767c]'>${product.price}.00</p>
            <p className='mt-4 text-base leading-relaxed text-[#5d7479]'>{product.description}</p>
            <Link
              href='/products/all-products/default'
              className='mt-6 inline-flex w-fit rounded-lg bg-[#008080] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#006f6f]'
            >
              Go Back Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetailsPage
