import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import style from '../Style';
class Login extends Component{
    render(){
        return(
            <>
            <View style={style.container}>
                <View style={style.centerContent}>
                    <View style={{width: '90%'}}>
                        <Text style={style.boldFont1}>Hallo.</Text>
                        <Text style={[style.paragraph, {marginTop: 25}]}>Silahkan login dengan salah satu akun sosial media anda</Text>
                        {/* login button */}
                        <Text>{'\n'}</Text>
                        <TouchableOpacity style={style.authButton}>
                            <Image source={require('../../../atom/icon/login/google.png')} style={{marginRight: 15}}/>
                            <Text style={[style.boldFont1, {fontSize: 14}]}>Masuk dengan google</Text>
                        </TouchableOpacity>

                        <Text style={style.centerText}>atau</Text>

                        <TouchableOpacity style={[style.authButton, {backgroundColor: '#535AF7'}]}>
                            <Image source={require('../../../atom/icon/login/facebook.png')} style={{marginRight: 15}}/>
                            <Text style={[style.boldFont1, {fontSize: 14, color: 'white'}]}>Masuk dengan facebook</Text>
                        </TouchableOpacity>
                        {/* akhir login button */}
                    </View>
                </View>
            </View>
            </>
        )
    }
}

export default Login;