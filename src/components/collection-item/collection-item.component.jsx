/* eslint-disable react/prop-types */
import React from 'react';

import './collection-item.styles.scss';

// eslint-disable-next-line no-unused-vars
const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />

    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;

// essentially that clicklable block with the picture, item price and name
