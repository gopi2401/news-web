import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../utils/DataProvider';
import Pagination from '../components/Pagination';
import Skeleton from '../components/skeleton';

function Category() {
  const { category } = useParams();
  const { loading, MsgLoad } = React.useContext(DataContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        loading.setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`, {
          headers: {
            "origin": "http://localhost:3000/",
            "referer": "http://localhost:3000/",
            "sec-fetch-site": null
          }
        });
        const data = await response.json();
        if (data.status === 'error') { MsgLoad.setMsg({ load: true, message: data.message }) } else {
          setArticles(data.articles.filter(
            (item) => item.title !== "[Removed]"
          ));
        }
        loading.setLoading(false);
      } catch (error) {
        loading.setLoading(false);
        MsgLoad.setMsg({ load: true, message: 'Failed to fetch' })
      }
    };

    fetchCategoryNews();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='w-full flex flex-col items-center min-h-[calc(100vh-300px)]'>
      <h1 className='text-center font-bold text-2xl my-5 5 h-10'>
        <span className='text-red-600'>{category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Top'}</span> News
      </h1>
      <div className='flex-auto flex justify-center items-center w-full'>
        {!loading.loading ? (articles && articles.length > 0 ? (
          <Pagination articles={articles} ></Pagination>
        ) : (
          <h1 className='text-center text-gray-500'>No articles available at the moment.</h1>
        )) : (<Skeleton />)}
      </div>
    </div >

  );
}

export default Category;
