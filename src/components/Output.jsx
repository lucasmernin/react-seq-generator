import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import '../utilities/handlebarFunctions';
import HandleBars from 'handlebars';
import marked from 'marked';
import '../css/Documentation.css';






class Output extends React.Component {



  rawMarkup(finalHtml) {
    let rawMarkup = marked(finalHtml, { sanitize: true });
    return { __html: rawMarkup };
  }

  render() {
    // const { markdown } = this.state;
    const reduxUnitDesignChars = this.props.reduxUnitDesignChars;
    const reduxControlChars = this.props.reduxControlChars;
    const reduxDetailedControlConfig = this.props.reduxDetailedControlConfig;
    const reduxSetPoints = this.props.reduxSetPoints;
    const reduxSensors = this.props.reduxSensors;
    const reduxAdditionalSensors = this.props.reduxAdditionalSensors;
    const reduxJobDetails = this.props.reduxJobDetails;

    var data = { ...reduxUnitDesignChars, ...reduxControlChars, ...reduxDetailedControlConfig, ...reduxSetPoints, ...reduxSensors, ...reduxAdditionalSensors, ...reduxJobDetails };

    // var html = document.getElementById('sequence-templatezz').innerHTML;

    var html = document.getElementById('handlebars-test').innerHTML;

    var templateScript = HandleBars.compile(html);

    var finalHtml = templateScript(data);


    return (

      <div>
        <meta charSet="utf-8"></meta>
        <div style={{ paddingLeft: '10px', marginLeft: '58px', margintop: '0px', paddingRight: '10px', marginRight: '58px', paddingTop: '22px', paddingBottom: '22px', fontFamily: 'DejaVu Sans' }} >
          <div align="right"><img
            src="https://www.unisoncomfort.com/portals/0/Configurable%20to%20Custom/Innovent_black_color.png"
            alt="Innovent Logo"
            id="image"
            height="50"
            width="150"
          /> <br />
          </div>
          <span dangerouslySetInnerHTML={{ __html: finalHtml }}></span>
        </div>
      </div>



    )

  }
}
//-------------Redux---------------------
function mapStateToProps(state) {
  return {
    reduxSetPoints: state.reduxSetPoints,
    reduxUnitDesignChars: state.reduxUnitDesignChars,
    reduxControlChars: state.reduxControlChars,
    reduxDetailedControlConfig: state.reduxDetailedControlConfig,
    reduxPlaceholders: state.reduxPlaceholders,
    reduxSensors: state.reduxSensors,
    reduxAdditionalSensors: state.reduxAdditionalSensors,
    reduxJobDetails: state.reduxJobDetails
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Output);



