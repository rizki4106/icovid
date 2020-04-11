import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import style from '../../style';


class SplashScreen extends Component
{
    render(){
        return(
            <>
            <View style={style.contentCenter}>
                <View style={{width: '100%', alignItems: 'center'}}>
                <Image style={style.iconCovid} source={require('../../atom/login/icovid.png')}/>
                </View>
            </View>
            </>
        )
    }
}

export default SplashScreen;