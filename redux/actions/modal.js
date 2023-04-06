import { CLEAR_MODAL, MODAL_OPEN_BUYNOW, MODAL_OPEN_DESCRIPTION, MODAL_OPEN_OPTIONS, MODAL_OPEN_QA } from "../constants"

export const openQAmodal = (open, data1, data2) => (dispatch) => {
    return dispatch({
        data1,
        data2, 
        open, 
        modalType: 0,
        type: MODAL_OPEN_QA
    })
}

export const openBuyNowmodal = (open, data1, data2) => (dispatch) => {
    return dispatch({
        data1,
        data2, 
        open, 
        modalType: 1,
        type: MODAL_OPEN_BUYNOW
    })
}

export const openDescriptionmodal = (open, data1, data2) => (dispatch) => {
    return dispatch({
        data1,
        data2, 
        open, 
        modalType: 2,
        type: MODAL_OPEN_DESCRIPTION
    })
}
export const openOptionsmodal = (open, data1, data2) => (dispatch) => {
    return dispatch({
        data1,
        data2, 
        open, 
        modalType: 3,
        type: MODAL_OPEN_OPTIONS
    })
}

export const clearModal = () => (dispatch) => {
    return dispatch({
        type: CLEAR_MODAL
    })
}