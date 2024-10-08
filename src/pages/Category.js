import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { DataContext } from '../utils/data';

function Category() {
  const { category } = useParams();
  const { setLoading } = React.useContext(DataContext);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchCategoryNews = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`);
        const data = await response.json();
        setArticles(data.articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching category news:', error);
        setLoading(false);
      }
    };

    fetchCategoryNews();
  }, [category]);

  return (
    <div>
      <h1>{category.charAt(0).toUpperCase() + category.slice(1)} News</h1>
      <div className="articles-grid">
        {articles.map(article => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </div>
  );
}

export default Category;
