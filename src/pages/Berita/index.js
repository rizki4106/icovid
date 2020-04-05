import React, {Component} from 'react';
import {View} from 'react-native';
import ListBerita from '../../organism/ListBerita';
import Navigation from '../../molekul/Navigation';

class Berita extends Component
{
    render(){
        return(
            <>
            <View style={{flex: 1}}>
                <ListBerita/>
                <Navigation style={{marginTop: 0, marginBottom: 10,}}/>
            </View>
            </>
        )
    }
}

export default Berita;