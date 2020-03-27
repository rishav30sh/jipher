import React from "react";
import "./shop_style.scss";
import CollectionOverview from '../../components/collections-overview/collections-overview-component'
import { withRouter } from "react-router-dom";

const ShopPage=({collections})=> {
 
    return  <CollectionOverview/>
  
}



export default withRouter(ShopPage);
