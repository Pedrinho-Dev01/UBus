import React from 'react';
import './project.css';

const Project = ({ imgUrl }) => {
  return (
    <div className='K7__blog-container_article'>
      <div className='K7__blog-container_article-image'>
        <img src={imgUrl} alt="blog" />
      </div>
    </div>
  )
}

export default Project