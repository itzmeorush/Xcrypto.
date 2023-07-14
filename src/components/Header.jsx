import React, { Fragment } from 'react'
import bitImg from '../Assets/bitcoin.png'
import bitImg2 from '../Assets/2.png'
import bitImg3 from '../Assets/3.png'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Fragment>
      <header className="text-gray-600 body-font shadow-lg  top-0 z-10">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src={bitImg2} alt="" width='60px'/>
      <span className="ml-3 text-xl">XCrypto</span>
    </a>
    <nav className="md:mr-auto md:ml-4  md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900" to="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900" to="/exchange">Exchange</Link>
      <Link className="mr-5 hover:text-gray-900" to="/coins">Coins</Link>
      
    </nav>
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Log In
      <svg fill="none" stroke="currentColor" srokeLinecap="round" srokeLinejoin="round" srokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </Fragment>
  )
}

export default Header
