import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const blackHeart = require('./../../Assets/heart-black.svg');
const redHeart = require('./../../Assets/heart-red.svg');
const imagePath = require('./../../Assets/cover_image.jpeg');

class Card extends Component {
  render() {
    const bookName = this.props.data.Name;
    const ratingsData = this.props.data.rating;
    const likedData = true;

    return (
      <div className="card">
        <img src={imagePath} alt="Book" className="book-image" />
        <p className="book-name">{bookName}</p>

        <span className="rating-data">{ratingsData}</span>
        <img src={(likedData === true) ? redHeart : blackHeart} alt="Heart" className="heart-logo" />
      </div>
    );
  }
}
Card.defaultProps = {
  Name: 'Harry Potter',
  rating: 3.9,
};

export default Card;
