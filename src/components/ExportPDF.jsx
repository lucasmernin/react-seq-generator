import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../redux/actions';
import marked from 'marked';
import '../css/App.css';
import { savePDF } from '@progress/kendo-react-pdf';
import { getFinalHTML } from '../utilities/finalHtml';

class ExportPDF extends React.Component {

  rawMarkup(finalHtml) {
    let rawMarkup = marked(finalHtml, { sanitize: true });
    return { __html: rawMarkup };
  }

  exportPDF2(htmlPdf) {
    let element = document.createElement('div')
    element.setAttribute('id', 'test')
    element.innerHTML = htmlPdf;
    let domElement = ReactDOM.findDOMNode(element);
    document.body.appendChild(domElement);
    savePDF(domElement, {
      paperSize: 'A4',
      fileName: 'InnoventSequenceGenerator.pdf',
      margin: { top: '2cm', left: '1.5cm', right: '1.5cm', bottom: '2cm' },
      scale: 0.8

    }, () => document.querySelector('#test').remove())
  }


  render() {

    var finalHTML = getFinalHTML();

    return (
      <div>
        <button onClick={() => this.exportPDF2(finalHTML)}>Export to PDF</button>
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
    // reduxPointList: state.reduxPointList,
    reduxSensors: state.reduxSensors
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ExportPDF);
