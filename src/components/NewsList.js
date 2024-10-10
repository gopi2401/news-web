import React from 'react';
import NewsCard from './NewsCard';

const NewsList = ({ list }) => {


  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full">
        {list.map(article => (
          <NewsCard key={article.url} article={article} />
        ))}
      </div>
    </>
  );
};

export default NewsList;
