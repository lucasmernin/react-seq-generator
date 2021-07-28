import * as React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import '../css/App.css';

class Loading extends React.Component {
  render() {
    const loadingCSS = this.props.reduxDisplay.showLoader ? 'app-loading' : 'app-display-none';

    return <div className={loadingCSS}></div>;
  }
}

//------------------ Redux ----------------------------
function mapStateToProps(state) {
  return {
    reduxDisplay: state.reduxDisplay
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Loading);
