import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import '../css/App.css';
import Header from './Header';
import Project from './Project';
import Search from './Search';
import Loading from './Loading';

class App extends React.Component {
  render() {
    var activeTab = this.props.reduxMenus.activeTab;



    return (
      <BrowserRouter>
        <div className="app">
          <Header />

          <br />
          <div className={`app-tab ${activeTab === 'project' ? ' app-tab-active' : ''}`}>
            <Link to="/">Current Project</Link>
          </div>
          <div className={`app-tab ${activeTab === 'search' ? ' app-tab-active' : ''}`}>
            <Link to="/search">Saved Projects</Link>
          </div>

          <div className="app-body">
            <Route exact path="/" component={Project} />
            <Route path="/search" component={Search} />
          </div>

          <div className="app-footer">
            <small>
              You are running this application in <b>{process.env.NODE_ENV}</b> mode.
              <br />
              Base API: <b>{process.env.REACT_APP_API_BASEURL}</b>
            </small>
          </div>
          <Loading />
        </div>
      </BrowserRouter>
    );
  }
}

//------------------ Redux ----------------------------
function mapStateToProps(state) {
  return {
    reduxMenus: state.reduxMenus
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
