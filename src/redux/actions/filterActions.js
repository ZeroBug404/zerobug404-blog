import { TOGGLE_SORT_CONTENT } from "../actionTypes/actionTypes"

export const sortByDate = (uploadTime) => {
    return {
        type: TOGGLE_SORT_CONTENT,
        payload: uploadTime,    
    }
}