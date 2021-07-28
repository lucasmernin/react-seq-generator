import { store } from '../../redux/store';
import { updateReduxAction } from '../../redux/actions';
import {
    getSpActiveReturnTempCooling, getSpActiveReturnTempHeating, getSpActiveSpaceTempCooling, getSpActiveSpaceTempHeating
} from './getSetPoints';


export function updateSpDehumCoilLeaving(event) {
    const spDehumCoilLeaving = event.currentTarget.value;

    const reduxState = store.getState();
    var spCoolMin = reduxState.reduxSetPoints.spCoolMin;

    if (spDehumCoilLeaving <= 50 && spCoolMin !== "") {
        if (spDehumCoilLeaving === "") {
            spCoolMin = 50;
        } else {
            spCoolMin = spDehumCoilLeaving;
        }
    }

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spDehumCoilLeaving: spDehumCoilLeaving,
            spCoolMin: spCoolMin
        }));

}

export function updateSpPreheat(event) {
    const spPreheat = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spPreheat: spPreheat
        }));
}

export function updateSpSupplyTemp(event) {
    const spSupplyTemp = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', { spSupplyTemp: spSupplyTemp, }));
}

export function updateSpReturnResetTemp(event) {
    const reduxState = store.getState();
    const spReturnResetTemp = event.currentTarget.value;
    const spReturnTempDeadBand = reduxState.reduxSetPoints.spReturnTempDeadBand;
    const unitType = reduxState.reduxUnitDesignChars.unitType;

    var spCoolMax = reduxState.reduxSetPoints.spCoolMax;

    var spActiveReturnTempCooling = getSpActiveReturnTempCooling(spReturnResetTemp, spReturnTempDeadBand);
    var spActiveReturnTempHeating = getSpActiveReturnTempHeating(spReturnResetTemp, spReturnTempDeadBand);

    if (unitType === "P-Series") {
        spCoolMax = spActiveReturnTempCooling - 2;
    }

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spReturnResetTemp: spReturnResetTemp,
        spActiveReturnTempCooling: spActiveReturnTempCooling,
        spActiveReturnTempHeating: spActiveReturnTempHeating,
        spCoolMax: spCoolMax
    }))
}

export function updateSpReturnTempDeadBand(event) {
    const spReturnTempDeadBand = event.currentTarget.value;

    const reduxState = store.getState();
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const spReturnResetTemp = reduxState.reduxSetPoints.spReturnResetTemp;
    var spCoolMax = reduxState.reduxSetPoints.spCoolMax;

    var spActiveReturnTempCooling = getSpActiveReturnTempCooling(spReturnResetTemp, spReturnTempDeadBand);
    var spActiveReturnTempHeating = getSpActiveReturnTempHeating(spReturnResetTemp, spReturnTempDeadBand);

    if (unitType === "P-Series") {
        spCoolMax = spActiveReturnTempCooling - 2;
    }

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spReturnTempDeadBand: spReturnTempDeadBand,
        spActiveReturnTempCooling: spActiveReturnTempCooling,
        spActiveReturnTempHeating: spActiveReturnTempHeating,
        spCoolMax: spCoolMax
    }))
}

export function updateSpSpaceResetTemp(event) {
    const reduxState = store.getState();
    const spSpaceResetTemp = event.currentTarget.value;
    const spSpaceTempDeadBand = reduxState.reduxSetPoints.spSpaceTempDeadBand;

    var spActiveSpaceTempCooling = getSpActiveSpaceTempCooling(spSpaceResetTemp, spSpaceTempDeadBand);
    var spActiveSpaceTempHeating = getSpActiveSpaceTempHeating(spSpaceResetTemp, spSpaceTempDeadBand);

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spSpaceResetTemp: spSpaceResetTemp,
            spActiveSpaceTempCooling: spActiveSpaceTempCooling,
            spActiveSpaceTempHeating: spActiveSpaceTempHeating
        }));
}

export function updateSpSpaceTempDeadBand(event) {
    const spSpaceTempDeadBand = event.currentTarget.value;

    const reduxState = store.getState();
    var spSpaceResetTemp = reduxState.reduxSetPoints.spSpaceResetTemp;

    var spActiveSpaceTempCooling = getSpActiveSpaceTempCooling(spSpaceResetTemp, spSpaceTempDeadBand);
    var spActiveSpaceTempHeating = getSpActiveSpaceTempHeating(spSpaceResetTemp, spSpaceTempDeadBand);

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS', {
        spSpaceTempDeadBand: spSpaceTempDeadBand,
        spActiveSpaceTempCooling: spActiveSpaceTempCooling,
        spActiveSpaceTempHeating: spActiveSpaceTempHeating
    }))

}

export function updateSpDehumMin(event) {
    const spDehumMin = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spDehumMin: spDehumMin,
        }));

}

export function updateSpHeatingLockout(event) {
    const spHeatingLockout = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spHeatingLockout: spHeatingLockout
        }));
}

export function updateSpPostHeatingLockout(event) {
    const spPostHeatingLockout = event.currentTarget.value;

    store.dispatch(updateReduxAction('UPDATE_SETPOINTS',
        {
            spPostHeatingLockout: spPostHeatingLockout
        }));
}