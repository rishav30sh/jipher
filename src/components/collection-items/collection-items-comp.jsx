import React from "react";
import "./collection-items-style.scss";
import CustomButton from "../custom-button/custom-button-comp";
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart-dropdown/cart-dropdwon.action'


const CollectionItem = ({ item, addItem }) => {
  const { name, price,imageUrl}=item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      ></div>
      <div className="collection-footer">
        <span className="name"> {name}</span>
        <span className="price"> {price}</span>
      </div>
      <CustomButton onClick={()=>addItem(item)} inverted> Add to Cart</CustomButton>
    </div>
  );
};

export default connect(null,{addItem})(CollectionItem);
