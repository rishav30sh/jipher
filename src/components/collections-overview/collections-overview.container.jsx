import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shopData/shopData-selector";
import WithSpinner from "../with-spinner/with-spinner.comp";
import CollectionOverview from "./collections-overview-component.js";
import { compose } from "redux";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);
ç
export default CollectionOverviewContainer;
