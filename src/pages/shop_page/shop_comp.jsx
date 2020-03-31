import React from "react";
import "./shop_style.scss";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import CollectionOverview from "../../components/collections-overview/collections-overview-component";
import CollectionPage from "../collection/collection.component";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import updateCollections from "../../redux/shopData/shopActions";
class ShopPage extends React.Component {
  unsubsrcibeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection("collections");
    this.unsubsrcibeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
      const collectionsMap= convertCollectionsSnapshotToMap(snapshot);

      updateCollections(collectionsMap);
    });
    
   
  }

  componentWillUnmount() {
    this.unsubsrcibeFromSnapshot();
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
