import { GET_EVENTS, GET_EVENT, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../actions/types';

const initialState = {
  events: [],
  event: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_EVENTS:
      return {
        ...state,
        events: action.payload
      };
    case GET_EVENT:
      return {
        ...state,
        event: action.payload
      }
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events]
      }
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event => event.id === action.payload.id ? (event = action.payload): event)
      }
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event.id !== action.payload)
      }
    default:
      return state;
  }
}
