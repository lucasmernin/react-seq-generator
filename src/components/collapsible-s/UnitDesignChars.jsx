import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { getDropdownOptions } from '../../utilities/utility';
import {
  updateUnitConfiguration, updateExhaustReturnFan, updateCondenserType, updateCoolingType, updatePrecoolingType, updateReheatingType,
  updatePreheatingType, updateHeatingType, updateRegenHeatingType, updateHumidifierType, updateEnergyRecoveryType, updateUnitTags, updatePostcoolingType, updateHasSourceCapture
} from '../../utilities/unitDesignChars/updateUnitDesignChars';

import { updateUnitType } from '../../utilities/defaultValues';
// import { getLabelHeatingType, getLabelReheatingType } from '../../utilities/unitDesignCharsFunctions';

class UnitDesignChars extends React.Component {
  render() {
    return (
      <div>
        <Collapsible trigger="Unit Design Characteristics" open>
          <table>
            <tbody>
              <tr>
                <td>
                  <label>Unit Type </label>
                </td>
                <td>
                  <select
                    value={this.props.reduxUnitDesignChars.unitType}
                    onChange={
                      (event) => updateUnitType(event)
                    }
                  >
                    <option>Choose</option>
                    <option>C-Series</option>
                    <option>E-Series</option>
                    <option>P-Series</option>
                    <option>D-Series</option>
                    <option>Controls Lite</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label>Unit Tags</label>
                </td>
                <td>
                  <input
                    type="text"
                    value={this.props.reduxUnitDesignChars.unitTags}
                    placeholder={this.props.reduxPlaceholders.phUnitTags}
                    onChange={(event) => updateUnitTags(event)}
                  />
                </td>
              </tr>

              {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ? (null) : (
                <tr>
                  <td>
                    <label>Unit Configuration</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.unitConfiguration}
                      onChange={(event) => updateUnitConfiguration(event)}
                      disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.unitConfigurationOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
                <tr>
                  <td>
                    <label>Source Capture System</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.hasSourceCapture}
                      onChange={(event) => updateHasSourceCapture(event)}
                    >
                      <option>No</option>
                      <option>Yes</option>
                    </select>
                  </td>
                </tr>
              ) : null}

              {this.props.reduxUnitDesignChars.unitType === 'C-Series' ||
                this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ? (null) : (
                <tr>
                  <td>
                    <label>Energy Recovery Type</label>
                  </td>
                  <td>
                    <select value={this.props.reduxUnitDesignChars.energyRecoveryType}
                      onChange={(event) => updateEnergyRecoveryType(event)}
                      disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.energyRecoveryTypeOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ? (null) : (
                <tr>
                  <td>
                    <label>Exhaust/Return Fan (SF always included) </label>
                  </td>
                  <td>
                    <select value={this.props.reduxUnitDesignChars.exhaustReturnFan}
                      onChange={(event) => updateExhaustReturnFan(event)}
                      disabled={this.props.reduxUnitDesignChars.unitType === "P-Series" || this.props.reduxUnitDesignChars.energyRecoveryType === "Enthalpy Wheel"}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.exhaustReturnFanOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ||
                this.props.reduxUnitDesignChars.unitType === "D-Series" ? (null) : (
                <tr>
                  <td>
                    <label>Pre-Heating Type</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.preheatingType}
                      onChange={(event) => updatePreheatingType(event)}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.preheatingTypeOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === 'D-Series' ? (
                <>
                  <tr>
                    <td>
                      <label>Pre-Cooling Type</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxUnitDesignChars.precoolingType}
                        onChange={(event) => updatePrecoolingType(event)}
                      >
                        {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.precoolingTypeOptions)}
                      </select>
                    </td>
                  </tr>
                </>
              ) : null}

              {this.props.reduxUnitDesignChars.unitType === "D-Series" ? (null) : (
                <tr>
                  <td>
                    <label>Cooling Type</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.coolingType}
                      onChange={(event) => updateCoolingType(event)}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.coolingTypeOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ? (null) : (
                <tr>
                  <td>
                    <label>Heating Type</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.heatingType}
                      onChange={(event) => updateHeatingType(event)}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.heatingTypeOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === 'D-Series' ? (null) : (
                <>
                  <tr>
                    <td>
                      <label>Re-Heating Type</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxUnitDesignChars.reheatingType}
                        onChange={(event) => updateReheatingType(event)}
                        disabled={this.props.reduxUnitDesignChars.coolingType === "None" ||
                          this.props.reduxControlChars.appType === "Sensible Only (Elevation)"}
                      >
                        {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.reheatingTypeOptions)}
                      </select>
                    </td>
                  </tr>
                </>
              )}

              {this.props.reduxUnitDesignChars.unitType === "D-Series" ? (

                <tr>
                  <td>
                    <label>Post-Cooling Type</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.postcoolingType}
                      onChange={(event) => updatePostcoolingType(event)}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.postcoolingTypeOptions)}
                    </select>
                  </td>
                </tr>

              ) : null}

              {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ||
                this.props.reduxUnitDesignChars.unitType === 'P-Series' ? (null) : (
                <tr>
                  <td>
                    <label>Humidifier Type </label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.humidifierType}
                      onChange={(event) => updateHumidifierType(event)}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.humidifierTypeOptions)}
                    </select>
                  </td>
                </tr>
              )}

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ? (
                <>
                  {this.props.reduxUnitDesignChars.coolingType === 'Direct Expansion Coil' ||
                    this.props.reduxUnitDesignChars.coolingType === 'A/R Coil (Heat Pump)' ? (
                    <tr>
                      <td>
                        <label>Condenser Type</label>
                      </td>
                      <td>
                        <select
                          value={this.props.reduxUnitDesignChars.condenserType}
                          onChange={(event) => updateCondenserType(event)}
                        >
                          {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.condenserTypeOptions)}
                        </select>
                      </td>
                    </tr>
                  ) : null}
                </>
              ) : null}

              {this.props.reduxUnitDesignChars.unitType === "D-Series" ? (
                <tr>
                  <td>
                    <label>Regeneration Heating Type</label>
                  </td>
                  <td>
                    <select
                      value={this.props.reduxUnitDesignChars.regenHeatingType}
                      onChange={(event) => updateRegenHeatingType(event)}
                    >
                      {getDropdownOptions(this.props.reduxUnitDesignCharsOptions.regenHeatingTypeOptions)}
                    </select>
                  </td>
                </tr>
              ) : null}


            </tbody>
          </table>
        </Collapsible>
      </div>
    );
  }
}

//------------------ Redux ----------------------------
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

export default connect(mapStateToProps, mapDispatchToProps)(UnitDesignChars);
