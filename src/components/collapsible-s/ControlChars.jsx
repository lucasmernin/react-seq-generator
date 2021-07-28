import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { getDropdownOptions, updateInputField } from '../../utilities/utility';
import {
  updateExhaustFanControl, updateReturnFanControl, updateTemperatureControl, updateSupplyFanControl,
  updateAppType, updateUnoccupiedModeControl, updateDehumidificationControl, updateEconomizerControl, updateHumidificationControl,
  updateMinOAControl, updateEnthalpyWheelBypass, updateUnoccupiedDehumidificationControl
} from '../../utilities/controlChars/updateControlCharacteristics';



class ControlChars extends React.Component {

  render() {
    return (
      <div>
        {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ? (null) : (
          <Collapsible trigger="Control Characteristics" open>
            <table>
              <tbody>

                {this.props.reduxUnitDesignChars.unitType === "D-Series" ||
                  this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) : (
                  <tr>
                    <td>
                      <label>Application</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.appType}
                        onChange={(event) => updateAppType(event)}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.appTypeOptions)}
                      </select>
                    </td>
                  </tr>
                )}

                {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ||
                  this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) : (
                  <tr>
                    <td>
                      <label>Supply Fan Control</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.supplyFanControl}
                        onChange={(event) => updateSupplyFanControl(event)}
                        disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.supplyFanControlOptions)}
                      </select>
                    </td>
                  </tr>
                )}

                {this.props.reduxUnitDesignChars.exhaustReturnFan === "Exhaust Fan" ? (
                  <>
                    <tr>
                      <td>
                        {this.props.reduxUnitDesignChars.hasSourceCapture === "Yes" ? (
                          <label>Building Exhaust Fan Control</label>
                        ) :
                          <label>Exhaust Fan Control</label>
                        }
                      </td>
                      <td>
                        <select
                          value={this.props.reduxControlChars.exhaustFanControl}
                          onChange={(event) => updateExhaustFanControl(event)}

                        >
                          {getDropdownOptions(this.props.reduxControlCharsOptions.exhaustFanControlOptions)}
                        </select>
                      </td>
                      {this.props.reduxControlChars.exhaustFanControl === "OA CFM +/- Offset" ||
                        this.props.reduxControlChars.exhaustFanControl === "Exhaust CFM" ? (
                        <td>Requires Exhaust Airflow Monitoring</td>
                      ) : null}

                    </tr>
                  </>
                ) : null}

                {this.props.reduxUnitDesignChars.hasSourceCapture === "Yes" ? (
                  <tr>
                    <td>
                      <label>Source Capture Exhaust Fan Control</label>
                    </td>
                    <td>
                      <select
                        value={"Constant Volume"}
                        disabled={true}
                      >
                        <option>Constant Volume</option>
                      </select>
                    </td>
                  </tr>
                ) : null}

                {this.props.reduxUnitDesignChars.exhaustReturnFan === "Return Fan" ? (
                  <tr>
                    <td>
                      <label>Return Fan Control</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.returnFanControl}
                        onChange={(event) => updateReturnFanControl(event)}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.returnFanControlOptions)}
                      </select>
                    </td>
                  </tr>
                ) : null}

                {this.props.reduxUnitDesignChars.unitType === "D-Series" ? (
                  <tr>
                    <td>
                      <label>Regeneration Fan Control</label>
                    </td>
                    <td>
                      <select value={this.props.reduxControlChars.regenerationFanControl}
                        disabled={true}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.regenerationFanControlOptions)}
                      </select>
                    </td>
                  </tr>
                ) : null}

                {this.props.reduxUnitDesignChars.unitType === 'Controls Lite' ||
                  this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) : (
                  <>
                    <tr>
                      <td>
                        {this.props.reduxUnitDesignChars.unitType === "D-Series" ? (
                          <label>Temperature and Dehumidification Control</label>
                        ) :
                          <label>Temperature Control</label>
                        }

                      </td>
                      <td>
                        <select
                          value={this.props.reduxControlChars.temperatureControl}
                          onChange={(event) => updateTemperatureControl(event)}
                          disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                        >
                          {getDropdownOptions(this.props.reduxControlCharsOptions.temperatureControlOptions)}
                        </select>
                      </td>
                    </tr>
                  </>
                )}

                {this.props.reduxUnitDesignChars.unitType === 'P-Series' ||
                  this.props.reduxUnitDesignChars.unitType === "E-Series" ||
                  (this.props.reduxUnitDesignChars.unitType === 'C-Series' &&
                    this.props.reduxUnitDesignChars.unitConfiguration === 'Partial Outside Air (Recirculation)') ? (

                  <tr>
                    <td>
                      <label>Economizer Activation</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.economizerControl}
                        onChange={(event) => updateEconomizerControl(event)}
                        disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.economizerControlOptions)}
                      </select>
                    </td>
                  </tr>

                ) : null}

                {this.props.reduxUnitDesignChars.unitConfiguration === "Partial Outside Air (Recirculation)" ||
                  this.props.reduxControlChars.exhaustFanControl === "OA CFM +/- Offset" ? (
                  <>
                    {this.props.reduxControlChars.exhaustFanControl === "OA CFM +/- Offset" ? (
                      <tr>
                        <td>
                          <label>Minimum OA Control</label>
                        </td>
                        <td>
                          <select value={this.props.reduxControlChars.minOacontrol}
                            disabled={true}
                          >
                            {getDropdownOptions(this.props.reduxControlCharsOptions.minOacontrolOptions)}
                          </select>
                        </td>
                        {this.props.reduxControlChars.minOacontrol === "Minimum Outside Air CFM" ? (
                          <td>Requires Outside Airflow Monitoring</td>
                        ) : null}
                      </tr>

                    ) :
                      <tr>
                        <td>
                          <label>Minimum OA Control</label>
                        </td>
                        <td>
                          <select value={this.props.reduxControlChars.minOacontrol} onChange={(event) => updateMinOAControl(event)}>
                            {getDropdownOptions(this.props.reduxControlCharsOptions.minOacontrolOptions)}
                          </select>
                        </td>
                        {this.props.reduxControlChars.minOacontrol === "Minimum Outside Air CFM" ? (
                          <td>Requires Outside Airflow Monitoring</td>
                        ) : null}
                      </tr>
                    }
                  </>
                ) : null}



                {this.props.reduxUnitDesignChars.energyRecoveryType === 'Enthalpy Wheel' ? (
                  <tr>
                    <td>
                      <label>Enthalpy Wheel Bypass</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.enthalpyWheelBypass}
                        onChange={(event) => updateEnthalpyWheelBypass(event)}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.enthalpyWheelBypassOptions)}
                      </select>
                    </td>
                  </tr>
                ) : null}


                {this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) :

                  <tr>
                    <td>
                      <label>Unoccupied Mode Control</label>
                    </td>
                    <td>
                      <select value={this.props.reduxControlChars.unoccupiedModeControl} onChange={(event) => updateUnoccupiedModeControl(event)}>
                        {getDropdownOptions(this.props.reduxControlCharsOptions.unoccupiedModeControlOptions)}
                      </select>
                    </td>
                  </tr>
                }

                {(this.props.reduxUnitDesignChars.reheatingType === "None" ||
                  this.props.reduxUnitDesignChars.reheatingType === "") &&
                  this.props.reduxUnitDesignChars.unitType !== "D-Series" &&
                  this.props.reduxUnitDesignChars.unitType !== "P-Series" ? (null) : (
                  <tr>
                    <td>
                      {this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
                        <label>Dehumidification Activation </label>
                      ) :
                        <label>Occupied Dehumidification Activation </label>
                      }
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.dehumidificationControl}
                        onChange={(event) => updateDehumidificationControl(event)}
                        disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.dehumidificationControlOptions)}
                      </select>
                    </td>
                  </tr>
                )}

                {this.props.reduxUnitDesignChars.unitType === "P-Series" ||
                  ((this.props.reduxUnitDesignChars.reheatingType === "None" ||
                    this.props.reduxUnitDesignChars.reheatingType === "") &&
                    this.props.reduxUnitDesignChars.unitType !== "D-Series") ||
                  (this.props.reduxControlChars.unoccupiedModeControl === "None" ||
                    this.props.reduxControlChars.unoccupiedModeControl === "Unit is Off") ? (null) : (
                  <tr>
                    <td>
                      <label>Unoccupied Dehumidification Activation</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.unoccupiedDehumidificationControl}
                        onChange={(event) => updateUnoccupiedDehumidificationControl(event)}
                        disabled={this.props.reduxUnitDesignChars.unitType === "P-Series"}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.unoccupiedDehumidificationControlOptions)}
                      </select>
                    </td>
                  </tr>
                )}

                {this.props.reduxUnitDesignChars.humidifierType === 'None' ||
                  this.props.reduxUnitDesignChars.humidifierType === "" ? (null) : (
                  <tr>
                    <td>
                      <label>Humidification Control</label>
                    </td>
                    <td>
                      <select value={this.props.reduxControlChars.humidificationControl} onChange={(event) => updateHumidificationControl(event)}>
                        {getDropdownOptions(this.props.reduxControlCharsOptions.humidificationControlOptions)}
                      </select>
                    </td>
                  </tr>
                )}

                {this.props.reduxUnitDesignChars.unitType === 'P-Series' ? (
                  <tr>
                    <td>
                      <label>Master/Slave Multi-Unit Control</label>
                    </td>
                    <td>
                      <select
                        value={this.props.reduxControlChars.masterSlave}
                        onChange={(event) => updateInputField('masterSlave', 'UPDATE_ControlChars', event)}
                      >
                        {getDropdownOptions(this.props.reduxControlCharsOptions.masterSlaveOptions)}
                      </select>
                    </td>
                  </tr>
                ) : null}

                {this.props.reduxUnitDesignChars.unitType === 'P-Series' ? (
                  <tr>
                    <td>
                      <label>Purge Mode</label>
                    </td>
                    <td>
                      <select value={this.props.reduxControlChars.purgeMode} onChange={(event) => updateInputField('purgeMode', 'UPDATE_ControlChars', event)}>
                        {getDropdownOptions(this.props.reduxControlCharsOptions.purgeModeOptions)}
                      </select>
                    </td>
                  </tr>
                ) : null}



              </tbody>
            </table>
          </Collapsible>
        )}
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ControlChars);
