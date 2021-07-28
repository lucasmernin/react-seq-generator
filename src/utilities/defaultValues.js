import { store } from '../redux/store';
import { updateReduxAction } from '../redux/actions';
import {
  getExhaustFanControlOptions, getReturnFanControlOptions, getUnoccupiedModeControlOptions, getSupplyFanControlOptions,
  getDehumidificationControlOptions, getEconomizerControlOptions,

} from './controlChars/optionsControlCharacteristics';

import { getPhReliefFan, getPhSupplyTemp, getPhDefrost, getPhCoolOa, getPhDehumMin } from './getPlaceholders';



//When a user updates UnitType, we need to update the default values for several other sections.
export function updateUnitType(event) {
  const newUnitType = event.target.value;

  //Update reduxUnitDesignChars based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', getDefaults_UnitDesignChars(newUnitType)));

  //Update reduxUnitDesignChars based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS', getDefaults_UnitDesignCharsOptions(newUnitType)));

  //Update reduxControlChars based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_ControlChars', getDefaults_ControlChars(newUnitType)));

  //Update reduxControlCharsOptions based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS', getDefaults_ControlCharsOptions(newUnitType)));

  //Update reduxDetailedControlConfig based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', getDefaults_DetailedControlConfig(newUnitType)));

  //Update reduxSetPoints based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_SETPOINTS', getDefaults_SetPoints(newUnitType)));

  //Update reduxSensors based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_SENSORS', getDefaults_Sensors(newUnitType)));

  //Update reduxAdditionalSensors based on newUnitType
  store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', getDefaults_AdditionalSensors(newUnitType)));

  //Update reduxPlaceholders based on newUniType
  store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', getDefaults_Placeholders(newUnitType)));
}

function getDefaults_UnitDesignChars(unitType) {
  if (unitType === 'Choose') {
    return {
      unitType: unitType,
      unitConfiguration: '',
      hasSourceCapture: '',
      energyRecoveryType: '',
      exhaustReturnFan: '',
      preheatingType: '',
      coolingType: '',
      condenserType: '',
      heatingType: '',
      reheatingType: '',
      humidifierType: '',
      precoolingType: '',
      postcoolingType: '',
      regenHeatingType: ''
    };
  }
  if (unitType === 'E-Series') {
    return {
      unitType: unitType,
      unitConfiguration: 'Partial Outside Air (Recirculation)',
      hasSourceCapture: '',
      energyRecoveryType: 'Flat Plate',
      exhaustReturnFan: 'Exhaust Fan',
      preheatingType: 'None',
      coolingType: 'Chilled Water Coil',
      condenserType: 'Air Cooled',
      heatingType: 'Hot Water Coil',
      reheatingType: 'None',
      humidifierType: 'None',
      precoolingType: 'None', // no precoolingType w/ E-Series
      postcoolingType: 'None', // no postcoolingType w/ E-Series             
      regenHeatingType: 'None' // no regenHeatingType w/ E-Series
    };
  }
  if (unitType === 'P-Series') {
    return {
      unitType: unitType,
      energyRecoveryType: 'Flat Plate',
      exhaustReturnFan: 'Exhaust Fan',
      precoolingType: 'None', // no precoolingType w/ P-Series
      coolingType: 'Chilled Water Coil',
      condenserType: 'Air Cooled',
      unitConfiguration: 'Partial Outside Air (Recirculation)',
      hasSourceCapture: 'No',
      heatingType: 'Hot Water Coil',
      reheatingType: 'Hot Water Coil',
      preheatingType: 'None',
      postcoolingType: 'None', // no postcoolingType w/ P-Series      
      humidifierType: 'None', // no humidifierType w/ P-Series      
      regenHeatingType: 'None' // no regenHeatingType w/ P-Series

    };
  }
  if (unitType === 'C-Series') {
    return {
      unitType: unitType,
      exhaustReturnFan: 'Return Fan',
      precoolingType: 'None', // no precoolingType w/ C-Series
      coolingType: 'Chilled Water Coil',
      condenserType: 'Air Cooled',
      unitConfiguration: 'Partial Outside Air (Recirculation)',
      hasSourceCapture: '',
      heatingType: 'Hot Water Coil',
      reheatingType: 'None',
      preheatingType: 'None',
      humidifierType: 'None',
      energyRecoveryType: 'None', // no energyRecoveryType w/ C- Series          
      postcoolingType: 'None', // no postcoolingType w/ C-Series             
      regenHeatingType: 'None' // no regenHeatingType w/ C-Series

    };
  }
  if (unitType === 'D-Series') {
    return {
      unitType: unitType,
      energyRecoveryType: 'None',
      precoolingType: 'None',
      postcoolingType: 'None',
      unitConfiguration: '100% Outside Air',
      hasSourceCapture: '',
      heatingType: 'None',
      humidifierType: 'None',
      condenserType: 'Air Cooled',
      regenHeatingType: 'None - Passive Regeneration',
      exhaustReturnFan: 'None',
      coolingType: 'None', // no coolingType w/ D-Series
      preheatingType: 'None', // no preheatingType w/ D-Series     
      reheatingType: 'None', // no reheatingType w/ D-Series

    };
  }
  if (unitType === 'Controls Lite') {
    return {
      unitType: unitType,
      unitConfiguration: '',
      hasSourceCapture: '',
      energyRecoveryType: '',
      exhaustReturnFan: '',
      precoolingType: '',
      postcoolingType: '',
      coolingType: 'Direct Expansion Coil',
      preheatingType: '',
      heatingType: '',
      reheatingType: 'None',
      humidifierType: '',
      condenserType: 'Air Cooled',
      regenHeatingType: ''
    };
  }
}

function getDefaults_UnitDesignCharsOptions(unitType) {
  // const heatingTypeOptions = getHeatingTypeOptions(unitType);
  // const reheatingTypeOptions = getReheatingTypeOptions(unitType);
  if (unitType === 'C-Series') {
    return {
      energyRecoveryTypeOptions: ['Flat Plate', 'Enthalpy Wheel'],
      exhaustReturnFanOptions: ['None', 'Exhaust Fan', 'Return Fan'],
      precoolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      coolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      reheatingTypeOptions: ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'],
      unitConfigurationOptions: ['100% Outside Air', '100% Outside Air w/ Unoccupied Recirc Damper', 'Partial Outside Air (Recirculation)'],
      heatingTypeOptions: ['None', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Steam Coil'],


    };
  }
  if (unitType === 'E-Series') {
    return {
      energyRecoveryTypeOptions: ['Flat Plate', 'Enthalpy Wheel'],
      exhaustReturnFanOptions: ['None', 'Exhaust Fan', 'Return Fan'],
      precoolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      coolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      reheatingTypeOptions: ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'],
      unitConfigurationOptions: ['100% Outside Air', '100% Outside Air w/ Unoccupied Recirc Damper', 'Partial Outside Air (Recirculation)'],
      heatingTypeOptions: ['None', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Steam Coil'],

    };
  }
  if (unitType === 'P-Series') {
    return {
      energyRecoveryTypeOptions: ['Flat Plate'],
      exhaustReturnFanOptions: ['Exhaust Fan'],
      precoolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      coolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      reheatingTypeOptions: ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'],
      unitConfigurationOptions: ['Partial Outside Air (Recirculation)'],
      heatingTypeOptions: ['None', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Steam Coil'],

    };
  }
  if (unitType === 'D-Series') {
    return {
      energyRecoveryTypeOptions: ['None', 'Enthalpy Wheel'],
      precoolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      postcoolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      heatingTypeOptions: ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'],
      unitConfigurationOptions: ['100% Outside Air', 'Partial Outside Air (Recirculation)'],
      regenHeatingTypeOptions: ['None - Passive Regeneration', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Steam Coil', 'Direct Fired Furnace'],
      exhaustReturnFanOptions: ['None', 'Exhaust Fan', 'Return Fan']
    };
  }
  if (unitType === 'Controls Lite') {
    return {
      energyRecoveryTypeOptions: ['None'],
      exhaustReturnFanOptions: ['None', 'Exhaust Fan', 'Return Fan'],
      precoolingTypeOptions: ['Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      coolingTypeOptions: ['Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
      condenserTypeOptions: ['Air Cooled', 'Water Cooled'],
      reheatingTypeOptions: ['None', 'Hot Gas Reheat'],
    };
  }
  //defaults
  return {
    energyRecoveryTypeOptions: ['None'],
    exhaustReturnFanOptions: ['None', 'Exhaust Fan', 'Return Fan'],
    precoolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
    coolingTypeOptions: ['None', 'Chilled Water Coil', 'Direct Expansion Coil', 'A/R Coil (Heat Pump)'],
    reheatingTypeOptions: ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'],
    unitConfigurationOptions: ['100% Outside Air', '100% Outside Air w/ Unoccupied Recirc Damper', 'Partial Outside Air (Recirculation)'],

  };
}

function getDefaults_ControlChars(unitType) {
  if (unitType === 'Choose') {
    return {
      appType: '',
      supplyFanControl: '',
      exhaustFanControl: '',
      returnFanControl: '',
      regenerationFanControl: '',
      temperatureControl: '',
      economizerControl: '',
      dehumidificationControl: '',
      unoccupiedDehumidificationControl: '',
      humidificationControl: '',
      masterSlave: '',
      purgeMode: '',
      enthalpyWheelBypass: '',
      unoccupiedModeControl: '',
      minOacontrol: '',
    };
  }
  if (unitType === 'E-Series') {
    return {
      appType: 'Constant Air Volume',
      supplyFanControl: 'Manual Balance',
      exhaustFanControl: 'Space Static Pressure',
      returnFanControl: '',
      regenerationFanControl: '',
      // exhaustFanControlSpacePressure: 'Positive Space Pressure',
      temperatureControl: 'Supply Discharge',
      economizerControl: 'Outside Dry Bulb < Return Dry Bulb',
      dehumidificationControl: '',
      unoccupiedDehumidificationControl: '',
      humidificationControl: '',
      masterSlave: '',
      purgeMode: '',
      enthalpyWheelBypass: '',
      unoccupiedModeControl: 'None',
      minOacontrol: 'None',
    };
  }
  if (unitType === 'P-Series') {
    return {
      appType: 'Standard',
      supplyFanControl: 'Manual Balance',
      exhaustFanControl: 'Pool Space vs Adjacent Space Differential Pressure',
      returnFanControl: '',
      regenerationFanControl: '',
      // exhaustFanControlSpacePressure: 'Negative Space Pressure',
      temperatureControl: 'Supply Discharge w/ Return Reset',
      economizerControl: 'Outside Dry Bulb < Return Dry Bulb',
      dehumidificationControl: 'Return Dew Point > Dehumidification Set Point',
      unoccupiedDehumidificationControl: '',
      humidificationControl: '',
      purgeMode: 'None',
      masterSlave: 'None',
      enthalpyWheelBypass: '',
      unoccupiedModeControl: 'None',
      minOacontrol: 'None'
    };
  }
  if (unitType === 'C-Series') {
    return {
      appType: 'Constant Air Volume',
      supplyFanControl: 'Manual Balance',
      returnFanControl: 'Space Static Pressure',
      exhaustFanControl: '',
      regenerationFanControl: '',
      // returnFanControlSpacePressure: 'Positive Space Pressure',
      temperatureControl: 'Supply Discharge',
      economizerControl: 'Outside Dry Bulb < Return Dry Bulb',
      dehumidificationControl: '',
      unoccupiedDehumidificationControl: '',
      humidificationControl: '',
      masterSlave: '',
      purgeMode: '',
      enthalpyWheelBypass: '',
      unoccupiedModeControl: 'None',
      minOacontrol: 'None'
    };
  }
  if (unitType === 'D-Series') {
    return {
      appType: '',
      supplyFanControl: 'Manual Balance',
      regenerationFanControl: 'Manual Balance',
      exhaustFanControl: '',
      returnFanControl: '',
      temperatureControl: 'Supply Discharge',
      economizerControl: '',
      dehumidificationControl: 'Return Dew Point > Dehumidification Set Point',
      unoccupiedDehumidificationControl: '',
      humidificationControl: '',
      masterSlave: '',
      purgeMode: '',
      enthalpyWheelBypass: '',
      unoccupiedModeControl: 'None'
    };
  }
  if (unitType === 'Controls Lite') {
    return {
      appType: '',
      supplyFanControl: '',
      exhaustFanControl: '',
      returnFanControl: '',
      regenerationFanControl: '',
      // exhaustFanControlSpacePressure: '',
      // returnFanControlSpacePressure: '',
      temperatureControl: '',
      economizerControl: '',
      dehumidificationControl: '',
      unoccupiedDehumidificationControl: '',
      humidificationControl: '',
      purgeMode: '',
      masterSlave: '',
      enthalpyWheelBypass: '',
      unoccupiedModeControl: ''
    };
  }
}

function getDefaults_ControlCharsOptions(unitType) {
  const reduxState = store.getState();
  const appType = reduxState.reduxControlChars.appType;
  const temperatureControl = reduxState.reduxControlChars.temperatureControl;
  const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
  const supplyFanControl = reduxState.reduxControlChars.supplyFanControl;
  const supplyFanControlOptions = getSupplyFanControlOptions(unitType, appType);

  // const temperatureControlOptions = getTemperatureControlOptions(unitType);
  const dehumidificationControlOptions = getDehumidificationControlOptions(unitType, temperatureControl);
  const economizerControlOptions = getEconomizerControlOptions(temperatureControl, unitType, unitConfiguration);

  const unoccupiedModeControlOptions = getUnoccupiedModeControlOptions(unitType, temperatureControl, unitConfiguration);
  const returnFanControlOptions = getReturnFanControlOptions(appType, supplyFanControl, unitType);
  const exhaustFanControlOptions = getExhaustFanControlOptions(unitType, appType, supplyFanControl);


  if (unitType === 'Choose') {
    return {
      appType: ['Constant Air Volume', 'Variable Air Volume'],
      temperatureControlOptions: [
        'Supply Discharge',
        'Supply Discharge w/ Return Reset',
        'Supply Discharge w/ Space Reset',
        'Supply Discharge w/ Outside Air Reset'],
      supplyFanControlOptions: supplyFanControlOptions,
      economizerControlOptions: economizerControlOptions,
      dehumidificationControlOptions: dehumidificationControlOptions,
      unoccupiedModeControlOptions: unoccupiedModeControlOptions,
      enthalpyWheelBypassOptions: ['None', 'Constant Wheel CFM'],
      returnFanControlOptions: returnFanControlOptions,
      exhaustFanControlOptions: exhaustFanControlOptions
    };
  }
  if (unitType === 'C-Series') {
    return {
      appTypeOptions: ['Constant Air Volume', 'Variable Air Volume'],
      temperatureControlOptions: [
        'Supply Discharge',
        'Supply Discharge w/ Return Reset',
        'Supply Discharge w/ Space Reset',
        'Supply Discharge w/ Outside Air Reset'],
      supplyFanControlOptions: supplyFanControlOptions,
      economizerControlOptions: economizerControlOptions,
      dehumidificationControlOptions: dehumidificationControlOptions,
      unoccupiedModeControlOptions: unoccupiedModeControlOptions,
      enthalpyWheelBypassOptions: ['None', 'Constant Wheel CFM'],
      returnFanControlOptions: returnFanControlOptions,
      exhaustFanControlOptions: exhaustFanControlOptions
    };
  }
  if (unitType === 'E-Series') {
    return {
      appTypeOptions: ['Constant Air Volume', 'Variable Air Volume'],
      temperatureControlOptions: [
        'Supply Discharge',
        'Supply Discharge w/ Return Reset',
        'Supply Discharge w/ Space Reset',
        'Supply Discharge w/ Outside Air Reset'],
      supplyFanControlOptions: supplyFanControlOptions,
      economizerControlOptions: economizerControlOptions,
      dehumidificationControlOptions: dehumidificationControlOptions,
      unoccupiedModeControlOptions: unoccupiedModeControlOptions,
      enthalpyWheelBypassOptions: ['None', 'Constant Wheel CFM'],
      returnFanControlOptions: returnFanControlOptions,
      exhaustFanControlOptions: exhaustFanControlOptions
    };
  }
  if (unitType === 'P-Series') {
    return {
      appTypeOptions: ['Standard', 'Sensible Only (Elevation)'],
      temperatureControlOptions: [
        'Supply Discharge w/ Return Reset',
      ],
      supplyFanControlOptions: supplyFanControlOptions,
      exhaustFanControlOptions: exhaustFanControlOptions,
      economizerControlOptions: economizerControlOptions,
      dehumidificationControlOptions: dehumidificationControlOptions,
      unoccupiedModeControlOptions: unoccupiedModeControlOptions,
      enthalpyWheelBypassOptions: ['None', 'Constant Wheel CFM'],
      returnFanControlOptions: returnFanControlOptions,
    };
  }
  if (unitType === 'D-Series') {
    return {
      temperatureControlOptions: [
        'Supply Discharge',
        'Supply Discharge w/ Return Reset',
        'Supply Discharge w/ Space Reset',
        'Supply Discharge w/ Outside Air Reset'],
      supplyFanControlOptions: supplyFanControlOptions,
      regenerationFanControlOptions: ['Manual Balance'],
      economizerControlOptions: economizerControlOptions,
      dehumidificationControlOptions: dehumidificationControlOptions,
      unoccupiedModeControlOptions: unoccupiedModeControlOptions,
      enthalpyWheelBypassOptions: ['None', 'Constant Wheel CFM'],
      returnFanControlOptions: returnFanControlOptions,
      exhaustFanControlOptions: exhaustFanControlOptions
    };
  }
  if (unitType === 'Controls Lite') {
    return {};
  }
  //defaults
  return {};
}

function getDefaults_DetailedControlConfig(unitType) {
  if (unitType === 'Choose') {
    return {

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

    };
  }
  if (unitType === 'E-Series') {
    return {

      smokeDetectors: false,
      evapCondenser: false,
      evapWaterLevel: false,
      evapSumpHeater: false,
      evapAutoDrain: false,
      evapWaterTreatment: false,
      evapWaterTreatmentType: 'Provided By Others',
      demandControlVentilation: false,
      morningWarmUp: false,
      morningCoolDown: false,
      wheelRotation: false,
      dirtyFilterSwitch: false,
      filterPressureAnalogInput: false,
      condensateDrainPanSwitch: false,
      freezestat: true,
      phaseVoltageMonitor: false,
      highDuctSwitch: false,
      lowDuctSwitch: false,
    };
  }
  if (unitType === 'P-Series') {
    return {

      smokeDetectors: false,
      evapCondenser: false,
      evapWaterLevel: false,
      evapSumpHeater: false,
      evapAutoDrain: false,
      evapWaterTreatment: false,
      evapWaterTreatmentType: 'Provided By Others',
      demandControlVentilation: false,
      morningWarmUp: false,
      morningCoolDown: false,
      wheelRotation: false,
      dirtyFilterSwitch: false,
      filterPressureAnalogInput: false,
      condensateDrainPanSwitch: false,
      freezestat: true,
      phaseVoltageMonitor: false,
      highDuctSwitch: false,
      lowDuctSwitch: false,
    };
  }
  if (unitType === 'C-Series') {
    return {
      smokeDetectors: false,
      evapCondenser: false,
      evapWaterLevel: false,
      evapSumpHeater: false,
      evapAutoDrain: false,
      evapWaterTreatment: false,
      evapWaterTreatmentType: 'Provided By Others',
      demandControlVentilation: false,
      morningWarmUp: false,
      morningCoolDown: false,
      wheelRotation: false,
      dirtyFilterSwitch: false,
      filterPressureAnalogInput: false,
      condensateDrainPanSwitch: false,
      freezestat: true,
      phaseVoltageMonitor: false,
      highDuctSwitch: false,
      lowDuctSwitch: false,

    };
  }
  if (unitType === 'D-Series') {
    return {

      smokeDetectors: false,
      evapCondenser: false,
      evapWaterLevel: false,
      evapSumpHeater: false,
      evapAutoDrain: false,
      evapWaterTreatment: false,
      evapWaterTreatmentType: 'Provided By Others',
      demandControlVentilation: false,
      morningWarmUp: false,
      morningCoolDown: false,
      wheelRotation: false,
      dirtyFilterSwitch: false,
      filterPressureAnalogInput: false,
      condensateDrainPanSwitch: false,
      freezestat: true,
      phaseVoltageMonitor: false,
      highDuctSwitch: false,
      lowDuctSwitch: false,
    };
  }
  if (unitType === 'Controls Lite') {
    return {

      smokeDetectors: false,
      evapCondenser: false,
      evapWaterLevel: false,
      evapSumpHeater: false,
      evapAutoDrain: false,
      evapWaterTreatment: false,
      evapWaterTreatmentType: 'Provided By Others',
      demandControlVentilation: false,
      morningWarmUp: false,
      morningCoolDown: false,
      wheelRotation: false,
      dirtyFilterSwitch: false,
      filterPressureAnalogInput: false,
      condensateDrainPanSwitch: false,
      freezestat: false,
      phaseVoltageMonitor: true,
      highDuctSwitch: false,
      lowDuctSwitch: false,
    };
  }
}

function getDefaults_SetPoints(unitType) {
  if (unitType === 'Choose') {
    return {
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
      spSupplyDewPoint: '',
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
      spReturnReliefFanCfm: '',
      spReturnReliefFanDuct: '',
      spReturnReliefFanSpace: '',
      spExhaustReliefFanOffsetTracking: '',
      spExhaustReliefFanOffsetAmbient: '',
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
      spExhaustReliefFanOffsetDamper: '',
      spSpaceUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlHumidity: '',
      spSpaceUnoccupiedDehumControlHumidity: '',
      spControlsLiteCoil2V: '',
      spControlsLiteCoil10V: '',
      spControlsLiteSupply2V: '',
      spControlsLiteSupply10V: '',
      spExhaustOaOffset: '',
      spOccupiedSupplyFanSpeed: '',
      spUnoccupiedSupplyFanSpeed: ''

    };
  }
  if (unitType === 'E-Series') {
    return {
      spMaxSfturndown: '',
      spDefrost: '36',
      spPreheat: '',
      spPreheatLockout: '',
      spSupplyWheelDifferential: '',
      spExhaustWheelDifferential: '',
      spPreCool: '',
      spPreCoolLockout: '',
      spCoolLockout: '50',
      spPostCoolDegree: '',
      spPostCoolRh: '',
      spPostCoolLockoutDegree: '',
      spPostCoolLockoutRh: '',
      spDehumCoilMin: '',
      spDehumCoilMax: '',
      spSupplyDewMin: '',
      spSupplyDewMax: '',
      spSupplyDewPoint: '',
      spDehumMin: '',
      spHeatingLockout: '75',
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
      spExhaustReliefFanSpace: '0.04',
      spReturnReliefFanCfm: '',
      spReturnReliefFanDuct: '',
      spReturnReliefFanSpace: '',
      spExhaustReliefFanOffsetTracking: '',
      spExhaustReliefFanOffsetAmbient: '',
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
      spExhaustReliefFanOffsetDamper: '',
      spSpaceUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlHumidity: '',
      spSpaceUnoccupiedDehumControlHumidity: '',
      spControlsLiteCoil2V: '',
      spControlsLiteCoil10V: '',
      spControlsLiteSupply2V: '',
      spControlsLiteSupply10V: '',
      spExhaustOaOffset: '',
      spOccupiedSupplyFanSpeed: '100',
      spUnoccupiedSupplyFanSpeed: ''

    };
  }
  if (unitType === 'P-Series') {
    return {
      spMaxSfturndown: '',
      spDefrost: '38',
      spPreheat: '',
      spPreheatLockout: '',
      spSupplyWheelDifferential: '',
      spExhaustWheelDifferential: '',
      spPreCool: '',
      spPreCoolLockout: '',
      spCoolLockout: '50',
      spPostCoolDegree: '',
      spPostCoolRh: '',
      spPostCoolLockoutDegree: '',
      spPostCoolLockoutRh: '',
      spDehumCoilMin: '',
      spDehumCoilMax: '',
      spSupplyDewMin: '',
      spSupplyDewMax: '',
      spSupplyDewPoint: '',
      spDehumMin: '',
      spHeatingLockout: '85',
      spPostHeatingLockout: '',
      spSupplyTemp: '',
      spReturnResetTemp: '',
      spSpaceResetTemp: '',
      spHeatMin: '75',
      spHeatMax: '95',
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
      spExhaustReliefFanSpace: '-0.04',
      spReturnReliefFanCfm: '',
      spReturnReliefFanDuct: '',
      spReturnReliefFanSpace: '',
      spExhaustReliefFanOffsetTracking: '',
      spExhaustReliefFanOffsetAmbient: '',
      spReturnReliefFanOffsetTracking: '',
      spUnoccHeat: '',
      spUnoccCool: '',
      spUnoccDehum: '',
      spUnoccHumid: '',
      spFreezestatNum: '',
      spHighDuctNum: '',
      spLowDuctNum: '',
      spSpaceTempDeadBand: '',
      spReturnTempDeadBand: '2',
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
      spExhaustReliefFanOffsetDamper: '',
      spSpaceUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlHumidity: '',
      spSpaceUnoccupiedDehumControlHumidity: '',
      spControlsLiteCoil2V: '',
      spControlsLiteCoil10V: '',
      spControlsLiteSupply2V: '',
      spControlsLiteSupply10V: '',
      spExhaustOaOffset: '',
      spOccupiedSupplyFanSpeed: '100',
      spUnoccupiedSupplyFanSpeed: ''

    };
  }
  if (unitType === 'C-Series') {
    return {
      spMaxSfturndown: '',
      spDefrost: '',
      spPreheat: '',
      spPreheatLockout: '',
      spSupplyWheelDifferential: '',
      spExhaustWheelDifferential: '',
      spPreCool: '',
      spPreCoolLockout: '',
      spCoolLockout: '50',
      spPostCoolDegree: '',
      spPostCoolRh: '',
      spPostCoolLockoutDegree: '',
      spPostCoolLockoutRh: '',
      spDehumCoilMin: '',
      spDehumCoilMax: '',
      spSupplyDewMin: '',
      spSupplyDewMax: '',
      spSupplyDewPoint: '',
      spDehumMin: '',
      spHeatingLockout: '75',
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
      spReturnReliefFanCfm: '',
      spReturnReliefFanDuct: '',
      spReturnReliefFanSpace: '0.04',
      spExhaustReliefFanOffsetTracking: '',
      spExhaustReliefFanOffsetAmbient: '',
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
      spExhaustReliefFanOffsetDamper: '',
      spSpaceUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlHumidity: '',
      spSpaceUnoccupiedDehumControlHumidity: '',
      spControlsLiteCoil2V: '',
      spControlsLiteCoil10V: '',
      spControlsLiteSupply2V: '',
      spControlsLiteSupply10V: '',
      spExhaustOaOffset: '',
      spOccupiedSupplyFanSpeed: '100',
      spUnoccupiedSupplyFanSpeed: ''

    };
  }
  if (unitType === 'D-Series') {
    return {
      spMaxSfturndown: '',
      spDefrost: '',
      spPreheat: '',
      spPreheatLockout: '',
      spSupplyWheelDifferential: '',
      spExhaustWheelDifferential: '',
      spPreCool: '',
      spPreCoolLockout: '55',
      spCoolLockout: '',
      spPostCoolDegree: '',
      spPostCoolRh: '',
      spPostCoolLockoutDegree: '',
      spPostCoolLockoutRh: '',
      spDehumCoilMin: '',
      spDehumCoilMax: '',
      spSupplyDewMin: '',
      spSupplyDewMax: '',
      spSupplyDewPoint: '',
      spDehumMin: '',
      spHeatingLockout: '75',
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
      spReturnReliefFanCfm: '',
      spReturnReliefFanDuct: '',
      spReturnReliefFanSpace: '',
      spExhaustReliefFanOffsetTracking: '',
      spExhaustReliefFanOffsetAmbient: '',
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
      spExhaustReliefFanOffsetDamper: '',
      spSpaceUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlHumidity: '',
      spSpaceUnoccupiedDehumControlHumidity: '',
      spControlsLiteCoil2V: '',
      spControlsLiteCoil10V: '',
      spControlsLiteSupply2V: '',
      spControlsLiteSupply10V: '',
      spExhaustOaOffset: '',
      spOccupiedSupplyFanSpeed: '',
      spUnoccupiedSupplyFanSpeed: ''

    };
  }
  if (unitType === 'Controls Lite') {
    return {
      spMaxSfturndown: '',
      spDefrost: '',
      spPreheat: '',
      spPreheatLockout: '',
      spSupplyWheelDifferential: '',
      spExhaustWheelDifferential: '',
      spPreCool: '',
      spPreCoolLockout: '',
      spCoolLockout: '55',
      spPostCoolDegree: '',
      spPostCoolRh: '',
      spPostCoolLockoutDegree: '',
      spPostCoolLockoutRh: '',
      spDehumCoilMin: '',
      spDehumCoilMax: '',
      spSupplyDewMin: '',
      spSupplyDewMax: '',
      spSupplyDewPoint: '',
      spDehumMin: '',
      spHeatingLockout: '', // 70 if coolingType === "A/R Coil (Heat Pump)" 
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
      spReturnReliefFanCfm: '',
      spReturnReliefFanDuct: '',
      spReturnReliefFanSpace: '',
      spExhaustReliefFanOffsetTracking: '',
      spExhaustReliefFanOffsetAmbient: '',
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
      spExhaustReliefFanOffsetDamper: '',
      spSpaceUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlDew: '',
      spReturnUnoccupiedDehumControlHumidity: '',
      spSpaceUnoccupiedDehumControlHumidity: '',
      spControlsLiteCoil2V: '50',
      spControlsLiteCoil10V: '75',
      spControlsLiteSupply2V: '',
      spControlsLiteSupply10V: '',
      spExhaustOaOffset: '',
      spOccupiedSupplyFanSpeed: '',
      spUnoccupiedSupplyFanSpeed: ''

    };
  }
}

function getDefaults_Sensors(unitType) {
  if (unitType === 'Choose') {
    return {
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
      bmsPrecoolingLeavingAirTemp: false,
      bmsCoolingEnteringAirTemp: false,
      bmsCoolingLeavingAirTemp: false,
      bmsHeatingEnteringAirTemp: false,
      bmsHeatingLeavingAirTemp: false,
      bmsReheatingEnteringAirTemp: false,
      bmsReheatingLeavingAirTemp: false,
      bmsPreheatingEnteringAirTemp: false,
      bmsPreheatingLeavingAirTemp: false,
      bmsSupplyCfm: false,
      bmsExhaustCfm: false,
      bmsReturnCfm: false,
      bmsHxenteringOutsideAirTemp: false,
      bmsHxleavingSupplyAirTemp: false,
      bmsHxenteringExhaustAirTemp: false,
      // bmsHxleavingExhaustAirTemp: false,
      bmsSupplyDuctStaticPressure: false,
      bmsReturnDuctStaticPressure: false,
      bmsExhaustDuctStaticPressure: false,
      bmsSpaceStaticPressure: false,
      bmsOutsideAirCfm: false,
      bmsFilterPressureTransducer: false,
      bmsSpaceCo2: false,
      bmsHxsupplyDifferentialPressure: false,
      bmsHxexhaustDifferentialPressure: false,
      bmsHeatWheelRotationDetection: false,
      bmsFreezestat: false,
      bmsDrainCondensate: false,
      bmsFilterPressureAnalogInput: false,
      bmsHighSupplyDuctStatic: false,
      bmsLowReturnDuctStatic: false,
      bmsAmbientDifferentialPressure: false,
      bmsRegenerativeAirInletTemp: false,
      bmsSourceCaptureExhaustAirTemp: false
    };
  }
  if (unitType === 'E-Series') {
    return {
      bmsSupplyAirHumidity: false,
      bmsOutsideAirHumidity: false,
      bmsReturnAirTemp: true,
      bmsReturnAirHumidity: false,
      bmsExhaustAirTemp: true,
      bmsExhaustAirHumidity: false,
      bmsSpaceAirTemp: false,
      bmsSpaceAirHumidity: false,
      bmsMixedAirTemp: false,
      bmsMixedAirHumidity: false,
      bmsPrecoolingLeavingAirTemp: false,
      bmsCoolingEnteringAirTemp: false,
      bmsCoolingLeavingAirTemp: true,
      bmsHeatingEnteringAirTemp: false,
      bmsHeatingLeavingAirTemp: false,
      bmsReheatingEnteringAirTemp: false,
      bmsReheatingLeavingAirTemp: false,
      bmsPreheatingEnteringAirTemp: false,
      bmsPreheatingLeavingAirTemp: false,
      bmsSupplyCfm: false,
      bmsExhaustCfm: false,
      bmsReturnCfm: false,
      bmsHxenteringOutsideAirTemp: false,
      bmsHxleavingSupplyAirTemp: false,
      bmsHxenteringExhaustAirTemp: false,
      // bmsHxleavingExhaustAirTemp: true,
      bmsSupplyDuctStaticPressure: false,
      bmsReturnDuctStaticPressure: false,
      bmsExhaustDuctStaticPressure: false,
      bmsSpaceStaticPressure: true,
      bmsOutsideAirCfm: false,
      bmsFilterPressureTransducer: false,
      bmsSpaceCo2: false,
      bmsHxsupplyDifferentialPressure: false,
      bmsHxexhaustDifferentialPressure: false,
      bmsHeatWheelRotationDetection: false,
      bmsFreezestat: true,
      bmsDrainCondensate: false,
      bmsFilterPressureAnalogInput: false,
      bmsHighSupplyDuctStatic: false,
      bmsLowReturnDuctStatic: false,
      bmsAmbientDifferentialPressure: false,
      bmsRegenerativeAirInletTemp: false,
      bmsSourceCaptureExhaustAirTemp: false
    };
  }
  if (unitType === 'P-Series') {
    return {
      bmsSupplyAirHumidity: false,
      bmsOutsideAirHumidity: false,
      bmsReturnAirTemp: true,
      bmsReturnAirHumidity: true,
      bmsExhaustAirTemp: true,
      bmsExhaustAirHumidity: false,
      bmsSpaceAirTemp: false,
      bmsSpaceAirHumidity: false,
      bmsMixedAirTemp: false,
      bmsMixedAirHumidity: false,
      bmsPrecoolingLeavingAirTemp: false,
      bmsCoolingEnteringAirTemp: false,
      bmsCoolingLeavingAirTemp: true,
      bmsHeatingEnteringAirTemp: false,
      bmsHeatingLeavingAirTemp: false,
      bmsReheatingEnteringAirTemp: false,
      bmsReheatingLeavingAirTemp: false,
      bmsPreheatingEnteringAirTemp: false,
      bmsPreheatingLeavingAirTemp: false,
      bmsSupplyCfm: false,
      bmsExhaustCfm: false,
      bmsReturnCfm: false,
      bmsHxenteringOutsideAirTemp: false,
      bmsHxleavingSupplyAirTemp: false,
      bmsHxenteringExhaustAirTemp: false,
      // bmsHxleavingExhaustAirTemp: true,
      bmsSupplyDuctStaticPressure: false,
      bmsReturnDuctStaticPressure: false,
      bmsExhaustDuctStaticPressure: false,
      bmsSpaceStaticPressure: true,
      bmsOutsideAirCfm: false,
      bmsFilterPressureTransducer: false,
      bmsSpaceCo2: false,
      bmsHxsupplyDifferentialPressure: false,
      bmsHxexhaustDifferentialPressure: false,
      bmsHeatWheelRotationDetection: false,
      bmsFreezestat: true,
      bmsDrainCondensate: false,
      bmsFilterPressureAnalogInput: false,
      bmsHighSupplyDuctStatic: false,
      bmsLowReturnDuctStatic: false,
      bmsAmbientDifferentialPressure: false,
      bmsRegenerativeAirInletTemp: false,
      bmsSourceCaptureExhaustAirTemp: false

    };
  }
  if (unitType === 'C-Series') {
    return {
      bmsSupplyAirHumidity: false,
      bmsOutsideAirHumidity: false,
      bmsReturnAirTemp: true,
      bmsReturnAirHumidity: false,
      bmsExhaustAirTemp: false,
      bmsExhaustAirHumidity: false,
      bmsSpaceAirTemp: false,
      bmsSpaceAirHumidity: false,
      bmsMixedAirTemp: false,
      bmsMixedAirHumidity: false,
      bmsPrecoolingLeavingAirTemp: false,
      bmsCoolingEnteringAirTemp: false,
      bmsCoolingLeavingAirTemp: true,
      bmsHeatingEnteringAirTemp: false,
      bmsHeatingLeavingAirTemp: false,
      bmsReheatingEnteringAirTemp: false,
      bmsReheatingLeavingAirTemp: false,
      bmsPreheatingEnteringAirTemp: false,
      bmsPreheatingLeavingAirTemp: false,
      bmsSupplyCfm: false,
      bmsExhaustCfm: false,
      bmsReturnCfm: false,
      bmsHxenteringOutsideAirTemp: false,
      bmsHxleavingSupplyAirTemp: false,
      bmsHxenteringExhaustAirTemp: false,
      // bmsHxleavingExhaustAirTemp: false,
      bmsSupplyDuctStaticPressure: false,
      bmsReturnDuctStaticPressure: false,
      bmsExhaustDuctStaticPressure: false,
      bmsSpaceStaticPressure: true,
      bmsOutsideAirCfm: false,
      bmsFilterPressureTransducer: false,
      bmsSpaceCo2: false,
      bmsHxsupplyDifferentialPressure: false,
      bmsHxexhaustDifferentialPressure: false,
      bmsHeatWheelRotationDetection: false,
      bmsFreezestat: true,
      bmsDrainCondensate: false,
      bmsFilterPressureAnalogInput: false,
      bmsHighSupplyDuctStatic: false,
      bmsLowReturnDuctStatic: false,
      bmsAmbientDifferentialPressure: false,
      bmsRegenerativeAirInletTemp: false,
      bmsSourceCaptureExhaustAirTemp: false
    };
  }
  if (unitType === 'D-Series') {
    return {
      bmsSupplyAirHumidity: true,
      bmsOutsideAirHumidity: false,
      bmsReturnAirTemp: false,
      bmsReturnAirHumidity: false,
      bmsExhaustAirTemp: false,
      bmsExhaustAirHumidity: false,
      bmsSpaceAirTemp: false,
      bmsSpaceAirHumidity: false,
      bmsMixedAirTemp: false,
      bmsMixedAirHumidity: false,
      bmsPrecoolingLeavingAirTemp: false,
      bmsCoolingEnteringAirTemp: false,
      bmsCoolingLeavingAirTemp: false,
      bmsHeatingEnteringAirTemp: false,
      bmsHeatingLeavingAirTemp: false,
      bmsReheatingEnteringAirTemp: false,
      bmsReheatingLeavingAirTemp: false,
      bmsPreheatingEnteringAirTemp: false,
      bmsPreheatingLeavingAirTemp: false,
      bmsSupplyCfm: false,
      bmsExhaustCfm: false,
      bmsReturnCfm: false,
      bmsHxenteringOutsideAirTemp: false,
      bmsHxleavingSupplyAirTemp: false,
      bmsHxenteringExhaustAirTemp: false,
      // bmsHxleavingExhaustAirTemp: false,
      bmsSupplyDuctStaticPressure: false,
      bmsReturnDuctStaticPressure: false,
      bmsExhaustDuctStaticPressure: false,
      bmsSpaceStaticPressure: false,
      bmsOutsideAirCfm: false,
      bmsFilterPressureTransducer: false,
      bmsSpaceCo2: false,
      bmsHxsupplyDifferentialPressure: false,
      bmsHxexhaustDifferentialPressure: false,
      bmsHeatWheelRotationDetection: false,
      bmsFreezestat: true,
      bmsDrainCondensate: false,
      bmsFilterPressureAnalogInput: false,
      bmsHighSupplyDuctStatic: false,
      bmsLowReturnDuctStatic: false,
      bmsAmbientDifferentialPressure: false,
      bmsRegenerativeAirInletTemp: false,
      bmsSourceCaptureExhaustAirTemp: false
    };
  }
  if (unitType === 'Controls Lite') {
    return {
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
      bmsPrecoolingLeavingAirTemp: false,
      bmsCoolingEnteringAirTemp: false,
      bmsCoolingLeavingAirTemp: false,
      bmsHeatingEnteringAirTemp: false,
      bmsHeatingLeavingAirTemp: false,
      bmsReheatingEnteringAirTemp: false,
      bmsReheatingLeavingAirTemp: false,
      bmsPreheatingEnteringAirTemp: false,
      bmsPreheatingLeavingAirTemp: false,
      bmsSupplyCfm: false,
      bmsExhaustCfm: false,
      bmsReturnCfm: false,
      bmsHxenteringOutsideAirTemp: false,
      bmsHxleavingSupplyAirTemp: false,
      bmsHxenteringExhaustAirTemp: false,
      // bmsHxleavingExhaustAirTemp: false,
      bmsSupplyDuctStaticPressure: false,
      bmsReturnDuctStaticPressure: false,
      bmsExhaustDuctStaticPressure: false,
      bmsSpaceStaticPressure: false,
      bmsOutsideAirCfm: false,
      bmsFilterPressureTransducer: false,
      bmsSpaceCo2: false,
      bmsHxsupplyDifferentialPressure: false,
      bmsHxexhaustDifferentialPressure: false,
      bmsHeatWheelRotationDetection: false,
      bmsFreezestat: false,
      bmsDrainCondensate: false,
      bmsFilterPressureAnalogInput: false,
      bmsHighSupplyDuctStatic: false,
      bmsLowReturnDuctStatic: false,
      bmsAmbientDifferentialPressure: false,
      bmsRegenerativeAirInletTemp: false,
      bmsSourceCaptureExhaustAirTemp: false
    };
  }
}

function getDefaults_AdditionalSensors(unitType) {
  if (unitType === 'Choose') {
    return {
      addRequestedPoints: false,
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
      addHxenteringOutsideAirTemp: false,
      addHxleavingSupplyAirTemp: false,
      addHxenteringExhaustAirTemp: false,
      addHxleavingExhaustAirTemp: false,
      addSupplyDuctStaticPressure: false,
      addReturnDuctStaticPressure: false,
      addExhaustDuctStaticPressure: false,
      addSpaceStaticPressure: false,
      addOutsideAirCfm: false,
      addFilterPressureTransducer: false,
      addSpaceCo2: false,
      addReturnCo2: false,
      addHxsupplyDifferentialPressure: false,
      addHxexhaustDifferentialPressure: false,
      addHeatWheelRotationDetection: false,
      addFreezestat: false,
      addDrainCondensate: false,
      addFilterPressureAnalogInput: false,
      addHighSupplyDuctStatic: false,
      addLowReturnDuctStatic: false
    };
  }
  if (unitType === 'E-Series') {
    return {
      addRequestedPoints: false,
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
      addHxenteringOutsideAirTemp: false,
      addHxleavingSupplyAirTemp: false,
      addHxenteringExhaustAirTemp: false,
      addHxleavingExhaustAirTemp: false,
      addSupplyDuctStaticPressure: false,
      addReturnDuctStaticPressure: false,
      addExhaustDuctStaticPressure: false,
      addSpaceStaticPressure: false,
      addOutsideAirCfm: false,
      addFilterPressureTransducer: false,
      addSpaceCo2: false,
      addReturnCo2: false,
      addHxsupplyDifferentialPressure: false,
      addHxexhaustDifferentialPressure: false,
      addHeatWheelRotationDetection: false,
      addFreezestat: false,
      addDrainCondensate: false,
      addFilterPressureAnalogInput: false,
      addHighSupplyDuctStatic: false,
      addLowReturnDuctStatic: false
    };
  }
  if (unitType === 'P-Series') {
    return {
      addRequestedPoints: false,
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
      addHxenteringOutsideAirTemp: false,
      addHxleavingSupplyAirTemp: false,
      addHxenteringExhaustAirTemp: false,
      addHxleavingExhaustAirTemp: false,
      addSupplyDuctStaticPressure: false,
      addReturnDuctStaticPressure: false,
      addExhaustDuctStaticPressure: false,
      addSpaceStaticPressure: false,
      addOutsideAirCfm: false,
      addFilterPressureTransducer: false,
      addSpaceCo2: false,
      addReturnCo2: false,
      addHxsupplyDifferentialPressure: false,
      addHxexhaustDifferentialPressure: false,
      addHeatWheelRotationDetection: false,
      addFreezestat: false,
      addDrainCondensate: false,
      addFilterPressureAnalogInput: false,
      addHighSupplyDuctStatic: false,
      addLowReturnDuctStatic: false
    };
  }
  if (unitType === 'C-Series') {
    return {
      addRequestedPoints: false,
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
      addHxenteringOutsideAirTemp: false,
      addHxleavingSupplyAirTemp: false,
      addHxenteringExhaustAirTemp: false,
      addHxleavingExhaustAirTemp: false,
      addSupplyDuctStaticPressure: false,
      addReturnDuctStaticPressure: false,
      addExhaustDuctStaticPressure: false,
      addSpaceStaticPressure: false,
      addOutsideAirCfm: false,
      addFilterPressureTransducer: false,
      addSpaceCo2: false,
      addReturnCo2: false,
      addHxsupplyDifferentialPressure: false,
      addHxexhaustDifferentialPressure: false,
      addHeatWheelRotationDetection: false,
      addFreezestat: false,
      addDrainCondensate: false,
      addFilterPressureAnalogInput: false,
      addHighSupplyDuctStatic: false,
      addLowReturnDuctStatic: false
    };
  }
  if (unitType === 'D-Series') {
    return {
      addRequestedPoints: false,
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
      addHxenteringOutsideAirTemp: false,
      addHxleavingSupplyAirTemp: false,
      addHxenteringExhaustAirTemp: false,
      addHxleavingExhaustAirTemp: false,
      addSupplyDuctStaticPressure: false,
      addReturnDuctStaticPressure: false,
      addExhaustDuctStaticPressure: false,
      addSpaceStaticPressure: false,
      addOutsideAirCfm: false,
      addFilterPressureTransducer: false,
      addSpaceCo2: false,
      addReturnCo2: false,
      addHxsupplyDifferentialPressure: false,
      addHxexhaustDifferentialPressure: false,
      addHeatWheelRotationDetection: false,
      addFreezestat: false,
      addDrainCondensate: false,
      addFilterPressureAnalogInput: false,
      addHighSupplyDuctStatic: false,
      addLowReturnDuctStatic: false
    };
  }
  if (unitType === 'Controls Lite') {
    return {
      addRequestedPoints: false,
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
      addHxenteringOutsideAirTemp: false,
      addHxleavingSupplyAirTemp: false,
      addHxenteringExhaustAirTemp: false,
      addHxleavingExhaustAirTemp: false,
      addSupplyDuctStaticPressure: false,
      addReturnDuctStaticPressure: false,
      addExhaustDuctStaticPressure: false,
      addSpaceStaticPressure: false,
      addOutsideAirCfm: false,
      addFilterPressureTransducer: false,
      addSpaceCo2: false,
      addReturnCo2: false,
      addHxsupplyDifferentialPressure: false,
      addHxexhaustDifferentialPressure: false,
      addHeatWheelRotationDetection: false,
      addFreezestat: false,
      addDrainCondensate: false,
      addFilterPressureAnalogInput: false,
      addHighSupplyDuctStatic: false,
      addLowReturnDuctStatic: false
    };
  }
}
function getDefaults_Placeholders(unitType) {
  const reduxState = store.getState();
  const temperatureControl = reduxState.reduxControlChars.temperatureControl;
  const energyRecoveryType = reduxState.reduxUnitDesignChars.energyRecoveryType;
  const phReliefFan = getPhReliefFan(unitType);
  const phSupplyTemp = getPhSupplyTemp(unitType, temperatureControl);
  const phDefrost = getPhDefrost(energyRecoveryType);
  const phCoolOa = getPhCoolOa();
  const phDehumMin = getPhDehumMin(unitType);

  return {
    phReliefFan: phReliefFan,
    phSupplyTemp: phSupplyTemp,
    phDefrost: phDefrost,
    phCoolOa: phCoolOa,
    phDehumMin: phDehumMin

  }
}


