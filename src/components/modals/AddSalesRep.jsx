import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { addSalesRep } from '../../data/api-utilities';

class AddSalesRep extends React.Component {
  constructor(props) {
    super(props);
    this.state = { newRepName: '' };
  }
  updateRepName(event) {
    this.setState({ newRepName: event.currentTarget.value });
  }
  closeWindow() {
    this.props.updateRedux('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: false });
  }
  saveNewRep() {
    addSalesRep(this.state.newRepName);
  }
  render() {
    return (
      <div className="job-modal job-shadow">
        <div className="job-modal-title">Add New Sales Rep</div>
        <div className="job-modal-close" onClick={() => this.closeWindow()}>
          X
        </div>
        <div className="job-input">
          Rep Name: <input type="text" className="job-textbox" value={this.state.newRepName} onChange={(event) => this.updateRepName(event)} />
          <div className="job-btn" onClick={() => this.saveNewRep()}>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddSalesRep);
