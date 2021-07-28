import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import ExportWordDoc from './ExportWordDoc';
import '../utilities/handlebarFunctions.js';
import '../utilities/utility';
import Output from './Output';
import Instructions from './collapsible-s/Instructions';
import ControlChars from './collapsible-s/ControlChars';
import DetailedControlConfig from './collapsible-s/DetailedControlConfig';
import SetPoints from './collapsible-s/SetPoints';
import Sensors from './collapsible-s/Sensors';
import UnitDesignChars from './collapsible-s/UnitDesignChars';
import ExportPDF from './ExportPDF';
import JobDetails from './collapsible-s/JobDetails';
import ExportControlsModelFile from './ExportControlsModelFile';

class Project extends React.Component {
  componentDidMount() {
    this.props.updateRedux('UPDATE_MENUS', { activeTab: 'project' });
  }
  render() {
    return (
      <div>
        <Instructions />
        <JobDetails />
        <UnitDesignChars />
        <ControlChars />
        <DetailedControlConfig />
        <SetPoints />
        <Sensors />
        <ExportControlsModelFile />
        <ExportWordDoc />
        <ExportPDF />
        <Output />
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
export default connect(mapStateToProps, mapDispatchToProps)(Project);
