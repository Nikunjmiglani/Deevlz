import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center'>
      <Link href="/"> <div className='logo'>
             <Image
      src="/deevlzlogo.png"
      width={70}
      height={70}
      alt="Picture of the author"
      className='ml-5 mt-4 cursor-pointer'
    />
        </div></Link>
        <div>
            <ul className='text-white flex gap-9 mr-9 font-mono cursor-pointer'>
                <Link href="/about"><li className='transition-all duration-300 hover:font-bold hover:text-xl'>About Us</li></Link>
               <Link href="/students"> <li className='transition-all duration-300 hover:font-bold hover:text-xl'>Students</li></Link>
               <Link href="/servicesoffered"> <li className='transition-all duration-300 hover:font-bold hover:text-xl'>Services & Prices</li></Link>
               <Link href="/contact"> <li className='transition-all duration-300 hover:font-bold hover:text-xl'>Contact Us</li></Link>
            </ul>
        </div>
    
    </nav>
  )
}

export default Navbar


