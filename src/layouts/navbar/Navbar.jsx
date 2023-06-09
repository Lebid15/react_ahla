import { faGamepad, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#00A884] text-white text-sm items-center h-14 min-h-14 pr-12 pl-5 md:pr-5 shadow-lg'>
        <p>الصفحة الرئيسية</p>

        <div className='flex gap-4'>
          <span>
            <Link to="/mobile">
              <FontAwesomeIcon icon={faPhone} className='min-w-max text-white text-md'/>
            </Link>
          </span>

          <span>
            <Link to="/game">
              <FontAwesomeIcon icon={faGamepad} className='min-w-max text-white text-md'/>
            </Link>
          </span>

          <span>
            <Link to="/bill">
            <span><FontAwesomeIcon icon={faNewspaper} className='min-w-max text-white text-md'/></span>
            </Link>
          </span>
          
          <span>&#8378; 1780.25</span>


        </div>
    </div>
  )
}

export default Navbar