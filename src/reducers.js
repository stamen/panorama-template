import { combineReducers } from 'redux';
import * as actions from './actions';

const identity = (state, action) => state;

export default {

	map (state = {}, action) {
		switch (action.type) {

			case actions.MAP_MOVED:
				return Object.assign({}, state, action.value);

			default:
				return {
					...state
				};

		}
	},

	exampleComponent: combineReducers({

		inited (state = false, action) {
			switch (action.type) {

				case actions.EXAMPLE_INITED:
					return true;

				default:
					return state;

			}
		}, 

		count (state = 0, action) {
			switch (action.type) {

				case actions.EXAMPLE_INCREMENT:
					return state + 1;

				case actions.EXAMPLE_DECREMENT:
					return state - 1;

				default:
					return state;

			}
		}

	})


};

// Default values passed into reducers on store initialization (in `main.jsx`).
// These values will override the defaults specified in each reducer's argument list,
// and can be merged into a set of initial state on store init if desired.
export const initialState = {

	map: {
		zoom: 5,
		center: [-3.300, 2.800]
	},
	
	exampleComponent: {
		inited: false,
		count: 0
	}

};