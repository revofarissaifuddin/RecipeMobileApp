import { combineReducers } from "redux";
import auth from './auth';
import user_regris from "./regrister";
import menu from './getMyRecipes';
import newMenu from "./getNewMenu";
import detail from "./getDetailRecipes";
import search_menu from "./getSearchMenu";
import delete_menu from "./deleteMenu";
const appReducers = combineReducers({
  auth,
  user_regris,
  menu,
  newMenu,
  detail,
  search_menu,
  delete_menu
});
export default appReducers;