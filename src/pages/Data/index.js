import React, {Component} from 'react';
import {View, Text, ScrollView, Dimensions} from 'react-native';
import Statistik from '../../molekul/Statistic';
import style from '../../style';
import ListData from '../../organism/ListData';
import Navigation from '../../molekul/Navigation';

class Data extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            provinsi: [],
            positif: 0,
        }
    }

    async componentDidMount(){
        
        const req = await fetch('https://api.kawalcorona.com/indonesia/provinsi')
        const res = await req.json();
        let no = 28;
        await res.map(items => {
            no += items.attributes.Kasus_Posi
        });

        await this.setState({
            provinsi: res,
            positif: no,
        });

    }

    render(){
        return(
            <>
            <View style={{flex: 1, backgroundColor: 'white'}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, paddingVertical: 20,}}>
                    <Statistik data={this.state.positif}/>
                    <View style={style.container}>
                        <ListData data={this.state.provinsi}/>
                    </View>
                </ScrollView>
                <Navigation style={{marginTop: 0, marginBottom: 10,}} data={this.props} aktif="Data"/>
            </View>
            </>
        )
    }
}

export default Data;