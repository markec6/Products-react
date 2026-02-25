import React from 'react'
import { NavLink } from 'react-router-dom'

function Navigation() {
  return (
    <div className='container mx-auto flex justify-between h-[60px] items-center'>
        <h2 className='text-[24px]'>Logo</h2>

        <ul className='flex gap-[24px]'>
            <li>
                <NavLink to={'./'}>Home</NavLink>
            </li>
            <li>
                <NavLink to={'./about'}>About</NavLink>
            </li>
            <li>
                <NavLink to={'./products'}>Products</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Navigation