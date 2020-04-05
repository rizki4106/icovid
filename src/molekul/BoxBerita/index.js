import React from 'react';
import {View, Text,Image} from 'react-native';
import style from '../../style';

function BoxBerita(){
    return(
        <View style={style.boxBerita}>
            <View style={{width: '70%'}}>
                <Text style={[style.mediumFont, {fontSize: 14,}]}>Pasien COVID 19 dinyatakan sembuh oleh WHO</Text>
                <Text style={[style.regularFont, {color: 'gray', marginTop: 10}]}>2 jam yang lalu</Text>
            </View>
            <View style={{width: '25%', justifyContent: 'center', alignItems: 'center', height: 70}}>
                <Image source={require('../../atom/coba.jpeg')} style={style.imgBerita}/>
            </View>
        </View>
    )
}
export default BoxBerita;
