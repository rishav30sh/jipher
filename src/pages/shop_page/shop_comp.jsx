import React from "react";
import "./shop_style.scss";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collections-overview/collections-overview-component";
import { withRouter } from "react-router-dom";
import CollectionPage from "../collection/collection.component";


const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview } />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage } />
    </div>
  );
};
 
export default withRouter(ShopPage);
