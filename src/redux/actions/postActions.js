import {ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT} from '../actionTypes/actionTypes';


export const addContent = (data) => {
    return {
        type: ADD_CONTENT,
        payload: data
    }
}
export const getContent = (data) => {
    return {
        type: GET_CONTENT,
        payload: data
    }
}
export const updateContent = (id) => {
    return {
        type: UPDATE_CONTENT,
        payload: id
    }
}
export const deleteContent = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id
    }
}
