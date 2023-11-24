import Search from '@/app/ui/searches/Search'
import React from 'react'
import { FaFacebook,FaSquareTwitter,FaInstagram } from "react-icons/fa6";
import Link from 'next/link';


function Header() {
  return (
    <div className="parent-container xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="search-container md:flex-none w-96 sm:order-1 flex justify-center py-4 sm:py-0">
            <Search id='searchInput' name='searchInput' placeholder='Search...' type='text' className={'p-3 text-xs w-full shadow-sm rounded-full border-slate-800'}/>
        </div>
        <div className="nav-container flex justify-start items-center gap-6">
            <div className="">
                <Link href={'/'}><div className='text-xl text-black font-bold'>Blog Design</div></Link>
            
            </div>
            <div className="flex justify-middle align-middle gap-6">
                <Link href={"https://www.facebook.com/alpasTechnology"}> <span><FaFacebook color=''/></span></Link>
                <Link href={"/"}> <span><FaInstagram color=''/></span></Link>
                <Link href={"/"}> <span><FaSquareTwitter color=''/></span></Link>
             
            </div>

        </div>
    </div>
  )
}

export default Header
