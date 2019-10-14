import {
    CREATE_STREAM,
    FETCH_STREAMS,
    FETCH_STREAM,
    DELETE_STREAM,
    EDIT_STREAM
} from '../actions/types';

import _ from 'lodash';

const streamReducer = (state = {}, action) => {
    switch (action.type) {

        case FETCH_STREAM:
            return {...state};

        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };

        case EDIT_STREAM:
            // const newState = { ...state }
            // newState[action.payload.id] = action.payload
            // return newState;
            return { ...state, [action.payload.id]: action.payload};

        case FETCH_STREAMS: 
            return { ...state, ..._.mapKeys(action.payload, 'id') };
        

        case DELETE_STREAM: 
            return _.omit(state, [action.payload])

        default: return state;
    }
}

export default streamReducer;
