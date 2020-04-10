import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../../../style';
import BoxData from '../../../molekul/Beranda/Daerah';


class Daerah extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            region: [],
        }
    }
    async componentDidMount(){
        // lokasi per provinsi

        const reqprov = await fetch('https://api.kawalcorona.com/indonesia/provinsi')
        const resprov = await reqprov.json()

        await this.setState({
            region: [...this.state.region, resprov],
        });
    }
    render(){
        return(
            <>
            <View style={{flex: 1}}>
                {/* header wilayah */}
                <View style={style.BoxWilayah2}>
                    <View style={{flex: 1}}>
                    <Text style={[style.boldFont, {fontSize: 14}]}>Daerah</Text>
                    </View>
                    <View style={{flex: 1, flexDirection: 'row'}}>
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                            <Text style={[style.boldFont, {fontSize: 14, color: '#B9A6E0'}]}>P</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.boldFont, {fontSize: 14, color: '#F88282'}]}>M</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.boldFont, {fontSize: 14, color: '#8BDFE2'}]}>S</Text>
                        </View>
                    </View>
                </View>
                {/* akhir header */}
                <BoxData data={this.state.region}/>
            </View>
            </>
        )
    }
}

export default Daerah;