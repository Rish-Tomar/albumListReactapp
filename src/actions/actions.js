import {INITIAL_UPDATE_ALBUM_STORE,USER_EDITED_ALBUM,USER_CREATE_NEW_ALBUM} from './actionTypes'


//exporting action type and data
export function initialUpdateAlbumStore(albumData){
    return{
        type:INITIAL_UPDATE_ALBUM_STORE,
        albumData
    }
}

//exporting action type and data
export function userEditedAlbum(data){
    console.log('dispacthing')
    return{
        type:USER_EDITED_ALBUM,
        data
    }
}

//exporting action type and data
export function userCreatedNewdAlbum(data){
    return{
        type:USER_CREATE_NEW_ALBUM,
        data
    }
}