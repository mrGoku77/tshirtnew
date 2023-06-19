import React from 'react';
import '../css/ProductListMWK.css';

const ProductListMWK = ({ showitems }) => {
  return (
    <div className="item-listMWK">
      {showitems.map((product) => (
        <div className="item-cardMWK" key={product.id}>
          <img className="item-imageMWK" src={product.image} alt={product.name} />
          <h3 className="item-nameMWK">{product.name}</h3>
          <p className="item-descriptionMWK">{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductListMWK;