import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import style from '../../style';


class SplashScreen extends Component
{
    render(){
        return(
            <>
            <View style={style.contentCenter}>
                {/* sweet */}
                <Image source={require('../../atom/login/segitiga.png')} style={style.segitiga}/>
                <Image source={require('../../atom/login/b1.png')} style={[style.contentAbsolute, {top: 420, left: 90, height: 20, width: 20,}]}/>
                <Image source={require('../../atom/login/b2.png')} style={[style.contentAbsolute, {top: 400, right: 80, width: 30, height: 30}]}/>
                <Image source={require('../../atom/login/b3.png')} style={[style.contentAbsolute, {top: 220, right: 120,}]}/>
                {/* end of sweet */}
                <View style={{width: '100%', alignItems: 'center'}}>
                <Image style={style.iconCovid} source={require('../../atom/login/icovid.png')}/>
                </View>
            </View>
            </>
        )
    }
}

export default SplashScreen;