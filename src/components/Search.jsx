import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import { getSalesRepList, getProjectsByRep, sqlToJsDate, resetMessages, loadProjectIntoRedux } from '../data/api-utilities';
import { getSavedProject } from '../data/api-calls';
import { getSalesRepOptions } from '../utilities/utility';
import '../css/Search.css';

class Search extends React.Component {
  componentDidMount() {
    this.props.updateRedux('UPDATE_MENUS', { activeTab: 'search' });
    getSalesRepList();
  }

  async selectRep(event) {
    const repId = event.currentTarget.value;
    await getProjectsByRep(repId);
  }
  //Display a list of all the previously saved projects from the server
  getProjectOptions(projectList) {
    const context = this;
    return projectList.map(function (item, index) {
      return (
        <div className="search-tr" key={index}>
          <div className="search-proj-item">{item.id}</div>
          <div className="search-proj-item">{item.salesRep}</div>
          <div className="search-proj-item search-item-link" onClick={() => context.loadSavedProject(item.id)}>
            {item.projectName}
          </div>
          <div className="search-proj-item">{item.projectLocation}</div>
          <div className="search-proj-item">{sqlToJsDate(item.createDate)}</div>
        </div>
      );
    });
  }
  //Load up all the data values from a previously saved project
  async loadSavedProject(projectId) {
    resetMessages();
    //Get project data from the server
    var response = await getSavedProject(projectId);

    if (response.success) {
      const data = response.data;
      loadProjectIntoRedux(data);
      this.props.updateRedux('UPDATE_PROJECT', { showSavedProjects: false });
      this.props.history.push('/');
    } else {
      this.props.updateRedux('UPDATE_MESSAGES', { success: false, apiMessage: response.data });
      this.props.updateRedux('UPDATE_PROJECT', { showSavedProjects: false });
    }
  }
  render() {
    return (
      <div className="search-main">
        <div className="search-fields">
          <div className="search-label">Sales Rep:</div>
          <select className="search-select" onChange={(event) => this.selectRep(event)}>
            <option></option>
            {getSalesRepOptions()}
          </select>
        </div>
        <br />
        <br />
        <div className={this.props.reduxProjects.showSavedProjects ? 'search-projects-container' : 'app-display-none'}>
          <div className="search-proj-td1">
            <div className="search-table">
              <div className="search-tr">
                <div className="search-proj-item search-proj-header">ProjectId</div>
                <div className="search-proj-item search-proj-header">SalesRep</div>
                <div className="search-proj-item search-proj-header">ProjectName</div>
                <div className="search-proj-item search-proj-header">ProjectLocation</div>
                <div className="search-proj-item search-proj-header">CreateDate</div>
              </div>
              {this.getProjectOptions(this.props.reduxProjects.savedProjects)}
            </div>
          </div>

          <div className="search-proj-td2"></div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

//------------------ Redux ----------------------------
function mapStateToProps(state) {
  return {
    reduxProjects: state.reduxProjects,
    reduxMessages: state.reduxMessages
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);
