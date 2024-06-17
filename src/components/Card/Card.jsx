import React from 'react';
import './Card.scss';

// Function to truncate the title to the first two words
const truncateTitle = (title) => {
  const words = title.split(' ');
  return words.length > 2 ? words.slice(0, 2).join(' ') : title;
};

const Card = ({ title, rating, price, image }) => {
  return (
    <div className='card'>
      <div className="card__img">
        <img src={image} alt={title} />
      </div>
      <div className="card__info">
        <h1>{truncateTitle(title)}</h1>
        <p>${price.toFixed(2)}</p>
        {rating && <p>Rating: {rating.rate} ({rating.count} reviews)</p>}
      </div>
    </div>
  );
};

export default Card;