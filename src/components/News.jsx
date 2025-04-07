import React, { useEffect, useState } from 'react';

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = 'd7c7904d18744afebd9415a28bf2a877'; // Replace with your key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=10&apiKey=${API_KEY}`
        );
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="news-container">
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <ul className="news-list">
          {articles.map((article, index) => (
            <li key={index} className="news-item">
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <button>Read More</button>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default News;
