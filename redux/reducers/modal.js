import { CURRENT_USER_POSTS_UPDATE, MODAL_OPEN_BUYNOW, MODAL_OPEN_DESCRIPTION, MODAL_OPEN_OPTIONS, MODAL_OPEN_QA } from '../constants'

const initialState = {
    open: false,
    data: null, 
    modalType: -1,

}

export const modal = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN_QA:
            return {
                ...state,
                open: action.open,
                data: action.data,
                modalType: action.modalType
            }
        case MODAL_OPEN_BUYNOW:
            return {
                ...state,
                open: action.open,
                data: action.data,
                modalType: action.modalType
            }
        case MODAL_OPEN_DESCRIPTION:
                return {
                    ...state,
                    open: action.open,
                    data: action.data,
                    modalType: action.modalType
                }
        case MODAL_OPEN_OPTIONS:
            return {
                ...state,
                open: action.open,
                data: action.data,
                modalType: action.modalType
            }
        case MODAL_OPEN_OPTIONS:
                return initialState;
        default:
            return state;
    }
}