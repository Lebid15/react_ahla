import { faBullhorn, faCoins, faCreditCard, faMoneyBill, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const Home = () => {
  const [displayText, setDisplayText] = useState('mytext');

  const handleIconClick = (text) => {
    setDisplayText(text);
  };

  return (
    <>
      <div className="bg-[#00A884] text-white h-[16rem] rounded-b-[30px]">
        <div className='p-5 md:w-[35rem] mr-auto ml-auto '>
          <div className='bg-yellow flex h-20 text-sm md:w-50 mt-6 border border-white'>
            <div className='flex items-center p-10 justify-between rounded-lg w-full'>
              <div className='text-center'>
                <p className='mb-2 text-[0.65rem] text-gray-300'>رصيدك الحالي</p>
                <p className='text-md'>&#8378; 1780.25</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faCoins} className='text-[1.5rem] text-gray-200' />
              </div>
            </div>
          </div>
          <div className='bg-yellow flex h-20 text-sm md:w-50 border border-white'>
            <div className='flex items-center p-10 justify-between rounded-lg w-full'>
              <div className='text-center'>
                <p className='mb-2 text-[0.65rem] text-gray-300'>مستحق الدفع</p>
                <p className='text-md'>&#8378; 7000</p>
              </div>
              <div>
                <FontAwesomeIcon icon={faMoneyBill} className='text-[1.5rem] text-gray-200' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three buttons */}
      <div className='flex mr-auto ml-auto justify-between pr-8 pl-8 text-gray-900 mt-[-1.5rem] md:w-[35rem]'>
        <div className='flex flex-col text-center items-center'>
          <button onClick={() => handleIconClick('الحسابات البنكية')}>
            <FontAwesomeIcon icon={faCreditCard} className='border-2 border-white text-gray-300 bg-[#00A884] text-[1.2rem] p-3 rounded-2xl' />
          </button>
          <span className='text-[0.7rem]'>الحسابات البنكية</span>
        </div>
        <div className='flex flex-col text-center items-center'>
          <button onClick={() => handleIconClick('فريق العمل')}>
            <FontAwesomeIcon icon={faPeopleGroup} className='border-2 border-white text-gray-300 bg-[#00A884] text-[1.2rem] p-3 rounded-full' />
          </button>
          <span className='text-[0.7rem]'>فريق العمل</span>
        </div>
        <div className='flex flex-col text-center items-center'>
          <button onClick={() => handleIconClick('ماهو جديد')}>
            <FontAwesomeIcon icon={faBullhorn} className='border-2 border-white text-gray-300 bg-[#00A884] text-[1.2rem] p-3 rounded-full' />
          </button>
          <span className='text-[0.7rem]'>ماهو جديد</span>
        </div>
      </div>

      <div className='h-[20rem] mt-4 p-5'>
        <p>{displayText}</p>
      </div>
    </>
  );
};

export default Home;
