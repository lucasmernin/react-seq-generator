import { getHeatingTypeOptions, getExhaustReturnFanOptions, getReheatingTypeOptions } from "./unitDesignChars/optionsUnitDesignChars";
import {
    getAppTypeOptions, getUnoccupiedModeControlOptions, getSupplyFanControlOptions, getTemperatureControlOptions,
    getDehumidificationControlOptions, getEconomizerControlOptions, getExhaustFanControlOptions, getReturnFanControlOptions,
    getUnoccupiedDehumidificationControlOptions
} from "./controlChars/optionsControlCharacteristics";
import { store } from '../redux/store';
import { updateReduxAction } from '../redux/actions';


export function updateOptionsOnLoad(data) {

    const unitType = data.unitDesign.unitType;
    const coolingType = data.unitDesign.coolingType;
    const precoolingType = data.unitDesign.precoolingType;
    const unitConfiguration = data.unitDesign.unitConfiguration;
    const energyRecoveryType = data.unitDesign.energyRecoveryType;
    const exhaustReturnFan = data.unitDesign.exhaustReturnFan;
    const temperatureControl = data.controlCharacteristics.temperatureControl;
    const appType = data.controlCharacteristics.appType;
    const supplyFanControl = data.controlCharacteristics.supplyFanControl;
    const unoccupiedModeControl = data.controlCharacteristics.unoccupiedModeControl;


    const reheatingTypeOptions = getReheatingTypeOptions(unitType, coolingType, precoolingType);

    const heatingTypeOptions = getHeatingTypeOptions(coolingType, precoolingType, unitConfiguration, unitType);

    const exhaustReturnFanOptions = getExhaustReturnFanOptions(unitType, energyRecoveryType);

    const unoccupiedModeControlOptions = getUnoccupiedModeControlOptions(unitType, temperatureControl);

    const supplyFanControlOptions = getSupplyFanControlOptions(unitType, appType);

    const exhaustFanControlOptions = getExhaustFanControlOptions(unitType, appType, supplyFanControl);

    const returnFanControlOptions = getReturnFanControlOptions(appType, supplyFanControl, unitType);

    const temperatureControlOptions = getTemperatureControlOptions(unitType, supplyFanControl, exhaustReturnFan, unitConfiguration);

    const dehumidificationControlOptions = getDehumidificationControlOptions(unitType, temperatureControl);

    const unoccupiedDehumidificationControlOptions = getUnoccupiedDehumidificationControlOptions(unoccupiedModeControl);

    const economizerControlOptions = getEconomizerControlOptions(temperatureControl, unitType, unitConfiguration);

    const appTypeOptions = getAppTypeOptions(unitType);

    store.dispatch(updateReduxAction('UPDATE_UNITDESIGNCHARSOPTIONS',
        {
            heatingTypeOptions: heatingTypeOptions,
            reheatingTypeOptions: reheatingTypeOptions,
            exhaustReturnFanOptions: exhaustReturnFanOptions
        }));

    store.dispatch(updateReduxAction('UPDATE_ControlCharsOPTIONS',
        {
            unoccupiedModeControlOptions: unoccupiedModeControlOptions,
            supplyFanControlOptions: supplyFanControlOptions,
            exhaustFanControlOptions: exhaustFanControlOptions,
            returnFanControlOptions: returnFanControlOptions,
            temperatureControlOptions: temperatureControlOptions,
            dehumidificationControlOptions: dehumidificationControlOptions,
            unoccupiedDehumidificationControlOptions: unoccupiedDehumidificationControlOptions,
            economizerControlOptions: economizerControlOptions,
            appTypeOptions: appTypeOptions
        }));
}