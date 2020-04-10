import React from 'react';
import DataCovid from '../DataCovid';
import Daerah from '../Daerah';
import {ScrollView, View, Image, Text} from 'react-native';
import style from '../../../style';
import Icon from 'react-native-vector-icons/FontAwesome';

function root()
{
    return(
        <>
        <ScrollView style={{flex: 1, position: 'relative',backgroundColor: 'white'}}>
            {/* Data Pasien */}
            <Image source={require('../../../atom/beranda/bg1.png')} style={{width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, zIndex: -1}}/>
            
            <View style={[style.container, {flex: 1,top: 5, width: '100%', paddingBottom: 20, marginTop: -220}]}>
                <Text style={[style.boldFont, {fontSize: 24,color: 'white'}]}>Indonesia</Text>
                <Text style={[style.regularFont, {fontSize: 12, color: 'white', marginVertical: 5,}]}>{`${new Date().getDate()} - ${new Date().getUTCMonth() + 1} - ${new Date().getFullYear()}`}</Text>
                <DataCovid/>
                <Daerah/>
                <Text>{'\n\n\n\n\n'}</Text>
                {/* akhir detail data */}
            </View>
            {/* akhir data */}
        </ScrollView>
        </>
    )
}

export default root;