import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logoName.png'

function Navbar() {
  const navigate = useNavigate();
  const categorys = ["business", "entertainment", 'health', 'science', 'sports', "technology"];
  const [searchItem, setSearchItem] = useState('')
  const [hovered, setHovered] = useState(false);
  const toggleHover = (boolen) => setHovered(boolen);
  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm)
  }
  const search = (event) => {
    if (event.key === 'Enter') {
      // window.location.href = `/search/${searchItem}`;
      navigate(`/search/${searchItem}`);
      setSearchItem('');
    }
  }


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className=''>
      <nav className="block relative w-full max-w-screen-lg px-4 py-2 mx-auto text-white bg-white shadow-md rounded-md lg:px-8 lg:py-3 mt-10">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800">
          <Link to="/"
            className="block cursor-pointer text-base text-slate-800 font-semibold">
            {/* <span className='text-red-600'>News</span> Web */}
            <img className='w-10' src={logo} alt='nav-logo' />
          </Link>
          {/* Search bar */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input value={searchItem} onChange={handleInputChange} onKeyDown={search} type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              <li
                className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link key='nav-home' to="/" className="flex items-center">
                  Home
                </Link>
              </li>
              <li
                className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <Link key='nav-general' to="/category/general" className="flex items-center">
                  General
                </Link>
              </li>
              {/* Dropdown menu button */}
              <li onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)} className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <button className="text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Category<svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
                </button>
              </li>
            </ul>
            <div className='flex justify-end'>
              {/* Dropdown menu  */}
              {hovered && <div onMouseEnter={() => toggleHover(true)} onMouseLeave={() => toggleHover(false)} id="dropdownHover" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
                  {categorys.map(category => (
                    <li key={`nav-${category}`}>
                      <Link to={`/category/${category}`} className="block capitalize px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{category}</Link>
                    </li>))}
                </ul>
              </div>}
            </div>
          </div>
          <div className="lg:hidden">
            {/* Drawer toggle button */}
            <button onClick={toggleDrawer} type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="lg:hidden relative ml-3 text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 ">
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <button
              onClick={toggleDrawer}
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              type="button">
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </nav>

      <div className="text-center">
        {/* Drawer component */}
        <div
          className={`lg:hidden fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transition-transform bg-white w-80 dark:bg-gray-800 ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}
          tabIndex="-1"
          aria-labelledby="drawer-label"
        >
          {/* Drawer content */}
          <div className='w-full flex justify-center' >
            <img className='w-36' src={logo} alt='slide-logo' />
          </div>


          {/* Close button */}
          <button
            type="button"
            onClick={toggleDrawer} // Close drawer
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>

          {/* Drawer content */}
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
            </div>
            <input key='Drawer-searchbar' value={searchItem} onChange={handleInputChange} onKeyDown={search} type="text" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
          </div>

          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
            <li key="drawer-home">
              <Link to="/category/home" className="block capitalize px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
            </li>
            <li key="drawer-general">
              <Link to="/category/general" className="block capitalize px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">General</Link>
            </li>
            {categorys.map(category => (
              <li key={`drawer-${category}`}>
                <Link to={`/category/${category}`} className="block capitalize px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{category}</Link>
              </li>))}
          </ul>
          {/* <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our <a href="#" className="text-blue-600 underline dark:text-blue-500 hover:no-underline">limited-time sale</a> for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job board.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
              Learn more
            </a>
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Get access
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div> */}
        </div>
      </div>

    </div>

  );
}

export default Navbar;
