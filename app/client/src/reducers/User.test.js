import { User, initialUserState } from './User.js'
import { fakeUser } from '../mock_data'
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../constants'

test('User Login', () => {
  const loadingState = User(initialUserState, {
    type: LOGIN_REQUEST
  })

  expect(loadingState).toEqual({
    displayName: '',
    userError: false,
    userLoading: true
  })

  const successfulState = User(initialUserState, {
    type: LOGIN_SUCCESS,
    ...fakeUser
  })

  expect(successfulState).toEqual({
    displayName: 'Matt Carpowich',
    userError: false,
    userLoading: false
  })

  const failedState = User(initialUserState, {
    type: LOGIN_FAILURE
  })

  expect(failedState).toEqual({
    displayName: '',
    userError: true,
    userLoading: false
  })
})
