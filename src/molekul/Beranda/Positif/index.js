import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {LineChart, XAxis} from 'react-native-svg-charts';
import style from '../../../style';

class Positif extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: [],
        }
    }

    render(){
        return(
            <>
            <View style={style.dataDetail}>
                <Text><Text style={[style.boldFont, {color: '#4A4F5D', fontSize: 14,}]}>Positif</Text> ( {(this.props.data.length > 0 ) ? this.props.data[this.props.data.length - 1] : ''} )</Text>
                <View style={style.graphicBox}>
                <LineChart
                    style={{width: '80%',height: 180}}
                    data={this.props.data}
                    contentInset={{top: 30, bottom: 30}}
                    svg={{stroke: '#B9A6E0'}}
                    >
                </LineChart>
                </View>
            </View>
            </>
        )
    }
}

export default Positif;