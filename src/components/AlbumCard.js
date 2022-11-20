import React from 'react'
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


