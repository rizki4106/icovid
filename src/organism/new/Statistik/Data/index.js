import React, {Component} from 'react';
import {View, Text} from 'react-native';
import style from '../../../../pages/new/Style';
import Datas from '../../../../molekul/new/Statistik/Data';

class Data extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <>
            <View style={style.boxData}>
                {(this.props.data) ? 
                this.props.data.map((items, i) => (
                    <Datas wilayah={this.props.wilayah} key={i} terkonfirmasi={items.terkonfirmasi} positif={items.positif} sembuh={items.sembuh} meninggal={items.meninggal} daerah={items.daerah}/>
                ))
                : <Text></Text>}
            </View>
            </>
        )
    }
}

export default Data;