import React from 'react'
import Navbar from './Navbar'
import Items from './Items';
import Categories from './Categories';
import Hero from './Hero';
import Footer from './Footer';
import Events from './Events';

function Home() {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center mx-0 gap-y-16'>
     <Hero/>
     <Items/>
     <Categories/>
     <Events/>
    </div>
  )
}

export default Home;
