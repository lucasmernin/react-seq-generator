

export function getMinOaControlOptions(exhaustFanControl) {
  if (exhaustFanControl === "OA CFM +/- Offset") {
    return ['Minimum Outside Air CFM']
  }
  return [
    'None',
    'Minimum Outside Air CFM',
    'Minimum % Design Airflow'
  ]
}
export function getUnoccupiedModeControlOptions(unitType, temperatureControl, unitConfiguration) {

  var unoccupiedModeControlOptions = [
    'None',
    'Unit is Off',
    'Reduced Airflow'
  ];

  if (unitType === "P-Series") {
    return unoccupiedModeControlOptions = ['None', 'Reduced Airflow'];
  }

  if (temperatureControl === "Supply Discharge w/ Space Reset") {
    unoccupiedModeControlOptions = [
      'None',
      'Unit is Off',
      'Reduced Airflow',
      'Night Setback w/ Supply Fan Standby',
      'Night Setback w/ Supply Fan On'
    ];
  }

  if (temperatureControl === "Supply Discharge w/ Return Reset") {
    unoccupiedModeControlOptions = [
      'None',
      'Unit is Off',
      'Reduced Airflow',
      'Night Setback w/ Supply Fan On'
    ];
  }

  if (unitConfiguration === "100% Outside Air") {
    unoccupiedModeControlOptions = [
      'None',
      'Unit is Off',
      'Reduced Airflow',
    ];
  }

  if (unitConfiguration !== "100% Outside Air") {
    if (unitType === "C-Series" || unitType === "E-Series") {
      unoccupiedModeControlOptions.push('Full Recirc Mode');
    }
  }



  return unoccupiedModeControlOptions;
}

export function getSupplyFanControlOptions(unitType, appType) {
  const isVariableAirVolume = appType === 'Variable Air Volume';


  var supplyFanControlOptionsBase = ['Duct Static Pressure', 'Hardwired Signal (0-10 VDC)', 'Single Zone'];


  if (appType === "Constant Air Volume") {
    supplyFanControlOptionsBase = ['Duct Static Pressure', 'Hardwired Signal (0-10 VDC)'];
  }

  const supplyFanControlOptionsExtra = ['Manual Balance', 'Supply CFM'];
  // const supplyFanControlOptionsExtraVariable = ['Supply CFM'];
  const defaultOptions = isVariableAirVolume ? supplyFanControlOptionsBase : supplyFanControlOptionsBase.concat(supplyFanControlOptionsExtra);

  if (unitType === 'P-Series') {
    return ['Manual Balance'];
  }
  if (unitType === 'D-Series') {
    var extraOptions = ['Space Static Pressure'];
    return defaultOptions.concat(extraOptions);
  }


  return defaultOptions;
}

export function getExhaustFanControlOptions(unitType, appType, supplyFanControl) {
  if (unitType === 'P-Series') {
    return [
      'Pool Space vs Adjacent Space Differential Pressure',
      'Pool Space vs Adj Space Diff Press and Outdoor Diff Press'
    ];
  }

  if (unitType === 'D-Series') {
    if (supplyFanControl !== "Manual Balance") {
      return [
        'Manual Balance',
        'Space Static Pressure',
        'Duct Static Pressure',
        'Exhaust CFM',
        'Hardwired Signal (0-10 VDC)',
        'Track Supply Fan',
        'OA CFM +/- Offset'
      ];
    }
    return [
      'Manual Balance',
      'Space Static Pressure',
      'Duct Static Pressure',
      'Exhaust CFM',
      'Hardwired Signal (0-10 VDC)',
      'OA CFM +/- Offset'
    ];
  }

  if (appType === 'Constant Air Volume') {
    if (supplyFanControl !== "Manual Balance") {
      return [
        'Manual Balance',
        'Space Static Pressure',
        'Duct Static Pressure',
        // 'Duct Static Pressure w/ Tracking',
        'Exhaust CFM',
        'Track Supply Fan',
        'OA CFM +/- Offset'
      ];
    }
    return [
      'Manual Balance',
      'Space Static Pressure',
      'Duct Static Pressure',
      'Exhaust CFM',
      'Hardwired Signal (0-10 VDC)',
      'OA CFM +/- Offset'
    ];
  }

  if (appType === 'Variable Air Volume') {
    if (supplyFanControl !== "Manual Balance") {
      return [
        'Space Static Pressure',
        'Duct Static Pressure',
        // 'Duct Static Pressure w/ Tracking',
        'Exhaust CFM',
        'Hardwired Signal (0-10 VDC)',
        'Track Supply Fan',
        'OA CFM +/- Offset'
      ];
    }
    return [
      'Manual Balance',
      'Space Static Pressure',
      'Duct Static Pressure',
      'Exhaust CFM',
      'Hardwired Signal (0-10 VDC)',
      'OA CFM +/- Offset'
    ];
  }


}

export function getReturnFanControlOptions(appType, supplyFanControl, unitType) {

  if (unitType === 'D-Series') {
    if (supplyFanControl !== "Manual Balance") {
      return [
        'Manual Balance',
        'Space Static Pressure',
        'Duct Static Pressure',
        'Return CFM',
        'Hardwired Signal (0-10 VDC)',
        'Track Supply Fan',
      ];
    }
    return [
      'Manual Balance',
      'Space Static Pressure',
      'Duct Static Pressure',
      'Return CFM',
      'Hardwired Signal (0-10 VDC)',
    ];
  }

  if (appType === 'Constant Air Volume') {
    if (supplyFanControl !== "Manual Balance") {
      return [
        'Manual Balance',
        'Space Static Pressure',
        'Duct Static Pressure',
        // 'Duct Static Pressure w/ Tracking',
        'Return CFM',
        'Hardwired Signal (0-10 VDC)',
        'Track Supply Fan',
      ];
    }
    return [
      'Manual Balance',
      'Space Static Pressure',
      'Duct Static Pressure',
      'Return CFM',
      'Hardwired Signal (0-10 VDC)',

    ];
  }

  if (appType === 'Variable Air Volume') {
    if (supplyFanControl !== "Manual Balance") {
      return [
        'Space Static Pressure',
        'Duct Static Pressure',
        // 'Duct Static Pressure w/ Tracking',
        'Return CFM',
        'Hardwired Signal (0-10 VDC)',
        'Track Supply Fan'
      ];
    }
    return [
      'Space Static Pressure',
      'Duct Static Pressure',
      'Return CFM',
      'Hardwired Signal (0-10 VDC)'
    ];
  }

}




export function getOtherFanControlOptions(unitType, appType, supplyFanControl, exhaustReturnFan) {

  var valueExhaustReturnFan;

  if (exhaustReturnFan === "Exhaust Fan") {
    valueExhaustReturnFan = "Exhaust CFM";
  }

  if (exhaustReturnFan === "Return Fan") {
    valueExhaustReturnFan = "Return CFM";
  }

  if (unitType !== "D-Series") {
    if (exhaustReturnFan === 'None') {
      return [];
    }
  }


  if (unitType === 'P-Series') {
    return ['Space Pressure', 'Space to Ambient'];
  }

  if (appType === 'Constant Air Volume') {
    return ['Space Static Pressure', 'Manual Balance', 'Duct Static Pressure', valueExhaustReturnFan, 'Hardwired Signal (0-10 VDC)'];
  }
  if (appType === 'Variable Air Volume') {
    var defaultOptions = ['Space Static Pressure', 'Duct Static Pressure', valueExhaustReturnFan, 'Hardwired Signal (0-10 VDC)', 'Track Supply Fan'];

    if (supplyFanControl === 'Duct Static Pressure' && exhaustReturnFan === 'Return Fan') {
      var extraOptions = ['Manual Balance'];
      return defaultOptions.concat(extraOptions);
    }
    if (exhaustReturnFan === 'Exhaust Fan') {
      extraOptions = ['Manual Balance', 'Duct Static Pressure w/ Tracking'];
      return defaultOptions.concat(extraOptions);
    }
    return defaultOptions;
  }


  return []; //default
}


export function getTemperatureControlOptions(unitType, supplyFanControl, exhaustReturnFan, unitConfiguration) {

  const defaultOptions = ['Supply Discharge', 'Supply Discharge w/ Return Reset', 'Supply Discharge w/ Space Reset', 'Supply Discharge w/ Outside Air Reset'];

  if (unitType === 'P-Series') {
    return ['Supply Discharge w/ Return Reset', 'Supply Discharge w/ Space Reset'];
  }
  if (unitType === 'D-Series') {
    if (unitConfiguration !== '100% Outside Air' || exhaustReturnFan !== 'None') {
      return ['Supply Discharge', 'Supply Discharge w/ Return Reset', 'Supply Discharge w/ Space Reset'];
    }
  }
  if (supplyFanControl === 'Single Zone') {
    if (unitConfiguration !== '100% Outside Air' || exhaustReturnFan !== 'None') {
      return ['Supply Discharge w/ Return Reset', 'Supply Discharge w/ Space Reset'];
    }
  }
  return defaultOptions;
}

export function getUnoccupiedDehumidificationControlOptions(unoccupiedModeControl) {

  if (unoccupiedModeControl === "Night Setback w/ Supply Fan Standby") {
    return [
      'Space Dew Point > Dehumidification Set Point',
      'Space Relative Humidity > Dehumidification Set Point',
      'Space Dew Point > Dehum Set Point or Space Relative Humidity > Dehum Set Point'
    ]
  }

  if (unoccupiedModeControl === "Night Setback w/ Supply Fan On" ||
    unoccupiedModeControl === "Full Recirc Mode") {
    return [
      'Return Dew Point > Dehumidification Set Point',
      'Space Dew Point > Dehumidification Set Point',
      'Return Relative Humidity > Dehumidification Set Point',
      'Space Relative Humidity > Dehumidification Set Point',
      'Return Dew Point > Dehum Set Point or Return Relative Humidity > Dehum Set Point',
      'Space Dew Point > Dehum Set Point or Space Relative Humidity > Dehum Set Point'
    ]
  }

  if (unoccupiedModeControl === "Reduced Airflow") {
    return [
      'Return Dew Point > Dehumidification Set Point',
      'Return Relative Humidity > Dehumidification Set Point',
      'Return Dew Point > Dehum Set Point or Return Relative Humidity > Dehum Set Point'
    ]
  }

}

export function getDehumidificationControlOptions(unitType, temperatureControl) {

  // List of possible options
  // 'Return Dew Point > Dehumidification Set Point',
  // 'Space Dew Point > Dehumidification Set Point',
  // 'Outside Dew Point > Dehumidification Set Point',
  // 'Return Relative Humidity > Dehumidification Set Point',
  // 'Space Relative Humidity > Dehumidification Set Point',
  // 'Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point',
  // 'Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point'    


  if (temperatureControl === "Supply Discharge w/ Space Reset") {
    return [
      'Space Dew Point > Dehumidification Set Point',
      'Outside Dew Point > Dehumidification Set Point',
      'Space Relative Humidity > Dehumidification Set Point',
      'Space Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point',
    ];
  } else {
    return [
      'Return Dew Point > Dehumidification Set Point',
      'Outside Dew Point > Dehumidification Set Point',
      'Return Relative Humidity > Dehumidification Set Point',
      'Return Dew Point > Dehum Set Point or OA Dew Point > Dehum Set Point'
    ]
  }
}


export function getEconomizerControlOptions(temperatureControl, unitType, unitConfiguration) {
  // List of all Options
  // 'None',
  // 'Outside Dry Bulb < Dry Bulb Setpoint',
  // 'Outside Enthalpy < Enthalpy Setpoint',
  // 'Outside Dry Bulb < Return Dry Bulb',
  // 'Outside Dry Bulb < Space Dry Bulb',
  // 'Outside Enthalpy < Return Enthalpy',
  // 'Outside Enthalpy < Space Enthalpy',
  // 'OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point',
  // 'OA Enthalpy < Space Enthalpy + OA Dry Bulb < Set Point'


  if (unitType === "C-Series" && (unitConfiguration === "100% Outside Air" || unitConfiguration === "100% Outside Air w/ Unoccupied Recirc Damper")) {
    return ['None']
  }

  if (temperatureControl === 'Supply Discharge w/ Return Reset') {
    if (unitType === "E-Series" && (unitConfiguration === "100% Outside Air" || unitConfiguration === "100% Outside Air w/ Unoccupied Recirc Damper")) {
      return [
        'Outside Dry Bulb < Dry Bulb Setpoint',
        'Outside Enthalpy < Enthalpy Setpoint',
        'Outside Dry Bulb < Return Dry Bulb',
        'Outside Enthalpy < Return Enthalpy',
        'OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point',
        'OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point'
      ]
    }

    return [
      'None',
      'Outside Dry Bulb < Dry Bulb Setpoint',
      'Outside Enthalpy < Enthalpy Setpoint',
      'Outside Dry Bulb < Return Dry Bulb',
      'Outside Enthalpy < Return Enthalpy',
      'OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point',
      'OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point'

    ]
  }

  if (temperatureControl === 'Supply Discharge w/ Space Reset') {
    if (unitConfiguration === "100% Outside Air" || unitConfiguration === "100% Outside Air w/ Unoccupied Recirc Damper") {
      return [
        'Outside Dry Bulb < Dry Bulb Setpoint',
        'Outside Enthalpy < Enthalpy Setpoint',
        'Outside Dry Bulb < Space Dry Bulb',
        'Outside Enthalpy < Space Enthalpy',
        'OA Enthalpy < Space Enthalpy + OA Dry Bulb < Set Point',
        'OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point'

      ]
    }
    return [
      'None',
      'Outside Dry Bulb < Dry Bulb Setpoint',
      'Outside Enthalpy < Enthalpy Setpoint',
      'Outside Dry Bulb < Space Dry Bulb',
      'Outside Enthalpy < Space Enthalpy',
      'OA Enthalpy < Space Enthalpy + OA Dry Bulb < Set Point',
      'OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point'

    ]
  }

  return [
    'None',
    'Outside Dry Bulb < Dry Bulb Setpoint',
    'Outside Enthalpy < Enthalpy Setpoint',
    'Outside Dry Bulb < Return Dry Bulb',
    'Outside Enthalpy < Return Enthalpy',
    'OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point',
    'OA Enthalpy < Enthalpy Set Point + OA Dry Bulb < Set Point'
  ];

  // if (unitType === "E-Series" && (unitConfiguration === "100% Outside Air" || unitConfiguration === "100% Outside Air w/ Unoccupied Recirc Damper")) {
  //   return [
  //     'Outside Dry Bulb < Dry Bulb Setpoint',
  //     'Outside Enthalpy < Enthalpy Setpoint',
  //     'Outside Dry Bulb < Return Dry Bulb',
  //     'Outside Dry Bulb < Space Dry Bulb',
  //     'Outside Enthalpy < Return Enthalpy',
  //     'Outside Enthalpy < Space Enthalpy',
  //     'OA Enthalpy < RA Enthalpy + OA Dry Bulb < Set Point',
  //     'OA Enthalpy < Space Enthalpy + OA Dry Bulb < Set Point'
  //   ]
  // }


}

export function getAppTypeOptions(unitType) {

  if (unitType === "C-Series" || unitType === "E-Series") {
    return ['Constant Air Volume', 'Variable Air Volume'];
  }

  if (unitType === "P-Series") {
    return ['Standard', 'Sensible Only (Elevation)'];
  }

}
