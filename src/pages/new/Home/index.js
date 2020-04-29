import React, {Component} from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import style from '../Style';

class Home extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <>
            <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                <View style={style.container}>
                    {/* header */}
                    <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <View style={{flex: 1}}>
                            <Text style={[style.boldFont1, {fontSize: 18,}]}>icovid.</Text>
                        </View>
                    </View>
                    {/* end of header */}
                    <View style={style.boxboarding}>
                        <Image source={require('../../../atom/icon/home/boarding.png')} style={{flex: 1, width: '100%', height: 200, borderRadius: 5,}}/>
                    </View>
                    {/*  */}
                    <View style={{flex: 1}}>
                        <Text style={[style.boldFont1, {fontSize: 16}]}>Fitur</Text>
                        <TouchableOpacity style={style.boxFitur} onPress={() => {this.props.navigation.navigate('Maps')}}>
                            <Image source={require('../../../atom/icon/home/maps.png')}/>
                            <View style={{flex: 1, paddingHorizontal: 20,}}>
                                <Text style={[style.boldFont1, {fontSize: 14}]}>Tracker</Text>
                                <Text style={[style.paragraph, {fontSize: 12, lineHeight: 18, color: '#656464'}]}>Menghitung jarak antara kamu dan daerah terpapar covid - 19</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.boxFitur} onPress={() => {this.props.navigation.navigate('Statistik')}}>
                            <Image source={require('../../../atom/icon/home/statistik.png')}/>
                            <View style={{flex: 1, paddingHorizontal: 20,}}>
                                <Text style={[style.boldFont1, {fontSize: 14}]}>Statistik</Text>
                                <Text style={[style.paragraph, {fontSize: 12, lineHeight: 18, color: '#656464'}]}>Kami memberikan kamu data secara realtime</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.boxFitur} onPress={() => {this.props.navigation.navigate('Search')}}>
                            <Image source={require('../../../atom/icon/home/penelusuran.png')}/>
                            <View style={{flex: 1, paddingHorizontal: 20,}} >
                                <Text style={[style.boldFont1, {fontSize: 14}]}>Telusuri</Text>
                                <Text style={[style.paragraph, {fontSize: 12, lineHeight: 18, color: '#656464'}]}>Telusuri daerah yang ingin kamu ketahui</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            </>
        )
    }
}

export default Home;