import React from "react";
import MenuItem from "../menu-items/menu-item_comp";
import "./directory_style.scss";
import { connect } from "react-redux";
import {selectDirectorySection} from '../../redux/directory/directory-selector'
import {createStructuredSelector} from 'reselect'
const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...othersectionprops }) => (
        <MenuItem key={id} {...othersectionprops} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  directory: selectDirectorySection
});

export default connect(mapStateToProps)(Directory);
