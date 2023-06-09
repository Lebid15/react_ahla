import { faBullhorn, faCoins, faCreditCard, faMoneyBill, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Home = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-12'>

        <div className='flex h-12 gap-4 text-sm md:w-64'>
          <div className='bg-white flex items-center p-10 justify-between rounded-lg w-full'>
            <div className='text-center'>
              <p className='text-gray-400 mb-2 text-[0.8rem]'>رصيدك الحالي</p>
              <p className='text-lg font-bold text-gray-700 '>&#8378; 1780.25</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCoins} className='text-[2.5rem] text-green-600' />
            </div>
          </div>
        </div>

        <div className='flex h-12 gap-4 text-sm md:w-64'>
          <div className='bg-white flex items-center p-10 justify-between rounded-lg w-full'>
            <div className='text-center'>
              <p className='text-gray-400 mb-2 text-[0.8rem]'>مستحق الدفع</p>
              <p className='text-lg font-bold text-gray-700 '>&#8378; 7000</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faMoneyBill} className='text-[2.5rem] text-red-500' />
            </div>
          </div>
        </div>

      </div>

      

      <div className='flex gap-8 mt-16 items-top justify-between bg-cyan-500 rounded-lg pr-5 pl-5 pt-2 pb-2 md:w-[35rem]'>

        <div className='flex flex-col text-center items-center'>
        <button className=''><FontAwesomeIcon icon={faCreditCard} className='border-2 text-white text-[1.5rem] white p-3 rounded-full' /></button>
        <span className='text-[0.7rem] text-white'>الحسابات البنكية</span>
        </div>

        <div className='flex flex-col text-center items-center'>
        <button className=''><FontAwesomeIcon icon={faPeopleGroup} className='border-2 text-white text-[1.5rem] white p-3 rounded-full' /></button>
        <span className='text-[0.7rem] text-white'>فريق العمل</span>
        </div>

        <div className='flex flex-col text-center items-center'>
        <button className=''><FontAwesomeIcon icon={faBullhorn} className='border-2 text-white text-[1.5rem] white p-3 rounded-full' /></button>
        <span className='text-[0.7rem] text-white'>ماهو جديد</span>
        </div>

      </div>
    </>
  );
};

export default Home;
