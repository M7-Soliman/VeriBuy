import { MODAL_OPEN_QA } from "../constants"

export const openQAmodal = (open, data) => (dispatch) => {
    return dispatch({
        data, 
        open, 
        modalType: 0,
        type: MODAL_OPEN_QA
    })
}