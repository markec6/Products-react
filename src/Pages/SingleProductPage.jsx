import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productService from '../services/productService';

// kom samo radi izmene za git

function SingleProductPage() {

  const {id} = useParams() // ovako prihvatamo id iz main patha, uvek ide u contantu kao id
  const [OneProduct, setOneProduct] = useState({}) // ovde ocekujemo object, zato ide {}
  const [isLoading, setisLoading] = useState(false) // state za loading klasika
  const [CurrentImg, setCurrentImg] = useState(0) // state za menjanje slike na klik
  // pocetna vrednost ovde je 0 jer cemo je menjati sa indexom 


  useEffect(() => { // ovde zovemo axios z jedan proizovd
    productService.getSingleProducts(id) //prihvatamo id iz productService.js
      .then((res) => {
        setOneProduct(res.data)
        setisLoading(true)
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }, []) // ako bi imali opciju da se klikce na dva proizvoda od jednom
  // stavili bi id - to bi znacilo da se useEffect pokrece posle svake promene id

  function ImageClick(index) {
    setCurrentImg(index) // ovde prihvatamo vrednost iz arrow funkcije
    // i samo promenimo state (CurrentImg)
  }
  

  return ( // ovde samo pomocu OneProduct state ubacujemo zeljene elemente
    <div className='px-[10px] container mx-auto mt-[50px]'>
      {isLoading ? (
      <>
      <div className='w-[100%] flex flex-wrap'>
        <div className='w-[100%] md:w-[50%]'>
          <img className='w-[80%] mx-auto' src={OneProduct.images[CurrentImg]}/>
          <div className='w-[80%] mx-auto flex justify-center gap-[22px] mt-[24px] '>
              {OneProduct.images?.map((img, index) =>{ // ako znamo da product ima vise slika (OneProduct.images.map())
                return (
                   <img 
                   src={img} // prihvatili smo vrednost iz zagrade 
                   key={index} // map uvek zahteva key !!!
                   alt='asdasd'
                   className= {CurrentImg == index ? 'w-[90px] h-[90px] p-2 border-2 border-purple-500 rounded-[6px]': 'w-[90px] h-[90px] p-2 border border-black/25 rounded-[6px]'}
                   onClick={() => ImageClick(index)} // uvek arrow funkcija jer prosledjujemo vrednost (index)               
                   ></img>
                )
              })}
          </div>
        </div>
        <div className='w-[100%] md:w-[50%]'>
          <p className='text-[14px] font-semibold text-purple-400 text-right'>{OneProduct.availabilityStatus}</p>
          <h1 className='text-[46px]'>{OneProduct.title}</h1>
          <p className='text-[16px] text-black/80 mt-8'>{OneProduct.description}</p>
          <div className='flex justify-between mt-[10px] items-center '>
            <p>{OneProduct.brand}</p>
            <p className='p-[10px] broder border-amber-500'>In Stock: {OneProduct.stock}</p>
          </div>
          <p className='text-[28px] font-bold text-purple-500/80'>${OneProduct.price}</p>
          <button className='w-[100%] py-[18px] rounded-[6px] mt-[32px] text-center text-white font-bold text-[18px] bg-purple-500'>Buy Now</button>
        </div>
        
      </div>
      </>): <h2>Loadingg...</h2>}
    </div>
    
  )
}

export default SingleProductPage