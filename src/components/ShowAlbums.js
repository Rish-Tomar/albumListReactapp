import React from 'react'
import { connect } from 'react-redux'
import AlbumCardFunctional from './AlbumCardFunctional'
import '../styles/albumCard.css'

class ShowAlbums extends React.Component {
   
/*------------ main render --------------- */ 
  render() {
    const {store}= this.props
    return (
      <div>
       <div className='card-wrapper-title'>
       <div>S.No</div>
              <div>TITLE</div>
              <div>OPTIONS</div>
        </div> 
        {
           
            store.album.map((ele =>(                
                <div>                  
                  <AlbumCardFunctional card={ele}  key={ele.id}/>
                </div>
            )))
        }
      </div>
    )
  }
}

function mapStateToProps(store){
    return {
        store
    }
}
export default connect (mapStateToProps)(ShowAlbums)