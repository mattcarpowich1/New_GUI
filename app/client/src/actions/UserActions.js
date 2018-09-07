import { fakeUser } from '../mock_data'

export const loginUser = () => {
  const { displayName } = fakeUser

  return {
    type: 'LOGIN_SUCCESS',
    displayName
  }
}
