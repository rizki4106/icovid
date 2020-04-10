import React, {Component} from 'react';
import Sembuh from '../../../molekul/Beranda/Sembuh';
import Meninggal from '../../../molekul/Beranda/Meninggal';
import {View} from 'react-native';
import Positif from '../../../molekul/Beranda/Positif';

class DataCovid extends Component{

    constructor(props)
    {
        super(props)
        this.state = {
            confirmed: [],
            deaths: [],
            recovered: [],
            region: [],
        }
    }

    async componentDidMount()
    {
        const req = await fetch('https://pomber.github.io/covid19/timeseries.json')
        const res = await req.json();
        let hasil = await res.Indonesia
        hasil.forEach(items => {
            this.setState({
                confirmed: [...this.state.confirmed, items.confirmed],
                deaths: [...this.state.deaths, items.deaths],
                recovered: [...this.state.recovered, items.recovered],
            });
        });
    }

    render(){
        return(
            <>
            <Positif data={this.state.confirmed}/>
            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginVertical: 20}}>
                <Meninggal data={this.state.deaths}/>
                <Sembuh data={this.state.recovered}/>
            </View>
            </>
        )
    }
}

export default DataCovid;