import React from "react"
import "./collection-preview_style.scss";
import CollectionItem from '../collection-items/collection-items-comp'
import { withRouter } from "react-router-dom";

const CollectionPreview = ({title,items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, inx)=>inx<4).map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(CollectionPreview);
