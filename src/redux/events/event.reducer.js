import {
    UPDATE_EVENT,
    GET_ONE_EVENT,
    GET_ALL_EVENTS,
    DELETE_EVENT,
} from "./event.types";

const initialState = {
    event: {},
    id: 0,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case UPDATE_EVENT: {
            const { event, id } = action.payload;
            return {
                ...state,
                event: event,
                id: id,
            };
        }
        case GET_ONE_EVENT: {
            const { event } = action.payload;
            return {
                ...state,
                event: event,
            };
        }
        case GET_ALL_EVENTS: {
            const { events } = action.payload;
            return {
                ...state,
                events: events,
            };
        }
        case DELETE_EVENT: {
            return {
                ...state,
            };
        }
        default:
            return state;
    }
}
