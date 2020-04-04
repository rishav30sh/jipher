import React from "react";
import "./collections-overview-style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CollectionPreview from "../../components/collection-preview/collection-preview_comp";
import { selectCollectionForPreview } from "../../redux/shopData/shopData-selector.js";

const CollectionOverview = ({ collections }) => {

  return (
    
    <div className="collection-overview">
   
      {console.log(collections)}
        {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});


export default connect(mapStateToProps)(CollectionOverview);
