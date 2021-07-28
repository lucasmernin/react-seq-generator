import { store } from '../redux/store';
import '../utilities/handlebarFunctions';
import HandleBars from 'handlebars';

export function getFinalHTML() {
    const reduxState = store.getState();
    const reduxUnitDesignChars = reduxState.reduxUnitDesignChars;
    const reduxControlChars = reduxState.reduxControlChars;
    const reduxDetailedControlConfig = reduxState.reduxDetailedControlConfig;
    const reduxAdditionalSensors = reduxState.reduxAdditionalSensors;
    const reduxSensors = reduxState.reduxSensors;
    const reduxSetPoints = reduxState.reduxSetPoints;
    const reduxJobDetails = reduxState.reduxJobDetails;

    var data = { ...reduxUnitDesignChars, ...reduxControlChars, ...reduxDetailedControlConfig, ...reduxSetPoints, ...reduxSensors, ...reduxAdditionalSensors, ...reduxJobDetails };


    // var html = document.getElementById('sequence-templatezz').innerHTML;

    var html = document.getElementById('handlebars-test').innerHTML;



    var templateScript = HandleBars.compile(html);

    var finalHTML = templateScript(data);

    return finalHTML;

}

export function getVariableValuesFinalHTML() {
    const reduxState = store.getState();
    const reduxUnitDesignChars = reduxState.reduxUnitDesignChars;
    const reduxControlChars = reduxState.reduxControlChars;
    const reduxDetailedControlConfig = reduxState.reduxDetailedControlConfig;
    const reduxAdditionalSensors = reduxState.reduxAdditionalSensors;
    const reduxSensors = reduxState.reduxSensors;
    const reduxSetPoints = reduxState.reduxSetPoints;
    const reduxJobDetails = reduxState.reduxJobDetails;

    var data = { ...reduxUnitDesignChars, ...reduxControlChars, ...reduxDetailedControlConfig, ...reduxSetPoints, ...reduxSensors, ...reduxAdditionalSensors, ...reduxJobDetails };

    var html = document.getElementById('variable-values').innerHTML;

    var templateScript = HandleBars.compile(html);

    var variableValuesFinalHTML = templateScript(data);

    return variableValuesFinalHTML;
}