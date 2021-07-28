import { store } from '../../redux/store';
import { updateReduxAction } from '../../redux/actions';


export function updateAddHardWiredInput(event) {
    const addHardWiredInput = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHardWiredInput: addHardWiredInput }));

    checkAdditionalSensors();

}
export function updateAddSupplyAirHumidity(event) {
    const addSpaceAirHumidity = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSpaceAirHumidity: addSpaceAirHumidity }));
    checkAdditionalSensors();
}
export function updateAddOutsideAirHumidity(event) {
    const addOutsideAirHumidity = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addOutsideAirHumidity: addOutsideAirHumidity }));
    checkAdditionalSensors();
}
export function updateAddReturnAirTemp(event) {
    const addReturnAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReturnAirTemp: addReturnAirTemp }));
    checkAdditionalSensors();
}
export function updateAddReturnAirHumidity(event) {
    const addReturnAirHumidity = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReturnAirHumidity: addReturnAirHumidity }));
    checkAdditionalSensors();
}
export function updateAddExhaustAirTemp(event) {
    const addExhaustAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addExhaustAirTemp: addExhaustAirTemp }));
    checkAdditionalSensors();
}
export function updateAddExhaustAirHumidity(event) {
    const addExhaustAirHumidity = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addExhaustAirHumidity: addExhaustAirHumidity }));
    checkAdditionalSensors();
}
export function updateAddSpaceAirTemp(event) {
    const addSpaceAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSpaceAirTemp: addSpaceAirTemp }));
    checkAdditionalSensors();
}
export function updateAddSpaceAirHumidity(event) {
    const addSpaceAirHumidity = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSpaceAirHumidity: addSpaceAirHumidity }));
    checkAdditionalSensors();
}
export function updateAddMixedAirTemp(event) {
    const addMixedAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addMixedAirTemp: addMixedAirTemp }));
    checkAdditionalSensors();
}
export function updateAddMixedAirHumidity(event) {
    const addMixedAirHumidity = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addMixedAirHumidity: addMixedAirHumidity }));
    checkAdditionalSensors();
}
export function updateAddCoolingEnteringAirTemp(event) {
    const addCoolingEnteringAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addCoolingEnteringAirTemp: addCoolingEnteringAirTemp }));
    checkAdditionalSensors();
}
export function updateAddCoolingLeavingAirTemp(event) {
    const addCoolingLeavingAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addCoolingLeavingAirTemp: addCoolingLeavingAirTemp }));
    checkAdditionalSensors();
}
export function updateAddHeatingEnteringAirTemp(event) {
    const addHeatingEnteringAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHeatingEnteringAirTemp: addHeatingEnteringAirTemp }));
    checkAdditionalSensors();
}
export function updateAddHeatingLeavingAirTemp(event) {
    const addHeatingLeavingAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHeatingLeavingAirTemp: addHeatingLeavingAirTemp }));
    checkAdditionalSensors();
}
export function updateAddReheatingEnteringAirTemp(event) {
    const addReheatingEnteringAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReheatingEnteringAirTemp: addReheatingEnteringAirTemp }));
    checkAdditionalSensors();
}
export function updateAddReheatingLeavingAirTemp(event) {
    const addReheatingLeavingAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReheatingLeavingAirTemp: addReheatingLeavingAirTemp }));
    checkAdditionalSensors();
}
export function updateAddPreheatingEnteringAirTemp(event) {
    const addPreheatingEnteringAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addPreheatingEnteringAirTemp: addPreheatingEnteringAirTemp }));
    checkAdditionalSensors();
}
export function updateAddPreheatingLeavingAirTemp(event) {
    const addPreheatingLeavingAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addPreheatingLeavingAirTemp: addPreheatingLeavingAirTemp }));
    checkAdditionalSensors();
}
export function updateAddSupplyCfm(event) {
    const addSupplyCfm = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSupplyCfm: addSupplyCfm }));
    checkAdditionalSensors();
}
export function updateAddExhaustCfm(event) {
    const addExhaustCfm = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addExhaustCfm: addExhaustCfm }));
    checkAdditionalSensors();
}
export function updateAddReturnCfm(event) {
    const addReturnCfm = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReturnCfm: addReturnCfm }));
    checkAdditionalSensors();
}
export function updateAddOutsideAirCfm(event) {
    const addOutsideAirCfm = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addOutsideAirCfm: addOutsideAirCfm }));
    checkAdditionalSensors();
}
export function updateAddHxenteringOutsideAirTemp(event) {
    const addHxenteringOutsideAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxenteringOutsideAirTemp: addHxenteringOutsideAirTemp }));
    checkAdditionalSensors();
}
export function updateAddHxleavingSupplyAirTemp(event) {
    const addHxleavingSupplyAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxleavingSupplyAirTemp: addHxleavingSupplyAirTemp }));
    checkAdditionalSensors();
}
export function updateAddHxenteringExhaustAirTemp(event) {
    const addHxenteringExhaustAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxenteringExhaustAirTemp: addHxenteringExhaustAirTemp }));
    checkAdditionalSensors();
}
export function updateAddHxleavingExhaustAirTemp(event) {
    const addHxleavingExhaustAirTemp = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxleavingExhaustAirTemp: addHxleavingExhaustAirTemp }));
    checkAdditionalSensors();
}
export function updateAddHxsupplyDifferentialPressure(event) {
    const addHxsupplyDifferentialPressure = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxsupplyDifferentialPressure: addHxsupplyDifferentialPressure }));
    checkAdditionalSensors();
}
export function updateAddHxexhaustDifferentialPressure(event) {
    const addHxexhaustDifferentialPressure = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHxexhaustDifferentialPressure: addHxexhaustDifferentialPressure }));
    checkAdditionalSensors();
}
export function updateAddHeatWheelRotationDetection(event) {
    const addHeatWheelRotationDetection = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHeatWheelRotationDetection: addHeatWheelRotationDetection }));
    checkAdditionalSensors();
}
export function updateAddSupplyDuctStaticPressure(event) {
    const addSupplyDuctStaticPressure = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSupplyDuctStaticPressure: addSupplyDuctStaticPressure }));
    checkAdditionalSensors();
}
export function updateAddReturnDuctStaticPressure(event) {
    const addReturnDuctStaticPressure = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReturnDuctStaticPressure: addReturnDuctStaticPressure }));
    checkAdditionalSensors();
}
export function updateAddExhaustDuctStaticPressure(event) {
    const addExhaustDuctStaticPressure = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addExhaustDuctStaticPressure: addExhaustDuctStaticPressure }));
    checkAdditionalSensors();
}
export function updateAddSpaceStaticPressure(event) {
    const addSpaceStaticPressure = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSpaceStaticPressure: addSpaceStaticPressure }));
    checkAdditionalSensors();
}
export function updateAddFilterPressureTransducer(event) {
    const addFilterPressureTransducer = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addFilterPressureTransducer: addFilterPressureTransducer }));
    checkAdditionalSensors();
}
export function updateAddSpaceCo2(event) {
    const addSpaceCo2 = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addSpaceCo2: addSpaceCo2 }));
    checkAdditionalSensors();
}
export function updateAddReturnCo2(event) {
    const addReturnCo2 = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addReturnCo2: addReturnCo2 }));
    checkAdditionalSensors();
}
export function updateAddFreezestat(event) {
    const addFreezestat = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addFreezestat: addFreezestat }));
    checkAdditionalSensors();
}
export function updateAddDrainCondensate(event) {
    const addDrainCondensate = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addDrainCondensate: addDrainCondensate }));
    checkAdditionalSensors();
}
export function updateAddFilterPressureAnalogInput(event) {
    const addFilterPressureAnalogInput = event.currentTarget.checked;
    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addFilterPressureAnalogInput: addFilterPressureAnalogInput }));
    checkAdditionalSensors();
}
export function updateAddHighSupplyDuctStatic(event) {
    const addHighSupplyDuctStatic = event.currentTarget.checked;

    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addHighSupplyDuctStatic: addHighSupplyDuctStatic }));
    checkAdditionalSensors();
}
export function updateAddLowReturnDuctStatic(event) {
    const addLowReturnDuctStatic = event.currentTarget.checked;

    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addLowReturnDuctStatic: addLowReturnDuctStatic }));
    checkAdditionalSensors();
}

function checkAdditionalSensors() {
    const reduxState = store.getState();

    const addHardWiredInput = reduxState.reduxAdditionalSensors.addHardWiredInput;
    const addSupplyAirHumidity = reduxState.reduxAdditionalSensors.addSpaceAirHumidity;
    const addOutsideAirHumidity = reduxState.reduxAdditionalSensors.addOutsideAirHumidity;
    const addReturnAirTemp = reduxState.reduxAdditionalSensors.addReturnAirTemp;
    const addReturnAirHumidity = reduxState.reduxAdditionalSensors.addReturnAirHumidity;
    const addExhaustAirTemp = reduxState.reduxAdditionalSensors.addExhaustAirTemp;
    const addExhaustAirHumidity = reduxState.reduxAdditionalSensors.addExhaustAirHumidity;
    const addSpaceAirTemp = reduxState.reduxAdditionalSensors.addSpaceAirTemp;
    const addSpaceAirHumidity = reduxState.reduxAdditionalSensors.addSpaceAirHumidity;
    const addMixedAirTemp = reduxState.reduxAdditionalSensors.addMixedAirTemp;
    const addMixedAirHumidity = reduxState.reduxAdditionalSensors.addMixedAirHumidity;
    const addCoolingEnteringAirTemp = reduxState.reduxAdditionalSensors.addCoolingEnteringAirTemp;
    const addCoolingLeavingAirTemp = reduxState.reduxAdditionalSensors.addCoolingLeavingAirTemp;
    const addHeatingEnteringAirTemp = reduxState.reduxAdditionalSensors.addHeatingEnteringAirTemp;
    const addHeatingLeavingAirTemp = reduxState.reduxAdditionalSensors.addHeatingLeavingAirTemp;
    const addReheatingEnteringAirTemp = reduxState.reduxAdditionalSensors.addReheatingEnteringAirTemp;
    const addReheatingLeavingAirTemp = reduxState.reduxAdditionalSensors.addReheatingLeavingAirTemp;
    const addPreheatingEnteringAirTemp = reduxState.reduxAdditionalSensors.addPreheatingEnteringAirTemp;
    const addPreheatingLeavingAirTemp = reduxState.reduxAdditionalSensors.addPreheatingLeavingAirTemp;
    const addSupplyCfm = reduxState.reduxAdditionalSensors.addSupplyCfm;
    const addExhaustCfm = reduxState.reduxAdditionalSensors.addExhaustCfm;
    const addReturnCfm = reduxState.reduxAdditionalSensors.addReturnCfm;
    const addOutsideAirCfm = reduxState.reduxAdditionalSensors.addOutsideAirCfm;
    const addHxenteringOutsideAirTemp = reduxState.reduxAdditionalSensors.addHxenteringOutsideAirTemp;
    const addHxleavingSupplyAirTemp = reduxState.reduxAdditionalSensors.addHxleavingSupplyAirTemp;
    const addHxenteringExhaustAirTemp = reduxState.reduxAdditionalSensors.addHxenteringExhaustAirTemp;
    const addHxleavingExhaustAirTemp = reduxState.reduxAdditionalSensors.addHxleavingExhaustAirTemp;
    const addHxsupplyDifferentialPressure = reduxState.reduxAdditionalSensors.addHxsupplyDifferentialPressure;
    const addHxexhaustDifferentialPressure = reduxState.reduxAdditionalSensors.addHxexhaustDifferentialPressure;
    const addHeatWheelRotationDetection = reduxState.reduxAdditionalSensors.addHeatWheelRotationDetection;
    const addSupplyDuctStaticPressure = reduxState.reduxAdditionalSensors.addSupplyDuctStaticPressure;
    const addReturnDuctStaticPressure = reduxState.reduxAdditionalSensors.addReturnDuctStaticPressure;
    const addExhaustDuctStaticPressure = reduxState.reduxAdditionalSensors.addExhaustDuctStaticPressure;
    const addSpaceStaticPressure = reduxState.reduxAdditionalSensors.addSpaceStaticPressure;
    const addFilterPressureTransducer = reduxState.reduxAdditionalSensors.addFilterPressureTransducer;
    const addSpaceCo2 = reduxState.reduxAdditionalSensors.addSpaceCo2;
    const addReturnCo2 = reduxState.reduxAdditionalSensors.addReturnCo2;
    const addFreezestat = reduxState.reduxAdditionalSensors.addFreezestat;
    const addDrainCondensate = reduxState.reduxAdditionalSensors.addDrainCondensate;
    const addFilterPressureAnalogInput = reduxState.reduxAdditionalSensors.addFilterPressureAnalogInput;
    const addHighSupplyDuctStatic = reduxState.reduxAdditionalSensors.addHighSupplyDuctStatic;
    const addLowReturnDuctStatic = reduxState.reduxAdditionalSensors.addLowReturnDuctStatic;

    var addRequestedPoints;

    if (addHardWiredInput === false &&
        addSupplyAirHumidity === false &&
        addOutsideAirHumidity === false &&
        addReturnAirTemp === false &&
        addReturnAirHumidity === false &&
        addExhaustAirTemp === false &&
        addExhaustAirHumidity === false &&
        addSpaceAirTemp === false &&
        addSpaceAirHumidity === false &&
        addMixedAirTemp === false &&
        addMixedAirHumidity === false &&
        addCoolingEnteringAirTemp === false &&
        addCoolingLeavingAirTemp === false &&
        addHeatingEnteringAirTemp === false &&
        addHeatingLeavingAirTemp === false &&
        addReheatingEnteringAirTemp === false &&
        addReheatingLeavingAirTemp === false &&
        addPreheatingEnteringAirTemp === false &&
        addPreheatingLeavingAirTemp === false &&
        addSupplyCfm === false &&
        addExhaustCfm === false &&
        addReturnCfm === false &&
        addOutsideAirCfm === false &&
        addHxenteringOutsideAirTemp === false &&
        addHxleavingSupplyAirTemp === false &&
        addHxenteringExhaustAirTemp === false &&
        addHxleavingExhaustAirTemp === false &&
        addHxsupplyDifferentialPressure === false &&
        addHxexhaustDifferentialPressure === false &&
        addHeatWheelRotationDetection === false &&
        addSupplyDuctStaticPressure === false &&
        addReturnDuctStaticPressure === false &&
        addExhaustDuctStaticPressure === false &&
        addSpaceStaticPressure === false &&
        addFilterPressureTransducer === false &&
        addSpaceCo2 === false &&
        addReturnCo2 === false &&
        addFreezestat === false &&
        addDrainCondensate === false &&
        addFilterPressureAnalogInput === false &&
        addHighSupplyDuctStatic === false &&
        addLowReturnDuctStatic === false) {
        addRequestedPoints = false;
    } else {
        addRequestedPoints = true;
    }

    store.dispatch(updateReduxAction('UPDATE_ADDITIONALSENSORS', { addRequestedPoints: addRequestedPoints }));
}