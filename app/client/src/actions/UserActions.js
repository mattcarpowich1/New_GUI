export const loginUser = () => {
  const userData = {
    displayName: 'Matt Carpowich'
  }

  return {
    type: 'LOGIN_SUCCESS',
    name: userData.displayName
  }
}
