import axios from 'axios'

export const SET_EVENTS = 'SET_EVENTS';


const baseURL = 'http://localhost:3000'

export const getEvents = () => {
    return (dispatch) => {
        axios
            .get(`${baseURL}/events`)
            .then(({ data }) => {
                console.log(data)
                dispatch(setEvents(data))
            }).catch((err) => {
                console.log(err)
            });
    }
}

export const setEvents = (data) => {
    return {
        type: SET_EVENTS,
        payload: data
    }
}

export const createEvent = (data) => {
    return (dispatch) => {
        axios
            .post(`${baseURL}/events`, data)
            .then(({data}) => {
                console.log('data added')
            }).catch((err) => {
                console.log(err)
            });
    }
}