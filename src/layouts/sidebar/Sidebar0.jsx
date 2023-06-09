import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import logo from '../../data/ahlaLG7.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMediaQuery } from 'react-responsive';


import { faBars, faGamepad, faHouseChimney, faList, faNewspaper, faPhone } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar0 = () => {

  const isTab = useMediaQuery({ query: "(max-width: 768px)" });
  
  const {pathname} = useLocation()

  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  const Sidebar_animation = isTab ? 
  {
    //mobile view
    open : {
      x : 0,
      width: "16rem",
      transition : {
        damping : 40,
      },
    },
    closed : {
      x : 250,
      width: 0,
      transition : {
        damping : 40,
        delay : 0.15,
      },
    }
  }: {
    //System View
    open : {
      width: "16rem",
      transition : {
        damping : 40,
      },
    },
    closed : {
      width: "4rem",
      transition : {
        damping : 40,
      },
    },
  };


  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // laptop
      setIsOpen(true);
    }
  }, [isTab]);

//pathename change -> close sidebar too (only mobile view)
useEffect(() => {
  isTab && setIsOpen(false);
}, [isTab, pathname]);




  return (
    <div>

      <div 
      onClick={() => setIsOpen(false)}
      className={` md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50
      ${isOpen ? "black" : "hidden" } `}>
          
      </div>

      <motion.div

        variants={Sidebar_animation}
        initial = {{x : isTab ? 400 : 0}}
        animate={isOpen ? "open" : "closed"}
        className=' bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] 
        h-screen overflow-hidden md:relative fixed' >
        

          {/* icon for open and close sidebar */}
        <motion.div
          animate = {
            isOpen ? {x : 0,}:{x : 14,}}
          transition = {{duration : 0,}}
          
          onClick={() => {setIsOpen(!isOpen)}}
          className='absolute text-xl w-fit h-fit z-50 left-2 top-3 cursor-pointer md:block hidden'>
          <FontAwesomeIcon icon={faBars} />
        </motion.div>
        {/* ======================================= */}

          {/* logo */}
          {/* border-b border-slate-300 py-1  */}
        <div className='flex mt-9 gap-2.5 items-center font-medium '>
          <img className=' w-14' src={logo} alt='..' />
          <span className='text-xl whitespace-pre'>أهلا كارد</span>
        </div>
        {/* ======================================= */}

        {/* menus */}
            <div className='flex flex-col h-full'>

                {/* first */}
                <ul className='whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1
                font-medium overflow-x-hidden h-[70%] md:h-[68%] '>

                  <li>
                    <NavLink to="/" className={"link"}>
                    <FontAwesomeIcon icon={faHouseChimney} className='min-w-max text-green-500 text-2xl'/>
                      الصفحة الرئيسية
                      </NavLink>
                  </li>

                  <hr className="w-2/3 mx-auto border-t-1 border-gray-300" />
                  
                  <li>
                    <NavLink to="/mobile" className={"link"}>
                    <FontAwesomeIcon icon={faPhone} className='min-w-max text-red-400 text-2xl'/>
                      شحن الموبايل
                      </NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/game" className={"link"}>
                    <FontAwesomeIcon icon={faGamepad} className='min-w-max text-red-400 text-[1.3rem]'/>
                      شحن الألعاب
                      </NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/bill" className={"link"}>
                    <FontAwesomeIcon icon={faNewspaper} className='min-w-max text-red-400 text-2xl'/>
                      تسديد فاتورة
                      </NavLink>
                  </li>

                  <hr className="w-2/3 mx-auto border-t-1 border-gray-300" />
                  
                  <li>
                    <NavLink to="/mobile-orders" className={"link"}>
                    <FontAwesomeIcon icon={faList} className='min-w-max text-blue-400 text-2xl'/>
                      طبات الموبايل
                      </NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/game-orders" className={"link"}>
                    <FontAwesomeIcon icon={faList} className='min-w-max text-blue-400 text-2xl'/>
                      طلبات الألعاب
                      </NavLink>
                  </li>
                  
                  <li>
                    <NavLink to="/bill-orders" className={"link"}>
                    <FontAwesomeIcon icon={faList} className='min-w-max text-blue-400 text-2xl'/>
                      طلبات الفواتير
                      </NavLink>
                  </li>

                </ul>

                {/* second
                {
                  isOpen && <div className='flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium'>
                    <div>
                      <div>
                        <p>kjkl</p>
                      </div>
                    </div>
                  </div>
                } */}


            </div>



      </motion.div>

      <div className="fixed bottom-4 right-4">
        <button className="bg-blue-500 shadow rounded-full p-3">
          <svg className="h-7 w-7 text-gray-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <svg viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" strokeWidth="0.00024000000000000003" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#001eff" strokeWidth="0.048"></g><g id="SVGRepo_iconCarrier"> <path d="M12.9886 20.9463L12.88 19.9522L12.35 20.0101L12.1027 20.4825L12.9886 20.9463ZM6.45572 19.09L7.06966 19.8793L8.08109 19.0927L7.07226 18.3027L6.45572 19.09ZM4.23006 20.8211L3.61612 20.0317L3.61611 20.0317L4.23006 20.8211ZM20 12C20 16.1206 16.8838 19.5148 12.88 19.9522L13.0973 21.9404C18.1043 21.3933 22 17.1523 22 12H20ZM12 4C16.4183 4 20 7.58172 20 12H22C22 6.47715 17.5228 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM7.07226 18.3027C5.20015 16.8366 4 14.5587 4 12H2C2 15.1996 3.50381 18.0485 5.83917 19.8773L7.07226 18.3027ZM4.844 21.6104L7.06966 19.8793L5.84178 18.3006L3.61612 20.0317L4.844 21.6104ZM4.29145 20C5.1484 20 5.52041 21.0843 4.84401 21.6104L3.61611 20.0317C2.78939 20.6747 3.24408 22 4.29145 22V20ZM12 20H4.29145V22H12V20ZM12.9 20H12V22H12.9V20ZM12.1027 20.4825C12.2517 20.1979 12.5519 20 12.9 20V22C13.3252 22 13.6921 21.7586 13.8746 21.4102L12.1027 20.4825Z" fill="#ffffff"></path> <path d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z" fill="#ffffff"></path> <path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#ffffff"></path> <path d="M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z" fill="#ffffff"></path> </g></svg>
          </svg>
        </button>
    </div>

      <div className='m-3 md:hidden absolute text-white' onClick={() => setIsOpen(true)}>
      <FontAwesomeIcon icon={faBars} className='text-2xl cursor-pointer' />
      </div>

    </div>

  )
}

export default Sidebar0