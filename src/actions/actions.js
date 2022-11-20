import {INITIAL_UPDATE_ALBUM_STORE,USER_EDITED_ALBUM,USER_CREATE_NEW_ALBUM} from './actionTypes'


//exporting action type and data initially fetching data from server
export function initialUpdateAlbumStore(albumData){
    return{
        type:INITIAL_UPDATE_ALBUM_STORE,
        albumData
    }
}

//exporting action type and data when editing album is initiated
export function userEditedAlbum(data){
    console.log('dispacthing')
    return{
        type:USER_EDITED_ALBUM,
        data
    }
}

//exporting action type and data when create new entry initiated
export function userCreatedNewdAlbum(data){
    return{
        type:USER_CREATE_NEW_ALBUM,
        data
    }
}