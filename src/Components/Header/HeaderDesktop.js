import React from 'react'
import UserMenu from './UserMenu'
import { NavLink } from 'react-router-dom'

export default function HeaderDesktop() {
  return (
    <div className='h-20 shadow'>
      <div className="container mx-auto flex justify-between items-center h-full">
        <NavLink to="/">
          <span className='font-bold text-red-500 text-2xl animate-pulse'>CyberMovie</span>
        </NavLink>
        <UserMenu/>
      </div>
    </div>
  )
}
