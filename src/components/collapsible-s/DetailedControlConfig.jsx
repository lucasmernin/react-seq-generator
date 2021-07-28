import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import { trueFalseFunction } from '../../utilities/utility';
import {
  updateDemandControl, updateFilterTransducer, updateWheelRotation, updateFreezestat, updatePanSwitch,
  updateFilterSwitch, updateHighDuct, updateLowDuct, updateEvaporativeCondenser
} from '../../utilities/detailedControlConfig/updateDetailedControlConfig';
import '../../css/DetailedControlConfig.css';



class DeatiledControlConfig extends React.Component {


  render() {

    return (
      <div>
        <Collapsible trigger="Detailed Control Configuration" contentInnerClassName="detailedControlConfiguration" open>
          <table>
            <tbody>

              {this.props.reduxControlChars.unoccupiedModeControl === "Night Setback w/ Supply Fan Standby" ||
                this.props.reduxControlChars.unoccupiedModeControl === "Night Setback w/ Supply Fan On" ? (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.morningWarmUp}
                      onChange={(event) => trueFalseFunction('morningWarmUp', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                    />
                    <label>Morning Warm Up</label>
                  </td>
                </tr>
              ) : null}

              {this.props.reduxControlChars.unoccupiedModeControl === "Night Setback w/ Supply Fan Standby" ||
                this.props.reduxControlChars.unoccupiedModeControl === "Night Setback w/ Supply Fan On" ? (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.morningCoolDown}
                      onChange={(event) => trueFalseFunction('morningCoolDown', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                    />
                    <label>Morning Cool Down</label>
                  </td>
                </tr>
              ) : null}



              {/* {this.props.reduxUnitDesignChars.unitType === "P-Series" ? (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.analogAmbientSensor}
                      onChange={(event) => trueFalseFunction('analogAmbientSensor', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                    />
                    <label>Analog Ambient Pressure Sensor</label>
                  </td>
                </tr>) : null
              } */}

              {this.props.reduxUnitDesignChars.energyRecoveryType === "Enthalpy Wheel" &&
                this.props.reduxUnitDesignChars.unitType !== "E-Series" ? (
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.wheelRotation}
                      onChange={(event) => updateWheelRotation(event)}
                    />
                    <label>Enthalpy Wheel Rotation Detection</label>
                  </td>
                </tr>
              ) : null}

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ? (null) : (
                <>
                  {(this.props.reduxUnitDesignChars.coolingType === "Direct Expansion Coil" ||
                    this.props.reduxUnitDesignChars.precoolingType === "Direct Expansion Coil" ||
                    this.props.reduxUnitDesignChars.postcoolingType === "Direct Expansion Coil") ? (
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          checked={this.props.reduxDetailedControlConfig.evapCondenser || false}
                          onChange={(event) => updateEvaporativeCondenser(event)}
                        />
                        <label>Evaporative Condenser</label>
                      </td>
                    </tr>
                  ) : (null)}
                </>
              )}


              {/* {this.props.reduxDetailedControlConfig.evapCondenser ? (
                <>
                  <tr>
                    <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="checkbox"
                        checked={this.props.reduxDetailedControlConfig.evapWaterLevel}
                        onChange={(event) => trueFalseFunction('evapWaterLevel', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                      />
                      <label>Electronic Water Level Control</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="checkbox"
                        checked={this.props.reduxDetailedControlConfig.evapSumpHeater}
                        onChange={(event) => trueFalseFunction('evapSumpHeater', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                      />
                      <label>Sump Heater</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="checkbox"
                        checked={this.props.reduxDetailedControlConfig.evapAutoDrain}
                        onChange={(event) => trueFalseFunction('evapAutoDrain', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                      />
                      <label>Auto Drain & Fill</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <input
                        type="checkbox"
                        checked={this.props.reduxDetailedControlConfig.evapWaterTreatment}
                        onChange={(event) => trueFalseFunction('evapWaterTreatment', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                      />
                      <label>Water Treatment System</label>
                    </td>
                  </tr>
                </>
              ) : null} */}


              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ? (null) :
                <>
                  {this.props.reduxUnitDesignChars.unitConfiguration === "Partial Outside Air (Recirculation)" ? (
                    <>
                      {this.props.reduxUnitDesignChars.unitType === "P-Series" ? (null) : (
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              checked={this.props.reduxDetailedControlConfig.demandControlVentilation}
                              onChange={(event) => updateDemandControl(event)}
                            />
                            <label>Demand Control Ventilation (CO2)</label>
                          </td>
                        </tr>
                      )}
                    </>
                  ) : null}
                </>
              }

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ||
                this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) :

                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.dirtyFilterSwitch}
                      onChange={(event) => updateFilterSwitch(event)}
                    />
                    <label>Dirty Filter Switch</label>
                  </td>
                </tr>
              }

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ||
                this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) :
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.filterPressureAnalogInput}
                      onChange={(event) => updateFilterTransducer(event)}
                    />
                    <label>Filter Pressure Analog Input</label>
                  </td>
                </tr>
              }

              {this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) :
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.condensateDrainPanSwitch}
                      onChange={(event) => updatePanSwitch(event)}
                    />
                    <label>Condensate Drain Pan Overflow Switch</label>
                  </td>
                </tr>
              }


              {/* {this.props.reduxUnitDesignChars.coolingType === "Chilled Water Coil" ||
                    this.props.reduxUnitDesignChars.precoolingType === "Chilled Water Coil" ||
                    this.props.reduxUnitDesignChars.postcoolingType === "Chilled Water Coil" ||
                    this.props.reduxUnitDesignChars.heatingType === "Hot Water Coil" ||
                    this.props.reduxUnitDesignChars.preheatingType === "Hot Water Coil" ||
                    this.props.reduxUnitDesignChars.reheatingType === "Hot Water Coil" ? null : (
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxDetailedControlConfig.freezestat}
                            onChange={(event) => updateFreezestat(event)}
                          />
                          <label>Freezestat</label>
                        </td>
                      </tr>
                    )} */}

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ||
                this.props.reduxUnitDesignChars.unitType === "Choose" ||
                this.props.reduxUnitDesignChars.coolingType === "Chilled Water Coil" ? (null) :
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.freezestat}
                      onChange={(event) => updateFreezestat(event)}
                    />
                    <label>Freezestat</label>
                  </td>
                </tr>
              }

              {this.props.reduxUnitDesignChars.unitType === "Choose" ||
                this.props.reduxUnitDesignChars.coolingType === "A/R Coil (Heat Pump)" ||
                this.props.reduxUnitDesignChars.precoolingType === "A/R Coil (Heat Pump)" ||
                this.props.reduxUnitDesignChars.postcoolingType === "A/R Coil (Heat Pump)" ||
                this.props.reduxUnitDesignChars.coolingType === "Direct Expansion Coil" ||
                this.props.reduxUnitDesignChars.precoolingType === "Direct Expansion Coil" ||
                this.props.reduxUnitDesignChars.postcoolingType === "Direct Expansion Coil"
                ? (null) : (
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxDetailedControlConfig.phaseVoltageMonitor}
                        onChange={(event) => trueFalseFunction('phaseVoltageMonitor', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                      />
                      <label>Phase/Voltage Monitor</label>
                    </td>
                  </tr>
                )}

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ||
                this.props.reduxUnitDesignChars.unitType === "Choose" ||
                this.props.reduxControlChars.appType === "Variable Air Volume" ? (null) :
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.highDuctSwitch}
                      onChange={(event) => updateHighDuct(event)}
                    />
                    <label>High Limit Supply Duct Static Pressure Switch</label>
                  </td>
                </tr>
              }

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ||
                this.props.reduxUnitDesignChars.unitType === "Choose" ||
                (this.props.reduxControlChars.appType === "Variable Air Volume" &&
                  this.props.reduxUnitDesignChars.exhaustReturnFan === "Return Fan") ? (null) :
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.lowDuctSwitch}
                      onChange={(event) => updateLowDuct(event)}
                    />
                    <label>Low Limit Return Duct Static Pressure Switch</label>
                  </td>
                </tr>
              }

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ||
                this.props.reduxUnitDesignChars.unitType === "Choose" ? (null) :
                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxDetailedControlConfig.smokeDetectors}
                      onChange={(event) => trueFalseFunction('smokeDetectors', 'UPDATE_DETAILEDCONTROLCONFIG', event)}
                    />
                    <label>Smoke Detectors</label>
                  </td>
                </tr>
              }

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
export default connect(mapStateToProps, mapDispatchToProps)(DeatiledControlConfig);
