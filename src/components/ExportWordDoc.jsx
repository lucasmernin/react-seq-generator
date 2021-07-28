import React from 'react';
import '../utilities/handlebarFunctions.js';
import { getFinalHTML } from '../utilities/finalHtml';


class ExportWordDoc extends React.Component {
	render() {

		function exportDoc(element2) {
			var preHtml =
				"<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";

			// var image = "<div align='right'><img id='image' height='50' width='150'/> <br /></div>";


			// var image = "<div className='app-logo'></div>";

			var postHtml = '</body></html>';
			var midHtml = getFinalHTML();
			// var midHtml = getVariableValuesFinalHTML();
			var html = preHtml + midHtml + postHtml;

			var blob = new Blob(['\ufeff', midHtml], {
				type: 'application/msword'
			});
			// Specify link url
			var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
			// Specify file name
			// var salesRep = store.getState().reduxJobDetails.salesRep;
			// var salesOrderNumber = store.getState().reduxJobDetails.salesOrderNumber;
			var filename = 'InnoventSequenceGenerator.doc';

			// if (salesRep !== "" && salesOrderNumber !== "") {
			// 	filename = "innoventSeqGen" + salesRep + '_' + salesOrderNumber + '.doc';
			// } else {
			// 	filename = 'innoventSeqGen.doc';
			// }

			// Create download link element
			var downloadLink = document.createElement('a');
			document.body.appendChild(downloadLink);
			if (navigator.msSaveOrOpenBlob) {
				navigator.msSaveOrOpenBlob(blob, filename);
			} else {
				// Create a link to the file
				downloadLink.href = url;
				// Setting the file name
				downloadLink.download = filename;
				//triggering the function
				downloadLink.click();
			}
			document.body.removeChild(downloadLink);
		}


		return (
			<div>
				<button onClick={exportDoc}>Export to Word</button>
			</div>
		);
	}
}



export default ExportWordDoc;


