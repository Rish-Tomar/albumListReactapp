
import React,{ useState } from 'react'
import { connect } from 'react-redux'
import { deleteRecord, editAlbumRecord } from '../actions/album'
import '../styles/albumCard.css'

function AlbumCardFunctional(props) {
  
  //declaring usestate varibles and iniatialising
  const {card}=props
  const [showEditForm, setShowEditForm] = useState(false)
  const [showCard, setShowCard]         = useState(true)
  const [newTitle,setNewTitle]          = useState(card.title)
  
 
  const handleDelete= async (id)=>{
    var deleteOrNot =await deleteRecord(id)
    if(deleteOrNot===true){
      setShowCard(false)
    }
  }

  //comes in action if edited title is to be saved
  function handleclickForSave(){
    props.dispatch(editAlbumRecord (card.id,newTitle,card.userID))
    setShowEditForm(false)
  }

//function to show Save,Update or Delete buttons 
  function button(buttonType){
    switch(buttonType){
        case 'SAVE'  :return (  <button className='btn-save' onClick={handleclickForSave}>
                                  SAVE
                                </button>)
        case 'UPDATE':return ( <button className='btn'  onClick={e=>setShowEditForm(true)}>
                                UPDATE
                             </button> )
        case 'DELETE':return ( <button className='btn delete' onClick={() => handleDelete(card.id)}>
                                  Delete
                               </button> ) 
        default:return;
    }
  }
  
//function to edite title edited by user
  function handleTitleEdit(e){
    const nnewTitle = e.target.value
    setNewTitle(nnewTitle)
  }

//function to return form for editeing the title of the album
  function editForm(){
    return(
      <div>
        <input type='text' placeholder={`${card.title}`} onChange={e=>handleTitleEdit(e)} />  
      </div>
    )
  }
  
/*------------ main render --------------- */ 
  return (
    <div className='card-wrapper' key={props.key} >
      {showCard ?
          <>
              <div>{card.id}</div>
              <div>{showEditForm?editForm():newTitle}</div>                
              <div>
                  {showEditForm?button('SAVE'):button('UPDATE')}
                  {button('DELETE')}
              </div>
          </>
      :
      <div>DELETED</div>
      }
    </div>
  )
}

// export default AlbumCardFunctional
function mapStateToProps(store){
    return {
      store
    }
  }
export default connect (mapStateToProps)(AlbumCardFunctional)