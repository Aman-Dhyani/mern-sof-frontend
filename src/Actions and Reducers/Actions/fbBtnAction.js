import * as api from '../../API/Api'

const setFbBtnsAct = (setBtnData) => async (dispatch) => {
    try {
        await api.setFbBtns(setBtnData)
        dispatch({ type: 'SET_SLIDER' })
        dispatch(fetchUpdatedFbInterface())
    }
    catch (error) {
        console.log(error);
    }
}

const updateFbBtnsAct = (updateBtnData) => async (dispatch) => {
    try {
        await api.updateFbBtns(updateBtnData)
        dispatch({ type: 'UPDATE_SLIDER' })
        dispatch(fetchUpdatedFbInterface())
    }
    catch (error) {
        console.log(error);
    }
}

const fetchUpdatedFbInterface = () => async (dispatch) => {
    try {
        const data = await api.fetchUpdatedBtnsData()
        dispatch({ type: 'FETCH_UPDATED_FB_BTNS', payload: data })
    }
    catch (error) {
        console.log(error);
    }
}
export { setFbBtnsAct, updateFbBtnsAct, fetchUpdatedFbInterface }