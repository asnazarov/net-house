import {combineReducers} from "redux";

import characters from './characters.js';
import card from './card.js';

const rootReduser = combineReducers({
  characters,
  card,
})

export default rootReduser