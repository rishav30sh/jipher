import React from "react";
import "./shop_style.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collections-overview/collections-overview-component";
import CollectionPage from "../collection/collection.component";

import {fetchCollectionStartAsync} from "../../redux/shopData/shopActions";
import {createStructuredSelector} from 'reselect'
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shopData/shopData-selector'
import WithSpinner from "../../components/with-spinner/with-spinner.comp";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  state = {
    loading: true
  };
  unsubsrcibeFromSnapshot = null;

  componentDidMount() {
    const {fetchCollectionStartAsync}=this.props;
    fetchCollectionStartAsync();
  }



  render() {
    const { match, isCollectionFetching , selectIsCollectionLoaded} = this.props;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithSpinner
              isLoading={!selectIsCollectionLoaded }
              {...props}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner
              isLoading={!selectIsCollectionLoaded }
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching:selectIsCollectionFetching,
  selectIsCollectionLoaded:selectIsCollectionLoaded
})

const mapDispatchToProps=dispatch=>({
fetchCollectionStartAsync:()=>dispatch(fetchCollectionStartAsync())
})


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
