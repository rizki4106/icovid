import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../../../../pages/new/Style';

class Data extends Component
{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <View style={style.dataSet}>
                <Text style={[style.boldFont1, {fontSize: 16}]}>{this.props.daerah}</Text>
                <Text style={[style.paragraph, {color: 'gray', marginVertical: 5, fontSize: 12}]}>Jumlah kasus terkonfirmasi {this.props.terkonfirmasi.toLocaleString()}</Text>
                <View style={{width: '100%', borderTopWidth: 1, borderTopColor: '#dfd3d3', marginVertical: 10,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <View style={style.dataSetReal}>
                        <Text style={[style.boldFont1, {fontSize: 14}]}>{this.props.positif.toLocaleString()}</Text>
                        <Text style={[style.boldFont1, {color: '#FDC571', fontSize: 14, marginVertical: 10}]}>Positif</Text>
                    </View>
                    <View style={style.dataSetReal}>
                        <Text style={[style.boldFont1, {fontSize: 14}]}>{this.props.meninggal.toLocaleString()}</Text>
                        <Text style={[style.boldFont1, {color: '#FF6363', fontSize: 14, marginVertical: 10}]}>Meninggal</Text>
                    </View>
                    <View style={style.dataSetReal}>
                        <Text style={[style.boldFont1, {fontSize: 14}]}>{this.props.sembuh.toLocaleString()}</Text>
                        <Text style={[style.boldFont1, {color: '#7BFF3D', fontSize: 14, marginVertical: 10}]}>Sembuh</Text>
                    </View>
                </View>
            </View>
            </>
        )
    }
}

export default Data;