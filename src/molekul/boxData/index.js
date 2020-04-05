import React from 'react';
import {View, Text} from 'react-native';
import style from '../../style';

function BoxData(props){
    return(
        <>
        <View style={style.dataCovid}>
            <View style={style.covidLoc}>
                <Text style={style.mediumFont}>{props.daerah} ( {props.positif} )</Text>
            </View>
            <View style={style.covidMainData}>
                <View style={style.boxMainData}>
                    <Text style={[style.mediumFont, {color: 'yellow', fontSize: 16,marginVertical: 10,}]}>{props.positif}</Text>
                    <Text style={style.regularFont}>POSITIF</Text>
                </View>
                <View style={style.boxMainData}>
                    <Text style={[style.mediumFont, {color: 'red', fontSize: 16,marginVertical: 10,}]}>{props.meninggal}</Text>
                    <Text style={style.regularFont}>MENINGGAL</Text>
                </View>
                <View style={style.boxMainData}>
                    <Text style={[style.mediumFont, {color: '#74B49B', fontSize: 16,marginVertical: 10,}]}>{props.sembuh}</Text>
                    <Text style={style.regularFont}>SEMBUH</Text>
                </View>
            </View>
        </View>
        </>
    )
}

export default BoxData;