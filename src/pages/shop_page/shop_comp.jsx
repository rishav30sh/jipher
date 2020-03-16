import React from "react";
import SHOP_DATA from "./shop_data";
import "./shop_style.scss";
import CollectionPreview from "../../components/collection-preview/collection-preview_comp";
import { withRouter } from "react-router-dom";
class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ));
  }
}

export default withRouter(ShopPage);
