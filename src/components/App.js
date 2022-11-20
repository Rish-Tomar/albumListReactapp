import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../actions/album'
import NavBar from './NavBar'
import ShowAlbums from './ShowAlbums'
import '../App.css'
 class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAlbum())
  }

  /*------------ main render --------------- */ 
  render() {
    return (
      <div className='App-header'>
        <NavBar/>
        <ShowAlbums/>
      </div>
    )
  }
}

//making store accessible by apps using Props
function mapStateToProps(store){
    return {
        store
    }
}
export default connect(mapStateToProps)(App)