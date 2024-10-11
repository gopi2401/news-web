import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../utils/DataProvider';
import Pagination from '../components/Pagination';
import Skeleton from '../components/skeleton';

function SearchResults() {
    const { query } = useParams();
    const { loading, MsgLoad } = React.useContext(DataContext);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                loading.setLoading(true);
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.REACT_APP_API_KEY}`,
                    {
                        headers: {
                            "sec-fetch-site": null
                        }
                    }
                );
                const data = await response.json();
                if (data.status === 'error') {
                    MsgLoad.setMsg({ load: true, message: data.message })
                } else {
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

        fetchSearchResults();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='w-full flex flex-col items-center min-h-[calc(100vh-300px)]'>
            <h1 className='text-center font-bold text-2xl my-5 h-10'>Search Results for "{query}"</h1>
            <div className='flex-auto flex justify-center items-center w-full'>
                {!loading.loading ? (articles && articles.length > 0 ? (
                    <Pagination articles={articles} ></Pagination>
                ) : (
                    <h1 className='text-center text-gray-500'>No results found. Please try another search.</h1>
                )) : (<Skeleton />)}
            </div>
        </div>
    );
}

export default SearchResults;
