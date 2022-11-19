import React from 'react'
import { connect } from 'react-redux'
import { fetchAlbum } from '../actions/actions'
import NavBar from './NavBar'
import ShowAlbums from './ShowAlbums'

 class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchAlbum())
  }

  render() {
    return (
      <div>
        <NavBar/>
        <ShowAlbums/>
      </div>
    )
  }
}

function mapStateToProps(store){
    return {
        store
    }
}

export default connect(mapStateToProps)(App)