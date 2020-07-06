import {
    SET_EVENTS
} from '../actions'


const initialState = {
    events: []
}

export const reducers = (state = initialState, action) => {
    const { payload, type } = action
    switch (type) {
        case SET_EVENTS:
            return {
                ...state,
                events: payload
            }
        default:
            return state;
    }
}