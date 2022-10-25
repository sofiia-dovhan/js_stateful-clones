'use strict';

/**
 * @param {Object} state
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  const arrayOfStates = [];
  const copyOfState = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        Object.assign(copyOfState, action.extraData);

        break;

      case 'removeProperties':
        for (const keyToRemove of action.keysToRemove) {
          delete copyOfState[keyToRemove];
        }

        break;

      case 'clear':
        for (const key in copyOfState) {
          delete copyOfState[key];
        }

        break;

      default:
        throw new Error('Error');
    }

    arrayOfStates.push({ ...copyOfState });
  }

  return arrayOfStates;
}

module.exports = transformStateWithClones;
