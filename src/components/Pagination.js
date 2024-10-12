import React, { useState, useEffect } from 'react';
import NewsList from './NewsList';

const Pagination = ({ articles }) => {
  const itemsPerPage = 9;
  const totalPage = Math.ceil(articles.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageItems, setCurrentPageItems] = useState([]);

  useEffect(() => {
    setCurrentPageItems(articles.slice(0, itemsPerPage));
  }, [articles]);

  const handlePagination = (chances) => {
    const pageNumber = currentPage + chances
    if (pageNumber > 0 && pageNumber <= totalPage) {
      setCurrentPage(pageNumber);
      let start = (pageNumber - 1) * itemsPerPage
      let end = start + itemsPerPage;
      setCurrentPageItems(articles.slice(start, end));
      document.getElementById('newstop').scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <div id='newstop' className='flex flex-col items-center'>
        <NewsList list={currentPageItems}></NewsList>
        <nav className="inline-flex items-center p-1 my-5 rounded bg-white space-x-2">
          <button onClick={() => handlePagination(-(currentPage - 1))} className="px-2 py-1 rounded border text-gray-500 bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
            First
          </button>
          <button onClick={() => handlePagination(-1)} className="p-1 rounded border text-black bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
          <p className="text-gray-500">Page {currentPage} of {totalPage}</p>
          <button onClick={() => handlePagination(1)} className="p-1 rounded border text-black bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
              <path fillRule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <button onClick={() => handlePagination(totalPage - currentPage)} className="px-2 py-1 rounded border text-gray-500 bg-white hover:text-white hover:bg-blue-600 hover:border-blue-600">
            Last
          </button>
        </nav>
      </div>
    </>
  );
};

export default Pagination;

