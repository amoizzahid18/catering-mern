import React from 'react'
import Card from "./Card"
function Items() {
  return (
    <div className='h-auto  lg:w-4/5 md:w-10/12'>
        <div className=' text-3xl xsm:text-4xl font-medium    my-6 '>Top Ordered Items</div>
        <div className='grid grid-cols-1  xsm:grid-cols-2  xmd:grid-cols-3  xlg:grid-cols-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  )
}

export default Items
