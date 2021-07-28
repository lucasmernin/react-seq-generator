import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { addSalesTeam } from '../../data/api-utilities';

class AddSalesTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newTeamName: '' };
  }
  updateTeamName(event) {
    // console.log('here............');
    this.setState({ newTeamName: event.currentTarget.value });
  }
  closeWindow() {
    this.props.updateRedux('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: false });
  }
  saveNewTeam() {
    addSalesTeam(this.state.newTeamName);
  }
  render() {
    return (
      <div className="job-modal job-shadow">
        <div className="job-modal-title">Add New Sales Team</div>
        <div className="job-modal-close" onClick={() => this.closeWindow()}>
          X
        </div>
        <div className="job-input">
          Team Name: <input type="text" className="job-textbox" value={this.state.newTeamName} onChange={(event) => this.updateTeamName(event)} />
          <div className="job-btn" onClick={() => this.saveNewTeam()}>
            Save
          </div>
        </div>
      </div>
    );
  }
}
//-------------Redux---------------------
function mapStateToProps(state) {
  return {
    reduxProjects: state.reduxProjects,
    reduxJobDetails: state.reduxJobDetails,
    reduxDisplay: state.reduxDisplay
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddSalesTeam);
