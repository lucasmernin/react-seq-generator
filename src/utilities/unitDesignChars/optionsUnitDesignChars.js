
export function getHeatingTypeOptions(coolingType, precoolingType, unitConfiguration, unitType) {

  const heatingTypeOptions = ['None', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Steam Coil'];

  if (unitType === "Choose") {
    return heatingTypeOptions;
  }

  if ((coolingType === 'A/R Coil (Heat Pump)' || precoolingType === 'A/R Coil (Heat Pump)') && unitConfiguration !== 'Partial Outside Air (Recirculation)') {
    return ['No Supplemental Heating', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Direct Fired Furnace', 'Steam Coil'];
  }

  if (coolingType === 'A/R Coil (Heat Pump)' || precoolingType === 'A/R Coil (Heat Pump)') {
    return ['No Supplemental Heating', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Steam Coil'];
  }

  if (unitConfiguration !== 'Partial Outside Air (Recirculation)') {
    return ['None', 'Hot Water Coil', 'Indirect Gas Furnace', 'Electric Heater', 'Direct Fired Furnace', 'Steam Coil'];
  }


  return heatingTypeOptions;

}

export function getLabelHeatingType(unitType) {
  if (unitType === "D-Series") {
    return "Regen Heating Type";
  }
  return "Heating Type";
}

export function getLabelReheatingType(unitType) {
  if (unitType === "D-Series") {
    return "Process Air Heating Type";
  }
  return "Re-Heating Type";
}

export function getReheatingTypeOptions(unitType, coolingType, precoolingType) {

  if (unitType === 'Controls Lite') {
    return ['None', 'Hot Gas Reheat'];
  }


  if (coolingType === 'Direct Expansion Coil' || coolingType === 'A/R Coil (Heat Pump)' || precoolingType === 'Direct Expansion Coil' ||
    precoolingType === 'A/R Coil (Heat Pump)') {
    if (unitType === "D-Series") {
      return ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'];
    }
    return ['None', 'Hot Gas Reheat', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace'];
  }
  return ['None', 'Hot Water Coil', 'Electric Heater', 'Steam Coil', 'Indirect Gas Furnace']

}

export function getExhaustReturnFanOptions(unitType, energyRecoveryType) {
  const defaultOptions = ['None', 'Exhaust Fan', 'Return Fan']

  if (unitType === "E-Series" && energyRecoveryType === "Heat Wheel") {
    return ['None', 'Exhaust Fan']
  }

  return defaultOptions;
}







