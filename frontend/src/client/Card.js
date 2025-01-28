import React from 'react'

function Card({item}) {
  return (
    <>
    <div className='flex z- 0 justify-center'>
      <div className="card h-80 lg:h-96 2xl:h-auto w-80  xlsm:w-88  xlmd:w-80 bg-base-100   shadow-xl my-5 cursor-pointer hover:scale-105 duration-200">
        <figure><img src={item.image} alt="Shoes" /></figure>
        <div className="card-body h-30 md:h-44">
            <h2 className="card-title">
            {item.name}
            <div className="badge bg-orange-500 text-white py-3 px-3">{item.category}</div>
            </h2>
            <p>{item.variants[0].name}</p>
            <div className="card-actions justify-between">
            <div className="px-1 lg:px-2 lg:py-1 rounded-full border-2 border-slate-400">`$ {item.variants[0].price }`</div> 
            <div className="px-1 lg:px-2 lg:py-1 rounded-full border-2 border-slate-400 cursor-pointer hover:shadow-lg duration-200 ">Buy Now</div>
            </div>  
        </div>
      
      </div>
    </div>
    </>    

  )
}

export default Card
