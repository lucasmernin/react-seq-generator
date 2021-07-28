import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { updateInputField, getSalesRepOptions, getSalesTeamOptions, isNullOrEmpty } from '../../utilities/utility';
import { checkEmptySalesTeam, getJobInputCSS } from '../../utilities/validation';
import { getSalesRepsAndTeams } from '../../data/api-utilities';
import AddSalesTeam from '../modals/AddSalesTeam';
import AddSalesRep from '../modals/AddSalesRep';
import '../../css/Job.css';

class JobDetails extends React.Component {
  async componentDidMount() {
    await getSalesRepsAndTeams();
  }

  addNewSalesTeam() {
    this.props.updateRedux('UPDATE_DISPLAY', { showNewTeam: true, showNewRep: false });
  }
  addNewSalesRep() {
    this.props.updateRedux('UPDATE_DISPLAY', { showNewTeam: false, showNewRep: true });
  }
  render() {
    return (
      <div className="job-info">
        {this.props.reduxDisplay.showNewTeam ? <AddSalesTeam /> : null}
        {this.props.reduxDisplay.showNewRep ? <AddSalesRep /> : null}
        <Collapsible trigger="Job Information" open>
          <table>
            <tbody>


              <tr>
                <td>
                  <label>Sales Team:</label>
                </td>
                <td>
                  <select
                    className="app-input1 "
                    value={this.props.reduxJobDetails.salesTeamId}
                    onChange={(event) => updateInputField('salesTeamId', 'UPDATE_JOBDETAILS', event)}
                    disabled={this.props.reduxJobDetails.id !== ''} //Disable if we've loaded a previously saved project
                  >
                    <option value=""></option>
                    {getSalesTeamOptions()}
                  </select>
                  <div className="circle-container" onClick={() => this.addNewSalesTeam()}>
                    <div className="circle-btn"></div>
                  </div>
                </td>
                {isNullOrEmpty(this.props.reduxJobDetails.salesTeamId) ? (
                  <td>
                    <label style={{ color: 'red' }}>**Sales Team is Required</label>
                  </td>
                ) : null}
              </tr>

              <tr>
                <td>
                  <label>Rep:</label>
                </td>
                <td>
                  <select
                    className={getJobInputCSS('salesRepError')}
                    readOnly={checkEmptySalesTeam()}
                    value={this.props.reduxJobDetails.salesRepId}
                    onChange={(event) => updateInputField('salesRepId', 'UPDATE_JOBDETAILS', event)}
                    disabled={this.props.reduxJobDetails.id !== ''} //Disable if we've loaded a previously saved project
                  >
                    <option value=""></option>
                    {getSalesRepOptions()}
                  </select>
                  <div className="circle-container" onClick={() => this.addNewSalesRep()}>
                    <div className="circle-btn"></div>
                  </div>
                  <span className={this.props.reduxValidation.salesRepError ? 'app-error' : 'app-display-none'}> * Sales Rep Name is required</span>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Sales Order Number:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className={getJobInputCSS('salesOrderNumberError')}
                    readOnly={checkEmptySalesTeam()}
                    value={this.props.reduxJobDetails.salesOrderNumber}
                    onChange={(event) => updateInputField('salesOrderNumber', 'UPDATE_JOBDETAILS', event)}
                    disabled={this.props.reduxJobDetails.id !== ''} //Disable if we've loaded a previously saved project
                  />
                  <span className={this.props.reduxValidation.salesOrderNumberError ? 'app-error' : 'app-display-none'}> * Sales Order Number is required</span>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Project Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className={getJobInputCSS('projectNameError')}
                    readOnly={checkEmptySalesTeam()}
                    value={this.props.reduxJobDetails.projectName}
                    onChange={(event) => updateInputField('projectName', 'UPDATE_JOBDETAILS', event)}
                    disabled={this.props.reduxJobDetails.id !== ''} //Disable if we've loaded a previously saved project
                  />
                  <span className={this.props.reduxValidation.projectNameError ? 'app-error' : 'app-display-none'}> * Project Name is required</span>
                </td>
              </tr>

              <tr>
                <td>
                  <label>Project Location City/State:</label>
                </td>
                <td>
                  <input
                    type="text"
                    className={getJobInputCSS('projectLocationError')}
                    readOnly={checkEmptySalesTeam()}
                    value={this.props.reduxJobDetails.projectLocation}
                    onChange={(event) => updateInputField('projectLocation', 'UPDATE_JOBDETAILS', event)}
                    disabled={this.props.reduxJobDetails.id !== ''} //Disable if we've loaded a previously saved project
                  />
                  <span className={this.props.reduxValidation.projectLocationError ? 'app-error' : 'app-display-none'}> * Project Location is required</span>
                </td>
              </tr>
            </tbody>
          </table>
        </Collapsible>
      </div>
    );
  }
}
//-------------Redux---------------------
function mapStateToProps(state) {
  return {
    reduxProjects: state.reduxProjects,
    reduxJobDetails: state.reduxJobDetails,
    reduxValidation: state.reduxValidation,
    reduxDisplay: state.reduxDisplay
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(JobDetails);
