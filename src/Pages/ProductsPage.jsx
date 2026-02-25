import React, { useEffect, useState } from 'react'
import productService from '../services/productService'
import { Link, NavLink } from 'react-router-dom'

function ProductsPage() {

    const [allProducts, setallProducts] = useState([]) // state za array sve produkte
    const [isLoading, setisLoading] = useState(true) // state za ucitavanje stranice

    useEffect(() => {
        productService.getALlProducts()
            .then((res) => {
              setallProducts(res.data.products) // uzimamo proizvode iz axiosa
              setisLoading(false) // state za ucitavanje se menja od trenutka kada dobijemo proizvode
              console.log(res.data.products)
            })
            .catch((err) => console.log(err))

    },[])

  return (
    <div className=' container mx-auto flex flex-wrap justify-between'>
      { !isLoading ? allProducts.map((product, index) => { // if logika za ucitavanje state
       return <div key={index} className=' w-[90%] rounded-[6px] my-[20px] mx-auto md:w-[30%] border border-2 border-purple-500/20'>
                 <img className='w-[90%] md:mx-auto object-cover ' src={product.thumbnail}/>
                <div className='flex justify-between p-[12px]'>
                  <p className='text-[12px] text-purple-500/50'>{product.brand}</p>
                  <p className='text-[14px] font-bold text-purple-500'>${product.price}</p>
                </div>
                  <p className='px-[12px] text-[18px] font-semibold mb-[16px]'>{product.title}</p>
                  <Link to={`/singleProduct/${product.id}`} className='inline-block py-[16px] w-[100%] mt-[20px] text-center bg-purple-500 text-white'>View More</Link>
              </div>
      }) : <h2 className='text-[36px] font-semibold text-red-400 '>Nisam toliko brz...</h2>}
    </div>
  )
}
// <Link to={`/singleProduct/${product.id}`} - ovako kazemo da nas ovaj link odvede: 
// tacno na SingleProduct sa unique id, taj id kasnije prihvatamo u SingleProduct page

export default ProductsPage