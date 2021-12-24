import { combineReducers } from "redux";
import homeRedecre from "./homeReducer";

const reducers = combineReducers({
    home: homeRedecre,
});

export default reducers;