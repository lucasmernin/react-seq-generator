import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { updateInputField } from '../../utilities/utility';
import {
	updateSpSupplyTemp, updateSpSpaceResetTemp, updateSpReturnResetTemp, updateSpPreheat, updateSpHeatingLockout,
	updateSpSpaceTempDeadBand, updateSpReturnTempDeadBand, updateSpDehumCoilLeaving
} from '../../utilities/setPoints/updateSetPoints';
import {
	getLabelSpDehumCoilMin
} from '../../utilities/setPoints/getSetPoints';

import '../../css/SetPoints.css';


class SetPoints extends React.Component {


	render() {

		return (
			<div>
				<Collapsible trigger="Set Points (SP)" open>
					<table>
						<tbody>

							{this.props.reduxUnitDesignChars.unitType === "Controls Lite" ? (
								<>
									<tr>
										<td>
											<label>Controls Lite Coil Leaving Temperature 2V </label>
										</td>

										<td>
											<input
												type="number"
												min="45"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spControlsLiteCoil2V}
												onChange={(event) => updateInputField('spControlsLiteCoil2V', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spControlsLiteCoil2V < 45 || this.props.reduxSetPoints.spControlsLiteCoil2V > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.unitType === "Controls Lite" ? (
								<>
									<tr>
										<td>
											<label>Controls Lite Coil Leaving Temperature 10V </label>
										</td>

										<td>
											<input
												type="number"
												min="45"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spControlsLiteCoil10V}
												onChange={(event) => updateInputField('spControlsLiteCoil10V', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spControlsLiteCoil10V < 45 || this.props.reduxSetPoints.spControlsLiteCoil10V > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.unitType === "Controls Lite" &&
								(
									this.props.reduxUnitDesignChars.reheatingType === "Hot Gas Reheat" ||
									this.props.reduxUnitDesignChars.coolingType === "A/R Coil (Heat Pump)"
								)
								? (
									<>
										<tr>
											<td>
												<label>Controls Lite Supply Temperature 2V </label>
											</td>

											<td>
												<input
													type="number"
													min="45"
													max="100"
													placeholder="##"
													value={this.props.reduxSetPoints.spControlsLiteSupply2V}
													onChange={(event) => updateInputField('spControlsLiteSupply2V', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F</label>

												{this.props.reduxSetPoints.spControlsLiteSupply2V < 45 || this.props.reduxSetPoints.spControlsLiteSupply2V > 100 ? (
													<>
														<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
													</>
												) : null}
											</td>
										</tr>
									</>
								) : null}

							{this.props.reduxUnitDesignChars.unitType === "Controls Lite" &&
								(
									this.props.reduxUnitDesignChars.reheatingType === "Hot Gas Reheat" ||
									this.props.reduxUnitDesignChars.coolingType === "A/R Coil (Heat Pump)"
								) ? (
								<>
									<tr>
										<td>
											<label>Controls Lite Supply Temperature 10V </label>
										</td>

										<td>
											<input
												type="number"
												min="45"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spControlsLiteSupply10V}
												onChange={(event) => updateInputField('spControlsLiteSupply10V', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spControlsLiteSupply10V < 45 || this.props.reduxSetPoints.spControlsLiteSupply10V > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}



							{this.props.reduxControlChars.temperatureControl === "Supply Discharge" ? (
								<>
									<tr>
										<td>
											<label>Supply Temperature </label>
										</td>

										<td>
											<input
												type="number"
												min="45"
												max="100"
												placeholder={this.props.reduxPlaceholders.phSupplyTemp}
												value={this.props.reduxSetPoints.spSupplyTemp}
												onChange={(event) => updateSpSupplyTemp(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spSupplyTemp < 45 || this.props.reduxSetPoints.spSupplyTemp > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>) : null}

							{this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Return Reset" ? (
								<>
									<tr>
										<td>
											<label>Return Temperature </label>
										</td>

										<td>
											<input
												type="number"
												min="75"
												max="100"
												placeholder="Design Return Temperature"
												value={this.props.reduxSetPoints.spReturnResetTemp}
												onChange={(event) => updateSpReturnResetTemp(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spReturnResetTemp < 45 || this.props.reduxSetPoints.spReturnResetTemp > 100 ? (
												<>
													{this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
														<label style={{ color: 'red' }}>  Warning: typical range 80&deg;F - 100&deg;F</label>
													) :
														<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
													}

												</>
											) : null}
										</td>
									</tr>
								</>) : null}

							{this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Space Reset" ? (
								<>
									<tr>
										<td>
											<label>Space Temperature </label>
										</td>

										<td>
											<input
												type="number"
												min="45"
												max="100"
												placeholder={this.props.reduxPlaceholders.phSpaceResetTemp}
												value={this.props.reduxSetPoints.spSpaceResetTemp}
												onChange={(event) => updateSpSpaceResetTemp(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spSpaceResetTemp < 45 || this.props.reduxSetPoints.spSpaceResetTemp > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>) : null}



							{this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Space Reset" ? (
								<>
									<tr>
										<td>
											<label>Space Temperature Dead Band</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												value={this.props.reduxSetPoints.spSpaceTempDeadBand}
												onChange={(event) => updateSpSpaceTempDeadBand(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spSpaceTempDeadBand < 0 || this.props.reduxSetPoints.spSpaceTempDeadBand > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>

									<tr>
										<td>
											<label>Active Space Temperature Cooling </label>
										</td>
										<td>
											<input
												disabled="disabled"
												placeholder={this.props.reduxPlaceholders.phActiveSpaceTempCooling}
												value={this.props.reduxSetPoints.spActiveSpaceTempCooling}
											/>
											<label>&deg;F</label>
										</td>
									</tr>

									<tr>
										<td>
											<label>Active Space Temperature Heating </label>
										</td>
										<td>
											<input
												disabled="disabled"
												placeholder={this.props.reduxPlaceholders.phActiveSpaceTempHeating}
												value={this.props.reduxSetPoints.spActiveSpaceTempHeating}
											/>
											<label>&deg;F</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Return Reset" ? (
								<>
									<tr>
										<td>
											<label>Return Temperature Dead Band</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												value={this.props.reduxSetPoints.spReturnTempDeadBand}
												onChange={(event) => updateSpReturnTempDeadBand(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spReturnTempDeadBand < 0 || this.props.reduxSetPoints.spReturnTempDeadBand > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>

									<tr>
										<td>
											<label>Active Return Temperature Cooling </label>
										</td>
										<td>
											<input
												disabled="disabled"
												placeholder={this.props.reduxPlaceholders.phActiveReturnTempCooling}
												value={this.props.reduxSetPoints.spActiveReturnTempCooling}
											/>
											<label>&deg;F</label>
										</td>
									</tr>

									<tr>
										<td>
											<label>Active Return Temperature Heating </label>
										</td>
										<td>
											<input
												disabled="disabled"
												placeholder={this.props.reduxPlaceholders.phActiveReturnTempHeating}
												value={this.props.reduxSetPoints.spActiveReturnTempHeating}
											/>
											<label>&deg;F</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.appType === "Variable Air Volume" ? (
								<>
									<tr>
										<td>
											<label>Min Supply Fan Airflow</label>
										</td>
										<td>
											<input
												type="number"
												min="50"
												max="100"
												value={this.props.reduxSetPoints.spMaxSfturndown}
												onChange={(event) => updateInputField('spMaxSfturndown', 'UPDATE_SETPOINTS', event)}
											/>
											<label>% design airflow (field balanced)</label>

											{this.props.reduxSetPoints.spMaxSfturndown < 50 || this.props.reduxSetPoints.spMaxSfturndown > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 50% - 100%</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null
							}

							{this.props.reduxUnitDesignChars.unitType === "P-Series" ||
								(this.props.reduxUnitDesignChars.unitType === "E-Series" && this.props.reduxControlChars.appType === "Constant Air Volume") ||
								(this.props.reduxUnitDesignChars.unitType === "C-Series" && this.props.reduxControlChars.appType === "Constant Air Volume") ? (
								<>
									<tr>
										<td>
											<label>Occupied Supply Fan Speed </label>
										</td>
										<td>
											<input
												type="number"
												min="50"
												max="100"
												value={this.props.reduxSetPoints.spOccupiedSupplyFanSpeed}
												onChange={(event) => updateInputField('spOccupiedSupplyFanSpeed', 'UPDATE_SETPOINTS', event)}
											/>
											<label>%</label>

											{this.props.reduxSetPoints.spOccupiedSupplyFanSpeed < 50 || this.props.reduxSetPoints.spOccupiedSupplyFanSpeed > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 50% - 100%</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{(this.props.reduxUnitDesignChars.unitType === "P-Series" || this.props.reduxUnitDesignChars.unitType === "E-Series" || this.props.reduxUnitDesignChars.unitType === "C-Series")
								&&
								(this.props.reduxControlChars.unoccupiedModeControl === "Reduced Airflow" ||
									this.props.reduxControlChars.unoccupiedModeControl === "Full Recirc Mode" ||
									this.props.reduxControlChars.unoccupiedModeControl === "Night Setback w/ Supply Fan On")
								? (
									<>
										<tr>
											<td>
												<label>Unoccupied Supply Fan Speed </label>
											</td>
											<td>
												<input
													type="number"
													min="50"
													max="100"
													value={this.props.reduxSetPoints.spUnoccupiedSupplyFanSpeed}
													onChange={(event) => updateInputField('spUnoccupiedSupplyFanSpeed', 'UPDATE_SETPOINTS', event)}
												/>
												<label>%</label>

												{this.props.reduxSetPoints.spUnoccupiedSupplyFanSpeed < 50 || this.props.reduxSetPoints.spUnoccupiedSupplyFanSpeed > 100 ? (
													<>
														<label style={{ color: 'red' }}>  Warning: typical range 50% - 100%</label>
													</>
												) : null}
											</td>
										</tr>
									</>
								) : null}

							{(this.props.reduxUnitDesignChars.unitType === "E-Series" ||
								this.props.reduxUnitDesignChars.unitType === "C-Series") &&
								(this.props.reduxUnitDesignChars.reheatingType !== "None" &&
									this.props.reduxUnitDesignChars.reheatingType !== "") ? (
								<tr>
									<td>
										<label>Dehumidification Coil Leaving </label>
									</td>
									<td>
										<input
											type="number"
											min="40"
											max="80"
											placeholder="##"
											value={this.props.reduxSetPoints.spDehumCoilLeaving}
											onChange={(event) => updateSpDehumCoilLeaving(event)}
										/>
										<label>&deg;F</label>
										{this.props.reduxSetPoints.spDehumCoilLeaving < 40 || this.props.reduxSetPoints.spDehumCoilLeaving > 65 ? (
											<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 70&deg;F</label>
										) : null}
									</td>
								</tr>
							) : null}

							{(this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Return Reset" ||
								this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Space Reset") &&
								(this.props.reduxUnitDesignChars.heatingType !== "None" &&
									this.props.reduxUnitDesignChars.heatingType !== "") ? (
								<>

									{this.props.reduxUnitDesignChars.reheatingType === "None" ||
										this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
										<tr>
											<td>
												<label>Supply Min Heating </label>
											</td>
											<td>
												<input
													type="number"
													min="50"
													max="100"
													value={this.props.reduxSetPoints.spHeatMin}
													onChange={(event) => updateInputField('spHeatMin', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F</label>

												{this.props.reduxSetPoints.spHeatMin < 50 || this.props.reduxSetPoints.spHeatMin > 100 ? (
													<>
														<label style={{ color: 'red' }}>  Warning: typical range 50&deg;F - 100&deg;F</label>
													</>
												) : null}
											</td>
										</tr>
									) :
										<tr>
											<td>
												<label>Supply Min Heating </label>
											</td>
											<td>
												<input
													value={this.props.reduxSetPoints.spDehumCoilLeaving}
													placeholder='##'
													disabled={true}
												/>
												<label>&deg;F</label>
											</td>
										</tr>

									}

								</>
							) : null
							}

							{(this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Return Reset" ||
								this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Space Reset") &&
								(this.props.reduxUnitDesignChars.heatingType !== "None" &&
									this.props.reduxUnitDesignChars.heatingType !== "") ? (
								<>
									<tr>
										<td>
											<label>Supply Max Heating </label>
										</td>
										<td>
											<input
												type="number"
												min="50"
												max="100"
												value={this.props.reduxSetPoints.spHeatMax}
												onChange={(event) => updateInputField('spHeatMax', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spHeatMax < 50 || this.props.reduxSetPoints.spHeatMax > 100 ? (
												<>

													<label style={{ color: 'red' }}>  Warning: typical range 50&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}



							{this.props.reduxUnitDesignChars.unitType !== "P-Series" &&
								(this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Return Reset" ||
									this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Space Reset") &&
								((this.props.reduxUnitDesignChars.coolingType !== "None" &&
									this.props.reduxUnitDesignChars.coolingType !== "") ||
									(this.props.reduxUnitDesignChars.postcoolingType !== "None" &&
										this.props.reduxUnitDesignChars.postcoolingType !== "")) ? (
								<>
									<tr>
										<td>
											<label>Supply Min Cooling </label>
										</td>
										<td>
											<input
												type="number"
												min="45"
												max="55"
												value={this.props.reduxSetPoints.spCoolMin}
												onChange={(event) => updateInputField('spCoolMin', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spCoolMin < 45 || this.props.reduxSetPoints.spCoolMin > 55 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 55&deg;F</label>
												</>
											) : null}

											{(this.props.reduxSetPoints.spCoolMin > this.props.reduxSetPoints.spDehumCoilLeaving) &&
												(this.props.reduxUnitDesignChars.reheatingType !== "None" &&
													this.props.reduxUnitDesignChars.reheatingType !== "") ? (
												<label style={{ color: 'red' }}>  Warning: Supply Min Cooling must be less than Dehumidification Coil Leaving  </label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{(this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Return Reset" ||
								this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Space Reset") ? (
								<>
									<tr>
										<td>
											<label>Supply Max Cooling </label>
										</td>
										<td>
											<input
												type="number"
												min="50"
												max="65"
												value={this.props.reduxSetPoints.spCoolMax}
												onChange={(event) => updateInputField('spCoolMax', 'UPDATE_SETPOINTS', event)}
												disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
												placeholder="##"
											/>
											<label>&deg;F</label>

											{this.props.reduxUnitDesignChars.unitType !== "P-Series" && (this.props.reduxSetPoints.spCoolMax < 50 || this.props.reduxSetPoints.spCoolMax > 65) ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 50&deg;F - 65&deg;F</label>
												</>
											) : null}

										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.temperatureControl === "Supply Discharge w/ Outside Air Reset" ? (
								<>
									<tr>
										<td>
											<label>Outside Air Reset Min OAT</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder='##'
												value={this.props.reduxSetPoints.spOutsideResetMinOat}
												onChange={(event) => updateInputField('spOutsideResetMinOat', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spOutsideResetMinOat < 0 || this.props.reduxSetPoints.spOutsideResetMinOat > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>

									<tr>
										<td>
											<label>Outside Air Reset Max OAT</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder='##'
												value={this.props.reduxSetPoints.spOutsideResetMaxOat}
												onChange={(event) => updateInputField('spOutsideResetMaxOat', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spOutsideResetMaxOat < 50 || this.props.reduxSetPoints.spOutsideResetMaxOat > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 50&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>

									<tr>
										<td>
											<label>Outside Air Reset Min LAT</label>
										</td>
										<td>
											<input
												type="number"
												min="50"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spOutsideResetMinLat}
												onChange={(event) => updateInputField('spOutsideResetMinLat', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spOutsideResetMinLat < 0 || this.props.reduxSetPoints.spOutsideResetMinLat > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>

									<tr>
										<td>
											<label>Outside Air Reset Max LAT</label>
										</td>
										<td>
											<input
												type="number"
												min="50"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spOutsideResetMaxLat}
												onChange={(event) => updateInputField('spOutsideResetMaxLat', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spOutsideResetMaxLat < 50 || this.props.reduxSetPoints.spOutsideResetMaxLat > 100 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 50&deg;F - 100&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.unitType === "P-Series" ||
								this.props.reduxUnitDesignChars.unitType === "E-Series" ||
								(this.props.reduxUnitDesignChars.unitType === "D-Series" &&
									this.props.reduxUnitDesignChars.energyRecoveryType === "Enthalpy Wheel") ? (
								<>
									<tr>
										<td>
											<label>HX Defrost </label>
										</td>
										<td>
											<input
												type="number"
												min="10"
												max="45"
												value={this.props.reduxSetPoints.spDefrost}
												onChange={(event) => updateInputField('spDefrost', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spDefrost < 10 || this.props.reduxSetPoints.spDefrost > 45 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 10&deg;F - 45&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.preheatingType === "None" ||
								this.props.reduxUnitDesignChars.preheatingType === "" ? (null) : (
								<>
									<tr>
										<td>
											<label>Pre-Heating </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="50"
												placeholder={this.props.reduxPlaceholders.phPreheat}
												value={this.props.reduxSetPoints.spPreheat}
												onChange={(event) => updateSpPreheat(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spPreheat < 0 || this.props.reduxSetPoints.spPreheat > 50 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 50&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							)}

							{this.props.reduxControlChars.enthalpyWheelBypass === "None" ||
								this.props.reduxControlChars.enthalpyWheelBypass === "" ? (null) : (
								<>
									<tr>
										<td>
											<label>Wheel Differential Supply Pressure </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="5"
												value={this.props.reduxSetPoints.spSupplyWheelDifferential}
												onChange={(event) => updateInputField('spSupplyWheelDifferential', 'UPDATE_SETPOINTS', event)}
											/>
											<label>"W.C.</label>

											{this.props.reduxSetPoints.spSupplyWheelDifferential < 0 || this.props.reduxSetPoints.spSupplyWheelDifferential > 5 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0 - 5</label>
												</>
											) : null}
										</td>
									</tr>

									<tr>
										<td>
											<label>Wheel Differential Exhaust Pressure </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="5"
												value={this.props.reduxSetPoints.spExhaustWheelDifferential}
												onChange={(event) => updateInputField('spExhaustWheelDifferential', 'UPDATE_SETPOINTS', event)}
											/>
											<label>"W.C.</label>

											{this.props.reduxSetPoints.spExhaustWheelDifferential < 0 || this.props.reduxSetPoints.spExhaustWheelDifferential > 5 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0 - 5</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							)}

							{this.props.reduxControlChars.economizerControl === "Outside Dry Bulb < Dry Bulb Setpoint" ||
								this.props.reduxControlChars.economizerControl === "OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point" ||
								this.props.reduxControlChars.economizerControl === "OA Enthalpy < Space Enthalpy + OA Dry Bulb < Set Point" ||
								this.props.reduxControlChars.economizerControl === "OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point" ? (
								<>
									<tr>
										<td>
											{this.props.reduxControlChars.economizerControl === "OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point" ? (
												<label>Economizer Activation OADB </label>
											) :
												<label>Economizer Activation </label>
											}
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phEconomizerActivationDegree}
												value={this.props.reduxSetPoints.spEconomizerActivationDegree}
												onChange={(event) => updateInputField('spEconomizerActivationDegree', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.economizerControl === "Outside Enthalpy < Enthalpy Setpoint" ||
								this.props.reduxControlChars.economizerControl === "OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point" ? (
								<>
									<tr>
										<td>
											{this.props.reduxControlChars.economizerControl === "OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point" ? (
												<label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OA Enthalpy </label>
											) :
												<label>Economizer Activation </label>
											}

										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phEconomizerActivationBtu}
												value={this.props.reduxSetPoints.spEconomizerActivaionBtu}
												onChange={(event) => updateInputField('spEconomizerActivationBtu', 'UPDATE_SETPOINTS', event)}
											/>
											<label>BTU/lb</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.preheatingType === "None" ||
								this.props.reduxUnitDesignChars.preheatingType === "" ? (null) : (
								<>
									<tr>
										<td>
											<label>Pre-Heating System Lockout (OAT)</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="50"
												value={this.props.reduxSetPoints.spPreheatLockout}
												onChange={(event) => updateInputField('spPreheatLockout', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spPreheatLockout < 0 || this.props.reduxSetPoints.spPreheatLockout > 50 ? (
												<>
													<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 50&deg;F</label>
												</>
											) : null}
										</td>
									</tr>
								</>
							)}

							{(this.props.reduxUnitDesignChars.unitType === "Controls Lite" &&
								this.props.reduxUnitDesignChars.coolingType === "A/R Coil (Heat Pump)") ||
								(this.props.reduxUnitDesignChars.heatingType !== "None" &&
									this.props.reduxUnitDesignChars.heatingType !== "") ? (
								<>
									<tr>
										<td>
											<label>Heating System Lockout (OAT)</label>
										</td>
										<td>
											<input
												type="number"
												min="30"
												max="80"
												value={this.props.reduxSetPoints.spHeatingLockout}
												onChange={(event) => updateSpHeatingLockout(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spHeatingLockout < 30 || this.props.reduxSetPoints.spHeatingLockout > 90 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 30&deg;F - 90&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							) : null
							}

							{/* {(this.props.reduxUnitDesignChars.postheatingType !== "None" ||
								this.props.reduxUnitDesignChars.postheatingType !== "") &&
								this.props.reduxUnitDesignChars.unitType === "D-Series" ? (
									<tr>
										<td>
											<label>Post-Heating Lockout</label>
										</td>
										<td>
											<input
												type="number"
												min="30"
												max="80"
												value={this.props.reduxSetPoints.spPostHeatingLockout}
												onChange={(event) => updateSpPostHeatingLockout(event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spPostHeatingLockout < 30 || this.props.reduxSetPoints.spPostHeatingLockout > 90 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 30 - 90</label>
											) : null}
										</td>
									</tr>

								) : null} */}

							{this.props.reduxUnitDesignChars.precoolingType === "None" ||
								this.props.reduxUnitDesignChars.precoolingType === "" ? (null) :
								<>
									<tr>
										<td>
											<label>Pre-Cooling System Lockout (OAT)</label>
										</td>
										<td>
											<input
												type="number"
												min="30"
												max="75"
												value={this.props.reduxSetPoints.spPreCoolLockout}
												onChange={(event) => updateInputField('spPreCoolLockout', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>
											{this.props.reduxSetPoints.spPreCoolLockout < 30 || this.props.reduxSetPoints.spPreCoolLockout > 75 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 30&deg;F - 75&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{this.props.reduxUnitDesignChars.coolingType === "None" ||
								this.props.reduxUnitDesignChars.coolingType === "" ? (null) :
								<>
									<tr>
										<td>
											<label>Cooling System Lockout (OAT)</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												value={this.props.reduxSetPoints.spCoolLockout}
												onChange={(event) => updateInputField('spCoolLockout', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spCoolLockout < 40 || this.props.reduxSetPoints.spCoolLockout > 60 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 40&deg;F - 60&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{this.props.reduxUnitDesignChars.humidifierType === "None" ||
								this.props.reduxUnitDesignChars.humidifierType === "" ? (null) :
								<>
									<tr>
										<td>
											<label>Humidification System Lockout (OAT)</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												value={this.props.reduxSetPoints.spHumidLockout}
												onChange={(event) => updateInputField('spHumidLockout', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spHumidLockout < 0 || this.props.reduxSetPoints.spHumidLockout > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{this.props.reduxUnitDesignChars.precoolingType === "None" ||
								this.props.reduxUnitDesignChars.precoolingType === "" ? (null) :
								<>
									<tr>
										<td>
											<label>Pre-Cooling Coil Leaving </label>
										</td>
										<td>
											<input
												type="number"
												min="45"
												max="70"
												placeholder="##"
												value={this.props.reduxSetPoints.spPreCool}
												onChange={(event) => updateInputField('spPreCool', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spPreCool < 45 || this.props.reduxSetPoints.spPreCool > 70 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 45&deg;F - 70&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							}


							{this.props.reduxUnitDesignChars.postcoolingType === "None" ||
								this.props.reduxUnitDesignChars.postcoolingType === "" ? (null) : (
								<>

									{/* <tr>
											<td>
												<label>Post-Cooling </label>
											</td>
											<td>
												<input
													type="number"
													min="0"
													max="100"
													placeholder={this.props.reduxPlaceholders.phPostCoolDegree}
													value={this.props.reduxSetPoints.spPostCoolDegree}
													onChange={(event) => updateInputField('spPostCoolDegree', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F</label>
											</td>
										</tr> */}

									<tr>
										<td>
											<label>Post-Cooling Lockout (OAT)</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phPostCoolLockoutDegree}
												value={this.props.reduxSetPoints.spPostCoolLockoutDegree}
												onChange={(event) => updateInputField('spPostCoolLockoutDegree', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>
										</td>
									</tr>
								</>

							)}

							{/* {this.props.reduxControlChars.dehumidificationControl === 'Return Relative Humidity > Dehumidification Set Point' ||
											this.props.reduxControlChars.dehumidificationControl === 'Space Relative Humidity > Dehumidification Set Point' ? (
												<>
													<tr>
														<td>
															<label>Post-Cooling Set Point</label>
														</td>
														<td>
															<input
																type="number"
																min="0"
																max="100"
																placeholder={this.props.reduxPlaceholders.phPostCoolRh}
																value={this.props.reduxSetPoints.spPostCoolRh}
																onChange={(event) => updateInputField('spPostCoolRh', 'UPDATE_SETPOINTS', event)}
															/>
															<label>%RH</label>
														</td>
													</tr>

													<tr>
														<td>
															<label>Post-Cooling Lockout</label>
														</td>
														<td>
															<input
																type="number"
																min="0"
																max="100"
																placeholder={this.props.reduxPlaceholders.phPostCoolLockoutRh}
																value={this.props.reduxSetPoints.spPostCoolLockoutRh}
																onChange={(event) => updateInputField('spPostCoolLockoutRh', 'UPDATE_SETPOINTS', event)}
															/>
															<label>%RH</label>
														</td>
													</tr>
												</>
											) : null} */}


							{this.props.reduxUnitDesignChars.regenHeatingType === "None - Passive Regeneration" ||
								this.props.reduxUnitDesignChars.regenHeatingType === "" ||
								this.props.reduxUnitDesignChars.unitType !== "D-Series" ? (null) : (
								<>
									<tr>
										<td>
											<label>Dessiccant Wheel Regen Temp Min</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spDesiccantWheelMin}
												onChange={(event) => updateInputField('spDesiccantWheelMin', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>
										</td>
									</tr>

									<tr>
										<td>
											<label>Dessiccant Wheel Regen Temp Max</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spDesiccantWheelMax}
												onChange={(event) => updateInputField('spDesiccantWheelMax', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>
										</td>
									</tr>

								</>
							)}



							{(this.props.reduxUnitDesignChars.reheatingType !== "None" ||
								this.props.reduxUnitDesignChars.reheatingType !== "" ||
								this.props.reduxUnitDesignChars.unitType === "D-Series" ||
								this.props.reduxUnitDesignChars.unitType === "P-Series") &&
								this.props.reduxUnitDesignChars.unitType !== "Controls Lite" ? (
								<>
									{this.props.reduxControlChars.dehumidificationControl === "Space Dew Point > Dehumidification Set Point" ||
										this.props.reduxControlChars.dehumidificationControl === "Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point" ? (
										<tr>
											<td>
												<label>Occupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spSpaceDehumControlDew}
													onChange={(event) => updateInputField('spSpaceDehumControlDew', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F (space dew point)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.dehumidificationControl === "Space Relative Humidity > Dehumidification Set Point" ? (
										<tr>
											<td>
												<label>Occupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spSpaceDehumControlHumidity}
													onChange={(event) => updateInputField('spSpaceDehumControlHumidity', 'UPDATE_SETPOINTS', event)}
												/>
												<label>%RH (space)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.dehumidificationControl === "Return Dew Point > Dehumidification Set Point" ||
										this.props.reduxControlChars.dehumidificationControl === "Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point" ? (
										<tr>
											<td>
												{this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
													<label>Dehumidification Set Point </label>
												) :
													<label>Occupied Dehumidification Activation </label>
												}

											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spReturnDehumControlDew}
													onChange={(event) => updateInputField('spReturnDehumControlDew', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F (return dew point)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.dehumidificationControl === "Return Relative Humidity > Dehumidification Set Point" ? (
										<tr>
											<td>
												<label>Occupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spReturnDehumControlHumidity}
													onChange={(event) => updateInputField('spReturnDehumControlHumidity', 'UPDATE_SETPOINTS', event)}
												/>
												<label>%RH (return)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.dehumidificationControl === "Outside Dew Point > Dehumidification Set Point" ||
										this.props.reduxControlChars.dehumidificationControl === "Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point" ||
										this.props.reduxControlChars.dehumidificationControl === "Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point" ? (
										<tr>
											<td>
												<label>Occupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spOutsideDehumControlDew}
													onChange={(event) => updateInputField('spOutsideDehumControlDew', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F  (outside air dew point)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.unoccupiedDehumidificationControl === "Space Dew Point > Dehumidification Set Point" ||
										this.props.reduxControlChars.unoccupiedDehumidificationControl === "Space Dew Point > Dehum Set Point or Space Relative Humidity > Dehum Set Point" ? (
										<tr>
											<td>
												<label>Unoccupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spSpaceUnoccupiedDehumControlDew}
													onChange={(event) => updateInputField('spSpaceUnoccupiedDehumControlDew', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F (space dew point)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.unoccupiedDehumidificationControl === "Space Relative Humidity > Dehumidification Set Point" ||
										this.props.reduxControlChars.unoccupiedDehumidificationControl === "Space Dew Point > Dehum Set Point or Space Relative Humidity > Dehum Set Point" ? (
										<tr>
											<td>
												<label>Unoccupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spSpaceUnoccupiedDehumControlHumidity}
													onChange={(event) => updateInputField('spSpaceUnoccupiedDehumControlHumidity', 'UPDATE_SETPOINTS', event)}
												/>
												<label>%RH (space)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxUnitDesignChars.unitType !== "P-Series" &&
										(this.props.reduxControlChars.unoccupiedDehumidificationControl === "Return Dew Point > Dehumidification Set Point" ||
											this.props.reduxControlChars.unoccupiedDehumidificationControl === "Return Dew Point > Dehum Set Point or Return Relative Humidity > Dehum Set Point") ? (
										<tr>
											<td>
												<label>Unoccupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spReturnUnoccupiedDehumControlDew}
													onChange={(event) => updateInputField('spReturnUnoccupiedDehumControlDew', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F (return dew point)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxControlChars.unoccupiedDehumidificationControl === "Return Relative Humidity > Dehumidification Set Point" ||
										this.props.reduxControlChars.unoccupiedDehumidificationControl === "Return Dew Point > Dehum Set Point or Return Relative Humidity > Dehum Set Point" ? (
										<tr>
											<td>
												<label>Unoccupied Dehumidification Activation </label>
											</td>
											<td>
												<input
													type="number"
													min="40"
													max="80"
													placeholder="##"
													value={this.props.reduxSetPoints.spReturnUnoccupiedDehumControlHumidity}
													onChange={(event) => updateInputField('spReturnUnoccupiedDehumControlHumidity', 'UPDATE_SETPOINTS', event)}
												/>
												<label>%RH (return)</label>
											</td>
										</tr>
									) : null}

									{this.props.reduxUnitDesignChars.unitType === "D-Series" &&
										this.props.reduxControlChars.temperatureControl === "Supply Discharge" ? (
										<tr>
											<td>
												<label>Supply Dew Point</label>
											</td>
											<td>
												<input
													type="number"
													min="25"
													max="45"
													placeholder="##"
													value={this.props.reduxSetPoints.spSupplyDewPoint}
													onChange={(event) => updateInputField('spSupplyDewPoint', 'UPDATE_SETPOINTS', event)}
												/>
												<label>&deg;F</label>
												{this.props.reduxSetPoints.spSupplyDewPoint < 25 || this.props.reduxSetPoints.spSupplyDewPoint > 45 ? (
													<label style={{ color: 'red' }}>  Warning: typical range 25&deg;F - 45&deg;F</label>
												) : null}
											</td>
										</tr>
									) : null}

									{this.props.reduxUnitDesignChars.unitType === "D-Series" &&
										this.props.reduxControlChars.temperatureControl !== "Supply Discharge" ? (
										<>
											<tr>
												<td>
													<label>Supply Dew Point Minimum</label>
												</td>
												<td>
													<input
														type="number"
														min="46"
														max="65"
														placeholder="##"
														value={this.props.reduxSetPoints.spSupplyDewMin}
														onChange={(event) => updateInputField('spSupplyDewMin', 'UPDATE_SETPOINTS', event)}
													/>
													<label>&deg;F</label>
													{this.props.reduxSetPoints.spSupplyDewMin < 25 || this.props.reduxSetPoints.spSupplyDewMin > 45 ? (
														<label style={{ color: 'red' }}>  Warning: typical range 25&deg;F - 45&deg;F</label>
													) : null}
												</td>
											</tr>
											<tr>
												<td>
													<label>Supply Dew Point Maximum</label>
												</td>
												<td>
													<input
														type="number"
														min="25"
														max="45"
														placeholder="##"
														value={this.props.reduxSetPoints.spSupplyDewMax}
														onChange={(event) => updateInputField('spSupplyDewMax', 'UPDATE_SETPOINTS', event)}
													/>
													<label>&deg;F</label>
													{this.props.reduxSetPoints.spSupplyDewMax < 25 || this.props.reduxSetPoints.spSupplyDewMax > 45 ? (
														<label style={{ color: 'red' }}>  Warning: typical range 25&deg;F - 45&deg;F</label>
													) : null}
													{this.props.reduxSetPoints.spSupplyDewMin > this.props.reduxSetPoints.spSupplyDewMax ? (
														<label style={{ color: 'red' }}>  Warning: Max must be &gt;= Min</label>
													) : null}
												</td>
											</tr>
										</>
									) : null}

									{this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
										<>
											{this.props.reduxUnitDesignChars.reheatingType === "None" ||
												this.props.reduxUnitDesignChars.reheatingType === "" ? (null) : (
												<>
													<tr>
														<td>
															<label>Dehum Coil Leaving Minimum</label>
														</td>
														<td>
															<input
																type="number"
																min="46"
																max="65"
																placeholder="##"
																value={this.props.reduxSetPoints.spDehumCoilMin}
																onChange={(event) => updateInputField('spDehumCoilMin', 'UPDATE_SETPOINTS', event)}
															/>
															<label>&deg;F {getLabelSpDehumCoilMin(this.props.reduxUnitDesignChars.unitType)}</label>
															{this.props.reduxSetPoints.spDehumCoilMin < 46 || this.props.reduxSetPoints.spDehumCoilMin > 65 ? (
																<label style={{ color: 'red' }}>  Warning: typical range 46&deg;F - 65&deg;F</label>
															) : null}
														</td>
													</tr>

													{/* <tr>
																<td>
																	<label>Dehum Coil Leaving Maximum</label>
																</td>
																<td>
																	<input
																		type="number"
																		min="46"
																		max="65"
																		placeholder={this.props.reduxPlaceholders.phDehumCoilMax}
																		value={this.props.reduxSetPoints.spDehumCoilMax}
																		onChange={(event) => updateInputField('spDehumCoilMax', 'UPDATE_SETPOINTS', event)}
																	/>
																	<label>&deg;F</label>
																	{this.props.reduxSetPoints.spDehumCoilMax < 46 || this.props.reduxSetPoints.spDehumCoilMax > 65 ? (
																		<label style={{ color: 'red' }}>  Warning: typical range 46&deg;F - 65&deg;F</label>
																	) : null}
																</td>
															</tr> */}
												</>
											)
											}
										</>
									) : null}
								</>
							) : null}

							{/* {(this.props.reduxUnitDesignChars.reheatingType !== "None" ||
								this.props.reduxUnitDesignChars.reheatingType !== "") &&
								this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
									<>
										<tr>
											<td>
												<label>Dehumidification Cooling Min Set Point</label>
											</td>
											<td>
												<input
													type="number"
													min="45"
													max="65"
													placeholder={this.props.reduxPlaceholders.phDehumMin}
													value={this.props.reduxSetPoints.spDehumMin}
													onChange={(event) => updateSpDehumMin(event)}
												/>
												<label>&deg;F</label>

												{this.props.reduxSetPoints.spDehumMin < 45 || this.props.reduxSetPoints.spDehumMin > 65 ? (
													<label style={{ color: 'red' }}>  Warning: typical range 45 - 65</label>
												) : null}
											</td>
										</tr>
									</>
								) : null} */}

							{this.props.reduxUnitDesignChars.humidifierType === "None" ||
								this.props.reduxUnitDesignChars.humidifierType === "" ? (null) :
								<>
									<tr>
										<td>
											<label>Supply Humidification High Limit</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phHumid}
												value={this.props.reduxSetPoints.spHumid}
												onChange={(event) => updateInputField('spHumid', 'UPDATE_SETPOINTS', event)}
											/>
											<label>%RH</label>

											{this.props.reduxSetPoints.spHumid < 0 || this.props.reduxSetPoints.spHumid > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0%RH - 100%RH</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{this.props.reduxControlChars.humidificationControl === "Return Reset (%RH)" &&
								this.props.reduxUnitDesignChars.humidifierType !== "None" ? (

								<tr>
									<td>
										<label>Return Humidification </label>
									</td>
									<td>
										<input
											type="number"
											min="30"
											max="80"
											placeholder="##"
											value={this.props.reduxSetPoints.spReturnHumidRh}
											onChange={(event) => updateInputField('spReturnHumidRh', 'UPDATE_SETPOINTS', event)}
										/>
										<label>%RH</label>

										{this.props.reduxSetPoints.spReturnHumidRh < 30 || this.props.reduxSetPoints.spReturnHumidRh > 80 ? (
											<label style={{ color: 'red' }}>  Warning: typical range 30%RH - 80%RH</label>
										) : null}
									</td>
								</tr>

							) : null}

							{this.props.reduxControlChars.humidificationControl === "Space Reset (%RH)" &&
								this.props.reduxUnitDesignChars.humidifierType !== "None" ? (

								<tr>
									<td>
										<label>Space Humidification </label>
									</td>
									<td>
										<input
											type="number"
											min="30"
											max="80"
											placeholder="##"
											value={this.props.reduxSetPoints.spSpaceHumidRh}
											onChange={(event) => updateInputField('spSpaceHumidRh', 'UPDATE_SETPOINTS', event)}
										/>
										<label>%RH</label>

										{this.props.reduxSetPoints.spSpaceHumidRh < 30 || this.props.reduxSetPoints.spSpaceHumidRh > 80 ? (
											<label style={{ color: 'red' }}>  Warning: typical range 30%RH - 80%RH</label>
										) : null}
									</td>
								</tr>

							) : null}

							{this.props.reduxControlChars.humidificationControl === "Constant Discharge (%RH)" &&
								this.props.reduxUnitDesignChars.humidifierType !== "None" ? (

								<tr>
									<td>
										<label>Supply Humidification </label>
									</td>
									<td>
										<input
											type="number"
											min="30"
											max="80"
											placeholder={this.props.reduxPlaceholders.phSupplyHumidRh}
											value={this.props.reduxSetPoints.spSupplyHumidRh}
											onChange={(event) => updateInputField('spSupplyHumidRh', 'UPDATE_SETPOINTS', event)}
										/>
										<label>%RH</label>

										{this.props.reduxSetPoints.spSupplyHumidRh < 30 || this.props.reduxSetPoints.spSupplyHumidRh > 80 ? (
											<label style={{ color: 'red' }}>  Warning: typical range 30%RH - 80%RH</label>
										) : null}
									</td>
								</tr>

							) : null}

							{this.props.reduxControlChars.minOacontrol === "Minimum Outside Air CFM" ? (
								<>
									<tr>
										<td>
											<label>Minimum Outside Air </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phMinOaControlCfm}
												value={this.props.reduxSetPoints.spMinOaControlCfm}
												onChange={(event) => updateInputField('spMinOaControlCfm', 'UPDATE_SETPOINTS', event)}
											/>
											<label>CFM</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.exhaustFanControl === "OA CFM +/- Offset" ? (
								<tr>
									<td>
										<label>Exhaust/Outside Air Offset </label>
									</td>
									<td>
										<input
											type="number"
											min="0"
											max="100"
											placeholder="##"
											value={this.props.reduxSetPoints.spExhaustOaOffset}
											onChange={(event) => updateInputField('spExhaustOaOffset', 'UPDATE_SETPOINTS', event)}

										/>
										<label>CFM</label>
									</td>
								</tr>
							) : null}

							{this.props.reduxControlChars.minOacontrol === "Minimum % Design Airflow" ? (
								<>
									<tr>
										<td>
											<label>Minimum Outside Air </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phMinOaControlAirflow}
												value={this.props.reduxSetPoints.spMinOaControlAirflow}
												onChange={(event) => updateInputField('spMinOaControlAirflow', 'UPDATE_SETPOINTS', event)}
											/>
											<label>% design airflow (field balanced)</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.supplyFanControl === "Duct Static Pressure" ? (
								<tr>
									<td>
										<label>Duct Static Pressure (Supply Fan)</label>
									</td>
									<td>
										<input
											type="number"
											min="0"
											max="5"
											placeholder={this.props.reduxPlaceholders.phSupplyFanControlDuct}
											value={this.props.reduxSetPoints.spSupplyFanControlDuct}
											onChange={(event) => updateInputField('spSupplyFanControlDuct', 'UPDATE_SETPOINTS', event)}
										/>
										<label>" W.C.</label>

										{this.props.reduxSetPoints.spSupplyFan < 0 || this.props.reduxSetPoints.spSupplyFan > 5 ? (
											<label style={{ color: 'red' }}>  Warning: typical range 0 - 5</label>
										) : null}
									</td>
								</tr>
							) : null}

							{this.props.reduxControlChars.supplyFanControl === "Supply CFM" ? (
								<tr>
									<td>
										<label>Supply Fan Air Flow </label>
									</td>
									<td>
										<input
											type="number"
											min="0"
											max="5"
											placeholder={this.props.reduxPlaceholders.phSupplyFanControlCfm}
											value={this.props.reduxSetPoints.spSupplyFanControlCfm}
											onChange={(event) => updateInputField('spSupplyFanControlCfm', 'UPDATE_SETPOINTS', event)}
										/>
										<label>CFM</label>

										{this.props.reduxSetPoints.spSupplyFan < 0 || this.props.reduxSetPoints.spSupplyFan > 5 ? (
											<label style={{ color: 'red' }}>  Warning: typical range 0 - 5</label>
										) : null}
									</td>
								</tr>
							) : null}



							{this.props.reduxControlChars.exhaustFanControl === 'Exhaust CFM' ? (
								<>
									<tr>
										<td>
											<label>Exhaust Fan Air Flow </label>
										</td>
										<td>
											<input
												type="number"
												placeholder={this.props.reduxPlaceholders.phExhaustCfmReliefFan}
												value={this.props.reduxSetPoints.spExaustReliefFanCfm}
												onChange={(event) => updateInputField('spExhaustReliefFanCfm', 'UPDATE_SETPOINTS', event)}
											/>
											<label>CFM</label>
											{this.props.reduxSetPoints.spReliefFan < -.125 || this.props.reduxSetPoints.spReliefFan > .125 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -.125 - +.125</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.exhaustFanControl === 'Duct Static Pressure' ? (
								<>
									<tr>
										<td>
											<label>Duct Static Pressure (Exhaust Fan)</label>
										</td>
										<td>
											<input
												type="number"
												placeholder={this.props.reduxPlaceholders.phExhaustDuctReliefFan}
												value={this.props.reduxSetPoints.spExhaustReliefFanDuct}
												onChange={(event) => updateInputField('spExhaustReliefFanDuct', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C.</label>
											{this.props.reduxSetPoints.spReliefFan < -.125 || this.props.reduxSetPoints.spReliefFan > .125 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -.125 - +.125</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.returnFanControl === 'Return CFM' ? (
								<>
									<tr>
										<td>
											<label>Return Fan Air Flow </label>
										</td>
										<td>
											<input
												type="number"
												placeholder={this.props.reduxPlaceholders.phReturnCfmReliefFan}
												value={this.props.reduxSetPoints.spReturnReliefFanCfm}
												onChange={(event) => updateInputField('spReturnReliefFanCfm', 'UPDATE_SETPOINTS', event)}
											/>
											<label>CFM</label>
											{this.props.reduxSetPoints.spReliefFan < -.125 || this.props.reduxSetPoints.spReliefFan > .125 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -.125 - +.125</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.returnFanControl === 'Duct Static Pressure' ||
								this.props.reduxControlChars.returnFanControl === 'Duct Static Pressure w/ Tracking' ? (
								<>
									<tr>
										<td>
											<label>Duct Static Pressure (Return Fan)</label>
										</td>
										<td>
											<input
												type="number"
												placeholder={this.props.reduxPlaceholders.phReturnDuctReliefFan}
												value={this.props.reduxSetPoints.spReturnReliefFanDuct}
												onChange={(event) => updateInputField('spReturnReliefFanDuct', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C.</label>
											{this.props.reduxSetPoints.spReliefFan < -.125 || this.props.reduxSetPoints.spReliefFan > .125 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -.125 - +.125</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.returnFanControl === 'Space Static Pressure' ? (
								<>
									<tr>
										<td>
											<label>Space Static Pressure (Return Fan)</label>
										</td>
										<td>
											<input
												type="number"
												placeholder={this.props.reduxPlaceholders.phReturnSpaceReliefFan}
												value={this.props.reduxSetPoints.spReturnReliefFanSpace}
												onChange={(event) => updateInputField('spReturnReliefFanSpace', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C.</label>
											{this.props.reduxSetPoints.spReliefFan < -.125 || this.props.reduxSetPoints.spReliefFan > .125 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -.125 - +.125</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.exhaustFanControl === "Duct Static Pressure w/ Tracking" ||
								this.props.reduxControlChars.exhaustFanControl === "Track Supply Fan" ? (
								<>
									<tr>
										<td>
											<label>Exhaust Fan Tracking </label>
										</td>
										<td>
											<input
												type="number"
												min="-100"
												max="100"
												placeholder={this.props.reduxPlaceholders.phExhaustReliefFanOffsetTracking}
												value={this.props.reduxSetPoints.spExhaustReliefFanOffsetTracking}
												onChange={(event) => updateInputField('spExhaustReliefFanOffsetTracking', 'UPDATE_SETPOINTS', event)}
											/>
											<label>% Offset from Supply Fan Output</label>

											{this.props.reduxSetPoints.spReliefFanOffset < -100 || this.props.reduxSetPoints.spReliefFanOffset > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -100% - 100%</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{/* {this.props.reduxControlChars.exhaustFanControl === 'Pool Space vs Adjacent Space Differential Pressure' ||
								this.props.reduxControlChars.exhaustFanControl === 'Pool Space vs Adj Space Diff Press and Outdoor Diff Press' ? (
									<>
										<tr>
											<td>
												<label>Exhaust Fan/OA Damper Offset </label>
											</td>
											<td>
												<input
													type="number"
													min="-100"
													max="100"
													placeholder="##"
													value={this.props.reduxSetPoints.spExhaustReliefFanOffsetDamper}
													onChange={(event) => updateInputField('spExhaustReliefFanOffsetDamper', 'UPDATE_SETPOINTS', event)}
												/>
												<label>% (Max)</label>

												{this.props.reduxSetPoints.spExhaustReliefFanOffsetDamper < -100 || this.props.reduxSetPoints.spExhaustReliefFanOffsetDamper > 100 ? (
													<label style={{ color: 'red' }}>  Warning: typical range -100% - 100%</label>
												) : null}
											</td>
										</tr>
									</>
								) : null} */}

							{this.props.reduxControlChars.exhaustFanControl === 'Space Static Pressure' ||
								this.props.reduxControlChars.exhaustFanControl === 'Pool Space vs Adjacent Space Differential Pressure' ||
								this.props.reduxControlChars.exhaustFanControl === 'Pool Space vs Adj Space Diff Press and Outdoor Diff Press' ? (
								<>
									<tr>
										<td>
											{this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
												<label>Pool Space Static Press vs Adj Space </label>) :
												<label>Space Static Pressure (Exaust Fan)</label>
											}

										</td>
										<td>
											<input
												type="number"
												placeholder={this.props.reduxPlaceholders.phExhaustSpaceReliefFan}
												value={this.props.reduxSetPoints.spExhaustReliefFanSpace}
												onChange={(event) => updateInputField('spExhaustReliefFanSpace', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C.</label>
											{this.props.reduxSetPoints.spReliefFan < -.125 || this.props.reduxSetPoints.spReliefFan > .125 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -.125 - +.125</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.exhaustFanControl === 'Pool Space vs Adj Space Diff Press and Outdoor Diff Press' ? (
								<>
									<tr>
										<td>
											<label>Pool Space Static Press vs Outdoor </label>
										</td>
										<td>
											<input
												type="number"
												min="-100"
												max="100"
												placeholder={this.props.reduxPlaceholders.phExhaustReliefFanOffsetAmbient}
												value={this.props.reduxSetPoints.spExhaustReliefFanOffsetAmbient}
												onChange={(event) => updateInputField('spExhaustReliefFanOffsetAmbient', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C</label>

											{this.props.reduxSetPoints.spReliefFanOffset < -100 || this.props.reduxSetPoints.spReliefFanOffset > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -100 - 100</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxControlChars.returnFanControl === "Duct Static Pressure w/ Tracking" ||
								this.props.reduxControlChars.returnFanControl === "Track Supply Fan" ? (
								<>
									<tr>
										<td>
											<label>Return Fan Tracking </label>
										</td>
										<td>
											<input
												type="number"
												min="-100"
												max="100"
												placeholder={this.props.reduxPlaceholders.phReturnReliefFanOffsetTracking}
												value={this.props.reduxSetPoints.spReturnReliefFanOffsetTracking}
												onChange={(event) => updateInputField('spReturnReliefFanOffsetTracking', 'UPDATE_SETPOINTS', event)}
											/>
											<label>% Offset from Supply Fan Output</label>

											{this.props.reduxSetPoints.spReliefFanOffset < -100 || this.props.reduxSetPoints.spReliefFanOffset > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range -100% - 100%</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{(this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan Standby" &&
								this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan On") ||
								(this.props.reduxUnitDesignChars.heatingType === "None" ||
									this.props.reduxUnitDesignChars.heatingType === "") ? (null) :
								<>
									<tr>
										<td>
											<label>Night Mode Heating </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phUnoccHeat}
												value={this.props.reduxSetPoints.spUnoccHeat}
												onChange={(event) => updateInputField('spUnoccHeat', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spUnoccHeat < 0 || this.props.reduxSetPoints.spUnoccHeat > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{(this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan Standby" &&
								this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan On") ||
								(this.props.reduxUnitDesignChars.coolingingType === "None" ||
									this.props.reduxUnitDesignChars.coolingType === "") ? (null) :
								<>
									<tr>
										<td>
											<label>Night Mode Cooling </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phUnoccCool}
												value={this.props.reduxSetPoints.spUnoccCool}
												onChange={(event) => updateInputField('spUnoccCool', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>

											{this.props.reduxSetPoints.spUnoccCool < 0 || this.props.reduxSetPoints.spUnoccCool > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0&deg;F - 100&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{(this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan Standby" &&
								this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan On") ||
								(this.props.reduxUnitDesignChars.reheatingType === "None" ||
									this.props.reduxUnitDesignChars.reheatingType === "") ||
								(this.props.reduxUnitDesignChars.humidifierType === "None" ||
									this.props.reduxUnitDesignChars.humidifierType === "") ? (null) :
								<>
									<tr>
										<td>
											<label>Night Mode Dehumidification </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phUnoccDehum}
												value={this.props.reduxSetPoints.spUnoccDehum}
												onChange={(event) => updateInputField('spUnoccDehum', 'UPDATE_SETPOINTS', event)}
											/>
											<label>%RH</label>

											{this.props.reduxSetPoints.spUnoccDehum < 0 || this.props.reduxSetPoints.spUnoccDehum > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0%RH - 100%RH</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{(this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan Standby" &&
								this.props.reduxControlChars.unoccupiedModeControl !== "Night Setback w/ Supply Fan On") ||
								(this.props.reduxUnitDesignChars.humidifierType === "None" ||
									this.props.reduxUnitDesignChars.humidifierType === "") ? (null) :
								<>
									<tr>
										<td>
											<label>Night Mode Humidification </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder={this.props.reduxPlaceholders.phUnoccHumid}
												value={this.props.reduxSetPoints.spUnoccHumid}
												onChange={(event) => updateInputField('spUnoccHumid', 'UPDATE_SETPOINTS', event)}
											/>
											<label>%RH</label>

											{this.props.reduxSetPoints.spUnoccHumid < 0 || this.props.reduxSetPoints.spUnoccHumid > 100 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0%RH - 100%RH</label>
											) : null}
										</td>
									</tr>
								</>
							}

							{this.props.reduxDetailedControlConfig.demandControlVentilation ? (
								<>
									<tr>
										<td>
											<label>CO2 </label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="1500"
												value={this.props.reduxSetPoints.spCo2}
												onChange={(event) => updateInputField('spCo2', 'UPDATE_SETPOINTS', event)}
											/>
											<label>PPM</label>

											{this.props.reduxSetPoints.spCo2 < 0 || this.props.reduxSetPoints.spCo2 > 1500 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 0 PPM - 1500 PPM</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.unitConfiguration === "Partial Outside Air (Recirculation)" &&
								this.props.reduxControlChars.minOacontrol === "Minimum % Design Airflow" &&
								this.props.reduxDetailedControlConfig.demandControlVentilation ? (
								<>
									<tr>
										<td>
											<label>CO2 OA Minimum Airflow</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spCo2oaAirFlow}
												onChange={(event) => updateInputField('spCo2oaAirflow', 'UPDATE_SETPOINTS', event)}
											/>
											<label>% design airflow (field balanced)</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxUnitDesignChars.unitConfiguration === "Partial Outside Air (Recirculation)" &&
								this.props.reduxControlChars.minOacontrol === "Minimum Outside Air CFM" &&
								this.props.reduxDetailedControlConfig.demandControlVentilation ? (
								<>
									<tr>
										<td>
											<label>CO2 OA Minimum Airflow</label>
										</td>
										<td>
											<input
												type="number"
												min="0"
												max="100"
												placeholder="##"
												value={this.props.reduxSetPoints.spCo2oaCfm}
												onChange={(event) => updateInputField('spCo2oaCfm', 'UPDATE_SETPOINTS', event)}
											/>
											<label>CFM</label>
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxDetailedControlConfig.highDuctSwitch ? (
								<>
									<tr>
										<td>
											<label>High Supply Duct Static Pressure</label>
										</td>
										<td>
											<input
												type="number"
												min="2"
												max="10"
												placeholder={this.props.reduxPlaceholders.phHighDuctNum}
												value={this.props.reduxSetPoints.spHighDuctNum}
												onChange={(event) => updateInputField('spHighDuctNum', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C.</label>

											{this.props.reduxSetPoints.spHighDuctNum < 2 || this.props.reduxSetPoints.spHighDuctNum > 10 ? (
												<label style={{ color: 'red' }}>  Warning: allowable range 2" to 10"</label>
											) : null}
										</td>
									</tr>
								</>

							) : null}

							{this.props.reduxDetailedControlConfig.lowDuctSwitch ? (
								<>
									<tr>
										<td>
											<label>Low Return Duct Static Pressure</label>
										</td>
										<td>
											<input
												type="number"
												min="-10"
												max="-2"
												placeholder={this.props.reduxPlaceholders.phLowDuctNum}
												value={this.props.reduxSetPoints.spLowDuctNum}
												onChange={(event) => updateInputField('spLowDuctNum', 'UPDATE_SETPOINTS', event)}
											/>
											<label>" W.C.</label>

											{this.props.reduxSetPoints.spLowDuctNum < -10 || this.props.reduxSetPoints.spLowDuctNum > -2 ? (
												<label style={{ color: 'red' }}>  Warning: allowable range -2" to -10"</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}

							{this.props.reduxDetailedControlConfig.freezestat ? (
								<>
									<tr>
										<td>
											<label>Freezestat </label>
										</td>
										<td>
											<input
												type="number"
												min="15"
												max="60"
												placeholder={this.props.reduxPlaceholders.phFreezeNum}
												value={this.props.reduxSetPoints.spFreezestatNum}
												onChange={(event) => updateInputField('spFreezestatNum', 'UPDATE_SETPOINTS', event)}
											/>
											<label>&deg;F</label>
											{this.props.reduxSetPoints.spFreezestatNum < 15 || this.props.reduxSetPoints.spFreezestatNum > 60 ? (
												<label style={{ color: 'red' }}>  Warning: typical range 15&deg;F - 60&deg;F</label>
											) : null}
										</td>
									</tr>
								</>
							) : null}


						</tbody>
					</table>
				</Collapsible>
			</div >
		);
	}
}

//-------------Redux---------------------
function mapStateToProps(state) {
	return {
		reduxUnitDesignChars: state.reduxUnitDesignChars,
		reduxUnitDesignCharsOptions: state.reduxUnitDesignCharsOptions,
		reduxControlChars: state.reduxControlChars,
		reduxControlCharsOptions: state.reduxControlCharsOptions,
		reduxSensors: state.reduxSensors,
		reduxDetailedControlConfig: state.reduxDetailedControlConfig,
		reduxAdditionalSensors: state.reduxAdditionalSensors,
		reduxPlaceholders: state.reduxPlaceholders,
		reduxSetPoints: state.reduxSetPoints
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(SetPoints);





