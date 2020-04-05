import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import style from '../../style';
import BoxBerita from '../../molekul/BoxBerita';



class ListBerita extends Component
{
    render(){
        return(
            <>
                <ScrollView style={[style.container]} showsVerticalScrollIndicator={false}>
                    <BoxBerita/>
                    <BoxBerita/>
                    <BoxBerita/>
                    <BoxBerita/>
                    <BoxBerita/>
                    <BoxBerita/>
                    <BoxBerita/>
                </ScrollView>
            </>
        )
    }
}

export default ListBerita;