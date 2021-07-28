
export function getBmsSupplyAirHumidity(unitType, humidifierType) {

    if (humidifierType === "Steam Manifold" ||
        unitType === "D-Series") {
        return true;
    }
    return false;

}


export function getBmsOutsideAirHumidity(economizerControl, reheatingType, dehumidificationControl) {

    if (
        (
            economizerControl === "Outside Enthalpy < Enthalpy Setpoint" ||
            economizerControl === "Outside Enthalpy < Return Enthalpy" ||
            economizerControl === "Outside Enthalpy < Space Enthalpy" ||
            reheatingType !== "None"
        )
        ||
        (
            dehumidificationControl === "Outside Dew Point > Dehumidification Set Point" ||
            dehumidificationControl === "Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point"
        )
    ) {
        return true;
    }
    return false;

}

export function getBmsReturnAirTemp(temperatureControl, unitType, dehumidificationControl, economizerControl) {

    if (
        unitType === "P-Series"
        ||
        temperatureControl === "Supply Discharge w/ Return Reset"
        ||
        (
            dehumidificationControl === "Return Relative Humidity > Dehumidification Set Point" ||
            dehumidificationControl === "Return Dew Point > Dehumidification Set Point" ||
            dehumidificationControl === "Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point"
        )
        ||
        (
            economizerControl === "Outside Dry Bulb < Return Dry Bulb" ||
            economizerControl === "Outside Enthalpy < Return Enthalpy"
        )
    ) {

        return true;
    }
    return false;

}

export function getBmsReturnAirHumidity(economizerControl, unitType, dehumidificationControl, humidificationControl) {

    if (
        unitType === "P-Series"
        ||
        economizerControl === "Outside Enthalpy < Return Enthalpy"
        ||
        (
            dehumidificationControl === "Return Relative Humidity > Dehumidification Set Point" ||
            dehumidificationControl === "Return Dew Point > Dehumidification Set Point" ||
            dehumidificationControl === "Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point"
        )
        ||
        humidificationControl === "Return Reset (%RH)"
    ) {
        return true;
    }

    return false;

}

export function getBmsExhaustAirTemp(unitType, energyRecoveryType) {
    if (energyRecoveryType === "None" || energyRecoveryType === "" || unitType === "D-Series") {
        return false;
    }
    return true;
}

export function getBmsRegenerativeAirInletTemp(unitType, energyRecoveryType) {
    if (unitType === "D-Series" && energyRecoveryType === "Enthalpy Wheel") {
        return true;
    }
    return false;
}

export function getBmsSpaceAirTemp(temperatureControl, economizerControl, dehumidificationControl) {

    if (
        temperatureControl === "Supply Discharge w/ Space Reset"
        ||
        (
            economizerControl === "Outside Dry Bulb < Space Dry Bulb" ||
            economizerControl === "Outside Enthalpy < Space Enthalpy"
        )
        ||
        (
            dehumidificationControl === "Space Relative Humidity > Dehumidification Set Point" ||
            dehumidificationControl === "Space Dew Point > Dehumidification Set Point" ||
            dehumidificationControl === "Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point"
        )
    ) {
        return true;
    } else {
        return false;
    }
}

export function getBmsSpaceAirHumidity(economizerControl, dehumidificationControl, humidificationControl) {

    if (
        humidificationControl === "Space Reset (%RH)"
        ||
        (
            economizerControl === "Outside Dry Bulb < Space Dry Bulb" ||
            economizerControl === "Outside Enthalpy < Space Enthalpy"
        )
        ||
        (
            dehumidificationControl === "Space Relative Humidity > Dehumidification Set Point" ||
            dehumidificationControl === "Space Dew Point > Dehumidification Set Point" ||
            dehumidificationControl === "Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point"
        )
    ) {
        return true;
    }
    return false;

}

export function getBmsCoolingLeavingAirTemp(reheatingType, coolingType) {
    if (reheatingType === "None" && coolingType === "None") {
        return false;
    }
    return true;
}

export function getBmsPrecoolingLeavingAirTemp(precoolingType) {
    if (precoolingType === "None") {
        return false;
    }
    return true;
}

export function getBmsPreheatingLeavingAirTemp(preheatingType) {
    if (preheatingType === "None") {
        return false;
    }
    return true;

}

export function getBmsSupplyCfm(supplyFanControl) {
    if (supplyFanControl === "Supply CFM") {
        return true;
    }
    return false;
}

export function getBmsSupplyDuctStaticPressure(supplyFanControl) {
    if (supplyFanControl === "Duct Static Pressure") {
        return true;
    }
    return false;
}

export function getBmsReturnCfm(returnFanControl) {
    if (returnFanControl === "Return CFM") {
        return true;
    }
    return false;
}

export function getBmsExhaustCfm(exhaustFanControl) {
    if (exhaustFanControl === "Exhaust CFM") {
        return true;
    }
    return false;
}

export function getBmsReturnDuctStaticPressure(returnFanControl) {
    if (returnFanControl === "Duct Static Pressure") {
        return true;
    }
    return false;
}

export function getBmsExhaustDuctStaticPressure(exhaustFanControl) {
    if (exhaustFanControl === "Duct Static Pressure") {
        return true;
    }
    return false;
}

export function getBmsSpaceStaticPressure(exhaustFanControl, returnFanControl, unitType) {
    if (exhaustFanControl === "Space Static Pressure" ||
        returnFanControl === "Space Static Pressure" ||
        unitType === "P-Series") {
        return true;
    }
    return false;

}

export function getBmsOutsideAirCfm(minOacontrol) {
    if (minOacontrol !== "None" && minOacontrol !== "") {
        return true;
    }
    return false;
}

export function getBmsSpaceCO2(demandControl, temperatureControl, unitConfiguration) {
    if (demandControl && temperatureControl === "Supply Discharge w/ Space Reset" && unitConfiguration !== "100% Outside Air") {
        return true;
    }
    return false;
}

export function getBmsFilterPressureTransducer(filterTransducer) {
    if (filterTransducer === true) {
        return true;
    }
    return false;
}

export function getBmsHxsupplyDifferentialPressure(heatWheelBypass, energyRecoveryType, unitType) {
    if (heatWheelBypass === "Constant Wheel CFM" && energyRecoveryType === "Heat Wheel") {
        if (unitType === "D-Series") {
            return true;
        }
    }
    return false;
}


export function getBmsHxexhaustDifferentialPressure(heatWheelBypass, energyRecoveryType, unitType) {
    if (heatWheelBypass === "Constant Wheel CFM" && energyRecoveryType === "Heat Wheel") {
        if (unitType === "D-Series") {
            return true;
        }
    }
    return false;
}

export function getBmsHeatWheelRotationDetection(wheelRotation, energyRecoveryType) {
    if (wheelRotation === true && energyRecoveryType === "Enthalpy Wheel") {
        return true;
    }
    return false;
}

export function getBmsFreezestat(freezestat) {
    if (freezestat === true) {
        return true;
    }
    return false;
}

export function getBmsDrainCondensate(panSwitch) {
    if (panSwitch === true) {
        return true;
    }
    return false;
}

export function getBmsFilterPressureAnalogInput(filterSwitch) {
    if (filterSwitch === true) {
        return true;
    }
    return false;
}

export function getBmsHighSupplyDuctStatic(highDuct) {
    if (highDuct === true) {
        return true;
    }
    return false;
}

export function getBmsLowReturnDuctStatic(lowDuct) {
    if (lowDuct === true) {
        return true;
    }
    return false;
}

