import {
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAILURE,
  END_EVENT_REQUEST,
  END_EVENT_SUCCESS,
  END_EVENT_FAILURE
} from '../constants'

export const initialEventState = {
  isActive: false,
  isHost: false,
  eventName: '',
  eventHost: '',
  createEventLoading: false,
  createEventError: false,
  endEventLoading: false,
  endEventError: false
}

export const Event = (state = initialEventState, action) => {
  switch (action.type) {
    case CREATE_EVENT_REQUEST:
      return {
        ...state,
        createEventLoading: true
      }
    case CREATE_EVENT_SUCCESS:
      return {
        ...state,
        isHost: true,
        isActive: true,
        eventName: action.eventName,
        eventHost: action.eventHost,
        createEventLoading: false
      }
    case CREATE_EVENT_FAILURE:
      return {
        ...state,
        createEventLoading: false,
        createEventError: true
      }
    case END_EVENT_REQUEST:
      return {
        ...state,
        endEventLoading: true
      }
    case END_EVENT_SUCCESS:
      return {
        ...initialEventState
      }
    case END_EVENT_FAILURE:
      return {
        ...state,
        endEventLoading: false,
        endEventError: true
      }
    default:
      return state
  }
}
