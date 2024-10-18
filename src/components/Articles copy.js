import React, { useState } from 'react';
import './Articles.css'; // Create and link the CSS file for article styling

const Articles = () => {
  const [hoveredArticle, setHoveredArticle] = useState(1); // Initially, article 1 is hovered

  const handleHover = (articleNumber) => {
    setHoveredArticle(articleNumber);
  };

  return (
    <div className="articles-section">
      {/* Article 1 */}
      <div
        className={`article ${hoveredArticle === 1 ? 'hovered' : ''}`}
        onMouseEnter={() => handleHover(1)}
      >
        <img src="azaria-morake-1.jpg" alt="Article 1" className='article-card img ' />
        <div className="article-background">
          <h3>Article 1 Title</h3>
          <p>Brief description of article 1.</p>
          <button>Open Article</button>
        </div>
      </div>

      {/* Article 2 */}
      <div
        className={`article ${hoveredArticle === 2 ? 'hovered' : ''}`}
        onMouseEnter={() => handleHover(2)}
      >
        <img src="azaria-morake-2.jpg" alt="Article 2" />
        <div className="article-background">
          <h3>Article 2 Title</h3>
          <p>Brief description of article 2.</p>
          <button>Open Article</button>
        </div>
      </div>
    </div>
  );
};

export default Articles;

