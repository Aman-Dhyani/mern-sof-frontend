const initialState = null
const fbBtnReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SLIDER':
            return state
        case 'UPDATE_SLIDER':
            return state
        case 'FETCH_UPDATED_FB_BTNS':
            return action.payload
        default:
            return state
    }
}

export default fbBtnReducer