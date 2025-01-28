import React from 'react'
import Card from './Card'

function MenuItems({items}) {
  
  return (
    <div className='h-auto  w-full md:3/5 sm:w-3/4'>
        <div className=' text-3xl xsm:text-4xl font-medium  pl-10  my-6 '>(Category wise)</div>
        <div className='grid grid-cols-1  xlsm:grid-cols-2 slg:grid-cols-3  xlg:grid-cols-4'>
            {
                items.map((item) => {
                    return <Card key={item._id} item={item} />
                })
            }
        </div>
    </div>
  );
}

export default MenuItems
