import * as types from '../constants/ActionTypes';

const initialState = {
    sum: 0
}
/*action默认是空对象，所以一个default返回旧state*/
export default function reduxReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.ADD:
            state.sum++;
            return {
                ...state,
            };
            break;
        case types.DEL:
            state.sum--;
            return {
                ...state,
            };
            break;
        default:
            return state;
            break;
    }
}