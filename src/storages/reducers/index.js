import { combineReducers } from "redux";
import auth from './auth';
import user_regris from "./regrister";
import menu from './getMyRecipes';
import newMenu from "./getNewMenu";
import detail from "./getDetailRecipes";
import search_menu from "./getSearchMenu";
import delete_menu from "./deleteMenu";
import myprofile from "./getMyProfile";
import add_menu from "./addMenu";
import updateMenu from "./updateMenu";
import ForgotPwd from "./updatePassword";
import ConfirmOtp from "./getConfirmOTP";
import user_resetPwd from './resetPassword';
const appReducers = combineReducers({
  auth,
  user_regris,
  menu,
  newMenu,
  detail,
  search_menu,
  delete_menu,
  myprofile,
  add_menu,
  updateMenu,
  ForgotPwd,
  ConfirmOtp,
  user_resetPwd,
});
export default appReducers;