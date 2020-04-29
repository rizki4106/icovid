import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../../../style';

class BoxData extends Component
{
    constructor(props)
    {
        super(props)
    }

    render(){
        return(
            <>
            {(this.props.data.length > 0) ? 
            this.props.data.map((items, i) => (
            <View style={style.BoxWilayah2} key={i}>
                <View style={{flex: 1}}>
                <Text style={[style.regularFont, {fontSize: 14}]}>{i + 1}. {items[0].wilayah}</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.regularFont, {fontSize: 14}]}>{items[0].positif.toLocaleString()}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.regularFont, {fontSize: 14}]}>{items[0].meninggal.toLocaleString()}</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
                        <Text style={[style.regularFont, {fontSize: 14}]}>{items[0].sembuh.toLocaleString()}</Text>
                    </View>
                </View>
            </View>
            ))
            : <Text>''</Text>
            }
            </>
        )
    }
}

export default BoxData;