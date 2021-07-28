import { store } from '../redux/store';
import { updateReduxAction } from '../redux/actions';





export function updateTemperatureControlRelatedPlaceHolders(temperatureControl) {

    const reduxState = store.getState();
    const unitType = reduxState.reduxUnitDesignChars.unitType;
    const dehumidificationControl = reduxState.reduxControlChars.dehumidificationControl;


    const phSupplyTemp = getPhSupplyTemp(unitType, temperatureControl);
    const phDehumTemp = getPhDehumTemp(temperatureControl, unitType, dehumidificationControl);

    store.dispatch(updateReduxAction('UPDATE_PLACEHOLDERS',
        {
            phSupplyTemp: phSupplyTemp,
            phDehumTemp: phDehumTemp
        }));
}


export function getPhReliefFan(unitType) {

    if (unitType === "P-Series") {
        return "default 0.04";
    } else {
        return "##";
    }
}

export function getPhSupplyTemp(unitType, temperatureControl) {

    if (unitType === "P-Series") {
        if (temperatureControl === "Supply Discharge w/ Return Reset") {
            return "Design Return Temperature";
        }
        if (temperatureControl === "Supply Discharge w/ Space Reset") {
            return "Design Space Temperature";
        }
    } else {
        return '##';
    }
}



export function getPhDefrost(energyRecoveryType) {

    if (energyRecoveryType === "Flat Plate") {
        return "default 36";
    } else {
        return "default 20";
    }
}

export function getPhCoolOa(unitConfiguration) {

    if (unitConfiguration === "Outside Dry Bulb < Dry Bulb Setpoint") {
        return "default 65";
    }
    if (unitConfiguration === "Outside Enthalpy < Enthalpy Setpoint") {
        return "default 23";
    }
}

export function getPhPreheat(unitType) {
    if (unitType === "D-Series") {
        return "default 50";
    } else {
        return "default 10";
    }
}



export function getPhDehumTemp(unitType, temperatureControl, dehumidificationControl) {

    if (unitType === "P-Series") {
        if (temperatureControl === "Supply Discharge w/ Return Reset") {
            return "Design Return Dew Point";
        }
        if (temperatureControl === "Supply Discharge w/ Space Reset") {
            return "Design Space Dew Point";
        }
    }

    if (unitType === "D-Series") {
        if (dehumidificationControl === "Return Relative Humidity > Dehumidification Set Point" ||
            dehumidificationControl === "Space Relative Humidity > Dehumidification Set Point") {
            return "default 50";
        } else {
            return "default 32";
        }
    }

    return '##';
}

export function getPhDehumMin(unitType) {
    if (unitType === "P-Series") {
        return "Pool WorkSheet Coil Lat";
    }
    return "default 50";

}

export function getPhCoolMin(unitType) {
    if (unitType === "P-Series") {
        return "##";
    }
    return "default 50";

}

export function getPhCoolMax(unitType) {
    if (unitType === "P-Series") {
        return "default 80";
    }
    return "default 100";

}

export function getPhHeatMin(unitType) {
    if (unitType === "P-Series") {
        return "default 75";
    }
    return "default 50";

}

export function getPhHeatMax(unitType) {
    if (unitType === "P-Series") {
        return "default 110";
    }
    return "default 100";

}