import { INITIAL_UPDATE_ALBUM_STORE,USER_EDITED_ALBUM,USER_CREATE_NEW_ALBUM} from "../actions/actionTypes";

export default function album (state=[],action){
    switch(action.type){
        case INITIAL_UPDATE_ALBUM_STORE:
            return action.albumData;
        case USER_EDITED_ALBUM:
            stateUpdate(state,action.data)
            return [...state];
        case USER_CREATE_NEW_ALBUM:
            stateNewAlbumAddition(state,action.data)
            return state
        default: return state;
    }
}

function stateUpdate(state,data){
    var v=state.findIndex(x=>{
        return x.id===data.id
    })
    state[v].title=data.title
    console.log('v',v)  
}

function stateNewAlbumAddition(state,data){
    state.push(data);
}