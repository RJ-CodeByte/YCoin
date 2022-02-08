import { GET_FLAGS,GET_CURRENCY} from "./actions";

const initialState = {
    // file:'',
    // success:0,
    // isloading:null,
    // search:[],
    country:[],
    currency:[],
}

function userReducer(state= initialState,action){
    switch(action.type){
        case GET_FLAGS:
            return {...state,country:action.payload};
        case GET_CURRENCY:
            return {...state,currency:action.payload};
        default:
            return state;
    }

};


export default userReducer;
