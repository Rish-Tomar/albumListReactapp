import {initialUpdateAlbumStore,userEditedAlbum,userCreatedNewdAlbum} from './actions'
const URL ='https://jsonplaceholder.typicode.com/albums' 


//fetching the album details from the API and dispatching a action function
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

//sending the edit request to api
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

//sending the delete request of a album record to api
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

//creating a new album Entry
export function createNewAlbum(title,userID,id){
    return (dispatch)=>{
       fetch((`${URL}`),{
           method:'POST',
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
                    dispatch(userCreatedNewdAlbum(data))
                    }
       )
   }

}