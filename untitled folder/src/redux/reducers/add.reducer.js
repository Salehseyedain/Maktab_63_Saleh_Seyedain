import store from "../store";

const initialState = {
        Commoditis:[]

};


const AddReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_COMMODITIS':
            console.log("redaxxx")
            return {...state, Commoditis: action.payload};
        default:
            return state;
    }

};

export {AddReducer};