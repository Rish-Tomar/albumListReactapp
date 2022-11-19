import {INITIAL_UPDATE_ALBUM_STORE,USER_EDITED_ALBUM} from './actionTypes'
const URL ='https://jsonplaceholder.typicode.com/albums' 


export function fetchAlbum(){
    return (dispatch)=>{
        fetch(URL)
        .then(res =>{
            return res.json()
        })
        .then(data=>{
            dispatch(initialUpdateAlbumStore(data))
        })
    }
}

function initialUpdateAlbumStore(albumData){
    return{
        type:INITIAL_UPDATE_ALBUM_STORE,
        albumData
    }
}

export function editAlbumRecord(id,title,userID){
    return (dispatch)=>{
        fetch((`${URL}/${id}`),{
            method:'PUT',
            body:JSON.stringify({
                userID,
                id,
                title
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                }
        })
        .then(res =>{return res.json()})
        .then(data=>{console.log("response for edit",data)
                     dispatch(userEditedAlbum(data))
                     }
        )
    }
}

function userEditedAlbum(data){
    console.log('dispacthing')
    return{
        type:USER_EDITED_ALBUM,
        data
    }
}


export async function deleteRecord(id){

    const response = await fetch(`${URL}/${id}`,{
                                method:'DELETE',
                           })

    if(response.ok===true && response.status===200){
    console.log("deleted");
        return true
    }
    return false;
}