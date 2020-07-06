import {
    SET_EVENTS,
    SET_PAGES,
    SET_DATA_TABLE
} from '../actions'


const initialState = {
    events: [],
    totalPages: [],
    dataTable: []
}

export const reducers = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_EVENTS:
            return {
                ...state,
                events: payload
            }
        case SET_PAGES:
            return {
                ...state,
                totalPages: payload
            }
        case SET_DATA_TABLE:
            return {
                ...state,
                dataTable: payload
            }
        default:
            return state;
    }
}