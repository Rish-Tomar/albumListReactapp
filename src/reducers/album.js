import { INITIAL_UPDATE_ALBUM_STORE,USER_EDITED_ALBUM} from "../actions/actionTypes";

export default function album (state=[],action){
    switch(action.type){
        case INITIAL_UPDATE_ALBUM_STORE:
            return action.albumData;
        case USER_EDITED_ALBUM:
            console.log('state',state,[...state,action.data])
            const newstate=stateUpdate(state,action.data)
            return [...state];
        // case CREATE_ALBUM_RECORD:
        //     return action.responseData
        // case REMOVE_ALBUM_RECORD:
        //     return action.responseData
        // case UPDATE_ALBUM_RECORD:
        //     // console.log('state',state,"data",action.data);
        //     state[action.data.id-1]=action.data
        //     return state;
        default: return state;
    }
}

function stateUpdate(state,data){
    console.log('stateupdate',state)

    var v=state.findIndex(x=>{
        return x.id==data.id
    })
    state[v].title=data.title
    console.log('v',v)  
}