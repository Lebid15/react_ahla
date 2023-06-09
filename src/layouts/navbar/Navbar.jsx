import { faGamepad, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-[#00A884] text-white text-sm items-center h-14 min-h-14 pr-12 pl-5 mb-5 md:pr-5 shadow-lg'>
        <p>الصفحة الرئيسية</p>

        <div className='flex gap-4'>

          <span>
            <Link to="/mobile">
              <FontAwesomeIcon icon={faPhone} className='min-w-max text-white text-xl'/>
            </Link>
          </span>

          <span>
            <Link to="/game">
              <FontAwesomeIcon icon={faGamepad} className='min-w-max text-white text-xl'/>
            </Link>
          </span>

          <span>
            <Link to="/bill">
            <span><FontAwesomeIcon icon={faNewspaper} className='min-w-max text-white text-xl'/></span>
            </Link>
          </span>

        </div>
    </div>
  )
}

export default Navbar