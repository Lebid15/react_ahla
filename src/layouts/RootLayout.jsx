import React from 'react'
import Sidebar0 from './sidebar/Sidebar0'
import Navbar from './navbar/Navbar'

const RootLayout = ({ children }) => {
  return (
    <div className='flex'>
        <Sidebar0 />

        <main className='flex-1 mx-auto'>

          <Navbar />

          <div className='p-2 md:p-5 '>{children}</div>

          </main>
    </div>
  )
}

export default RootLayout