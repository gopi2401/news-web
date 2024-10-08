import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';

function SearchResults() {
    const { query } = useParams();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchSearchResults = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=${query}&apiKey=YOUR_API_KEY`
                );
                setArticles(response.data.articles);
            } catch (error) {
                console.error('Error fetching search results:', error);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div>
            <h1>Search Results for "{query}"</h1>
            <div className="articles-grid">
                {articles.map(article => (
                    <NewsCard key={article.url} article={article} />
                ))}
            </div>
        </div>
    );
}

export default SearchResults;
