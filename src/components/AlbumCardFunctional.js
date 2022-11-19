
import React,{ useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { deleteRecord, editAlbumRecord } from '../actions/actions'

function AlbumCardFunctional(props) {
    // console.log('album card props',props)
  const {card}=props
 
  const [showEditForm, setShowEditForm] = useState(false)
  const [showCard, setShowCard] = useState(true)
  const [newTitle,setNewTitle] = useState(card.title)
  
 
  const handleDelete= async (id)=>{
    var deleteOrNot =await deleteRecord(id)
    console.log('deleteornot',deleteOrNot)
    if(deleteOrNot===true){
    //   toast('DELETED')
      setShowCard(false)
    }
    else{
    //   toast('Cannot Delete')
    }
  }

  //comes in action if edited title is to be saved
  function handleclickForSave(){
    //cal a redux function to edit title
    props.dispatch(editAlbumRecord (card.id,newTitle,card.userID))
    //when we are finished with editing then we do not show the form
    setShowEditForm(false)
  }


  function handleClickForUpdate(){
  }


  function button(buttonType){
    switch(buttonType){
        case 'SAVE'  :
                      return (
                        <button className='btn-save' onClick={handleclickForSave}>
                            SAVE
                        </button>)
        case 'UPDATE':
                    return (
                        <button className='btn'  onClick={e=>setShowEditForm(true)}>
                        UPDATE
                        </button>
                    )
        case 'DELETE':
                    return (
                        <button className='btn delete' onClick={() => handleDelete(card.id)}>Delete</button>
                    ) 

    }
  }
  function handleTitleEdit(e){
    const nnewTitle = e.target.value
    setNewTitle(nnewTitle)
    // console.log('newTitle',nnewTitle,newTitle)
  }

  function editForm(){
    return(
      <div>
        <input type='text' placeholder={`${card.title}`} onChange={e=>handleTitleEdit(e)} />  
        {/* e=>setEditedTitle(e.target.value) */}
      </div>
    )
  }


  return (
    <div className='card-wrapper' key={card.id}>
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
    <div>
        DELETED
    </div>
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