import React from 'react';
import Collapsible from 'react-collapsible';

class Instructions extends React.Component {
	render() {
		return (
			<div>
				<Collapsible trigger="Instructions - Click Here" close>
					<table>
						<tbody>
							<tr>
								<td>
									<h3>General:</h3>
								</td>
							</tr>

							<tr>
								<td>
									&bull; This program was designed to work best in Chrome. Firefox may also be used,
									but the UI doesn't render correctly. Internet Explorer does not work with this
									program.
								</td>
							</tr>

							<tr>
								<td>&bull; Warnings are shown as red text next to configuration option.</td>
							</tr>

							<tr>
								<td>
									&bull; To create a word document of your sequence, select the "Export To Word"
									button above the previewed sequence.
								</td>
							</tr>

							<tr>
								<td>
									&bull; To create a PDF document of your sequence, select the "Export To PDF" button
									above the previewed sequence.
								</td>
							</tr>

							<tr>
								<td>
									&bull; Each section feeds the following sections. If something is changes in the
									"Unit Design Characteristics", it may reset a previous selection in a lower area due
									to default design rules.
								</td>
							</tr>

							<tr>
								<td>&bull; Sections can be open or closed by clicking on the teal banner.</td>
							</tr>

							<tr>
								<td>
									&bull; Control features with checkboxes may be selected by either clicking on the
									title of the checkbox or the checkbox itself.
								</td>
							</tr>

							<tr>
								<td>
									&bull; There is currently no way to reload a previous sequence design. Please review
									the sequence below to make sure everything is correct before leaving the web page.
									DO NOT refresh the page as this will reset all the selections to their default
									values.
								</td>
							</tr>

							<tr>
								<td>
									&bull; Keep in mind that this program is designed around Innovent's standard control templates.
									Customized sequences are still available, but will need to be added to the word
									document once generated.
								</td>
							</tr>

							<tr>
								<td>
									&bull; If a sequence needs to be updated, please use the generator to make a new
									sequence rather than changing the text in the word document. This will help us
									maintain consistent sequence language moving forward.
								</td>
							</tr>

							<tr>
								<td>
									<h3>Unit Design:</h3>
								</td>
							</tr>

							<tr>
								<td>&bull; Begin by selecting one of the available unit types.</td>
							</tr>

							<tr>
								<td>
									&nbsp;&nbsp;&nbsp;&nbsp;&#x02218; The defaulted selections are easily changed by
									using the pulldowns. The available options vary based on the unit type originally
									selected.
								</td>
							</tr>

							<tr>
								<td>
									&nbsp;&nbsp;&nbsp;&nbsp;&#x02218; To reset the program, either select "Choose" or a
									different unit type from the "Unit Type" pulldown.
								</td>
							</tr>

							<tr>
								<td>
									&nbsp;&nbsp;&nbsp;&nbsp;&#x02218; Unit tags may be added but are not required. We
									should try to add them when multiple sequences are being created to define which
									sequence is for which unit.
								</td>
							</tr>

							<tr>
								<td>
									&bull; Complete the Unit Design Characteristics before moving onto other sections as
									this section defines lower control selections.
								</td>
							</tr>

							<tr>
								<td>Control Characteristics:</td>
							</tr>

							<tr>
								<td>
									&bull; Complete this section to the best of your ability. If something is unknown,
									leave as the defaulted selection.
								</td>
							</tr>

							<tr>
								<td>Detailed Control Characteristics:</td>
							</tr>

							<tr>
								<td>
									&bull; This section contains controls features that are not seen is all units. This
									section is optional, but should be completed if the information is available.
								</td>
							</tr>

							<tr>
								<td>
									<h3>Set Points:</h3>
								</td>
							</tr>

							<tr>
								<td>
									&bull; The values displayed in light grey DO NOT APPEAR IN THE SEQUENCE. The light
									grey values are suggestions to the user of what to enter for a set point when a
									value is unknown. If no value is enetered, ## will appear in the sequence as a
									placeholder.
								</td>
							</tr>

							<tr>
								<td>
									&nbsp;&nbsp;&nbsp;&nbsp;&#x02218; Once a value has been entered for a set point, the
									place holder ## will no longer appear, even if the entered value is removed.
								</td>
							</tr>

							<tr>
								<td>Additional Sensors:</td>
							</tr>

							<tr>
								<td>
									&bull; This section contains a large number of the sensors available for the current
									unit configuration. These sensors can be added if the customer is requesting
									visibilty of something within the unit but isn't required to accomplish the sequence of operation.
								</td>
							</tr>
						</tbody>
					</table>
				</Collapsible>
			</div>
		);
	}
}

export default Instructions;
