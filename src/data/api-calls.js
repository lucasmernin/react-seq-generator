import { store } from '../redux/store';
import { updateReduxAction } from '../redux/actions';

export async function getAllSavedProjects() {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/getAllProjects');

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}
export async function getSavedProjectsByRep(repId) {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(`${apibase}api/getSavedProjectsByRep/${repId}`);

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}
export async function getAllSalesReps() {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/getAllSalesReps');

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}

export async function getAllSalesTeams() {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/getAllSalesTeams');

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}

export async function getSavedProject(projectId) {
  const apibase = process.env.REACT_APP_API_BASEURL;
  store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showLoader: true }));
  const result = await fetch(`${apibase}api/getProject/${projectId}`);

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showLoader: false }));
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    store.dispatch(updateReduxAction('UPDATE_DISPLAY', { showLoader: false }));
    return response;
  }
}

export async function saveProjectData(saveData) {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/saveProject', {
    method: 'post',
    body: JSON.stringify(saveData),
    headers: { 'Content-Type': 'application/json' }
  });

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}

export async function updateProjectData(saveData) {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/updateProject', {
    method: 'post',
    body: JSON.stringify(saveData),
    headers: { 'Content-Type': 'application/json' }
  });
  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    console.log(response);
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    console.log(response);
    return response;
  }
}

export async function addNewSalesTeam(teamData) {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/addSalesTeam', {
    method: 'post',
    body: JSON.stringify(teamData),
    headers: { 'Content-Type': 'application/json' }
  });

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}

export async function addNewSalesRep(repData) {
  const apibase = process.env.REACT_APP_API_BASEURL;
  const result = await fetch(apibase + 'api/addSalesRep', {
    method: 'post',
    body: JSON.stringify(repData),
    headers: { 'Content-Type': 'application/json' }
  });

  if (result.status === 200) {
    const response = {
      success: true,
      data: await result.json()
    };
    return response;
  } else {
    const response = {
      success: false,
      data: await result.text()
    };
    return response;
  }
}
