import { combineReducers } from "redux";
import exampleReducer from './exampleReducer'

/**
 * Order alphabetically to find easier each reducer
 */
const rootReducer = combineReducers({
  exampleReducer
});

export default rootReducer;
