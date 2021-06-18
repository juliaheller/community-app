import {
    UPDATE_EVENT,
    GET_ONE_EVENT,
    GET_ALL_EVENTS,
    DELETE_EVENT,
} from "./event.types.js";
import eventsService from "../../services/events.service";

export const getEvents = () => async (dispatch) => {
    try {
        const events = await eventsService.getAllEvents();
        if (events) {
            dispatch({
                type: GET_ALL_EVENTS,
                payload: {
                    events: events,
                },
            });
            return Promise.resolve();
        }
    } catch (error) {
        return Promise.reject();
    }
};

export const getEvent = (id) => async (dispatch) => {
    try {
        const event = await eventsService.getOneEvent(id);
        if (event) {
            dispatch({
                type: GET_ONE_EVENT,
                payload: {
                    event: event,
                },
            });
            return Promise.resolve();
        }
    } catch (error) {
        return Promise.reject();
    }
};

export const updateAnEvent = (event, id) => async (dispatch) => {
    try {
        const updatedEvent = await eventsService.updatePost(event, id);
        if (event) {
            dispatch({
                type: UPDATE_EVENT,
                payload: {
                    event: updatedEvent,
                    id: id,
                },
            });
            return Promise.resolve();
        }
    } catch (error) {
        return Promise.reject();
    }
};
export const deleteOneEvent = (id) => async (dispatch) => {
    try {
        await eventsService.deleteEvent(id);
        if (id) {
            dispatch({
                type: DELETE_EVENT,
            });
            return Promise.resolve();
        }
    } catch (error) {
        return Promise.reject(error);
    }
};
