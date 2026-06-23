import React from 'react'
import Link from 'next/link'

const toSlug = (value) =>
  value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

const ProductsByFilterPage = async ({ params }) => {
  const routeParams = await params
  const selectedCategorySlug = routeParams?.category || 'all-products'
  const selectedPrice = routeParams?.price || 'default'

  const res = await fetch('https://suncart-by-abid.vercel.app/Data.json', { cache: 'no-store' })
  const products = await res.json()

  const categoryOptions = ['All Products', ...new Set(products.map((item) => item.category))]
  const categoryOptionsWithSlug = categoryOptions.map((label) => ({ label, slug: toSlug(label) }))

  const selectedCategoryData =
    categoryOptionsWithSlug.find((item) => item.slug === selectedCategorySlug) || categoryOptionsWithSlug[0]
  const selectedCategory = selectedCategoryData.label

  const priceOptions = [
    { label: 'Default', value: 'default' },
    { label: 'Price: High to Low', value: 'high-to-low' },
    { label: 'Price: Low to High', value: 'low-to-high' }
  ]
  const selectedPriceLabel = priceOptions.find((item) => item.value === selectedPrice)?.label || 'Default'

  const categoryFilteredProducts = products.filter((item) => {
    const categoryMatch = selectedCategory === 'All Products' || item.category === selectedCategory
    return categoryMatch
  })

  const filteredProducts = [...categoryFilteredProducts]
  if (selectedPrice === 'high-to-low') {
    filteredProducts.sort((a, b) => b.price - a.price)
  } else if (selectedPrice === 'low-to-high') {
    filteredProducts.sort((a, b) => a.price - b.price)
  }

  return (
    <div className='bg-[#f2f4f5] py-8 md:py-10 lg:py-12'>
      <div className='w-[90%] lg:max-w-[80%] mx-auto'>
        <div className='border-b border-[#dce4e7] pb-4 md:pb-5'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between'>
            <div className='flex flex-wrap items-center gap-2 md:gap-3'>
              {categoryOptionsWithSlug.map((category) => (
                <Link
                  key={category.slug}
                  href={`/products/${category.slug}/${selectedPrice}`}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200 ${selectedCategorySlug === category.slug
                      ? 'bg-[#0c757a] text-white'
                      : 'bg-[#d8ebec] text-[#47636a] hover:bg-[#cfe4e6]'
                    }`}
                >
                  {category.label}
                </Link>
              ))}
            </div>

            <div className='flex items-center gap-2 md:gap-3'>
              <p className='text-sm text-[#51686d]'>Sort by:</p>
              <details className='relative'>
                <summary className='list-none cursor-pointer rounded-lg bg-[#c7eaeb] px-3 py-1.5 text-sm font-medium text-[#0f6f77]'>
                  <span className='flex items-center gap-2'>
                    {selectedPriceLabel}
                    <span>▾</span>
                  </span>
                </summary>
                <div className='absolute right-0 z-20 mt-2 w-[180px] rounded-lg border border-[#d4e7e8] bg-white p-1.5 shadow-md'>
                  {priceOptions.map((option) => (
                    <Link
                      key={option.value}
                      href={`/products/${selectedCategorySlug}/${option.value}`}
                      className={`block rounded-md px-2.5 py-1.5 text-sm ${selectedPrice === option.value
                          ? 'bg-[#e8f5f5] text-[#0f6f77]'
                          : 'text-[#5a7479] hover:bg-[#f2f8f8]'
                        }`}
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              </details>
            </div>
          </div>
        </div>

        <div
          key={`${selectedCategorySlug}-${selectedPrice}`}
          className='mt-6 grid grid-cols-1 gap-5 md:mt-7 md:grid-cols-2 lg:grid-cols-4 animate__animated animate__fadeInUp animate__faster'
        >
          {filteredProducts.map((item) => (
            <div key={item.id} className='group rounded-xl border border-[#dfe7e9] bg-[#f7f8f8] p-3 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'>
              <div className="overflow-hidden rounded-lg">
                <img src={item.image} alt={item.name} className='h-[220px] w-full object-cover md:h-[240px] lg:h-[260px] group-hover:scale-110 transition-transform duration-500' />
              </div>
              <h3 className='mt-3 text-lg font-semibold text-[#435b61]'>{item.name}</h3>
              <p className='mt-1 text-3xl font-bold text-[#0f767c]'>${item.price}.00</p>
              <Link
                href={`/products/product/${item.id}`}
                className='mt-3 inline-flex rounded-lg bg-[#008080] px-5 py-2 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#006f6f] hover:shadow-[0_8px_18px_rgba(0,128,128,0.35)]'
              >
                See Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsByFilterPage
