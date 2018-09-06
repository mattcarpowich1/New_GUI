import { loginUser } from '../actions'
import { User, initialUserState } from './User.js'

test('Basic Login', () => {
  const newState = User(initialUserState, loginUser())
  expect(newState).toEqual({
    displayName: 'Matt Carpowich',
    userError: false
  })
})