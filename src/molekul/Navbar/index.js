import React, {Component} from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import style from '../../style';
import GetLocation from 'react-native-get-location'
import axios from 'axios';

class Navbar extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            suhu: 0,
        }
    }

    componentDidMount(){
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(loc => {
            console.log(loc);
            axios.get(`https://api.darksky.net/forecast/0abe209b3a80006bcb5210202298cd53/${loc.latitude},${loc.longitude}`)
            .then(res => {
                this.setState({
                    suhu: (res.data.currently.apparentTemperature) - 32 * 5 / 9,
                })
            })
        })
    }

    render(){
        return(
            <>
            <View style={style.navbar}>
                    <TouchableOpacity style={{position: 'relative'}}>
                        <View style={style.point}></View>
                        <Image style={{width: 20, height: 15,}} source={require('../../atom/Home/hamburger.png')}/>
                    </TouchableOpacity>
                    <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18,color: '#74B49B'}}>icovid.</Text>
                    <Text style={{fontFamily: 'Montserrat-Medium', color: '#363636'}}>{parseInt(this.state.suhu)} C</Text>
                </View>
            </>
        )
    }
}

export default Navbar;