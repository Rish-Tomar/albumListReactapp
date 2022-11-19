import React,{useState} from 'react'
import '../styles/albumCard.css'
class AlbumCard extends React.Component {
    constructor(props){
        super()
        this.state={
            showCard:true, //to show a card or not
            showEditForm:false, // to show edit input box if edit button is clicked
        }
    }
  render() {
    const {card}=this.props

      function handleDelete(id){
        return
      }
      function handleclickForSave(){
        return
      }
      function handleClickForUpdate(){
        this.setState({ShowEditForm:true})
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
                            <button className='btn'  onClick={handleClickForUpdate}>
                            UPDATE
                            </button>
                        )
            case 'DELETE':
                        return (
                            <button className='btn delete' onClick={() => handleDelete(card.id)}>Delete</button>
                        ) 

        }
      }

    // <-------------    MAIN RETURN FUNCTION OF  COMPONENT -------------.  
    return (
      <div className='card-wrapper' key={card.id}>
        {this.state.showCard ?
            <>
                <div>{card.id}</div>
                <div>{card.title}</div>                
                <div>
                    {this.state.showEditForm?button('SAVE'):button('UPDATE')}
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
}

export default AlbumCard



// import { connect } from 'react-redux';

// function AlbumCard(props) {

//   //declating and inititalising hooks
//   const [showCard, setShowCard]        = useState(true)
//   const [showEditForm,setShowEditForm] = useState(false)
//   const [editedTitle,setEditedTitle]   = useState(props.card.title)

//   //function to edite a album record when edit button clicked
//   function handleEdit(){
//     setShowEditForm(true);
   
//   }

//   //function to delete a album record when delete button is clicked
//   const handleDelete= async (id)=>{
//     // var deleteOrNot =await deleteRecord(id)
//     // console.log('deleteornot',deleteOrNot)
//     // if(deleteOrNot===true){
//     //   toast('DELETED')
//     //   setShowCard(false)
//     // }
//     // else{
//     //   toast('Cannot Delete')
//     // }
//   }


//   //this is the jsx element that will be rendered if value of showEditForm is set to true
//   function editForm(){
//     return(
//       <div>
//         <input type='text' placeholder={`${props.card.title}`} onChange={e=>setEditedTitle(e.target.value)} />  
//       </div>
//     )
//   }

//   //function for saving the edited value when save s clicked
//   function handleclickForSave(){  
//     // // console.log('show',currentAlbum)
//     // //call a redux function to edit title
//     // props.dispatch(editRecord(id,editedTitle,userId))
//     // //when editing done set showEditForm to false
//     // setShowEditForm(false)
//     // console.log('storeee',props.album)
//     // title=editedTitle
//     // setCurrentAlbum(props.album[props.index])   
//   }

//   function button(buttonType){
//             switch(buttonType){
//                 case 'SAVE'  :
//                               return (
//                                 <button className='btn-save' onClick={handleclickForSave}>
//                                     SAVE
//                                 </button>)
//                 case 'UPDATE':
//                             return (
//                                 <button className='btn'  onClick={e=>setShowEditForm(true)}>
//                                 UPDATE
//                                 </button>
//                             )
//                 case 'DELETE':
//                             return (
//                                 <button className='btn delete' onClick={() => handleDelete(props.card.id)}>Delete</button>
//                             ) 
    
//             }
//           }

//   //main retun element
//   return (
//     <div className='album-div' key={props.userID}>
//       {/* using ternery operator stmt1?stmt2:smt3 */}
//        {showCard?
//         <>
//         <span>{props.card.id}</span>
//         <span className='title'>
//           {showEditForm?editForm():props.card.title}
//         </span>
//         <div className='options-div'>
//           {showEditForm ? button('SAVE') : button('UPDATE') }
//           {button('DELETE')}
//           {/* <button className='btn delete' onClick={() => handleDelete(currentAlbum.id)}>Delete</button> */}
//         </div>
//         </>
//         :
//         <div>
//           <span>DELETED</span>
//         </div>}
//     </div>
//   )
// }

// // export default AlbumCard
// function mapStateToProps(state){
//   return {
//     album: state.album
//   }
// }

// export default connect(mapStateToProps)(AlbumCard)