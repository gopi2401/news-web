import React, { useEffect, useState } from 'react';
import { DataContext } from '../utils/data';
import Pagination from '../components/Pagination';

function Home() {
    const { loading, MsgLoad } = React.useContext(DataContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchTopHeadlines = async () => {
            try {
                loading.setLoading(true);
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=${process.env.REACT_APP_COUNTRY}&apiKey=${process.env.REACT_APP_API_KEY}`);
                const data = await response.json();
                if (data.status === 'error') { MsgLoad.setMsg({ load: true, message: data.message }) } else {
                    setArticles(data.articles.filter(
                        (item) => item.title != "[Removed]"
                    ));
                }
                loading.setLoading(false);
            } catch (error) {
                loading.setLoading(false);
                MsgLoad.setMsg({ load: true, message: 'Failed to fetch' })
            }
        };
        fetchTopHeadlines();
    }, []);


    return (
        <div className='w-full flex flex-col items-center min-h-[calc(100vh-300px)]'>
            <h1 className='text-center font-bold text-2xl my-5 h-10'>
                <span className='text-red-600'>Top</span> Headlines
            </h1>
            <div className='flex-auto flex justify-center items-center '>
                {articles && articles.length > 0 ? (
                    <Pagination articles={articles} ></Pagination>
                ) : (
                    <h1 className='text-center text-gray-500'>No articles available at the moment.</h1>
                )}
            </div>
        </div>
    );
}

export default Home;
