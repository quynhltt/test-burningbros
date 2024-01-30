import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBox from '../../Page/HomePage/components/SearchBox/SearchBox'

export default function Header() {
  return (
    <div className='w-full h-20 shadow fixed z-10 bg-white'>
      <div className="container mx-auto flex justify-between items-center h-full">
        <NavLink to="/">
          <span className='font-bold text-red-500 text-2xl animate-pulse'>Burning Bros</span>
        </NavLink>
        <SearchBox />
      </div>
    </div>
  )
}
