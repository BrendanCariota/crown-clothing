import { createSelector } from "reselect";
import { StaticRouter } from "react-router-dom";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
