import { store } from '../redux/store';
import { updateReduxAction } from '../redux/actions';
import {
  getAllSavedProjects,
  getSavedProjectsByRep,
  saveProjectData,
  updateProjectData,
  getAllSalesReps,
  getAllSalesTeams,
  addNewSalesTeam,
  addNewSalesRep
} from './api-calls';
import {
  defaultUnitDesignCharacteristics,
  defaultUnitDesignOptions,
  defaultControlCharacteristics,
  defaultControlCharacteristicsOptions,
  defaultDetailedControlConfig,
  defaultDetailedControlConfigOptions,
  defaultSensors,
  defaultSetPoints,
  defaultAdditionalSensors,
  defaultPlaceholders,
  defaultJobDetails,
  defaultProjects,
  defaultValidation
} from '../redux/defaults';
import { updateOptionsOnLoad } from '../utilities/updateOptionsOnLoad';

export function resetMessages() {
  store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: true, apiMessage: '' }));
}

export async function getAllProjects() {
  store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: true, apiMessage: 'Loading...' }));

  var response = await getAllSavedProjects();
  if (response.success) {
    resetMessages();
    store.dispatch(updateReduxAction('UPDATE_PROJECT', { savedProjects: response.data, showSavedProjects: true }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
  }
}
export async function getProjectsByRep(repId) {
  store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showLoader: true }));

  var response = await getSavedProjectsByRep(repId);
  if (response.success) {
    resetMessages();
    store.dispatch(updateReduxAction('UPDATE_PROJECT', { savedProjects: response.data, showSavedProjects: true }));
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showLoader: false }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showLoader: false }));
  }
}
export async function getSalesRepList() {
  var response = await getAllSalesReps();
  if (response.success) {
    resetMessages();
    store.dispatch(updateReduxAction('UPDATE_PROJECT', { savedProjects: [], salesRepList: response.data, showSavedProjects: false }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
  }
}

export async function getSalesRepsAndTeams() {
  var repsResponse = await getAllSalesReps();
  if (repsResponse.success) {
    resetMessages();
    store.dispatch(updateReduxAction('UPDATE_PROJECT', { savedProjects: [], salesRepList: repsResponse.data, showSavedProjects: false }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: repsResponse.data }));
  }

  var teamsResponse = await getAllSalesTeams();
  if (teamsResponse.success) {
    resetMessages();
    store.dispatch(updateReduxAction('UPDATE_PROJECT', { savedProjects: [], salesTeamList: teamsResponse.data, showSavedProjects: false }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: teamsResponse.data }));
  }
}

export function resetAllFields() {
  store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', defaultUnitDesignCharacteristics()));
  store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS', defaultUnitDesignOptions()));
  store.dispatch(updateReduxAction('UPDATE_ControlChars', defaultControlCharacteristics()));
  store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS', defaultControlCharacteristicsOptions()));
  store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', defaultDetailedControlConfig()));
  store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIGOPTIONS', defaultDetailedControlConfigOptions()));
  store.dispatch(updateReduxAction('UPDATE_SENSORS', defaultSensors()));
  store.dispatch(updateReduxAction('UPDATE_SETPOINTS', defaultSetPoints()));
  store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', defaultAdditionalSensors()));
  store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', defaultPlaceholders()));
  store.dispatch(updateReduxAction('UPDATE_JOBDETAILS', defaultJobDetails()));
  store.dispatch(updateReduxAction('UPDATE_PROJECT', defaultProjects()));
  store.dispatch(updateReduxAction('UPDATE_VALIDATION', defaultValidation()));
  getSalesRepsAndTeams();
}

export async function addSalesTeam(teamName) {
  const SalesTeamDTO = {
    TeamName: teamName
  };

  var response = await addNewSalesTeam(SalesTeamDTO);
  if (response.success) {
    //New record was saved successfully. Make the Sales Team selectbox have the new team selected.
    store.dispatch(updateReduxAction('UPDATE_JOBDETAILS', { salesTeamId: response.data.id }));
    //Now reload the SalesTeam and SalesRep lists from the database so the new one shows up.
    getSalesRepsAndTeams();
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: false }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: false }));
  }
}

export async function addSalesRep(repName) {
  const SalesRepDTO = {
    RepName: repName
  };

  var response = await addNewSalesRep(SalesRepDTO);
  if (response.success) {
    //New record was saved successfully. Make the Sales Rep selectbox have the new rep selected.
    store.dispatch(updateReduxAction('UPDATE_JOBDETAILS', { salesRepId: response.data.id }));
    //Now reload the SalesTeam and SalesRep lists from the database so the new one shows up.
    getSalesRepsAndTeams();
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: false }));
  } else {
    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: false }));
  }
}

export async function saveProject() {
  const reduxState = store.getState();
  const jobDetails = reduxState.reduxJobDetails;
  //reset any validation errors
  store.dispatch(updateReduxAction('UPDATE_VALIDATION', defaultValidation()));

  var hasErr = false;
  if (jobDetails.salesRep === '') {
    hasErr = true;
    store.dispatch(updateReduxAction('UPDATE_VALIDATION', { salesRepError: true }));
  }
  if (jobDetails.projectName === '') {
    hasErr = true;
    store.dispatch(updateReduxAction('UPDATE_VALIDATION', { projectNameError: true }));
  }
  if (jobDetails.projectLocation === '') {
    hasErr = true;
    store.dispatch(updateReduxAction('UPDATE_VALIDATION', { projectLocationError: true }));
  }

  //If no errors, call the save method
  if (!hasErr) {
    //Create a NewProjectDTO object
    const ProjectDTO = {
      Project: reduxState.reduxJobDetails,
      UnitDesign: reduxState.reduxUnitDesignChars,
      ControlCharacteristics: reduxState.reduxControlChars,
      DetailedControlConfiguration: reduxState.reduxDetailedControlConfig,
      Sensors: reduxState.reduxSensors,
      SetPoints: reduxState.reduxSetPoints,
      AdditionalSensors: reduxState.reduxAdditionalSensors
    };

    store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: true, apiMessage: 'Saving..' }));

    //If the project already has an Id, its an existing project.  Call the update method.
    if (jobDetails.id !== '') {
      var response = await updateProjectData(ProjectDTO);
      if (response.success) {
        //Load data into redux
        const data = response.data;
        if (data.hasError) {
          store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: data.errorMessage }));
        } else {
          loadProjectIntoRedux(data);
          store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: true, apiMessage: 'Update successful' }));
        }
      } else {
        store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
      }
    }
    //If there is no id, we're saving a new project.
    else {
      response = await saveProjectData(ProjectDTO);
      if (response.success) {
        //Load data into redux
        const data = response.data;
        if (data.hasError) {
          store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: data.errorMessage }));
        } else {
          loadProjectIntoRedux(data);
          store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: true, apiMessage: 'Save successful' }));
        }
      } else {
        store.dispatch(updateReduxAction('UPDATE_MESSAGES', { success: false, apiMessage: response.data }));
      }
    }
  }
}

export function loadProjectIntoRedux(data) {
  if (data.project !== null) {
    store.dispatch(updateReduxAction('UPDATE_JOBDETAILS', data.project));
  }
  if (data.unitDesign !== null) {
    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', data.unitDesign));
  }
  if (data.controlCharacteristics !== null) {
    store.dispatch(updateReduxAction('UPDATE_ControlChars', data.controlCharacteristics));
  }
  if (data.detailedControlConfiguration !== null) {
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', data.detailedControlConfiguration));
  }
  if (data.setPoints !== null) {
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', data.setPoints));
  }
  if (data.sensors !== null) {
    store.dispatch(updateReduxAction('UPDATE_SENSORS', data.sensors));
  }
  if (data.additionalSensors !== null) {
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', data.additionalSensors));
  }

  // Loads the appropiate options to be shown in the dropdown boxes
  updateOptionsOnLoad(data);
}

export function sqlToJsDate(sqlDate) {
  if (sqlDate) {
    var arr = sqlDate.split('T');
    var dateStr = arr[0];

    var timeStr = arr[1];
    var timeArr = timeStr.split(':');
    //convert from military to standard hours
    var hour = Number(timeArr[0]);
    var hourAdjusted = hour > 12 ? hour - 12 : hour;
    var minute = timeArr[1];
    var ampm = hour > 12 ? 'pm' : 'am';
    return `${dateStr} ___ ${hourAdjusted}:${minute} ${ampm}`;
  } else {
    return '';
  }
}
