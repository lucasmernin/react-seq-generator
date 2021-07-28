import { store } from '../redux/store';
import { updateReduxAction } from '../redux/actions';
import React from 'react';

//Update a field in redux for a textbox input
export function updateInputField(propertyName, actionType, event) {
  var newValue = event.currentTarget.value;
  store.dispatch(updateReduxAction(actionType, { [propertyName]: newValue }));
}

//receive a data array and return a list of <option> tags for a dropdown box
export function getDropdownOptions(optionsList) {
  return optionsList.map(function (item, index) {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });
}

export function trueFalseFunction(propertyName, actionType, event) {
  var newValue = event.currentTarget.checked;

  store.dispatch(updateReduxAction(actionType, { [propertyName]: newValue }));
}

export function getSalesRepOptions() {
  const reduxState = store.getState();
  const reduxProjects = reduxState.reduxProjects;

  const list = reduxProjects.salesRepList.map((item, index) => (
    <option key={index} value={item.id}>
      {item.repName}
    </option>
  ));
  return list;
}

export function getSalesTeamOptions() {
  const reduxState = store.getState();
  const reduxProjects = reduxState.reduxProjects;

  const list = reduxProjects.salesTeamList.map((item, index) => (
    <option key={index} value={item.id}>
      {item.teamName}
    </option>
  ));
  return list;
}

export function isNullOrEmpty(value) {
  if (value === undefined || value === null || value === '') {
    return true;
  }
  return false;
}
