import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import { resetAllFields, saveProject, resetMessages } from '../data/api-utilities';

class Header extends React.Component {
  closeProjects() {
    this.props.updateRedux('UPDATE_PROJECT', { showSavedProjects: false });
  }

  render() {

    return (

      <div className="app-header">
        <div className="app-logo"></div>
        <div className="app-save-btns">
          {/* <div className="app-inline">
            <button onClick={() => getAllProjects()}>View Saved Projects</button>
          </div> */}
          <div className="app-inline app-header-btn">
            <button onClick={() => resetAllFields()}>Reset All Fields</button>
          </div>
          <div className="app-inline app-header-btn">
            <button onClick={() => saveProject()}>Save</button>
          </div>


          {/* <div className={this.props.reduxProjects.showSavedProjects ? 'app-projects-container' : 'app-display-none'}>
            <div className="app-proj-close" onClick={() => this.closeProjects()}>
              X
            </div>
            <div className="app-saved-projects">
              <div className="app-proj-list">
                <div className="app-proj-item app-proj-header">ProjectId</div>
                <div className="app-proj-item app-proj-header">SalesRep</div>
                <div className="app-proj-item app-proj-header">ProjectName</div>
                <div className="app-proj-item app-proj-header">ProjectLocation</div>
                <div className="app-proj-item app-proj-header">CreateDate</div>
              </div>
              {getProjectOptions(this.props.reduxProjects.savedProjects)}
            </div>
          </div> */}

          {this.props.reduxMessages.apiMessage === '' ? null : (
            <div className={this.props.reduxMessages.success ? 'app-msg-success' : 'app-msg-fail'}>
              {this.props.reduxMessages.apiMessage}
              <div className="app-msg-close" onClick={() => resetMessages()}>
                X
              </div>
            </div>
          )}
        </div>

        <i style={{ color: 'red' }}>deployed: 7/21/2021</i>

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
export default connect(mapStateToProps, mapDispatchToProps)(Header);
