import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NetInfo from '@react-native-community/netinfo'
import style from '../../style';

class Error extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            connected: false,
        }
    }

    changeConnection = () => {
        NetInfo.fetch().then(res => {
            if(res.isConnected === true){
                this.props.navigation.navigate("Home");
            }else{
                this.setState({
                    connected: false,
                });
            }
        }).catch(err => {
            console.log(err);
        })
    }

    render(){
        return(
            <>
            <View style={[style.container, style.error]}>
                <Image source={require('../../atom/error/wifi.png')}/>
                <Text style={[style.boldFont, {fontSize: 14,marginVertical: 30,}]}>TIDAK ADA KONEKSI INTERNET</Text>
                <Text style={[style.regularFont, {textAlign: 'center', lineHeight: 20,}]}>Pastikan data seluler atau WI-FI kamu{'\n'}terhubung dengan benar</Text>
                <TouchableOpacity style={style.btnReload} onPress={() => this.changeConnection()}>
                    <Text style={[style.boldFont, {color: 'white'}]}>Reload</Text>
                </TouchableOpacity>
            </View>
            </>
        )
    }
}

export default Error;