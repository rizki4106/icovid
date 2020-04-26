import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../../../style';

class Daerah extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <>
            {(this.props.data.length > 0) ? 
            this.props.data[0].map((items, i) => (
            <View style={style.BoxWilayah2} key={i}>
                <View style={{flex: 1}}>
                <Text style={[style.regularFont, {fontSize: 14}]}>{i + 1}. {items.attributes.Provinsi}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.regularFont, {fontSize: 14}]}>{items.attributes.Kasus_Posi}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.regularFont, {fontSize: 14}]}>{items.attributes.Kasus_Meni}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.regularFont, {fontSize: 14}]}>{items.attributes.Kasus_Semb}</Text>
                    </View>
                </View>
            </View>
            ))
            : <Text></Text>
            }
            </>
        )
    }
}

export default Daerah;