import { combineReducers } from 'redux';
import * as actions from './actions';

const identity = (state, action) => state;

export default {

	map (state = {}, action) {
		switch (action.type) {
			case actions.MAP_MOVED:
				return {
					...state,
					...action.value
				};
			default:
				return {
					...state
				};
		}
	},

	itemSelector: combineReducers({

		title (state = '', action) {
			switch (action.type) {
				case actions.ITEM_SELECTOR_SET_TITLE:
					return action.value;
				default:
					return state;
			}
		},

		items (state = null, action) {
			switch (action.type) {
				case actions.ITEM_SELECTOR_SET_ITEMS:
					return action.value;
				default:
					return state;
			}
		},

		selectedItem (state = null, action) {
			switch (action.type) {
				case actions.ITEM_SELECTED:
					return action.value;
				default:
					return state;
			}
		}

	}),

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
		zoom: 6,
		center: [39.098, -120.039]
	},

	itemSelector: {
		title: 'Select a tileset',
		items: [
			{ "id": 1, "name": "Toner", "url": "http://tile.stamen.com/toner/{z}/{x}/{y}.png" },
			{ "id": 2, "name": "Toner Background", "url": "http://tile.stamen.com/toner-background/{z}/{x}/{y}.png" },
			{ "id": 3, "name": "Toner Lite", "url": "http://tile.stamen.com/toner-lite/{z}/{x}/{y}.png" },
			{ "id": 4, "name": "Terrain", "url": "http://tile.stamen.com/terrain/{z}/{x}/{y}.png" },
			{ "id": 5, "name": "Terrain Background", "url": "http://tile.stamen.com/terrain-background/{z}/{x}/{y}.png" },
			{ "id": 6, "name": "Watercolor", "url": "http://tile.stamen.com/watercolor/{z}/{x}/{y}.png" },
			{ "id": 7, "name": "Satellite", "url": "http://tile.stamen.com/terrain-background/{z}/{x}/{y}.png" },
			{ "id": 8, "name": "Positron", "url": "http://cartodb-basemaps-a.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png" },
			{ "id": 9, "name": "Dark Matter", "url": "http://cartodb-basemaps-a.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png" }
		]
	},

	exampleComponent: {
		inited: false,
		count: 0
	}

};