export const initialUserState = {
  displayName: '',
  userError: false
}

export const User = (state = initialUserState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        displayName: action.name
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        userError: true
      }
    default:
      return state
  }
}
