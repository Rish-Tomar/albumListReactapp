import React,{useState} from 'react'
import { connect } from 'react-redux'
import { createNewAlbum } from '../actions/album'
import '../styles/addAlbum.css'

function NavBar(props) {
    //defining and initialising states
    const [showAddForm,setShowAddForm] = useState(false)
    const [newTitleAdd,setNewTitleAdd] =useState('')
    const [newUserId,setNewUserId]     =useState('')
    const [showAddDone,setShowAddDone] =useState(false)

    // function to submit new album details 
    function handleSubmit(e){
        e.preventDefault()
        setShowAddForm(false);
        if(newTitleAdd===''||newUserId===''){
            alert('title or id field Missing, Try Again')
            return 
        }
        else{
            props.dispatch(createNewAlbum(newTitleAdd,newUserId,props.store.album.length))
            setShowAddDone(true)   
        }
             
    }

    function showForm(){
        return (
            <>
                <input type='text' required={true} placeholder='Enter Title' value={newTitleAdd} onChange={e=> setNewTitleAdd(e.target.value)}/>
                <input type='text' required={true} placeholder='Enter UserID' value={newUserId} onChange={e=> setNewUserId(e.target.value)}/>
                {/* <input type='submit' value="ADD" onClick={handleSubmit}/> */}
                <button type='submit' onClick={handleSubmit} >ADD </button>

            </>
        )
    }

//function to show button or to show the message
    function showButton(){
       return (
        <>
        {showAddDone? <div className='adding-div'>
                            Adding a New Album Completed
                            <button onClick={handleChangeOk}>OK</button>
                      </div>
                    : <button onClick={e=>setShowAddForm(true)}> ADD New Album</button>}
        </>
       )
    }

//function to reset all the state variable to normal values
    function handleChangeOk(){
        setShowAddDone(false)
        setNewTitleAdd('')
        setNewUserId('')
    }

/*||------------ main render --------------- ||*/ 
  return (
    <div class='wrapper-div'>
        {showAddForm?showForm():showButton()}
    </div>
  )
}

function mapStateToProps(store){
    return {
      store
    }
  }
  export default connect (mapStateToProps)(NavBar)