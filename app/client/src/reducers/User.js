import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants'

export const initialUserState = {
  displayName: '',
  isLoggedIn: false,
  userError: false,
  userLoading: false
}

export const User = (state = initialUserState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        userLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        displayName: action.displayName,
        userError: false,
        userLoading: false,
        isLoggedIn: true
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        displayName: '',
        userError: true,
        userLoading: false
      }
    default:
      return state
  }
}
