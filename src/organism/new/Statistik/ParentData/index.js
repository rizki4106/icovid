import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../../../../pages/new/Style';
import ucwords from 'ucwords'

class ParentData extends Component
{
    constructor(props){
        super(props)
    }

    render(){
        let data = this.props.data;
        return(
            <>
            <View style={style.dataSet}>
                <Text style={[style.boldFont1, {fontSize: 16}]}>{ucwords(this.props.wilayah)}</Text>
                <Text style={[style.paragraph, {color: 'gray', marginVertical: 5, fontSize: 12}]}>Jumlah kasus terkonfirmasi {data.confirmed.toLocaleString()}</Text>
                <View style={{width: '100%', borderTopWidth: 1, borderTopColor: '#dfd3d3', marginVertical: 10,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 100}}>
                    <View style={style.dataSetReal}>
                        <Text style={[style.boldFont1, {fontSize: 14}]}>{data.positif.toLocaleString()}</Text>
                        <Text style={[style.boldFont1, {color: '#FDC571', fontSize: 14, marginVertical: 10}]}>Positif</Text>
                    </View>
                    <View style={style.dataSetReal}>
                        <Text style={[style.boldFont1, {fontSize: 14}]}>{data.deaths.toLocaleString()}</Text>
                        <Text style={[style.boldFont1, {color: '#FF6363', fontSize: 14, marginVertical: 10}]}>Meninggal</Text>
                    </View>
                    <View style={style.dataSetReal}>
                        <Text style={[style.boldFont1, {fontSize: 14}]}>{data.recovered.toLocaleString()}</Text>
                        <Text style={[style.boldFont1, {color: '#7BFF3D', fontSize: 14, marginVertical: 10}]}>Sembuh</Text>
                    </View>
                </View>
            </View>
            </>
        )
    }
}

export default ParentData;