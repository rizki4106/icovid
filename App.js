import React, {Component} from 'react';
import {SplashScreen} from './src/pages';
import Router from './src/config/router';
import {Beranda} from './src/pages';

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
    // if(this.state.loading)
    // {
    //   return(<SplashScreen/>)
    // }
    // return(
    //   <Router/>
    // )

    return(
      <Router/>
    )
  }
}

export default App;