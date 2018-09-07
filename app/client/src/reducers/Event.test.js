import { Event, initialEventState } from './Event.js'

import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  END_EVENT_REQUEST,
  END_EVENT_SUCCESS,
  END_EVENT_FAILURE
} from '../constants'

test('Create an event', () => {
  const name = `Matt's Party`
  const host = 'Matt Carpowich'

  const createEventRequestState = Event(initialEventState, {
    type: CREATE_EVENT_REQUEST
  })

  expect(createEventRequestState).toEqual({
    isActive: false,
    isHost: false,
    eventName: '',
    eventHost: '',
    createEventLoading: true,
    createEventError: false,
    endEventLoading: false,
    endEventError: false
  })

  const createEventSuccessState = Event(initialEventState, {
    type: CREATE_EVENT_SUCCESS,
    eventName: name,
    eventHost: host
  })

  expect(createEventSuccessState).toEqual({
    isActive: true,
    isHost: true,
    eventName: name,
    eventHost: host,
    createEventLoading: false,
    createEventError: false,
    endEventLoading: false,
    endEventError: false
  })

  const createEventFailureState = Event(initialEventState, {
    type: CREATE_EVENT_FAILURE
  })

  expect(createEventFailureState).toEqual({
    isActive: false,
    isHost: false,
    eventName: '',
    eventHost: '',
    createEventLoading: false,
    createEventError: true,
    endEventLoading: false,
    endEventError: false
  })
})

test('Host ends an event', () => {
  const name = `Matt's Party`
  const host = 'Matt Carpowich'

  const testHostActiveEventState = {
    isActive: true,
    isHost: true,
    eventName: name,
    eventHost: host,
    createEventLoading: false,
    createEventError: false,
    endEventLoading: false,
    endEventError: false
  }

  const testEndEventRequestState = Event(testHostActiveEventState, {
    type: END_EVENT_REQUEST
  })

  expect(testEndEventRequestState).toEqual({
    ...testHostActiveEventState,
    endEventLoading: true
  })

  const testEventSuccessState = Event(testEndEventRequestState, {
    type: END_EVENT_SUCCESS
  })

  expect(testEventSuccessState).toEqual({
    ...initialEventState
  })

  const testEventFailureState = Event(testEndEventRequestState, {
    type: END_EVENT_FAILURE
  })

  expect(testEventFailureState).toEqual({
    ...testHostActiveEventState,
    endEventError: true
  })
})
