

export function getSpActiveSpaceTempCooling(spSpaceResetTemp, spSpaceTempDeadBand) {

  var x = spSpaceTempDeadBand / 2;

  var y = (+x) + (+spSpaceResetTemp);

  if (spSpaceTempDeadBand && spSpaceResetTemp) {
    return y.toString();
  }

  return '##';

}

export function getSpActiveSpaceTempHeating(spSpaceResetTemp, spSpaceTempDeadBand) {

  var x = spSpaceTempDeadBand / 2;

  var y = spSpaceResetTemp - x;
  if (spSpaceTempDeadBand && spSpaceResetTemp) {
    return y.toString();
  }

  return '##';
}

export function getSpActiveReturnTempCooling(spReturnResetTemp, spReturnTempDeadBand) {

  var x = spReturnTempDeadBand / 2;

  var y = (+x) + (+spReturnResetTemp);

  if (spReturnTempDeadBand && spReturnResetTemp) {
    return y.toString();
  }

  return '##';

}

export function getSpActiveReturnTempHeating(spReturnResetTemp, spReturnTempDeadBand) {

  var x = spReturnTempDeadBand / 2;

  var y = spReturnResetTemp - x;
  if (spReturnTempDeadBand && spReturnResetTemp) {
    return y.toString();
  }

  return '##';
}



export function getSpDefrost(unitType, energyRecoveryType) {

  if (energyRecoveryType === "Flat Plate") {
    if (unitType === "P-Series") {
      return (+38).toString();
    }
    return (+36).toString();
  } else {
    return (+20).toString();
  }
}



export function getLabelSpDehumCoilMin(unitType) {
  if (unitType === "P-Series") {
    return "Pool Worksheet Coil LAT";
  }
  return null;
}



