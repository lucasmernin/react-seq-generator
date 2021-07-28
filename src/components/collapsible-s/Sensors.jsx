import React from 'react';
import Collapsible from 'react-collapsible';
import { connect } from 'react-redux';
import { mapDispatchToProps } from '../../redux/actions';
import '../../css/Sensors.css';
import {
  updateAddCoolingEnteringAirTemp, updateAddCoolingLeavingAirTemp, updateAddDrainCondensate,
  updateAddExhaustAirHumidity, updateAddExhaustAirTemp, updateAddExhaustCfm, updateAddExhaustDuctStaticPressure,
  updateAddFilterPressureAnalogInput, updateAddFilterPressureTransducer, updateAddFreezestat, updateAddHardWiredInput,
  updateAddHeatingEnteringAirTemp, updateAddHeatingLeavingAirTemp, updateAddHeatWheelRotationDetection,
  updateAddHighSupplyDuctStatic, updateAddHxenteringExhaustAirTemp, updateAddHxenteringOutsideAirTemp,
  updateAddHxexhaustDifferentialPressure, updateAddHxleavingSupplyAirTemp,
  updateAddHxsupplyDifferentialPressure, updateAddLowReturnDuctStatic, updateAddMixedAirHumidity,
  updateAddMixedAirTemp, updateAddOutsideAirCfm, updateAddOutsideAirHumidity, updateAddPreheatingEnteringAirTemp,
  updateAddPreheatingLeavingAirTemp, updateAddReheatingLeavingAirTemp, updateAddReturnAirHumidity,
  updateAddReturnAirTemp, updateAddReturnCfm, updateAddReturnCo2, updateAddReturnDuctStaticPressure,
  updateAddSpaceAirHumidity, updateAddSpaceAirTemp, updateAddSpaceCo2, updateAddSpaceStaticPressure,
  updateAddSupplyAirHumidity, updateAddSupplyCfm,
  updateAddSupplyDuctStaticPressure
} from '../../utilities/sensors/updateAdditionalSensors';


class Sensors extends React.Component {

  render() {

    return (
      <div>
        <Collapsible trigger="Additional Sensors" contentInnerClassName="additionalSensors" close>
          <table>
            <tbody>

              {this.props.reduxUnitDesignChars.unitType === "Controls Lite" ? (
                <>
                  {this.props.reduxUnitDesignChars.reheatingType === "Hot Gas Reheat" ? (null) : (
                    <>
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHxleavingSupplyAirTemp}
                            onChange={(event) => updateAddHxleavingSupplyAirTemp(event)}
                          />
                          <label>Leaving Supply Air Temperature </label>
                        </td>
                      </tr>
                    </>
                  )}
                </>

              ) : <>

                <tr>
                  <td>
                    <input
                      type="checkbox"
                      checked={this.props.reduxAdditionalSensors.addHardWiredInput}
                      onChange={(event) => updateAddHardWiredInput(event)}
                    />
                    <label>Hard Wired Occupancy Input</label>
                  </td>
                </tr>


                {this.props.reduxSensors.bmsSupplyAirHumidity ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSupplyAirHumidity}
                        onChange={(event) => updateAddSupplyAirHumidity(event)}
                      />
                      <label>Supply Air Humidity </label>
                    </td>
                  </tr>
                }

                {this.props.reduxSensors.bmsOutsideAirHumidity ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addOutsideAirHumidity}
                        onChange={(event) => updateAddOutsideAirHumidity(event)}
                      />
                      <label>Outside Air Humidity </label>
                    </td>
                  </tr>
                }

                {this.props.reduxUnitDesignChars.unitConfiguration === '100% Outside Air' ||
                  this.props.reduxUnitDesignChars.unitConfiguration === "" ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsReturnAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addReturnAirTemp}
                            onChange={(event) => updateAddReturnAirTemp(event)}
                          />
                          <label>Return Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsReturnAirHumidity ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addReturnAirHumidity}
                            onChange={(event) => updateAddReturnAirHumidity(event)}
                          />
                          <label>Return Air Humidity </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsExhaustAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addExhaustAirTemp}
                            onChange={(event) => updateAddExhaustAirTemp(event)}
                          />
                          <label>Exhaust Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsExhaustAirHumidity ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addExhaustAirHumidity}
                            onChange={(event) => updateAddExhaustAirHumidity(event)}
                          />
                          <label>Exhaust Air Humidity </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxSensors.bmsSpaceAirTemp ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSpaceAirTemp}
                        onChange={(event) => updateAddSpaceAirTemp(event)}
                      />
                      <label>Space Air Temperature </label>
                    </td>
                  </tr>

                }

                {this.props.reduxSensors.bmsSpaceAirHumidity ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSpaceAirHumidity}
                        onChange={(event) => updateAddSpaceAirHumidity(event)}
                      />
                      <label>Space Air Humidity </label>
                    </td>
                  </tr>
                }

                {this.props.reduxUnitDesignChars.unitConfiguration === '100% Outside Air' ||
                  this.props.reduxUnitDesignChars.unitConfiguration === "" ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsMixedAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addMixedAirTemp}
                            onChange={(event) => updateAddMixedAirTemp(event)}
                          />
                          <label>Mixed Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsMixedAirHumidity ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addMixedAirHumidity}
                            onChange={(event) => updateAddMixedAirHumidity(event)}
                          />
                          <label>Mixed Air Humidity </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxUnitDesignChars.coolingType === 'None' ||
                  this.props.reduxUnitDesignChars.coolingType === "" ? (null) : (
                  <>
                    {
                      this.props.reduxSensors.bmsCoolingEnteringAirTemp ? (null) :
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              checked={this.props.reduxAdditionalSensors.addCoolingEnteringAirTemp}
                              onChange={(event) => updateAddCoolingEnteringAirTemp(event)}
                            />
                            <label>Cooling Coil Entering Air Temperature </label>
                          </td>
                        </tr>
                    }

                    {this.props.reduxSensors.bmsCoolingLeavingAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addCoolingLeavingAirTemp}
                            onChange={(event) => updateAddCoolingLeavingAirTemp(event)}
                          />
                          <label>Cooling Coil Leaving Air Temperature </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxUnitDesignChars.heatingType === 'None' ||
                  this.props.reduxUnitDesignChars.heatingType === "" ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsHeatingEnteringAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHeatingEnteringAirTemp}
                            onChange={(event) => updateAddHeatingEnteringAirTemp(event)}
                          />
                          <label>Heating Coil Entering Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsHeatingLeavingAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHeatingLeavingAirTemp}
                            onChange={(event) => updateAddHeatingLeavingAirTemp(event)}
                          />
                          <label>Heating Coil Leaving Air Temperature </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxUnitDesignChars.reheatingType === 'None' ||
                  this.props.reduxUnitDesignChars.reheatingType === "" ? (null) : (
                  <>
                    {/* {this.props.reduxSensors.bmsReheatingEnteringAirTemp ? (null) :
                        <tr>
                          <td>
                            <input
                              type="checkbox"
                              checked={this.props.reduxAdditionalSensors.addReheatingEnteringAirTemp}
                              onChange={(event) => trueFalseFunction('addReheatingEnteringAirTemp', 'UPDATE_ADDITIONALSENSORS', event)}
                            />
                            <label>Reheating Coil Entering Air Temperature </label>
                          </td>
                        </tr>
                        }
                        */}


                    {this.props.reduxSensors.bmsReheatingLeavingAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addReheatingLeavingAirTemp}
                            onChange={(event) => updateAddReheatingLeavingAirTemp(event)}
                          />
                          <label>Re-Heating Coil Leaving Air Temperature </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxUnitDesignChars.preheatingType === 'None' ||
                  this.props.reduxUnitDesignChars.preheatingType === "" ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsPreheatingEnteringAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addPreheatingEnteringAirTemp}
                            onChange={(event) => updateAddPreheatingEnteringAirTemp(event)}
                          />
                          <label>Pre-Heating Coil Entering Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsPreheatingLeavingAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addPreheatingLeavingAirTemp}
                            onChange={(event) => updateAddPreheatingLeavingAirTemp(event)}
                          />
                          <label>Pre-Heating Coil Leaving Air Temperature </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxSensors.bmsSupplyCfm ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSupplyCfm}
                        onChange={(event) => updateAddSupplyCfm(event)}
                      />
                      <label>Supply CFM</label>
                    </td>
                  </tr>
                }

                {this.props.reduxUnitDesignChars.exhaustReturnFan === 'Exhaust Fan' ? (
                  <>
                    {this.props.reduxSensors.bmsExhaustCfm ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addExhaustCfm}
                            onChange={(event) => updateAddExhaustCfm(event)}
                          />
                          <label>Exhaust CFM</label>
                        </td>
                      </tr>
                    }
                  </>
                ) : null}

                {this.props.reduxUnitDesignChars.exhaustReturnFan === 'Return Fan' ? (
                  <>
                    {this.props.reduxSensors.bmsReturnCfm ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addReturnCfm}
                            onChange={(event) => updateAddReturnCfm(event)}
                          />
                          <label>Return CFM</label>
                        </td>
                      </tr>
                    }
                  </>
                ) : null}

                {this.props.reduxSensors.bmsOutsideAirCfm ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addOutsideAirCfm}
                        onChange={(event) => updateAddOutsideAirCfm(event)}
                      />
                      <label>Outside Air CFM</label>
                    </td>
                  </tr>
                }

                {this.props.reduxUnitDesignChars.energyRecoveryType === 'None' ||
                  this.props.reduxUnitDesignChars.energyRecoveryType === "" ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsHxenteringOutsideAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHxenteringOutsideAirTemp}
                            onChange={(event) => updateAddHxenteringOutsideAirTemp(event)}
                          />
                          <label>Entering Outside Air Temperature</label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsHxleavingSupplyAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHxleavingSupplyAirTemp}
                            onChange={(event) => updateAddHxleavingSupplyAirTemp(event)}
                          />
                          <label>Leaving Supply Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsHxenteringExhaustAirTemp ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHxenteringExhaustAirTemp}
                            onChange={(event) => updateAddHxenteringExhaustAirTemp(event)}
                          />
                          <label>Entering Exhaust Air Temperature </label>
                        </td>
                      </tr>
                    }

                    {/* {this.props.reduxSensors.bmsHxleavingExhaustAirTemp ? (null) :
                          <tr>
                            <td>
                              <input
                                type="checkbox"
                                checked={this.props.reduxAdditionalSensors.addHxleavingExhaustAirTemp}
                                onChange={(event) => updateAddHxleavingExhaustAirTemp(event)}
                              />
                              <label>Leaving Exhaust Air Temperature </label>
                            </td>
                          </tr>
                        } */}

                    {this.props.reduxSensors.bmsHxsupplyDifferentialPressure ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHxsupplyDifferentialPressure}
                            onChange={(event) => updateAddHxsupplyDifferentialPressure(event)}
                          />
                          <label>Supply Differential Pressure </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsHxexhaustDifferentialPressure ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHxexhaustDifferentialPressure}
                            onChange={(event) => updateAddHxexhaustDifferentialPressure(event)}
                          />
                          <label>Exhaust Differential Pressure </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxUnitDesignChars.energyRecoveryType === 'Enthalpy Wheel' ? (
                  <>
                    {this.props.reduxSensors.bmsHeatWheelRotationDetection ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addHeatWheelRotationDetection}
                            onChange={(event) => updateAddHeatWheelRotationDetection(event)}
                          />
                          <label>Enthalpy Wheel Rotation Detection </label>
                        </td>
                      </tr>
                    }
                  </>
                ) : null}

                {this.props.reduxSensors.bmsSupplyDuctStaticPressure ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSupplyDuctStaticPressure}
                        onChange={(event) => updateAddSupplyDuctStaticPressure(event)}
                      />
                      <label>Supply Duct Static Pressure </label>
                    </td>
                  </tr>
                }

                {this.props.reduxUnitDesignChars.exhaustReturnFan === 'None' ||
                  this.props.reduxUnitDesignChars.exhaustReturnFan === "" ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsReturnDuctStaticPressure ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addReturnDuctStaticPressure}
                            onChange={(event) => updateAddReturnDuctStaticPressure(event)}
                          />
                          <label>Return Duct Static Pressure </label>
                        </td>
                      </tr>
                    }

                    {this.props.reduxSensors.bmsExhaustDuctStaticPressure ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addExhaustDuctStaticPressure}
                            onChange={(event) => updateAddExhaustDuctStaticPressure(event)}
                          />
                          <label>Exhaust Duct Static Pressure </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxSensors.bmsSpaceStaticPressure ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSpaceStaticPressure}
                        onChange={(event) => updateAddSpaceStaticPressure(event)}
                      />
                      <label>Space Static Pressure </label>
                    </td>
                  </tr>
                }

                {this.props.reduxSensors.bmsFilterPressureAnalogInput ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addFilterPressureAnalogInput}
                        onChange={(event) => updateAddFilterPressureAnalogInput(event)}
                      />
                      <label>Filter Pressure Analog Input </label>
                    </td>
                  </tr>
                }

                {this.props.reduxSensors.bmsFilterPressureTransducer ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addFilterPressureTransducer}
                        onChange={(event) => updateAddFilterPressureTransducer(event)}
                      />
                      <label>Filter Pressure Transducer </label>
                    </td>
                  </tr>
                }

                {this.props.reduxSensors.bmsSpaceCo2 ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addSpaceCo2}
                        onChange={(event) => updateAddSpaceCo2(event)}
                      />
                      <label>Space CO2 </label>
                    </td>
                  </tr>
                }

                {this.props.reduxUnitDesignChars.exhaustReturnFan === 'None' ||
                  this.props.reduxUnitDesignChars.exhaustReturnFan === "" ? (null) : (
                  <>
                    <tr>
                      <td>
                        <input
                          type="checkbox"
                          checked={this.props.reduxAdditionalSensors.addReturnCo2}
                          onChange={(event) => updateAddReturnCo2(event)}
                        />
                        <label>Return CO2 </label>
                      </td>
                    </tr>

                  </>
                )}

                {this.props.reduxSensors.bmsFreezestat ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addFreezestat}
                        onChange={(event) => updateAddFreezestat(event)}
                      />
                      <label>Freezestat </label>
                    </td>
                  </tr>
                }

                {(this.props.reduxUnitDesignChars.energyRecoveryType === 'None' ||
                  this.props.reduxUnitDesignChars.energyRecoveryType === '') &&
                  (this.props.reduxUnitDesignChars.coolingType === 'None' ||
                    this.props.reduxUnitDesignChars.coolingType === '') ? (null) : (
                  <>
                    {this.props.reduxSensors.bmsDrainCondensate ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addDrainCondensate}
                            onChange={(event) => updateAddDrainCondensate(event)}
                          />
                          <label>Drain Condensate </label>
                        </td>
                      </tr>
                    }
                  </>
                )}

                {this.props.reduxSensors.bmsHighSupplyDuctStatic ? (null) :
                  <tr>
                    <td>
                      <input
                        type="checkbox"
                        checked={this.props.reduxAdditionalSensors.addHighSupplyDuctStatic}
                        onChange={(event) => updateAddHighSupplyDuctStatic(event)}
                      />
                      <label>High Supply Duct Static </label>
                    </td>
                  </tr>
                }


                {this.props.reduxUnitDesignChars.exhaustReturnFan === 'None' ||
                  this.props.reduxUnitDesignChars.exhaustReturnFan === '' ? (null) :
                  <>
                    {this.props.reduxSensors.bmsLowReturnDuctStatic ? (null) :
                      <tr>
                        <td>
                          <input
                            type="checkbox"
                            checked={this.props.reduxAdditionalSensors.addLowReturnDuctStatic}
                            onChange={(event) => updateAddLowReturnDuctStatic(event)}
                          />
                          <label>Low Return Duct Static </label>
                        </td>
                      </tr>
                    }
                  </>
                }
              </>}
            </tbody>
          </table>
        </Collapsible>
      </div>
    );
  }
}

//------------------Redux-----------------------
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

export default connect(mapStateToProps, mapDispatchToProps)(Sensors);
