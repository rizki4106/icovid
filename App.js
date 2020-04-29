import React, {Component} from 'react';
import {SplashScreen} from './src/pages';
import Router from './src/config/router';
import {Home,Statistik, Maps, DonasiUpload} from './src/pages';

class App extends Component{
  constructor(props)
  {
    super(props)
    this.state = {
      loading: true,
    }
  }

  componentDidMount()
  {
    setTimeout(() => {
      this.setState({
        loading: false,
      })
    }, 3000)
  }

  render(){
    if(this.state.loading)
    {
      return(<SplashScreen/>)
    }
    return(
      <Router/>
    )
  }
}

export default App;