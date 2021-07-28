export function defaultUnitDesignCharacteristics() {
  return {
    id: 0,
    projectId: 0,
    unitType: 'Choose',
    unitTags: '',
    unitConfiguration: '',
    energyRecoveryType: '',
    exhaustReturnFan: '',
    precoolingType: '',
    postcoolingType: '',
    coolingType: '',
    preheatingType: '',
    heatingType: '',
    reheatingType: '',
    humidifierType: '',
    condenserType: '',
    regenHeatingType: ''
  };
}
export function defaultUnitDesignOptions() {
  return {
    energyRecoveryTypeOptions: [
      'None',
      'Flat Plate',
      'Enthalpy Wheel'
    ],
    exhaustReturnFanOptions: [
      'None',
      'Exhaust Fan',
      'Return Fan'],
    coolingTypeOptions: [
      'None',
      'Chilled Water Coil',
      'Direct Expansion Coil',
      'A/R Coil (Heat Pump)'],
    unitConfigurationOptions: [
      'Partial Outside Air (Recirculation)',
      '100% Outside Air',
      '100% Outside Air w/ Unoccupied Recirc Damper'
    ],
    heatingTypeOptions: [
      'None',
      'No Supplemental Heating',
      'Hot Water Coil',
      'Indirect Gas Furnace',
      'Electric Heater',
      'Steam Coil',
      'A/R Coil (Heat Pump)',
      'Direct Fired Furnace'
    ],
    regenHeatingTypeOptions: [
      'None - Passive Regeneration',
      'Hot Water Coil',
      'Indirect Gas Furnace',
      'Electric Heater',
      'Steam Coil',
      'A/R Coil (Heat Pump)',
      'Direct Fired Furnace'
    ],
    preheatingTypeOptions: [
      'None',
      'Hot Water Coil',
      'Electric Heater',
      'Steam Coil'
    ],
    reheatingTypeOptions: [
      'None',
      'Hot Water Coil',
      'Electric Heater',
      'Steam Coil'
    ],
    condenserTypeOptions: [
      'Air Cooled',
      'Water Cooled'
    ],
    humidifierTypeOptions: [
      'None',
      'Steam Manifold'
    ],
    precoolingTypeOptions: [
      'None',
      'Chilled Water Coil',
      'Direct Expansion Coil',
      'A/R Coil (Heat Pump)'
    ],
    postcoolingTypeOptions: [
      'None',
      'Chilled Water Coil',
      'Direct Expansion Coil',
      'A/R Coil (Heat Pump)'
    ]
  };
}
export function defaultControlCharacteristics() {
  return {
    id: 0,
    projectId: 0,
    appType: '',
    supplyFanControl: '',
    exhaustFanControl: '',
    returnFanControl: '',
    regenerationFanControl: '',
    // exhaustFanControlSpacePressure: '',
    // returnFanControlSpacePressure: '',
    temperatureControl: '',
    economizerControl: '',
    enthalpyWheelBypass: '',
    minOacontrol: '',
    unoccupiedModeControl: '',
    dehumidificationControl: '',
    unoccupiedDehumidificationControl: '',
    humidificationControl: '',
    purgeMode: '',
    masterSlave: ''
  };
}
export function defaultControlCharacteristicsOptions() {
  return {
    appTypeOptions: [
      'Constant Air Volume',
      'Variable Air Volume',
      'Standard',
      'Sensible Only (Elevation)'
    ],
    supplyFanControlOptions: [
      'Manual Balance',
      'Supply CFM',
      'Duct Static Pressure',
      'Hardwired Signal (0-10 VDC)',
      'Single Zone',
      'Space Static Pressure'
    ],
    exhaustFanControlOptions: [
      'Manual Balance',
      'Duct Static Pressure',
      'Exhaust CFM',
      'Space Static Pressure',
      'Hardwired Signal (0-10 VDC)',
      'Track Supply Fan',
      // 'Duct Static Pressure w/ Tracking',     
      'OA CFM +/- Offset',
      'Pool Space vs Adjacent Space Differential Pressure',
      'Pool Space vs Adj Space Diff Press and Outdoor Diff Press'
    ],
    returnFanControlOptions: [
      'Manual Balance',
      'Duct Static Pressure',
      'Return CFM',
      'Space Static Pressure',
      'Hardwired Signal (0-10 VDC)',
      'Track Supply Fan',
    ],
    regenerationFanControlOptions: ['Manual Balance'],
    // exhaustFanControlSpacePressureOptions: ['Positive Space Pressure', 'Negative Space Pressure'],
    // returnFanControlSpacePressureOptions: ['Positive Space Pressure', 'Negative Space Pressure'],
    temperatureControlOptions: [
      'Supply Discharge',
      'Supply Discharge w/ Return Reset',
      'Supply Discharge w/ Space Reset',
      'Supply Discharge w/ Outside Air Reset'
    ],
    economizerControlOptions: [
      'None',
      'Outside Dry Bulb < Dry Bulb Setpoint',
      'Outside Enthalpy < Enthalpy Setpoint',
      'Outside Dry Bulb < Return Dry Bulb',
      'Outside Dry Bulb < Space Dry Bulb',
      'Outside Enthalpy < Return Enthalpy',
      'Outside Enthalpy < Space Enthalpy',
      'OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point',
      'OA Enthalpy < Space Enthalpy + OA Dry Bulb < Set Point'
    ],
    minOacontrolOptions: [
      'None',
      'Minimum Outside Air CFM',
      'Minimum % Design Airflow'
    ],
    enthalpyWheelBypassOptions: [
      'None',
      'Constant Wheel CFM'
    ],
    unoccupiedModeControlOptions: [
      'None',
      'Unit is Off',
      'Night Setback w/ Supply Fan Standby',
      'Night Setback w/ Supply Fan On',
      'Reduced Airflow'
    ],
    dehumidificationControlOptions: [
      'Return Dew Point > Dehumidification Set Point',
      'Space Dew Point > Dehumidification Set Point',
      'Outside Dew Point > Dehumidification Set Point',
      'Return Relative Humidity > Dehumidification Set Point',
      'Space Relative Humidity > Dehumidification Set Point',
      'Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point',
      'Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point'
    ],
    unoccupiedDehumidificationControlOptions: [
      'Return Dew Point > Dehumidification Set Point',
      'Space Dew Point > Dehumidification Set Point',
      'Return Relative Humidity > Dehumidification Set Point',
      'Space Relative Humidity > Dehumidification Set Point',
      'Return Dew Point > Dehum Set Point or Return Relative Humidity > Dehum Set Point',
      'Space Dew Point > Dehum Set Point or Space Relative Humidity > Dehum Set Point'
    ],
    humidificationControlOptions: [
      'Return Reset (%RH)',
      'Space Reset (%RH)',
      // 'Constant Discharge (%RH)'
    ],
    purgeModeOptions: [
      'None',
      'Present'
    ],
    masterSlaveOptions: [
      'None',
      'Present'
    ]
  };
}
export function defaultDetailedControlConfig() {
  return {
    id: 0,
    projectId: 0,
    smokeDetectors: false,
    evapCondenser: false,
    evapWaterLevel: false,
    evapSumpHeater: false,
    evapAutoDrain: false,
    evapWaterTreatment: false,
    evapWaterTreatmentType: '',
    demandControlVentilation: false,
    morningWarmUp: false,
    morningCoolDown: false,
    wheelRotation: false,
    dirtyFilterSwitch: false,
    filterPressureAnalogInput: false,
    condensateDrainPanSwitch: false,
    freezestat: false,
    phaseVoltageMonitor: false,
    highDuctSwitch: false,
    lowDuctSwitch: false,
    analogAmbientSensor: false
  };
}
export function defaultDetailedControlConfigOptions() {
  return {
    evapWaterTreatmentTypeOptions: ['Provided By others', 'Provided By Innovent']
  };
}
export function defaultSensors() {
  return {
    id: 0,
    projectId: 0,
    bmsSupplyAirHumidity: false,
    bmsOutsideAirHumidity: false,
    bmsReturnAirTemp: false,
    bmsReturnAirHumidity: false,
    bmsExhaustAirTemp: false,
    bmsExhaustAirHumidity: false,
    bmsSpaceAirTemp: false,
    bmsSpaceAirHumidity: false,
    bmsMixedAirTemp: false,
    bmsMixedAirHumidity: false,
    bmsCoolingEnteringAirTemp: false,
    bmsPrecoolingLeavingAirTemp: false,
    bmsHeatingEnteringAirTemp: false,
    bmsHeatingLeavingAirTemp: false,
    bmsReheatingEnteringAirTemp: false,
    bmsReheatingLeavingAirTemp: false,
    bmsPreheatingEnteringAirTemp: false,
    bmsPreheatingLeavingAirTemp: false,
    bmsSupplyCfm: false,
    bmsExhaustCfm: false,
    bmsReturnCfm: false,
    bmsOutsideAirCfm: false,
    bmsHxenteringOutsideAirTemp: false,
    bmsHxleavingSupplyAirTemp: false,
    bmsHxenteringExhaustAirTemp: false,
    bmsHxleavingExhaustAirTemp: false,
    bmsHxsupplyDifferentialPressure: false,
    bmsHxexhaustDifferentialPressure: false,
    bmsHeatWheelRotationDetection: false,
    bmsSupplyDuctStaticPressure: false,
    bmsReturnDuctStaticPressure: false,
    bmsExhaustDuctStaticPressure: false,
    bmsSpaceStaticPressure: false,
    bmsFilterPressureTransducer: false,
    bmsSpaceCo2: false,
    bmsFreezestat: false,
    bmsDrainCondensate: false,
    bmsFilterPressureAnalogInput: false,
    bmsHighSupplyDuctStatic: false,
    bmsLowReturnDuctStatic: false,
    bmsAmbientDifferentialPressure: false
  };
}
export function defaultSetPoints() {
  return {
    id: 0,
    projectId: 0,
    spMaxSfturndown: '',
    spDefrost: '',
    spPreheat: '',
    spPreheatLockout: '',
    spSupplyWheelDifferential: '',
    spExhaustWheelDifferential: '',
    spPreCool: '',
    spPreCoolLockout: '',
    spCoolLockout: '',
    spPostCoolDegree: '',
    spPostCoolRh: '',
    spPostCoolLockoutDegree: '',
    spPostCoolLockoutRh: '',
    spDehumCoilMin: '',
    spDehumCoilMax: '',
    spSupplyDewMin: '',
    spSupplyDewMax: '',
    spDehumMin: '',
    spHeatingLockout: '',
    spPostHeatingLockout: '',
    spSupplyTemp: '',
    spReturnResetTemp: '',
    spSpaceResetTemp: '',
    spHeatMin: '',
    spHeatMax: '',
    spCoolMin: '',
    spCoolMax: '',
    spOutsideResetMinOat: '',
    spOutsideResetMaxOat: '',
    spOutsideResetMinLat: '',
    spOutsideResetMaxLat: '',
    spHumid: '',
    spReturnHumidRh: '',
    spSpaceHumidRh: '',
    spSupplyHumidRh: '',
    spHumidLockout: '',
    spCo2: '',
    spCo2oaCfm: '',
    spCo2oaAirflow: '',
    spMinOaControlCfm: '',
    spMinOaControlAirflow: '',
    spSupplyFanControlDuct: '',
    spSupplyFanControlCfm: '',
    spExhaustReliefFanCfm: '',
    spExhaustReliefFanDuct: '',
    spExhaustReliefFanSpace: '',
    spExhaustReliefFanOffsetTracking: '',
    spExhaustReliefFanOffsetAmbient: '',
    spExhaustReliefFanOffsetDamper: '',
    spReturnReliefFanCfm: '',
    spReturnReliefFanDuct: '',
    spReturnReliefFanSpace: '',
    spReturnReliefFanOffsetTracking: '',
    spUnoccHeat: '',
    spUnoccCool: '',
    spUnoccDehum: '',
    spUnoccHumid: '',
    spFreezestatNum: '',
    spHighDuctNum: '',
    spLowDuctNum: '',
    spSpaceTempDeadBand: '',
    spReturnTempDeadBand: '',
    spActiveSpaceTempCooling: '',
    spActiveSpaceTempHeating: '',
    spActiveReturnTempCooling: '',
    spActiveReturnTempHeating: '',
    spDesiccantWheelMin: '',
    spDesiccantWheelMax: '',
    spSpaceDehumControlDew: '',
    spReturnDehumControlDew: '',
    spOutsideDehumControlDew: '',
    spReturnDehumControlHumidity: '',
    spSpaceDehumControlHumidity: '',
    spEconomizerActivationDegree: '',
    spEconomizerActivationBtu: '',
    spDehumCoilLeaving: '',
    spSpaceUnoccupiedDehumControlDew: '',
    spReturnUnoccupiedDehumControlDew: '',
    spReturnUnoccupiedDehumControlHumidity: '',
    spSpaceUnoccupiedDehumControlHumidity: '',
    spControlsLiteHeating2V: '',
    spControlsLiteHeating10V: '',
    spControlsLiteCooling2V: '',
    spControlsLiteCooling10V: '',
    spControlsLiteDehumCoil2V: '',
    spControlsLiteDehumCoil10V: '',
    spControlsLiteDehumSupply2V: '',
    spControlsLiteDehumSupply10V: '',
    spExhaustOaOffset: ''
  };
}

// export function defaultSetPoints() {
//   return {
//     id: 0,
//     projectId: 0,
//     spMaxSfturndown: '50',
//     spDefrost: '',
//     spPreheat: '',
//     spPreheatLockout: '20',
//     spSupplyWheelDifferential: '2',
//     spExhaustWheelDifferential: '2',
//     spPreCool: '',
//     spPreCoolLockout: '55',
//     spCoolOa: '',
//     spCoolLockout: '50',
//     spPostCool: '',
//     spPostCoolLockout: '50',
//     spDehumCoilMin: '',
//     spDehumCoilMax: '',
//     spSupplyDewMin: '',
//     spSupplyDewMax: '',
//     spDehumMin: '',
//     spHeatingLockout: '75',
//     spPostHeatingLockout: '75',
//     spSupplyTemp: '',
//     spHeatMin: '75',
//     spHeatMax: '95',
//     spCoolMin: '50',
//     spCoolMax: '75',
//     spOutsideMin: '',
//     spSupplyMaxTemp: '',
//     spHumid: '85',
//     spHumidRh: '',
//     spHumidLockout: '65',
//     spCo2: '1000',
//     spCo2oa: '0',
//     spMinOaposition: '',
//     spSupplyFan: '',
//     spReliefFan: '.04',
//     spReliefFanOffset: '',
//     spUnoccHeat: '65',
//     spUnoccCool: '80',
//     spUnoccDehum: '60',
//     spUnoccHumid: '20',
// spControlsLite2V: '',
// spControlsLite10V: '',
// spControlsLiteDehum2V: '',
// spControlsLiteDehum10V: '',
//     spFreezestatNum: '',
//     spHighDuctNum: '',
//     spLowDuctNum: '',
//     spSupplyTempDeadBand: '4',
//     spActiveSupplyTempCooling: '',
//     spActiveSupplyTempHeating: '',
//     spDesiccantMin: '60',
//     spDesiccantMax: '130',
//     spDehumControlDewSpace: '',
//     spDehumControlDewReturn: '',
//     spDehumControlDewOutside: '',
//     spDehumControlHumidityReturn: '',
//     spDehumControlHumiditySpace: ''
//   };
// }

export function defaultPlaceholders() {
  return {
    phUnitTags: 'UNIT TAGS (OPTIONAL)',
    phDefrost: '##',
    phPreheat: '##',
    phPreCool: '##',
    phCoolOa: '##',
    phPostCool: '##',
    phDehumCoilMin: '##',
    phDehumCoilMax: '##',
    phSupplyDewMin: '##',
    phSupplyDewMax: '##',
    phDehumMin: 'default 50',
    phSupplyTemp: '##',
    phOutsideMin: '##',
    phSupplyMaxTemp: '##',
    phHumidRh: '##',
    phMinOaposition: '##',
    phSupplyFan: '##',
    phReliefFan: '##',
    phReliefFanOffset: '##',
    phActiveSupplyTempCooling: '##',
    phActiveSupplyTempHeating: '##',
    phSpaceDehumControlDew: '##',
    phReturnDehumControlDew: '##',
    phOutsideDehumControlDew: '##',
    phReturnDehumControlHumidity: '##',
    phSpaceDehumControlHumidity: '##',
    phHighDuctNum: 'range 2" to 10"',
    phLowDuctNum: 'range -2" to -10"',
    phFreezeNum: 'range 15°F - 60°F',
    phExhaustCfmReliefFan: '##',
    phReturnCfmReliefFan: '##',
    phExhaustDuctReliefFan: '##',
    phReturnDuctReliefFan: '##',
    phReturnReliefFanOffsetTracking: '##',
    phExhaustSpaceReliefFan: '##',
    phReturnSpaceReliefFan: '##',
    phReturnResetTemp: '##',
    phSpaceResetTemp: '##',
    phSpaceTempDeadBand: '##',
    phReturnTempDeadBand: '##',
    phActiveSpaceTempCooling: '##',
    phActiveSpaceTempHeating: '##',
    phActiveReturnTempCooling: '##',
    phActiveReturnTempHeating: '##',
    phReturnHumdRh: '##',
    phSpaceHumidRh: '##',
    phSupplyHumidRh: '##',
    phSupplyFanControlDuct: '##',
    phSupplyFanControlCfm: '##',
    phMinOaControlCfm: '##',
    phMinOaControlAirflow: '##',
    phPostCoolRh: '##',
    phPostCoolDegree: '##',
    phPostCoolLockoutRh: '##',
    phPostCoolLockoutDegree: '##',
    phEconomizerActivationDegree: '##',
    phEconomizerActivationBtu: '##',
    phExhaustReliefFanOffsetTracking: '##',
    phExhaustReliefFanOffsetAmbient: '##',
    phCo2oaCfm: '##',
    phCo2oaAirflow: '##'
  };
}
export function defaultAdditionalSensors() {
  return {
    id: 0,
    projectId: 0,
    addRequestedPoints: false,
    addHardWiredInput: false,
    addSupplyAirHumidity: false,
    addOutsideAirHumidity: false,
    addReturnAirTemp: false,
    addReturnAirHumidity: false,
    addExhaustAirTemp: false,
    addExhaustAirHumidity: false,
    addSpaceAirTemp: false,
    addSpaceAirHumidity: false,
    addMixedAirTemp: false,
    addMixedAirHumidity: false,
    addCoolingEnteringAirTemp: false,
    addCoolingLeavingAirTemp: false,
    addHeatingEnteringAirTemp: false,
    addHeatingLeavingAirTemp: false,
    addReheatingEnteringAirTemp: false,
    addReheatingLeavingAirTemp: false,
    addPreheatingEnteringAirTemp: false,
    addPreheatingLeavingAirTemp: false,
    addSupplyCfm: false,
    addExhaustCfm: false,
    addReturnCfm: false,
    addOutsideAirCfm: false,
    addHxenteringOutsideAirTemp: false,
    addHxleavingSupplyAirTemp: false,
    addHxenteringExhaustAirTemp: false,
    addHxleavingExhaustAirTemp: false,
    addHxsupplyDifferentialPressure: false,
    addHxexhaustDifferentialPressure: false,
    addHeatWheelRotationDetection: false,
    addSupplyDuctStaticPressure: false,
    addReturnDuctStaticPressure: false,
    addExhaustDuctStaticPressure: false,
    addSpaceStaticPressure: false,
    addFilterPressureTransducer: false,
    addSpaceCo2: false,
    addReturnCo2: false,
    addFreezestat: false,
    addDrainCondensate: false,
    addFilterPressureAnalogInput: false,
    addHighSupplyDuctStatic: false,
    addLowReturnDuctStatic: false
  };
}

export function defaultJobDetails() {
  return {
    id: '',
    createDate: '',
    salesTeamName: '',
    salesTeamId: '',
    salesRepName: '',
    salesRepId: '',
    salesOrderNumber: '',
    projectName: '',
    projectLocation: ''
  };
}

export function defaultProjects() {
  return { savedProjects: [], salesRepList: [], salesTeamList: [], showSavedProjects: false };
}

export function defaultValidation() {
  return {
    salesRepError: false,
    projectNameError: false,
    projectLocationError: false,
    salesOrderNumberError: false
  };
}
