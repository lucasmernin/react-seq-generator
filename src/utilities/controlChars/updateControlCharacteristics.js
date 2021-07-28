import { store } from '../../redux/store';
import { updateReduxAction } from '../../redux/actions';

import {
    getBmsSupplyAirHumidity, getBmsOutsideAirHumidity, getBmsReturnAirTemp, getBmsReturnAirHumidity,
    getBmsExhaustCfm, getBmsExhaustDuctStaticPressure, getBmsOutsideAirCfm, getBmsReturnCfm,
    getBmsReturnDuctStaticPressure, getBmsSupplyDuctStaticPressure, getBmsSpaceAirHumidity, getBmsSpaceAirTemp,
    getBmsSpaceCO2, getBmsSpaceStaticPressure, getBmsHxsupplyDifferentialPressure, getBmsHxexhaustDifferentialPressure
} from '../sensors/getSensors';
import {
    getExhaustFanControlOptions, getReturnFanControlOptions, getUnoccupiedModeControlOptions, getSupplyFanControlOptions,
    getTemperatureControlOptions, getDehumidificationControlOptions, getEconomizerControlOptions, getMinOaControlOptions,
    getUnoccupiedDehumidificationControlOptions
} from './optionsControlCharacteristics';

import { updateTemperatureControlRelatedPlaceHolders, getPhDehumTemp } from '../getPlaceholders';

import { checkLowDuct } from '../detailedControlConfig/updateDetailedControlConfig'


// function onTemperatureControlChange(temperatureControl, reheatingType) {
//     const reduxState = store.getState();
//     //1 update defaults for dependant values

//     var economizerControl = reduxState.reduxControlChars.economizerControl;
//     var dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
//     var humidificationControl = reduxState.reduxControlChars.humidificationControl;
//     var humidifierType = reduxState.reduxUnitDesignChars.humidifierType;
//     var unitType = reduxState.reduxUnitDesignChars.unitType;

//     switch (temperatureControl) {
//         case 'Supply Discharge':
//             economizerControl = "Outside Dry Bulb < Return Dry Bulb";
//             if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
//                 humidificationControl = "Return Discharge (%RH)";
//             }
//             if (unitType === "D-Series" || reheatingType !== "None") {
//                 dehumidificationControl = "Return Dew Point > Dehumidification Set Point"
//             }
//             break;

//         case 'Supply Discharge w/ Space Reset':
//             economizerControl = "Outside Dry Bulb < Space Dry Bulb";
//             if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
//                 humidificationControl = "Space Reset (%RH)";
//             }
//             if (unitType === "D-Series" || reheatingType !== "None") {
//                 dehumidificationControl = "Space Dew Point > Dehumidification Set Point";
//             }
//             break;

//         case 'Supply Discharge w/ Return Reset':
//             economizerControl = "Outside Dry Bulb < Return Dry Bulb";
//             if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
//                 humidificationControl = "Return Reset (%RH)";
//             }
//             if (unitType === "D-Series" || reheatingType !== "None") {
//                 dehumidificationControl = "Return Dew Point > Dehumidification Set Point"
//             }
//             break;

//         case 'Supply Discharge w/ Outside Air Reset':
//             economizerControl = "Outside Dry Bulb < Return Dry Bulb";
//             if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
//                 humidificationControl = "Return Discharge (%RH)";
//             }
//             if (unitType === "D-Series" || reheatingType !== "None") {
//                 dehumidificationControl = "Outside Dew Point > Dehumidification Set Point";
//             }
//             break;

//         default:
//             break;
//     }


//     store.dispatch(updateReduxAction('UPDATE_ControlChars',
//         {
//             economizerControl: economizerControl,
//             dehumidificationControl: dehumidificationControl,
//             humidificationControl: humidificationControl
//         }));

// }

export function updateMinOAControl(event) {
    const minOacontrol = event.currentTarget.value;
    store.dispatch(updateReduxAction('UPDATE_ControlChars', { minOacontrol: minOacontrol }));

    const bmsOutsideAirCfm = getBmsOutsideAirCfm(minOacontrol);
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsOutsideAirCfm: bmsOutsideAirCfm
        }));
}


export function updateEnthalpyWheelBypass(event) {
    const reduxState = store.getState();
    const enthalpyWheelBypass = event.currentTarget.value;
    const energyRecoveryType = reduxState.reduxUnitDesignChars.energyRecoveryType;
    const unitType = reduxState.reduxUnitDesignChars.unitType;


    var spSupplyWheelDifferential = reduxState.reduxSetPoints.spSupplyWheelDifferential;
    var spExhaustWheelDifferential = reduxState.reduxSetPoints.spExhaustWheelDifferential;

    const bmsHxsupplyDifferentialPressure = getBmsHxsupplyDifferentialPressure(enthalpyWheelBypass, energyRecoveryType, unitType);
    const bmsHxexhaustDifferentialPressure = getBmsHxexhaustDifferentialPressure(enthalpyWheelBypass, energyRecoveryType, unitType);

    if (enthalpyWheelBypass === "Constant Wheel CFM") {
        spSupplyWheelDifferential = '2';
        spExhaustWheelDifferential = '2';
    } else {
        spSupplyWheelDifferential = '';
        spExhaustWheelDifferential = '';
    }
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spSupplyWheelDifferential: spSupplyWheelDifferential,
            spExhaustWheelDifferential: spExhaustWheelDifferential
        }));
    store.dispatch(updateReduxAction('UPDATE_ControlChars', { enthalpyWheelBypass: enthalpyWheelBypass }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsHxsupplyDifferentialPressure: bmsHxsupplyDifferentialPressure,
            bmsHxexhaustDifferentialPressure: bmsHxexhaustDifferentialPressure
        }));
}

export function updateTemperatureControl(event) {

    const reduxState = store.getState();
    const temperatureControl = event.currentTarget.value;

    const unitType = reduxState.reduxUnitDesignChars.unitType;
    var dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
    const coolingType = reduxState.reduxUnitDesignChars.coolingType;
    var economizerControl = reduxState.reduxControlChars.economizerControl;
    const reheatingType = reduxState.reduxUnitDesignChars.reheatingType;
    const humidifierType = reduxState.reduxUnitDesignChars.humidifierType;
    var humidificationControl = reduxState.reduxControlChars.humidificationControl;
    const demandControlVentilation = reduxState.reduxDetailedControlConfig.demandControlVentilation;
    const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
    const heatingType = reduxState.reduxUnitDesignChars.heatingType;
    var unoccupiedDehumidificationControl = reduxState.reduxControlChars.unoccupiedDehumidificationControl;



    updateTemperatureControlRelatedPlaceHolders(temperatureControl);

    var spSpaceTempDeadBand = reduxState.reduxSetPoints.spSpaceTempDeadBand;
    var spReturnTempDeadBand = reduxState.reduxSetPoints.spReturnTempDeadBand;

    switch (temperatureControl) {
        case 'Supply Discharge':
            economizerControl = "Outside Dry Bulb < Return Dry Bulb";
            spSpaceTempDeadBand = '';
            spReturnTempDeadBand = '';
            unoccupiedDehumidificationControl = "";
            if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
                humidificationControl = "Return Discharge (%RH)";
            }
            if (unitType === "D-Series" || reheatingType !== "None") {
                dehumidificationControl = "Return Dew Point > Dehumidification Set Point"
            }
            break;

        case 'Supply Discharge w/ Space Reset':
            economizerControl = "Outside Dry Bulb < Space Dry Bulb";
            spSpaceTempDeadBand = '2';
            spReturnTempDeadBand = '';
            if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
                humidificationControl = "Space Reset (%RH)";
            }
            if (unitType === "D-Series" || reheatingType !== "None") {
                dehumidificationControl = "Space Dew Point > Dehumidification Set Point";
            }
            if (heatingType === "None") {
                var spHeatMin = '';
                var spHeatMax = '';
            } else {
                spHeatMin = '75';
                spHeatMax = '95';
            }
            if (coolingType === "None") {
                var spCoolMin = '';
                var spCoolMax = '';
            } else {
                spCoolMin = '50';
                spCoolMax = '65';
            }
            break;

        case 'Supply Discharge w/ Return Reset':
            economizerControl = "Outside Dry Bulb < Return Dry Bulb";
            spSpaceTempDeadBand = '';
            spReturnTempDeadBand = '2';
            unoccupiedDehumidificationControl = "";
            if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
                humidificationControl = "Return Reset (%RH)";
            }
            if (unitType === "D-Series" || reheatingType !== "None") {
                dehumidificationControl = "Return Dew Point > Dehumidification Set Point"
            }
            if (heatingType === "None") {
                spHeatMin = '';
                spHeatMax = '';
            } else {
                spHeatMin = '75';
                spHeatMax = '95';
            }
            if (coolingType === "None") {
                spCoolMin = '';
                spCoolMax = '';
            } else {
                spCoolMin = '50';
                spCoolMax = '65';
            }
            break;

        case 'Supply Discharge w/ Outside Air Reset':
            economizerControl = "Outside Dry Bulb < Return Dry Bulb";
            spSpaceTempDeadBand = '';
            spReturnTempDeadBand = '';
            unoccupiedDehumidificationControl = "";
            if (unitType !== "P-Series" && humidifierType === "Steam Manifold") {
                humidificationControl = "Return Discharge (%RH)";
            }
            if (unitType === "D-Series" || reheatingType !== "None") {
                dehumidificationControl = "Outside Dew Point > Dehumidification Set Point";
            }
            break;

        default:
            break;
    }

    // reset setPoints on temperatureControl change
    var spReturnResetTemp = '';
    var spSpaceResetTemp = '';
    var spSupplyTemp = '';
    var spOutsideResetMinOat = '';
    var spOutsideResetMaxOat = '';
    var spOutsideResetMinLat = '';
    var spOutsideResetMaxLat = '';

    var unoccupiedModeControlOptions = getUnoccupiedModeControlOptions(unitType, temperatureControl, unitConfiguration);
    var economizerControlOptions = getEconomizerControlOptions(temperatureControl, unitType, unitConfiguration);
    var dehumidificationControlOptions = getDehumidificationControlOptions(unitType, temperatureControl);
    var bmsSpaceAirTemp = getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl);
    var bmsSpaceAirHumidity = getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl);
    var bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);
    var bmsReturnAirHumidity = getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl);
    var bmsSpaceCo2 = getBmsSpaceCO2(demandControlVentilation, temperatureControl, unitConfiguration);

    store.dispatch(updateReduxAction('UPDATE_ControlChars',
        {
            temperatureControl: temperatureControl,
            economizerControl: economizerControl,
            dehumidificationControl: dehumidificationControl,
            humidificationControl: humidificationControl,
            unoccupiedDehumidificationControl: unoccupiedDehumidificationControl
        }));
    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS',
        {
            dehumidificationControlOptions: dehumidificationControlOptions,
            economizerControlOptions: economizerControlOptions,
            unoccupiedModeControlOptions: unoccupiedModeControlOptions
        }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spSpaceTempDeadBand: spSpaceTempDeadBand,
        spReturnTempDeadBand: spReturnTempDeadBand,
        spReturnResetTemp: spReturnResetTemp,
        spSpaceResetTemp: spSpaceResetTemp,
        spSupplyTemp: spSupplyTemp,
        spOutsideResetMinOat: spOutsideResetMinOat,
        spOutsideResetMaxOat: spOutsideResetMaxOat,
        spOutsideResetMinLat: spOutsideResetMinLat,
        spOutsideResetMaxLat: spOutsideResetMaxLat,
        spCoolMin: spCoolMin,
        spCoolMax: spCoolMax,
        spHeatMin: spHeatMin,
        spHeatMax: spHeatMax
    }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsSpaceAirTemp: bmsSpaceAirTemp,
            bmsSpaceCo2: bmsSpaceCo2,
            bmsSpaceAirHumidity: bmsSpaceAirHumidity,
            bmsReturnAirHumidity: bmsReturnAirHumidity
        }));
}

export function updateHumidificationControl(event) {
    const reduxState = store.getState();
    const humidificationControl = event.currentTarget.value;
    const dehumidificationControl = event.currentTarget.value;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    const economizerControl = reduxState.reduxControlChars.economizerControl;
    const bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);
    const bmsReturnAirHumidity = getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl);
    const bmsSpaceAirTemp = getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl);
    const bmsSpaceAirHumidity = getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl);
    var spReturnHumidRh = '';
    var spSpaceHumidRh = '';
    var spSupplyHumidRh = '';
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spReturnHumidRh: spReturnHumidRh,
            spSpaceHumidRh: spSpaceHumidRh,
            spSupplyHumidRh: spSupplyHumidRh
        }));

    store.dispatch(updateReduxAction('UPDATE_ControlChars', { humidificationControl: humidificationControl }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsReturnAirHumidity: bmsReturnAirHumidity,
            bmsSpaceAirTemp: bmsSpaceAirTemp,
            bmsSpaceAirHumidity: bmsSpaceAirHumidity
        }));
}

export function updateEconomizerControl(event) {
    //1 update economizerControl in reduxControlChars
    //2 update bmsOutsideAirHumidity in reduxSensors
    const reduxState = store.getState();
    const economizerControl = event.currentTarget.value;
    const reheatingType = reduxState.reduxUnitDesignChars.reheatingType;
    const dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    const humidificationControl = reduxState.reduxControlChars.humidificationControl;
    var spEconomizerActivationBtu = '';
    var spEconomizerActivationDegree = '';
    var spCoolOa = reduxState.reduxSetPoints.spCoolOa;
    const bmsOutsideAirHumidity = getBmsOutsideAirHumidity(economizerControl, reheatingType, dehumidificationControl);
    const bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);
    const bmsReturnAirHumidity = getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl);
    const bmsSpaceAirTemp = getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl);
    const bmsSpaceAirHumidity = getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl);
    if (economizerControl === "Outside Dry Bulb < Dry Bulb Setpoint") {
        spCoolOa = '62';
    }
    if (economizerControl === "Outside Enthalpy < Enthalpy Setpoint") {
        spCoolOa = '23';
    }
    store.dispatch(updateReduxAction('UPDATE_ControlChars', { economizerControl: economizerControl }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spCoolOa: spCoolOa,
            spEconomizerActivationDegree: spEconomizerActivationDegree,
            spEconomizerActivationBtu: spEconomizerActivationBtu
        }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsOutsideAirHumidity: bmsOutsideAirHumidity,
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsReturnAirHumidity: bmsReturnAirHumidity,
            bmsSpaceAirTemp: bmsSpaceAirTemp,
            bmsSpaceAirHumidity: bmsSpaceAirHumidity
        }));
}

export function updateAppType(event) {
    //1 update appType in reduxControlChars
    //2 update defaults for dependent values  
    //4 update bmsSupplyAirHumidity in reduxSensors
    const reduxState = store.getState();
    const appType = event.currentTarget.value;
    var supplyFanControl = reduxState.reduxControlChars.supplyFanControl;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const humidifierType = reduxState.reduxUnitDesignChars.humidifierType;

    var spMaxSfturndown = '';
    var bmsHighSupplyDuctStatic = reduxState.reduxSensors.bmsHighSupplyDuctStatic;
    var bmsLowReturnDuctStatic = reduxState.reduxSensors.bmsLowReturnDuctStatic;
    var highDuctSwitch = reduxState.reduxDetailedControlConfig.highDuctSwitch;
    var lowDuctSwitch = reduxState.reduxDetailedControlConfig.lowDuctSwitch;
    var reheatingType = reduxState.reduxUnitDesignChars.reheatingType;
    var bmsSupplyDuctStaticPressure = reduxState.reduxSensors.bmsSupplyDuctStaticPressure;

    var supplyFanControlOptions = getSupplyFanControlOptions(unitType, appType);
    var exhaustFanControlOptions = getExhaustFanControlOptions(unitType, appType, supplyFanControl);
    var returnFanControlOptions = getReturnFanControlOptions(appType, supplyFanControl, unitType);
    var bmsSupplyAirHumidity = getBmsSupplyAirHumidity(unitType, humidifierType);

    switch (appType) {
        case 'Variable Air Volume':
            supplyFanControl = "Duct Static Pressure"
            spMaxSfturndown = '50';
            bmsHighSupplyDuctStatic = true;
            bmsLowReturnDuctStatic = true;
            highDuctSwitch = true;
            lowDuctSwitch = true;
            bmsSupplyDuctStaticPressure = true;
            break;

        case 'Constant Air Volume':
            supplyFanControl = "Manual Balance";
            bmsHighSupplyDuctStatic = false;
            bmsLowReturnDuctStatic = false;
            highDuctSwitch = false;
            lowDuctSwitch = false;
            bmsSupplyDuctStaticPressure = false;
            break;

        case 'Sensible Only (Elevation)':
            reheatingType = 'None';
            break;

        default:
            break;
    }

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spMaxSfturndown: spMaxSfturndown }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsSupplyAirHumidity: bmsSupplyAirHumidity,
            bmsHighSupplyDuctStatic: bmsHighSupplyDuctStatic,
            bmsLowReturnDuctStatic: bmsLowReturnDuctStatic,
            bmsSupplyDuctStaticPressure: bmsSupplyDuctStaticPressure
        }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', {
        highDuctSwitch: highDuctSwitch,
        lowDuctSwitch: lowDuctSwitch
    }));
    store.dispatch(updateReduxAction('UPDATE_ControlChars', {
        appType: appType,
        supplyFanControl: supplyFanControl
    }));
    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS',
        {
            exhaustFanControlOptions: exhaustFanControlOptions,
            returnFanControlOptions: returnFanControlOptions,
            supplyFanControlOptions: supplyFanControlOptions
        }));
    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARS', {
        reheatingType: reheatingType
    }));
}

export function updateSupplyFanControl(event) {

    const reduxState = store.getState();
    const supplyFanControl = event.currentTarget.value;
    const appType = reduxState.reduxControlChars.appType;
    const exhaustReturnFan = reduxState.reduxUnitDesignChars.exhaustReturnFan;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
    var highDuctSwitch = reduxState.reduxDetailedControlConfig.highDuctSwitch;
    var spSupplyFanControlCfm = '';
    var spSupplyFanControlDuct = '';
    var bmsSupplyCfm = false;
    var temperatureControl = reduxState.reduxControlChars.temperatureControl;
    var spHeatMin = reduxState.reduxSetPoints.spHeatMin;
    var spHeatMax = reduxState.reduxSetPoints.spHeatMax;
    var spCoolMin = reduxState.reduxSetPoints.spCoolMin;
    var spCoolMax = reduxState.reduxSetPoints.spCoolMax;
    var spSpaceTempDeadBand = reduxState.reduxSetPoints.spSpaceTempDeadBand;


    var returnFanControlOptions = getReturnFanControlOptions(appType, supplyFanControl, unitType);
    var exhaustFanControlOptions = getExhaustFanControlOptions(unitType, appType, supplyFanControl);
    const temperatureControlOptions = getTemperatureControlOptions(unitType, supplyFanControl, exhaustReturnFan, unitConfiguration);
    var bmsSupplyDuctStaticPressure = getBmsSupplyDuctStaticPressure(supplyFanControl);

    switch (supplyFanControl) {
        case 'Duct Static Pressure':
            highDuctSwitch = true;
            break;

        case 'Supply CFM':
            bmsSupplyCfm = true;
            break;

        case 'Single Zone':
            temperatureControl = "Supply Discharge w/ Space Reset";
            spHeatMin = '75';
            spHeatMax = '95';
            spCoolMin = '50';
            spCoolMax = '65';
            spSpaceTempDeadBand = '2';
            break;

        default:
            break;
    }

    store.dispatch(updateReduxAction('UPDATE_ControlChars',
        {
            supplyFanControl: supplyFanControl,
            temperatureControl: temperatureControl
        }));

    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS',
        {
            returnFanControlOptions: returnFanControlOptions,
            temperatureControlOptions: temperatureControlOptions,
            exhaustFanControlOptions: exhaustFanControlOptions
        }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsSupplyDuctStaticPressure: bmsSupplyDuctStaticPressure,
            bmsSupplyCfm: bmsSupplyCfm
        }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spSupplyFanControlCfm: spSupplyFanControlCfm,
            spSupplyFanControlDuct: spSupplyFanControlDuct,
            spHeatMin: spHeatMin,
            spHeatMax: spHeatMax,
            spCoolMin: spCoolMin,
            spCoolMax: spCoolMax,
            spSpaceTempDeadBand: spSpaceTempDeadBand
        }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { highDuctSwitch: highDuctSwitch }));
}

export function updateExhaustFanControl(event) {
    const exhaustFanControl = event.currentTarget.value;

    const reduxState = store.getState();
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const returnFanControl = reduxState.reduxControlChars.returnFanControl;
    var minOacontrol = reduxState.reduxControlChars.minOacontrol;

    var lowDuctSwitch = checkLowDuct(exhaustFanControl);
    var bmsExhaustCfm = getBmsExhaustCfm(exhaustFanControl);
    var bmsExhaustDuctStaticPressure = getBmsExhaustDuctStaticPressure(exhaustFanControl);
    var bmsSpaceStaticPressure = getBmsSpaceStaticPressure(exhaustFanControl, returnFanControl, unitType);
    var minOacontrolOptions = getMinOaControlOptions(exhaustFanControl);

    var spExhaustReliefFanCfm = '';
    var spExhaustReliefFanDuct = '';
    var spExhaustReliefFanSpace = '';
    var spExhaustReliefFanOffsetAmbient = '';
    var spReturnReliefFanCfm = '';
    var spReturnReliefFanDuct = '';
    var spReturnReliefFanSpace = '';
    var spReturnReliefFanOffsetTracking = '';
    var spExhaustReliefFanOffsetDamper = '';
    var bmsReturnCfm = false;
    var bmsReturnDuctStaticPressure = false;
    var bmsAmbientDifferentialPressure = false;

    switch (exhaustFanControl) {
        case 'Space Static Pressure':
            spExhaustReliefFanSpace = '0.04';
            bmsAmbientDifferentialPressure = false;
            break;

        case 'OA CFM +/- Offset':
            minOacontrol = 'Minimum Outside Air CFM';
            bmsAmbientDifferentialPressure = false;
            break;

        case 'Pool Space vs Adj Space Diff Press and Outdoor Diff Press':
            bmsAmbientDifferentialPressure = true;
            break;

        default:
            bmsAmbientDifferentialPressure = false;
            break;
    }

    if (unitType === "P-Series") {
        spExhaustReliefFanSpace = '-0.04';
    }

    store.dispatch(updateReduxAction('UPDATE_ControlChars', {
        exhaustFanControl: exhaustFanControl,
        returnFanControl: returnFanControl,
        minOacontrol: minOacontrol
    }));
    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS', { minOacontrolOptions: minOacontrolOptions }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { lowDuctSwitch: lowDuctSwitch }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {

            bmsExhaustCfm: bmsExhaustCfm,
            bmsReturnCfm: bmsReturnCfm,
            bmsExhaustDuctStaticPressure: bmsExhaustDuctStaticPressure,
            bmsReturnDuctStaticPressure: bmsReturnDuctStaticPressure,
            bmsSpaceStaticPressure: bmsSpaceStaticPressure,
            bmsAmbientDifferentialPressure: bmsAmbientDifferentialPressure
        }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spExhaustReliefFanCfm: spExhaustReliefFanCfm,
            spExhaustReliefFanDuct: spExhaustReliefFanDuct,
            spExhaustReliefFanSpace: spExhaustReliefFanSpace,
            spExhaustReliefFanOffsetAmbient: spExhaustReliefFanOffsetAmbient,
            spReturnReliefFanCfm: spReturnReliefFanCfm,
            spReturnReliefFanDuct: spReturnReliefFanDuct,
            spReturnReliefFanSpace: spReturnReliefFanSpace,
            spReturnReliefFanOffsetTracking: spReturnReliefFanOffsetTracking,
            spExhaustReliefFanOffsetDamper: spExhaustReliefFanOffsetDamper
        }));
}
export function updateReturnFanControl(event) {
    const returnFanControl = event.currentTarget.value;

    const reduxState = store.getState();
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const exhaustFanControl = reduxState.reduxControlChars.exhaustFanControl;


    var lowDuctSwitch = checkLowDuct(returnFanControl);
    var bmsReturnCfm = getBmsReturnCfm(returnFanControl)
    var bmsReturnDuctStaticPressure = getBmsReturnDuctStaticPressure(returnFanControl);
    const bmsSpaceStaticPressure = getBmsSpaceStaticPressure(exhaustFanControl, returnFanControl, unitType);

    // reset all reliefFan and reliefFanOffset setPoints to ""
    var spExhaustReliefFanCfm = '';
    var spExhaustReliefFanDuct = '';
    var spExhaustReliefFanSpace = '';
    var spExhaustReliefFanOffsetAmbient = '';
    var spReturnReliefFanCfm = '';
    var spReturnReliefFanDuct = '';
    var spReturnReliefFanSpace = '';
    var spReturnReliefFanOffsetTracking = '';
    var bmsExhaustDuctStaticPressure = false;
    var bmsExhaustCfm = false;


    if (returnFanControl === "Space Static Pressure") {
        spReturnReliefFanSpace = '0.04';

    }

    store.dispatch(updateReduxAction('UPDATE_ControlChars', {
        returnFanControl: returnFanControl
    }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { lowDuctSwitch: lowDuctSwitch }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsReturnCfm: bmsReturnCfm,
            bmsExhaustCfm: bmsExhaustCfm,
            bmsReturnDuctStaticPressure: bmsReturnDuctStaticPressure,
            bmsExhaustDuctStaticPressure: bmsExhaustDuctStaticPressure,
            bmsSpaceStaticPressure: bmsSpaceStaticPressure
        }));
    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spExhaustReliefFanCfm: spExhaustReliefFanCfm,
            spExhaustReliefFanDuct: spExhaustReliefFanDuct,
            spExhaustReliefFanSpace: spExhaustReliefFanSpace,
            spExhaustReliefFanOffsetAmbient: spExhaustReliefFanOffsetAmbient,
            spReturnReliefFanCfm: spReturnReliefFanCfm,
            spReturnReliefFanDuct: spReturnReliefFanDuct,
            spReturnReliefFanSpace: spReturnReliefFanSpace,
            spReturnReliefFanOffsetTracking: spReturnReliefFanOffsetTracking
        }));
}

export function updateDehumidificationControl(event) {
    //1 update dehumidificationControl in reduxControlChars
    //2 update placeholders in reduxPlaceholders
    //3 update sensor setPoints in reduxSensors 
    const reduxState = store.getState();
    const dehumidificationControl = event.currentTarget.value;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    const reheatingType = reduxState.reduxUnitDesignChars.reheatingType;
    const economizerControl = reduxState.reduxControlChars.economizerControl;
    const humidificationControl = reduxState.reduxControlChars.humidificationControl;

    const phDehumTemp = getPhDehumTemp(unitType, temperatureControl, dehumidificationControl);
    const bmsOutsideAirHumidity = getBmsOutsideAirHumidity(economizerControl, reheatingType, dehumidificationControl);
    const bmsReturnAirTemp = getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl);
    const bmsReturnAirHumidity = getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl);
    const bmsSpaceAirTemp = getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl);
    const bmsSpaceAirHumidity = getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl);

    var spSpaceDehumControlDew = '';
    var spReturnDehumControlDew = '';
    var spOutsideDehumControlDew = '';
    var spReturnDehumControlHumidity = '';
    var spSpaceDehumControlHumidity = '';

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spSpaceDehumControlDew: spSpaceDehumControlDew,
            spReturnDehumControlDew: spReturnDehumControlDew,
            spOutsideDehumControlDew: spOutsideDehumControlDew,
            spReturnDehumControlHumidity: spReturnDehumControlHumidity,
            spSpaceDehumControlHumidity: spSpaceDehumControlHumidity

        }));

    store.dispatch(updateReduxAction('UPDATE_ControlChars', { dehumidificationControl: dehumidificationControl }));
    store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS', { phDehumTemp: phDehumTemp }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsOutsideAirHumidity: bmsOutsideAirHumidity,
            bmsReturnAirTemp: bmsReturnAirTemp,
            bmsReturnAirHumidity: bmsReturnAirHumidity,
            bmsSpaceAirTemp: bmsSpaceAirTemp,
            bmsSpaceAirHumidity: bmsSpaceAirHumidity
        }));
}

export function updateUnoccupiedDehumidificationControl(event) {

    const unoccupiedDehumidificationControl = event.currentTarget.value;

    const spSpaceUnoccupiedDehumControlDew = '';
    const spReturnUnoccupiedDehumControlDew = '';
    const spReturnUnoccupiedDehumControlHumidity = '';
    const spSpaceUnoccupiedDehumControlHumidity = '';

    store.dispatch(updateReduxAction('UPDATE_ControlChars', { unoccupiedDehumidificationControl: unoccupiedDehumidificationControl }));

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spSpaceUnoccupiedDehumControlDew: spSpaceUnoccupiedDehumControlDew,
            spReturnUnoccupiedDehumControlDew: spReturnUnoccupiedDehumControlDew,
            spReturnUnoccupiedDehumControlHumidity: spReturnUnoccupiedDehumControlHumidity,
            spSpaceUnoccupiedDehumControlHumidity: spSpaceUnoccupiedDehumControlHumidity

        }));
}

export function updateUnoccupiedModeControl(event) {
    const reduxState = store.getState();
    const unoccupiedModeControl = event.currentTarget.value;
    var bmsSpaceAirHumidity = reduxState.reduxSensors.bmsSpaceAirHumidity;
    const reheatingType = reduxState.reduxUnitDesignChars.reheatingType;
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;
    const heatingType = reduxState.reduxUnitDesignChars.heatingType;
    const coolingType = reduxState.reduxUnitDesignChars.coolingType;
    const humidifierType = reduxState.reduxUnitDesignChars.humidifierType;
    var morningCoolDown = reduxState.reduxDetailedControlConfig.morningCoolDown;
    var morningWarmUp = reduxState.reduxDetailedControlConfig.morningWarmUp;
    var spUnoccHeat = reduxState.reduxSetPoints.spUnoccHeat;
    var spUnoccCool = reduxState.reduxSetPoints.spUnoccCool;
    var spUnoccDehum = reduxState.reduxSetPoints.spUnoccDehum;
    var spUnoccHumid = reduxState.reduxSetPoints.spUnoccHumid;

    var spUnoccupiedSupplyFanSpeed = reduxState.reduxSetPoints.spUnoccupiedSupplyFanSpeed;

    var unoccupiedDehumidificationControlOptions = getUnoccupiedDehumidificationControlOptions(unoccupiedModeControl);

    var unoccupiedDehumidificationControl = 'None';

    switch (unoccupiedModeControl) {
        case 'None':
            unoccupiedDehumidificationControl = "";
            morningWarmUp = false;
            morningCoolDown = false;
            spUnoccHeat = '';
            spUnoccCool = '';
            spUnoccDehum = '';
            spUnoccHumid = '';
            break;

        case 'Unit is Off':
            unoccupiedDehumidificationControl = "";
            morningWarmUp = false;
            morningCoolDown = false;

            if (heatingType === "None") {
                spUnoccHeat = '';
            } else {
                spUnoccHeat = '65';
            }

            if (coolingType === "None") {
                spUnoccCool = '';
            } else {
                spUnoccCool = '80';
            }

            spUnoccDehum = '60';
            spUnoccHumid = '20';
            break;
        case 'Night Setback w/ Supply Fan Standby':
            if (reheatingType !== "None" && reheatingType !== "") {
                unoccupiedDehumidificationControl = "Space Dew Point > Dehumidification Set Point";
            } else {
                unoccupiedDehumidificationControl = "";
            }
            if (dehumidificationControl !== "" || dehumidificationControl !== null) {
                bmsSpaceAirHumidity = true;
            }
            if (heatingType === "None" || heatingType === "") {
                spUnoccHeat = '';
            }
            if (coolingType === "None" || coolingType === "") {
                spUnoccCool = '';
            }
            if (humidifierType === "None" || humidifierType === "") {
                spUnoccHumid = '';
            }
            if (reheatingType === "None" || reheatingType === "" || humidifierType === "None" || humidifierType === "") {
                spUnoccDehum = '';
            }
            break;

        case 'Night Setback w/ Supply Fan On':
            if (reheatingType !== "None" && reheatingType !== "") {
                unoccupiedDehumidificationControl = "Space Dew Point > Dehumidification Set Point";
            } else {
                unoccupiedDehumidificationControl = "";
            }
            if (unitType === "E-Series" || unitType === "C-Series") {
                unoccupiedDehumidificationControl = "None";
                spUnoccupiedSupplyFanSpeed = '100';
            }
            if (dehumidificationControl !== "" || dehumidificationControl !== null) {
                bmsSpaceAirHumidity = true;
            }
            if (heatingType === "None" || heatingType === "") {
                spUnoccHeat = '';
            }
            if (coolingType === "None" || coolingType === "") {
                spUnoccCool = '';
            }
            if (humidifierType === "None" || humidifierType === "") {
                spUnoccHumid = '';
            }
            if (reheatingType === "None" || reheatingType === "" || humidifierType === "None" || humidifierType === "") {
                spUnoccDehum = '';
            }
            break;

        case 'Full Recirc Mode':
            morningWarmUp = false;
            morningCoolDown = false;

            if (unitType === "E-Series" || unitType === "C-Series") {
                unoccupiedDehumidificationControl = "None";
                spUnoccupiedSupplyFanSpeed = '100';
            } if (heatingType === "None") {
                spUnoccHeat = '';
            } else {
                spUnoccHeat = '65';
            }

            if (coolingType === "None") {
                spUnoccCool = '';
            } else {
                spUnoccCool = '80';
            }

            spUnoccDehum = '60';
            spUnoccHumid = '20';
            break;

        case 'Reduced Airflow':
            morningWarmUp = false;
            morningCoolDown = false;
            spUnoccHeat = '';
            spUnoccCool = '';
            spUnoccDehum = '';
            spUnoccHumid = '';
            if (unitType === "P-Series") {
                unoccupiedDehumidificationControl = "None"
                spUnoccupiedSupplyFanSpeed = '67';
            } else {
                spUnoccupiedSupplyFanSpeed = '100';
            }
            if (heatingType === "None") {
                spUnoccHeat = '';
            } else {
                spUnoccHeat = '65';
            }

            if (coolingType === "None") {
                spUnoccCool = '';
            } else {
                spUnoccCool = '80';
            }

            spUnoccDehum = '60';
            spUnoccHumid = '20';
            break;

        default:
            morningWarmUp = false;
            morningCoolDown = false;
            spUnoccHeat = '';
            spUnoccCool = '';
            spUnoccDehum = '';
            spUnoccHumid = '';
            break;
    }

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spUnoccHeat: spUnoccHeat,
            spUnoccCool: spUnoccCool,
            spUnoccDehum: spUnoccDehum,
            spUnoccHumid: spUnoccHumid,
            spUnoccupiedSupplyFanSpeed: spUnoccupiedSupplyFanSpeed
        }));

    store.dispatch(updateReduxAction('UPDATE_ControlChars',
        {
            unoccupiedModeControl: unoccupiedModeControl,
            unoccupiedDehumidificationControl: unoccupiedDehumidificationControl
        }));

    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS',
        {

            unoccupiedDehumidificationControlOptions: unoccupiedDehumidificationControlOptions
        }));

    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG',
        {
            morningWarmUp: morningWarmUp,
            morningCoolDown: morningCoolDown
        }));

    store.dispatch(updateReduxAction('UPDATE_SENSORS', { bmsSpaceAirHumidity: bmsSpaceAirHumidity }));
}