const UserActionTypes = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
  EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
  SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS', // represents both google and email sign-in
  SIGN_IN_FAILURE: 'SIGN_IN_FAILURE', // represents both google and email sign-in
  CHECK_USER_SESSION: 'CHECK_USER_SESSION',
  SIGN_OUT_START: 'SIGN_OUT_START',
  SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
  SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',
  SIGN_UP_START: 'SIGN_UP_START',
  SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
  SIGN_UP_FAILURE: 'SIGN_UP_FAILURE',
};

export default UserActionTypes;

// 1. Add Action type in .types.js
// 2. Define Actions for the new action types in .actions.js
// 3. Add the corresponding Sagas in .sagas.js
// 4. modify the component by adding the _START to mapDispatchToProps = dispatch => ({...})
// 5. add cases in .reducer.js