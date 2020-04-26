import React, {Component} from 'react'
import {View, ScrollView, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather'
import style from '../Style';

class Home extends Component
{
    render(){
        return(
            <>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <Image source={require('../../../atom/icon/home/bg.png')} style={{width: Dimensions.get('window').width, height: 420}}/>
                <Image source={require('../../../atom/icon/home/kotak.png')} style={{position: 'absolute', zIndex: 1, top: 38, right: 38}}/>
                <Image source={require('../../../atom/icon/home/dotted.png')} style={{position: 'absolute', zIndex: 1, top: 215, right: 20}}/>
                {/* content in absolute position */}
                <View style={[style.container, style.absoluteContent]}>
                    <Text style={[style.boldFont1, {color: 'white'}]}>Selamat Pagi, Ella..!</Text>
                    <Text style={[style.paragraph, {color: 'white',marginTop: 25, lineHeight: 25}]}>
                        <Text style={[style.boldFont1, {fontSize: 14, color: 'white'}]}>#DirumahAja</Text>, Selama pandemik masih berlangsung
                        icovid akan membantu kamu dengan fitur berikut ini
                    </Text>

                    {/* fitur fitur icovid */}
                    <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginVertical: 20}}>

                        <TouchableOpacity style={style.boxFitur}>
                            <Image source={require('../../../atom/icon/home/statistik.png')}/>
                            <Text style={[style.boldFont1, {fontSize: 14, marginTop: 20}]}>Statistik</Text>
                            <Text style={[style.paragraph, {marginTop: 5, color: '#4F6CFF'}]}>buka <Icon name="arrow-right" size={10} color="#4F6CFF"/></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.boxFitur}>
                            <Image source={require('../../../atom/icon/home/lokasi.png')}/>
                            <Text style={[style.boldFont1, {fontSize: 14, marginTop: 20}]}>Lokasi</Text>
                            <Text style={[style.paragraph, {marginTop: 5, color: '#4F6CFF'}]}>buka <Icon name="arrow-right" size={10} color="#4F6CFF"/></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.boxFitur}>
                            <Image source={require('../../../atom/icon/home/bantuan.png')}/>
                            <Text style={[style.boldFont1, {fontSize: 14, marginTop: 20}]}>Bantuan</Text>
                            <Text style={[style.paragraph, {marginTop: 5, color: '#4F6CFF'}]}>buka <Icon name="arrow-right" size={10} color="#4F6CFF"/></Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={style.boxFitur}>
                            <Image source={require('../../../atom/icon/home/donasi.png')}/>
                            <Text style={[style.boldFont1, {fontSize: 14, marginTop: 20}]}>Donasi</Text>
                            <Text style={[style.paragraph, {marginTop: 5, color: '#4F6CFF'}]}>buka <Icon name="arrow-right" size={10} color="#4F6CFF"/></Text>
                        </TouchableOpacity>

                    </View>
                    {/* end */}
                </View>
                {/* end content */}
            </View>
            </>
        )
    }
}

export default Home;