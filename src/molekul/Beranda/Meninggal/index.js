import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LineChart} from 'react-native-svg-charts';
import style from '../../../style';

class Meninggal extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <>
            <View style={style.subData}>
                <Text><Text style={[style.boldFont, {color: '#4A4F5D', fontSize: 14,}]}>Meninggal</Text> ( {(this.props.data.length > 0) ? this.props.data[this.props.data.length - 1] : ''} )</Text>
                <LineChart
                style={{width: '70%',height: 100}}
                data={this.props.data}
                contentInset={{top: 30, bottom: 30}}
                svg={{stroke: '#B9A6E0'}}
                >
                </LineChart>
                </View>
            </>
        )
    }
}

export default Meninggal;