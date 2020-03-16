import React from "react"
import "./collection-preview_style.scss";
import CollectionItem from '../collection-items/collection-items-comp'
import { withRouter } from "react-router-dom";

const ComponentPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title.toUpperCase()}</h1>
      <div className="preview">
        {items.filter((item, inx)=>inx<4).map(({id, ...itemProps}) => (
          <CollectionItem key={id} {...itemProps} />
        ))}
      </div>
    </div>
  );
};

export default withRouter(ComponentPreview);