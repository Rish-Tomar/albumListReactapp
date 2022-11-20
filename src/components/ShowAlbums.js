import React from 'react'
import { connect } from 'react-redux'
import AlbumCardFunctional from './AlbumCardFunctional'
import '../styles/albumCard.css'

class ShowAlbums extends React.Component {
    // constructor(props){
    //     super()
    //     this.state={
    //         currentPage:1
    //     }
    // }
/*------------ main render --------------- */ 
  render() {
    const {store}= this.props
    return (
      <div>
        {/* <AlbumCardFunctional card={{id:'S.No.',title:'TITLE'}}  key={1001} className='header-card'/> */}
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