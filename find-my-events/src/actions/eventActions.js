import { GET_EVENTS, GET_EVENT, ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from './types';
import axios from 'axios';

//Different Event Actions

//Fetches all Events
export const getEvents = () => async dispatch => {
    const res = await axios.get('http://localhost:3000/events');
    dispatch({
        type: GET_EVENTS,
        payload: res.data
    })
}

//Fetches Single Event for updation
export const getEvent = (id) => async dispatch => {
    const res = await axios.get(`http://localhost:3000/events/${id}`);
    dispatch({
        type: GET_EVENT,
        payload: res.data
    })
}

//Add new Event
export const addEvent = (event) => async dispatch => {
    const res = await axios.post('http://localhost:3000/events', event);
    dispatch({
        type: ADD_EVENT,
        payload: res.data
    })
}

//Update Event
export const updateEvent = (event) => async dispatch => {
    const res = await axios.put(`http://localhost:3000/events/${event.id}`, event);
    dispatch({
        type: UPDATE_EVENT,
        payload: res.data
    })
}

//Delete Event
export const deleteEvent = (id) => async dispatch => {
    await axios.delete(`http://localhost:3000/events/${id}`);
    dispatch({
        type: DELETE_EVENT,
        payload: id
    })
}