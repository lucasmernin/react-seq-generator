import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
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
  // defaultJobDetailsOptions
} from './defaults';

const reduxUnitDesignChars = (state = defaultUnitDesignCharacteristics(), action) => {
  if (action.type === 'UPDATE_UNITDESIGNCHARS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxUnitDesignCharsOptions = (state = defaultUnitDesignOptions(), action) => {
  if (action.type === 'UPDATE_UNITDESIGNCHARSOPTIONS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxControlChars = (state = defaultControlCharacteristics(), action) => {
  if (action.type === 'UPDATE_ControlChars') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxControlCharsOptions = (state = defaultControlCharacteristicsOptions(), action) => {
  if (action.type === 'UPDATE_ControlCharsOPTIONS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxDetailedControlConfig = (state = defaultDetailedControlConfig(), action) => {
  if (action.type === 'UPDATE_DETAILEDCONTROLCONFIG') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxDetailedControlConfigOptions = (state = defaultDetailedControlConfigOptions(), action) => {
  if (action.type === 'UPDATE_DETAILEDCONTROLCONFIGOPTIONS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxSensors = (state = defaultSensors(), action) => {
  if (action.type === 'UPDATE_SENSORS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxSetPoints = (state = defaultSetPoints(), action) => {
  if (action.type === 'UPDATE_SETPOINTS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxAdditionalSensors = (state = defaultAdditionalSensors(), action) => {
  if (action.type === 'UPDATE_ADDITIONALSENSORS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxPlaceholders = (state = defaultPlaceholders(), action) => {
  if (action.type === 'UPDATE_PLACEHOLDERS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxJobDetails = (state = defaultJobDetails(), action) => {
  if (action.type === 'UPDATE_JOBDETAILS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxProjects = (state = defaultProjects(), action) => {
  if (action.type === 'UPDATE_PROJECT') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxValidation = (state = defaultValidation(), action) => {
  if (action.type === 'UPDATE_VALIDATION') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxMessages = (state = { success: true, apiMessage: '' }, action) => {
  if (action.type === 'UPDATE_MESSAGES') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

const reduxMenus = (state = { activeTab: 'project' }, action) => {
  if (action.type === 'UPDATE_MENUS') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

//Container for any special items we need to display
const reduxDisplay = (state = { showLoader: false, showNewTeam: false, showNewRep: false }, action) => {
  if (action.type === 'UPDATE_DISPLAY') {
    return Object.assign({}, state, action.newState);
  }
  return state;
};

export const store = createStore(
  combineReducers({
    reduxUnitDesignChars: reduxUnitDesignChars,
    reduxUnitDesignCharsOptions: reduxUnitDesignCharsOptions,
    reduxControlChars: reduxControlChars,
    reduxControlCharsOptions: reduxControlCharsOptions,
    reduxDetailedControlConfig: reduxDetailedControlConfig,
    reduxDetailedControlConfigOptions: reduxDetailedControlConfigOptions,
    reduxAdditionalSensors: reduxAdditionalSensors,
    reduxSensors: reduxSensors,
    reduxPlaceholders: reduxPlaceholders,
    reduxSetPoints: reduxSetPoints,
    reduxJobDetails: reduxJobDetails,
    reduxProjects: reduxProjects,
    reduxValidation: reduxValidation,
    reduxMessages: reduxMessages,
    reduxMenus: reduxMenus,
    reduxDisplay: reduxDisplay
  }),
  composeWithDevTools()
);
