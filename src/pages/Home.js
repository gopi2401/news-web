import React, { useEffect, useState } from 'react';
import { DataContext } from '../utils/DataProvider';
import Pagination from '../components/Pagination';
import Skeleton from '../components/skeleton';

function Home() {
    const { loading, MsgLoad } = React.useContext(DataContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchTopHeadlines = async () => {
            try {
                loading.setLoading(true);
                const response = await fetch(`https://backend-ltdowr3f6-gopi2401s-projects.vercel.app/api/top-headlines?apikey=${process.env.REACT_APP_API_KEY}`
                );
                const responsedata = await response.json();
                if (responsedata.status === 'failed') { MsgLoad.setMsg({ load: true, message: responsedata.msg }) } else {
                    setArticles(responsedata.data.articles.filter(
                        (item) => item.title !== "[Removed]"
                    ));
                }
                loading.setLoading(false);
            } catch (error) {
                loading.setLoading(false);
                MsgLoad.setMsg({ load: true, message: 'Failed to fetch' })
            }
        };
        fetchTopHeadlines();
        // eslint-disable-next-line
    }, []);


    return (
        <div className='w-full flex flex-col items-center min-h-[calc(100vh-300px)]'>
            <h1 className='text-center font-bold text-2xl my-5 h-10'>
                <span className='text-red-600'>Top</span> Headlines
            </h1>
            <div className='flex-auto flex justify-center items-center w-full'>
                {!loading.loading ? (articles && articles.length > 0 ? (
                    <Pagination articles={articles} ></Pagination>
                ) : (
                    <h1 className='text-center text-gray-500'>No articles available at the moment.</h1>
                )) : (<Skeleton />)}
            </div>
        </div>
    );
}

export default Home;
