import { store } from '../../redux/store';
import { updateReduxAction } from '../../redux/actions';

import {
    getExhaustFanControlOptions, getReturnFanControlOptions, getUnoccupiedModeControlOptions,
    getTemperatureControlOptions, getEconomizerControlOptions
} from '../controlChars/optionsControlCharacteristics';

import { getHeatingTypeOptions, getReheatingTypeOptions, getExhaustReturnFanOptions } from '../unitDesignChars/optionsUnitDesignChars';

import {
    getBmsSupplyAirHumidity, getBmsOutsideAirHumidity, getBmsReturnAirTemp, getBmsReturnAirHumidity,
    getBmsCoolingLeavingAirTemp, getBmsExhaustAirTemp, getBmsHeatWheelRotationDetection, getBmsPreheatingLeavingAirTemp,
    getBmsSpaceAirHumidity, getBmsSpaceAirTemp, getBmsSpaceCO2, getBmsSpaceStaticPressure,
    getBmsHxsupplyDifferentialPressure, getBmsHxexhaustDifferentialPressure, getBmsPrecoolingLeavingAirTemp, getBmsRegenerativeAirInletTemp

} from '../sensors/getSensors';

import { getPhDefrost, getPhCoolOa } from '../getPlaceholders';

import { checkPhaseVoltageMonitor } from '../detailedControlConfig/updateDetailedControlConfig';

import { getSpDefrost } from '../setPoints/getSetPoints';



export function updateHasSourceCapture(event) {
    const hasSourceCapture = event.currentTarget.value;

    var bmsSourceCaptureExhaustAirTemp;

    if (hasSourceCapture === "Yes") {
        bmsSourceCaptureExhaustAirTemp = true;
    } else {
        bmsSourceCaptureExhaustAirTemp = false;
    }

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { hasSourceCapture: hasSourceCapture }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS', { bmsSourceCaptureExhaustAirTemp: bmsSourceCaptureExhaustAirTemp }));
}

export function updateUnitTags(event) {
    const unitTags = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { unitTags: unitTags }));
}

export function updateExhaustReturnFan(event) {
    //1 update exhaustReturnFan in reduxUnitDesignChars
    //2 update defaults for dependent variables  
    //4 update values for checkboxes in reduxSensors
    const reduxState = store.getState();
    const exhaustReturnFan = event.currentTarget.value;
    const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
    const economizerControl = reduxState.reduxControlChars.economizerControl;
    const supplyFanControl = reduxState.reduxControlChars.supplyFanControl;
    const appType = reduxState.reduxControlChars.appType;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    const dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
    var returnFanControl = reduxState.reduxControlChars.returnFanControl;
    var exhaustFanControl = reduxState.reduxControlChars.exhaustFanControl;
    var bmsLowReturnDuctStatic = reduxState.reduxSensors.bmsLowReturnDuctStatic;
    var lowDuctSwitch = reduxState.reduxDetailedControlConfig.lowDuctSwitch;

    switch (exhaustReturnFan) {
        case 'Exhaust Fan':
            exhaustFanControl = 'Space Static Pressure';
            returnFanControl = '';
            bmsLowReturnDuctStatic = false;
            lowDuctSwitch = false;
            break
        case 'Return Fan':
            returnFanControl = 'Space Static Pressure';
            exhaustFanControl = '';
            break
        case 'None':
            exhaustFanControl = 'None';
            returnFanControl = 'None';
            bmsLowReturnDuctStatic = false;
            break
        default:
            break
    }
    var spReturnReliefFanCfm = '';
    var spReturnReliefFanDuct = '';
    var spReturnReliefFanSpace = '';
    var spReturnReliefFanOffsetTracking = '';
    var spExhaustReliefFanCfm = '';
    var spExhaustReliefFanDuct = '';
    var spExhaustReliefFanSpace = '';
    var spExhaustReliefFanOffsetTracking = '';
    var spExhaustReliefFanOffsetAmbient = '';

    var exhaustFanControlOptions = getExhaustFanControlOptions(unitType, appType, supplyFanControl);
    var returnFanControlOptions = getReturnFanControlOptions(appType, supplyFanControl, unitType);
    var temperatureControlOptions = getTemperatureControlOptions(unitType, supplyFanControl, exhaustReturnFan, unitConfiguration);
    var bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);

    var bmsSpaceStaticPressure = getBmsSpaceStaticPressure(exhaustFanControl, returnFanControl, unitType);

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { exhaustReturnFan: exhaustReturnFan }));
    store.dispatch(updateReduxAction('UPDATE_ControlChars', {
        exhaustFanControl: exhaustFanControl,
        returnFanControl: returnFanControl
    }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { lowDuctSwitch: lowDuctSwitch }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsSpaceStaticPressure: bmsSpaceStaticPressure,
            bmsReturnCfm: false,
            bmsExhaustCfm: false,
            bmsReturnDuctStaticPressure: false,
            bmsExhaustDuctStaticPressure: false,
            bmsLowReturnDuctStatic: bmsLowReturnDuctStatic
        }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spReturnReliefFanCfm: spReturnReliefFanCfm,
        spReturnReliefFanDuct: spReturnReliefFanDuct,
        spReturnReliefFanSpace: spReturnReliefFanSpace,
        spReturnReliefFanOffsetTracking: spReturnReliefFanOffsetTracking,
        spExhaustReliefFanCfm: spExhaustReliefFanCfm,
        spExhaustReliefFanDuct: spExhaustReliefFanDuct,
        spExhaustReliefFanSpace: spExhaustReliefFanSpace,
        spExhaustReliefFanOffsetTracking: spExhaustReliefFanOffsetTracking,
        spExhaustReliefFanOffsetAmbient: spExhaustReliefFanOffsetAmbient
    }));
    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS',
        {
            exhaustFanControlOptions: exhaustFanControlOptions,
            temperatureControlOptions: temperatureControlOptions,
            returnFanControlOptions: returnFanControlOptions
        }));
}

export function updateEnergyRecoveryType(event) {
    const reduxState = store.getState();
    const energyRecoveryType = event.target.value;
    const phDefrost = getPhDefrost(energyRecoveryType);
    const dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    var exhaustReturnFan = reduxState.reduxUnitDesignChars.exhaustReturnFan;
    const economizerControl = reduxState.reduxControlChars.economizerControl;
    const enthalpyWheelBypass = reduxState.reduxControlChars.enthalpyWheelBypass;
    var wheelRotation = reduxState.reduxDetailedControlConfig.wheelRotation;
    var exhaustFanControl = reduxState.reduxControlChars.exhaustFanControl;

    switch (energyRecoveryType) {
        case 'None':
            break
        case 'Enthalpy Wheel':
            if (unitType === "D-Series") {
                exhaustReturnFan = "Exhaust Fan";
                exhaustFanControl = "Space Static Pressure"
            }
            if (unitType === "E-Series") {
                wheelRotation = true
            }
            break
        case 'Flat Plate':
            wheelRotation = false;
            break;
        default:
            break;
    }
    const exhaustReturnFanOptions = getExhaustReturnFanOptions(unitType, energyRecoveryType);
    const spDefrost = getSpDefrost(unitType, energyRecoveryType);
    const bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);
    const bmsExhaustAirTemp = getBmsExhaustAirTemp(unitType, energyRecoveryType);
    const bmsRegenerativeAirInletTemp = getBmsRegenerativeAirInletTemp(unitType, energyRecoveryType);
    const bmsSpaceAirTemp = getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl);
    const bmsHxsupplyDifferentialPressure = getBmsHxsupplyDifferentialPressure(enthalpyWheelBypass, energyRecoveryType, unitType);
    const bmsHxexhaustDifferentialPressure = getBmsHxexhaustDifferentialPressure(enthalpyWheelBypass, energyRecoveryType, unitType);
    const bmsHeatWheelRotationDetection = getBmsHeatWheelRotationDetection(wheelRotation, energyRecoveryType);

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS', { exhaustReturnFanOptions: exhaustReturnFanOptions }));
    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS',
        {
            energyRecoveryType: energyRecoveryType,
            exhaustReturnFan: exhaustReturnFan
        }));
    store.dispatch(updateReduxAction('UPDATE_ControlChars',
        {
            exhaustFanControl: exhaustFanControl
        }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDControlChars',
        {
            wheelRotation: wheelRotation
        }));
    store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', { phDefrost: phDefrost }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spDefrost: spDefrost }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsExhaustAirTemp: bmsExhaustAirTemp,
            bmsRegenerativeAirInletTemp: bmsRegenerativeAirInletTemp,
            bmsSpaceAirTemp: bmsSpaceAirTemp,
            bmsHxsupplyDifferentialPressure: bmsHxsupplyDifferentialPressure,
            bmsHxexhaustDifferentialPressure: bmsHxexhaustDifferentialPressure,
            bmsHeatWheelRotationDetection: bmsHeatWheelRotationDetection
        }));

}

export function updateUnitConfiguration(event) {
    const reduxState = store.getState();
    const unitConfiguration = event.target.value;
    const exhaustReturnFan = reduxState.reduxControlChars.exhaustReturnFan;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const coolingType = reduxState.reduxUnitDesignChars.coolingType;
    const precoolingType = reduxState.reduxUnitDesignChars.precoolingType;
    const supplyFanControl = reduxState.reduxControlChars.supplyFanControl;
    var demandControlVentilation = reduxState.reduxDetailedControlConfig.demandControlVentilation;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    var minOacontrol = reduxState.reduxControlChars.minOacontrol;
    var unoccupiedModeControl = reduxState.reduxControlChars.unoccupiedModeControl;
    var spUnoccupiedSupplyFanSpeed = reduxState.reduxSetPoints.spUnoccupiedSupplyFanSpeed;


    switch (unitConfiguration) {
        case 'Partial Outside Air (Recirculation)':
            break;
        case '100% Outside Air w/ Unoccupied Recirc Damper':
            demandControlVentilation = false;
            minOacontrol = "None";
            break;
        case '100% Outside Air':
            demandControlVentilation = false;
            minOacontrol = "None";
            unoccupiedModeControl = "None";
            spUnoccupiedSupplyFanSpeed = '';
            break;
        default:
            break;
    }

    const phCoolOa = getPhCoolOa(unitConfiguration);
    var unoccupiedModeControlOptions = getUnoccupiedModeControlOptions(unitType, temperatureControl, unitConfiguration);
    const economizerControlOptions = getEconomizerControlOptions(temperatureControl, unitType, unitConfiguration)
    const heatingTypeOptions = getHeatingTypeOptions(coolingType, precoolingType, unitConfiguration, unitType);
    const temperatureControlOptions = getTemperatureControlOptions(unitType, supplyFanControl, exhaustReturnFan, unitConfiguration);
    const bmsSpaceCo2 = getBmsSpaceCO2(demandControlVentilation, temperatureControl, unitConfiguration);

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { unitConfiguration: unitConfiguration }));

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS', { heatingTypeOptions: heatingTypeOptions }));

    store.dispatch(updateReduxAction('UPDATE_ControlChars', {
        minOacontrol: minOacontrol,
        unoccupiedModeControl: unoccupiedModeControl
    }));

    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS', {
        temperatureControlOptions: temperatureControlOptions,
        economizerControlOptions: economizerControlOptions,
        unoccupiedModeControlOptions: unoccupiedModeControlOptions
    }));

    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { demandControlVentilation: demandControlVentilation }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spUnoccupiedSupplyFanSpeed: spUnoccupiedSupplyFanSpeed }));

    store.dispatch(updateReduxAction('UPDATE_SENSORS', { bmsSpaceCo2: bmsSpaceCo2 }));

    store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', { phCoolOa: phCoolOa }));

}

export function updatePostcoolingType(event) {
    const postcoolingType = event.currentTarget.value;
    const reduxState = store.getState();
    var phaseVoltageMonitor = checkPhaseVoltageMonitor(postcoolingType);
    var spPostCoolLockoutDegree = reduxState.reduxSetPoints.spPostCoolLockoutDegree;

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { postcoolingType: postcoolingType }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { phaseVoltageMonitor: phaseVoltageMonitor }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spPostCoolLockoutDegree: spPostCoolLockoutDegree }));
}

export function updateCoolingType(event) {
    const reduxState = store.getState();
    const coolingType = event.currentTarget.value;


    const precoolingType = reduxState.reduxUnitDesignChars.precoolingType;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
    const energyRecoveryType = reduxState.reduxUnitDesignChars.energyRecoveryType;
    const dehumidificationControl = event.currentTarget.value;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    const economizerControl = reduxState.reduxControlChars.economizerControl;
    var reheatingType = reduxState.reduxUnitDesignChars.reheatingType;
    var heatingType = reduxState.reduxUnitDesignChars.heatingType;
    var condenserTypeOptions = reduxState.reduxUnitDesignCharsOptions.condenserTypeOptions;
    var condenserType = reduxState.reduxUnitDesignChars.condenserType;
    var spHeatingLockout = reduxState.reduxSetPoints.spHeatingLockout;
    var spCoolingLockout = reduxState.reduxSetPoints.spCoolingLockout;
    var spControlsLiteSupply2V = reduxState.reduxSetPoints.spControlsLiteSupply2V;
    var spControlsLiteSupply10V = reduxState.reduxSetPoints.spControlsLiteSupply10V;
    var evapWaterLevel = reduxState.reduxDetailedControlConfig.evapWaterLevel;
    var evapSumpHeater = reduxState.reduxDetailedControlConfig.evapSumpHeater;
    var evapAutoDrain = reduxState.reduxDetailedControlConfig.evapAutoDrain;
    var evapWaterTreatment = reduxState.reduxDetailedControlConfig.evapWaterTreatment;
    var evapCondenser = reduxState.reduxDetailedControlConfig.evapCondenser;
    var freezestat;
    var bmsFreezestat;

    const reheatingTypeOptions = getReheatingTypeOptions(unitType, coolingType, precoolingType);
    const heatingTypeOptions = getHeatingTypeOptions(coolingType, precoolingType, unitConfiguration, unitType);
    const phDefrost = getPhDefrost(energyRecoveryType);
    const bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);
    const bmsCoolingLeavingAirTemp = getBmsCoolingLeavingAirTemp(reheatingType, coolingType);
    var phaseVoltageMonitor = checkPhaseVoltageMonitor(coolingType);

    if (unitType !== "Controls Lite") {
        switch (coolingType) {
            case 'None':
                freezestat = false;
                bmsFreezestat = false;
                spCoolingLockout = "";
                heatingType = "None";
                reheatingType = "None";
                evapCondenser = false;
                evapWaterLevel = false;
                evapSumpHeater = false;
                evapAutoDrain = false;
                evapWaterTreatment = false;
                break;
            case 'Chilled Water Coil':
                freezestat = true;
                bmsFreezestat = true;
                spCoolingLockout = '50';
                evapCondenser = false;
                evapWaterLevel = false;
                evapSumpHeater = false;
                evapAutoDrain = false;
                evapWaterTreatment = false;
                heatingType = "None";
                break;

            case 'Direct Expansion Coil':
                freezestat = false;
                bmsFreezestat = false;
                spCoolingLockout = '50';
                heatingType = "None";
                break;
            case 'A/R Coil (Heat Pump)':
                freezestat = false;
                bmsFreezestat = false;
                spCoolingLockout = '50';
                evapCondenser = false;
                evapWaterLevel = false;
                evapSumpHeater = false;
                evapAutoDrain = false;
                evapWaterTreatment = false;
                heatingType = "No Supplemental Heating";
                break;
            default:
                break;
        }
    } else {
        switch (coolingType) {
            case 'None':
                spCoolingLockout = '';
                break;
            case 'Chilled Water Coil':
                spControlsLiteSupply2V = '';
                spControlsLiteSupply10V = '';
                break;
            case 'Direct Expansion Coil':
                spControlsLiteSupply2V = '';
                spControlsLiteSupply10V = '';
                condenserTypeOptions = ['Air Cooled', 'Water Cooled'];
                condenserType = 'Air Cooled';
                spHeatingLockout = '';
                spCoolingLockout = '55';
                break;
            case 'A/R Coil (Heat Pump)':
                condenserTypeOptions = ['Water Cooled'];
                condenserType = 'Water Cooled';
                spHeatingLockout = '70';
                spCoolingLockout = '55';
                spControlsLiteSupply2V = '50';
                spControlsLiteSupply10V = '95';
                break;
            default:
                break;
        }
    }


    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS',
        {
            coolingType: coolingType,
            heatingType: heatingType,
            reheatingType: reheatingType,
            condenserType: condenserType
        }));
    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS', {
        reheatingTypeOptions: reheatingTypeOptions,
        heatingTypeOptions: heatingTypeOptions,
        condenserTypeOptions: condenserTypeOptions
    }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG',
        {
            evapCondenser: evapCondenser,
            evapWaterLevel: evapWaterLevel,
            evapSumpHeater: evapSumpHeater,
            evapAutoDrain: evapAutoDrain,
            evapWaterTreatment: evapWaterTreatment,
            phaseVoltageMonitor: phaseVoltageMonitor,
            freezestat: freezestat
        }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spHeatingLockout: spHeatingLockout,
            spCoolingLockout: spCoolingLockout,
            spControlsLiteSupply2V: spControlsLiteSupply2V,
            spControlsLiteSupply10V: spControlsLiteSupply10V
        }));


    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsCoolingLeavingAirTemp: bmsCoolingLeavingAirTemp,
            bmsFreezestat: bmsFreezestat
        }));


    store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', { phDefrost: phDefrost }));
}

export function updatePrecoolingType(event) {
    const reduxState = store.getState();
    const precoolingType = event.currentTarget.value;


    const coolingType = reduxState.reduxUnitDesignChars.coolingType;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
    var spPreCoolLockout = reduxState.reduxSetPoints.spPreCoolLockout;

    const reheatingTypeOptions = getReheatingTypeOptions(unitType, coolingType, precoolingType);
    const heatingTypeOptions = getHeatingTypeOptions(coolingType, precoolingType, unitConfiguration, unitType);
    const bmsPrecoolingLeavingAirTemp = getBmsPrecoolingLeavingAirTemp(precoolingType);
    var phaseVoltageMonitor = checkPhaseVoltageMonitor(precoolingType);



    if (precoolingType !== "None") {
        spPreCoolLockout = '55';
    } else {
        spPreCoolLockout = '';
    }


    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { precoolingType: precoolingType }));

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS', {
        reheatingTypeOptions: reheatingTypeOptions,
        heatingTypeOptions: heatingTypeOptions
    }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { phaseVoltageMonitor: phaseVoltageMonitor }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spPreCoolLockout: spPreCoolLockout }));

    store.dispatch(updateReduxAction('UPDATE_SENSORS', {
        bmsPrecoolingLeavingAirTemp: bmsPrecoolingLeavingAirTemp
    }));

}

export function updatePostheatingType(event) {
    const postheatingType = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { postheatingType: postheatingType }));
}

export function updateHeatingType(event) {
    const reduxState = store.getState();
    const heatingType = event.currentTarget.value;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    var spHeatingLockout = reduxState.reduxSetPoints.spHeatingLockout;

    if (heatingType === "None") {
        spHeatingLockout = '';
    } else {
        if (unitType === "P-Series") {
            spHeatingLockout = '85';
        } else if (unitType === "Controls Lite") {
            spHeatingLockout = '70';
        } else {
            spHeatingLockout = '75';
        }
    }

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { heatingType: heatingType }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spHeatingLockout: spHeatingLockout
    }));

}

export function updatePreheatingType(event) {
    const reduxState = store.getState();
    const preheatingType = event.currentTarget.value;

    const unitType = reduxState.reduxUnitDesignChars.unitType;

    var spPreheat = reduxState.reduxSetPoints.spPreheat;
    var spPreheatLockout = reduxState.reduxSetPoints.spPreheatLockout;

    const bmsPreheatingLeavingAirTemp = getBmsPreheatingLeavingAirTemp(preheatingType);

    if (unitType === "E-Series" || unitType === "C-Series" || unitType === "P-Series") {
        if (preheatingType !== "None" && preheatingType !== "") {
            spPreheat = '10';
            spPreheatLockout = '20';
        }
    }

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { preheatingType: preheatingType }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spPreheat: spPreheat,
        spPreheatLockout: spPreheatLockout
    }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS', { bmsPreheatingLeavingAirTemp: bmsPreheatingLeavingAirTemp }));

}

export function updateReheatingType(event) {
    const reduxState = store.getState();
    const reheatingType = event.currentTarget.value;


    const coolingType = reduxState.reduxUnitDesignChars.coolingType;

    const economizerControl = reduxState.reduxControlChars.economizerControl;
    var dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
    const energyRecoveryType = event.target.value;
    var bmsReheatingLeavingAirTemp = reduxState.reduxSensors.bmsReheatingLeavingAirTemp;
    const phDefrost = getPhDefrost(energyRecoveryType);
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    var humidificationControl = reduxState.reduxControlChars.humidificationControl;
    var unoccupiedModeControl = reduxState.reduxControlChars.unoccupiedModeControl;
    var spControlsLiteCoil2V = reduxState.reduxSetPoints.spControlsLiteCoil2V;
    var spControlsLiteCoil10V = reduxState.reduxSetPoints.spControlsLiteCoil10V;
    var spControlsLiteSupply2V = reduxState.reduxSetPoints.spControlsLiteSupply2V;
    var spControlsLiteSupply10V = reduxState.reduxSetPoints.spControlsLiteSupply10V;


    const bmsOutsideAirHumidity = getBmsOutsideAirHumidity(economizerControl, reheatingType, dehumidificationControl);

    const bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);

    const bmsReturnAirHumidity = getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl);

    const bmsSpaceAirTemp = getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl);

    const bmsSpaceAirHumidity = getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl);

    const bmsCoolingLeavingAirTemp = getBmsCoolingLeavingAirTemp(reheatingType, coolingType);



    var addHxleavingSupplyAirTemp;
    var unoccupiedDehumidificationControl = 'None';

    if (unitType === "Controls Lite" && reheatingType === "Hot Gas Reheat") {
        addHxleavingSupplyAirTemp = true;
    }

    if (reheatingType === "None") {
        dehumidificationControl = 'None';
    } else {
        bmsReheatingLeavingAirTemp = true;


        if (temperatureControl === "Supply Discharge w/ Space Reset") {
            dehumidificationControl = 'Space Dew Point > Dehumidification Set Point';
        } else {
            dehumidificationControl = 'Return Dew Point > Dehumidification Set Point';
        }

        if (unoccupiedModeControl === "Night Setback w/ Supply Fan Standy" ||
            unoccupiedModeControl === "Night Setback w/ Supply Fan Standy") {
            unoccupiedDehumidificationControl = "Space Dew Point > Dehumidification Set Point";
        } else {
            unoccupiedDehumidificationControl = "";
        }


    }


    if (reheatingType !== "None" && (unoccupiedModeControl !== "None" && unoccupiedModeControl !== "Unit is Off")) {
        unoccupiedDehumidificationControl = "Return Dew Point > Dehumidification Set Point";
    }

    if (unitType === "P-Series") {
        dehumidificationControl = "Return Dew Point > Dehumidification Set Point";
    }

    if (unitType === "P-Series") {
        unoccupiedDehumidificationControl = "";
    }

    if (unitType === "Controls Lite") {
        if (reheatingType === "Hot Gas Reheat") {
            spControlsLiteCoil2V = '50';
            spControlsLiteCoil10V = '75';
            spControlsLiteSupply2V = '50';
            spControlsLiteSupply10V = '95';
        } else {
            spControlsLiteCoil2V = '';
            spControlsLiteCoil10V = '';
            spControlsLiteSupply2V = '';
            spControlsLiteSupply10V = '';
        }
    }

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { reheatingType: reheatingType }));
    store.dispatch(updateReduxAction('UPDATE_ControlChars',
        {
            dehumidificationControl: dehumidificationControl,
            unoccupiedDehumidificationControl: unoccupiedDehumidificationControl
        }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spControlsLiteCoil2V: spControlsLiteCoil2V,
            spControlsLiteCoil10V: spControlsLiteCoil10V,
            spControlsLiteSupply2V: spControlsLiteSupply2V,
            spControlsLiteSupply10V: spControlsLiteSupply10V
        }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsOutsideAirHumidity: bmsOutsideAirHumidity,
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsReturnAirHumidity: bmsReturnAirHumidity,
            bmsSpaceAirTemp: bmsSpaceAirTemp,
            bmsSpaceAirHumidity: bmsSpaceAirHumidity,
            bmsCoolingLeavingAirTemp: bmsCoolingLeavingAirTemp,
            bmsReheatingLeavingAirTemp: bmsReheatingLeavingAirTemp
        }));
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxleavingSupplyAirTemp: addHxleavingSupplyAirTemp }));

    store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', { phDefrost: phDefrost }));

}

export function updateCondenserType(event) {
    const condenserType = event.currentTarget.value;
    var evapCondenser;

    if (condenserType === "Evaporative Condensing") {
        evapCondenser = true;
    } else {
        evapCondenser = false;
    }

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { condenserType: condenserType }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { evapCondenser: evapCondenser }));
}

export function updateRegenerationFanControl(event) {
    const regenerationFanControl = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_ControlChars', { regenerationFanControl: regenerationFanControl }));
}

export function updateRegenHeatingType(event) {
    const regenHeatingType = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { regenHeatingType: regenHeatingType }));
}

export function updateHumidifierType(event) {
    //1 update humidifierType in reduxUnitDesignChars
    //2 update bmsOutsideAirHumidity  in reduxSensors
    const reduxState = store.getState();
    const humidifierType = event.currentTarget.value;

    const dehumidificationControl = event.currentTarget.value;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const economizerControl = reduxState.reduxControlChars.economizerControl;

    var humidificationControl = reduxState.reduxControlChars.humidificationControl;
    var spHumidLockout = reduxState.reduxSetPoints.spHumidLockout;
    var spHumid = reduxState.reduxSetPoints.spHumid;
    var bmsReturnAirHumidity = reduxState.reduxSetPoints.bmsReturnAirHumidity;
    var bmsSupplyAirHumidity = reduxState.reduxSetPoints.bmsSupplyAirHumidity;
    var bmsSpaceAirHumidity = getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl);

    switch (humidifierType) {
        case 'None':
            spHumidLockout = '';
            spHumid = '';
            humidificationControl = 'None';
            bmsReturnAirHumidity = getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl);
            bmsSupplyAirHumidity = getBmsSupplyAirHumidity(unitType, humidifierType);
            break;
        case 'Steam Manifold':
            spHumidLockout = '65';
            spHumid = '80';
            humidificationControl = 'Return Reset (%RH)';
            bmsReturnAirHumidity = true;
            bmsSupplyAirHumidity = true;
            break;

        default:
            break;
    }

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', { humidifierType: humidifierType }));
    store.dispatch(updateReduxAction('UPDATE_ControlChars', { humidificationControl: humidificationControl }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spHumidLockout: spHumidLockout,
        spHumid: spHumid
    }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsSupplyAirHumidity: bmsSupplyAirHumidity,
            bmsReturnAirHumidity: bmsReturnAirHumidity,
            bmsSpaceAirHumidity: bmsSpaceAirHumidity
        }));
}