import React from 'react'
import { connect } from 'react-redux'
import AlbumCard from './AlbumCard'
import AlbumCardFunctional from './AlbumCardFunctional'

class ShowAlbums extends React.Component {
    constructor(props){
        super()
        console.log('prooops',props)
        this.state={
            currentPage:1
        }
    }
  render() {
    const {store}= this.props
    console.log('pro',store);
    return (
      <div>
        {
            store.album.map((ele =>(
                // passs to a new component albumcard
                // <div><AlbumCard card={ele}/></div>
                <div><AlbumCardFunctional card={ele}/></div>
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