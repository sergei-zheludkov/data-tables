import React from 'react';
import { connect } from 'react-redux';
import { removeSortedType } from '../slices';
import { closeIcon, rightArrow } from './icons';

const mapStateToPropsForListSettigsOfSort = (state) => ({ settings: state.sorting });
const actionCreatorsForListSettingOfSort = { removeSortedType };

const ListSettingOfSort = (props) => {
  const { settings, removeSortedType: remove } = props;
  const { order, types } = settings;
  const handlerClose = (type) => (event) => {
    event.preventDefault();
    remove({ header: type });
  };
  const settingDivs = order.map((header, i) => (
    <React.Fragment key={`sortedlist-${header}`}>
    {i !== 0 && <div className="p-1 mx-1">{rightArrow}</div>}
    <div className="border p-1 mx-1 rounded-lg">
      <span>
        <b>{header}</b>-{types[header]}
      </span>
      <span onClick={handlerClose(header)}>
        {closeIcon}
      </span>
    </div>
    </React.Fragment>
  ));
  const displayedSorting = settingDivs.length > 0 ? settingDivs : <div className="mx-2">Not Sorted</div>;
  return (
    <div className="d-flex align-items-center">
      <div>Sorted by:</div>
      {displayedSorting}
    </div>);
};
export default connect(
  mapStateToPropsForListSettigsOfSort,
  actionCreatorsForListSettingOfSort,
)(ListSettingOfSort);
