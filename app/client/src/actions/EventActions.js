import CREATE_EVENT_SUCCESS from '../constants'

export const CreateEvent = (eventName, eventHost) => {
  return dispatch => {
    dispatch({
      type: CREATE_EVENT_SUCCESS,
      eventName,
      eventHost
    })
  }
}
