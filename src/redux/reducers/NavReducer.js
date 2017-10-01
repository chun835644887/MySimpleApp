import Routers from '../../router/MyStrackNav';

const navReducer = (state,action) => {
    let newState = Routers.router.getStateForAction(action, state);
    return newState || state;
};

export default navReducer;