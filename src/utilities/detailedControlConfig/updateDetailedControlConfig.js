import { store } from '../../redux/store';
import { updateReduxAction } from '../../redux/actions';

import {
    getBmsHeatWheelRotationDetection, getBmsSpaceCO2, getBmsHighSupplyDuctStatic, getBmsLowReturnDuctStatic,
    getBmsDrainCondensate, getBmsFilterPressureAnalogInput, getBmsFilterPressureTransducer
} from '../sensors/getSensors';


export function checkHighDuct(supplyFanControl) {
    const reduxState = store.getState();

    if (supplyFanControl === "Duct Static Pressure") {
        return true;
    }
    return reduxState.reduxDetailedControlConfig.highDuctSwitch;
}

export function checkLowDuct(value) {
    const reduxState = store.getState();

    if (value === "Duct Static Pressure") {
        return true;
    }
    return reduxState.reduxDetailedControlConfig.lowDuctSwitch;
}


export function checkPhaseVoltageMonitor(value) {
    const reduxState = store.getState();

    if (value === "Direct Expansion Coil" || value === "A/R Coil (Heat Pump)") {
        return true;
    }
    return reduxState.reduxDetailedControlConfig.phaseVoltageMonitor;
}

export function checkUnoccupiedModeControl(temperatureControl) {
    if (temperatureControl === "Supply Discharge w/ Space Reset") {
        return false;
    }
    return true;
}

export function updateEvaporativeCondenser(event) {
    const reduxState = store.getState();
    const evapCondenser = event.currentTarget.checked;
    var evapWaterLevel = reduxState.reduxDetailedControlConfig.evapWaterLevel;
    var evapSumpHeater = reduxState.reduxDetailedControlConfig.evapSumpHeater;
    var evapAutoDrain = reduxState.reduxDetailedControlConfig.evapAutoDrain;
    var evapWaterTreatment = reduxState.reduxDetailedControlConfig.evapWaterTreatment;

    if (evapCondenser === false) {
        evapWaterLevel = false;
        evapSumpHeater = false;
        evapAutoDrain = false;
        evapWaterTreatment = false;
    }

    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG',
        {
            evapCondenser: evapCondenser,
            evapWaterLevel: evapWaterLevel,
            evapSumpHeater: evapSumpHeater,
            evapAutoDrain: evapAutoDrain,
            evapWaterTreatment: evapWaterTreatment
        }))

}

export function updateFreezestat(event) {
    const freezestat = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { freezestat: freezestat }));

    const bmsFreezestat = freezestat;
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsFreezestat: bmsFreezestat
        }));
}

export function updateHighDuct(event) {
    const highDuctSwitch = event.currentTarget.checked;

    const bmsHighSupplyDuctStatic = getBmsHighSupplyDuctStatic(highDuctSwitch);


    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { highDuctSwitch: highDuctSwitch }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsHighSupplyDuctStatic: bmsHighSupplyDuctStatic
        }));
}

export function updateLowDuct(event) {
    const lowDuctSwitch = event.currentTarget.checked;
    const bmsLowReturnDuctStatic = getBmsLowReturnDuctStatic(lowDuctSwitch);

    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { lowDuctSwitch: lowDuctSwitch }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsLowReturnDuctStatic: bmsLowReturnDuctStatic
        }));
}

export function updatePanSwitch(event) {
    const condensateDrainPanSwitch = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { condensateDrainPanSwitch: condensateDrainPanSwitch }));

    const bmsDrainCondensate = getBmsDrainCondensate(condensateDrainPanSwitch);
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsDrainCondensate: bmsDrainCondensate
        }));
}

export function updateFilterSwitch(event) {
    const dirtyFilterSwitch = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { dirtyFilterSwitch: dirtyFilterSwitch }));

    const bmsFilterPressureAnalogInput = getBmsFilterPressureAnalogInput(dirtyFilterSwitch);
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsFilterPressureAnalogInput: bmsFilterPressureAnalogInput
        }));
}

export function updateFilterTransducer(event) {
    const filterPressureAnalogInput = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { filterPressureAnalogInput: filterPressureAnalogInput }));

    const bmsFilterPressureTransducer = getBmsFilterPressureTransducer(filterPressureAnalogInput);
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsFilterPressureTransducer: bmsFilterPressureTransducer
        }));

}

export function updateDemandControl(event) {
    const reduxState = store.getState();
    const demandControlVentilation = event.currentTarget.checked;
    const temperatureControl = reduxState.reduxControlChars.temperatureControl;
    const unitConfiguration = reduxState.reduxUnitDesignChars.unitConfiguration;
    var spCo2 = reduxState.reduxSetPoints.spCo2;

    if (demandControlVentilation === true) {
        spCo2 = '1000';
    } else {
        spCo2 = '';
    }

    const bmsSpaceCo2 = getBmsSpaceCO2(demandControlVentilation, temperatureControl, unitConfiguration);

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spCo2: spCo2 }));
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { demandControlVentilation: demandControlVentilation }));
    store.dispatch(updateReduxAction('UPDATE_SENSORS', { bmsSpaceCo2: bmsSpaceCo2 }));
}

export function updateWheelRotation(event) {
    const reduxState = store.getState();
    const wheelRotation = event.currentTarget.checked;
    const energyRecoveryType = reduxState.reduxUnitDesignChars.energyRecoveryType;
    store.dispatch(updateReduxAction('UPDATE_DETAILEDCONTROLCONFIG', { wheelRotation: wheelRotation }));

    const bmsHeatWheelRotationDetection = getBmsHeatWheelRotationDetection(wheelRotation, energyRecoveryType);
    store.dispatch(updateReduxAction('UPDATE_SENSORS',
        {
            bmsHeatWheelRotationDetection: bmsHeatWheelRotationDetection
        }));
}






