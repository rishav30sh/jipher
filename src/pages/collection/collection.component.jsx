import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shopData/shopData-selector";
import CollectionItem from "../../components/collection-items/collection-items-comp";
const CollectionPage = ({ collection }) => {
  console.log(collection)
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title"> {title} </h2>
      <div className='items'>
      {
        items.map(item=><CollectionItem key={item.id} item={item} /> )
      }
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps, null)(CollectionPage);
