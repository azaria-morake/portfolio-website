// Articles.js

import React, { useState } from 'react';
import './Articles.css';

const Articles = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const articles = [
    {
      id: 2,
      title: 'The Abstract Programmer',
      author: 'Azaria Morake',
      date: 'Sept 19, 2024',
      text: [
        'As someone who started programming at the low level, it was a challenging journey, especially with no prior programming background. Grasping the concepts felt daunting at first. However, I eventually had a breakthrough and began to enjoy low-level programming.',
        'As I learned about high-level programming, I found it incredibly appealing, offering a sense of control and freedom—qualities often associated with languages like C. Yet, when I transitioned to high-level programming, I was perplexed by how certain things were possible. For instance, in Python, you don’t have to declare variable types or end statements with semicolons. These differences made it difficult for me to understand and learn initially.',
        'Over time, I recognized that spending excessive time on low-level details often slowed down productivity. This realization shifted my mentality toward programming; I started to focus less on specifics and more on accomplishing tasks efficiently.',
        'I came to see that low-level programmers tend to concentrate on details, while high-level programmers prioritize getting things done without being bogged down by specifics. This led me to realize that the ideal programmer, or the “abstract programmer,” effectively blends these approaches.',
        'Reflecting on my journey, I wondered whether learning low-level programming was ultimately beneficial. My experience means I often seek deeper understanding when faced with peculiarities in high-level programming. I might investigate the underlying code to comprehend how certain features work, while others who excel at high-level programming without low-level experience might get things done more efficiently.',
        'This ongoing tension highlights the evolving role of the abstract programmer in today’s fast-paced tech landscape, where understanding the bigger picture often outweighs knowing every detail.'
      ],
      image: 'abstract-programmer.jpeg',
    },
    {
      id: 1,
      title: 'ALX Exposed',
      author: 'Azaria Morake',
      date: 'Sept 15, 2024',
      text: [
        'ALX is a tech institution dedicated to the fundamentals of computer science, offering courses in software engineering, data science, data analysis, and various short programs. However, this article will focus primarily on the software engineering course, which is the institution\'s flagship program and often evokes strong opinions among students. This twelve-month intensive program covers everything from low-level to high-level programming, while also incorporating essential IT concepts like networking.',
        'Having gone through the full twelve-month program, I can attest to its intensity and challenges. Success often requires a creative approach; those who struggle tend to find themselves in polarized groups with mixed opinions about the course. The program demands significant time commitment, and while you are given an expected number of hours, personal experience shows that you need to dedicate all your time to keep up. Sacrifices are essential; if you miss a key concept, it can derail your progress.',
        'Many students come in excited about becoming software engineers, but they might not fully grasp the commitment required. When faced with low-level programming, bash scripting, and other foundational topics, some find it overwhelming and esoteric. This disconnect often leads to dropouts, as they realize that what they wanted may not align with the reality of the workload.',
        'Additionally, there is a misconception that prior programming experience is necessary to succeed in the course. I, along with others without such backgrounds, have proven that with dedication and creativity, it is possible to thrive.',
        'In reflecting on my time at ALX, I believe the institution provides some of the best programming and computer science basics on the continent. Having reviewed the curricula at various universities, particularly in South Africa, I feel that ALX offers a unique value that is hard to match. The hands-on approach and immersive experience prepare students effectively for the tech industry.',
        'Perseverance and creativity are essential to navigating the challenges of the program. Those who stick with it and adapt their strategies often emerge with a strong foundation in software engineering. While the journey may be intense and demanding, the skills and knowledge gained at ALX can be transformative, setting students up for success in their careers.'
      ],
      image: 'alx-exposed.jpeg',
    },
  ];

  const openModal = (article) => {
    setSelectedArticle(article);
    setModalOpen(true);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedArticle(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <div className="articles-section">
      {articles.map((article) => (
        <div className="article-card" key={article.id} onClick={() => openModal(article)}>
          <img src={article.image} alt={article.title} />
          <div className="article-info">
            <h3>{article.title}</h3>
            <p>This is a worthwhile article on {article.title}.</p>
            <button className="open-article-btn">Open Article</button>
          </div>
        </div>
      ))}

      {/* Modal - only render if an article is selected */}
      {modalOpen && selectedArticle && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="article-modal">
            {/* Left side - Article content */}
            <div className="modal-content">
              <h3>{selectedArticle.title}</h3>
              <small>By {selectedArticle.author} on {selectedArticle.date}</small>
              {selectedArticle.text.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <button className="open-article-btn" onClick={closeModal}>Close</button>
            </div>

            {/* Right side - Article image */}
            <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
          </div>
        </>
      )}
    </div>
  );
};

export default Articles;
