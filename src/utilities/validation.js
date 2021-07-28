import { store } from '../redux/store';


export function getJobInputCSS(propertyName) {
  const reduxState = store.getState();
  const validation = reduxState.reduxValidation;
  const hasError = validation[propertyName];
  const hasEmptySalesTeam = checkEmptySalesTeam();

  if (hasError) {
    return 'app-input-error';
  }
  if (hasEmptySalesTeam) {
    return 'app-input1-disabled';
  }
  return 'app-input1';
}

export function checkEmptySalesTeam(salesTeam) {
  const reduxState = store.getState();
  const jobDetails = reduxState.reduxJobDetails;

  return jobDetails.salesTeamId === '' ? true : false;
}
