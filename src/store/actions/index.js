import axios from 'axios'

export const SET_EVENTS = 'SET_EVENTS';
export const SET_PAGES = 'SET_PAGES';
export const SET_DATA_TABLE = 'SET_DATA_TABLE';


const baseURL = 'http://localhost:3000'
const itemPerPage = 5

export const getEvents = () => {
    return (dispatch) => {
        axios
            .get(`${baseURL}/events?`)
            .then(({ data }) => {
                dispatch(setEvents(data))
                dispatch(setPages(data))
            }).catch((err) => {
                console.log(err)
            });
    }
}

export const getPerPage = (page) => {
    console.log(page)
    return (dispatch) => {
        axios
            .get(`${baseURL}/events?_page=${page}&_limit=${itemPerPage}`)
            .then(({ data }) => {
                console.log(data)
                dispatch(setDataTable(data))
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

export const setDataTable = (data) => {
    return {
        type: SET_DATA_TABLE,
        payload: data
    }
}

export const setPages = (data) => {
    let totalPages = Math.ceil(data.length / itemPerPage )
    let pages = []
    for (let index = 0; index < totalPages; index++) {
        pages.push(index)
    }
    return {
        type: SET_PAGES,
        payload: pages
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