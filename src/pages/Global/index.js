import React, {Component} from 'react';
import {ScrollView, View, Text, Image, Dimensions}  from 'react-native';
import style from '../../style';
import {PieChart} from 'react-native-chart-kit';
import Negara from '../../organism/Global/Negara';

class Global extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            positif: 0,
            meninggal: 0,
            sembuh: 0,
            negara: [],
        }
    }
    async componentDidMount(){
        const req = await fetch('https://api.kawalcorona.com/');
        const res = await req.json()
        let positif = 0;
        let sembuh = 0;
        let meninggal = 0;

        res.map(items => {
            positif += items.attributes.Confirmed
            meninggal += items.attributes.Deaths
            sembuh += items.attributes.Recovered
        });

        await this.setState({
            positif: positif,
            meninggal: meninggal,
            sembuh: sembuh,
        });

        // get negara

        const negara = await fetch('https://api.kawalcorona.com/')
        const resneg = await negara.json()
        await this.setState({
            negara: [...this.state.negara, resneg]
        })

    }
    render(){
        const d = new Date()
        return(
            <>
            <ScrollView style={[style.container, {backgroundColor: 'white'}]}>
                <Text style={[style.boldFont, {fontSize: 18}]}>Global</Text>
                <Text style={[style.regularFont, {fontSize: 14, marginVertical: 5}]}>{`${d.getDate()} - ${d.getMonth() + 1} - ${d.getFullYear()}`}</Text>

                {/* chart rounded */}
                <View style={{width: '100%', height: 220, backgroundColor: '#dfd3d3', marginVertical: 20,}}>
                    <PieChart
                        width={Dimensions.get('window').width}
                        height={220}
                        backgroundColor='white'
                        accessor="population"
                        data={[
                            {
                                name: 'Positif',
                                population: this.state.positif,
                                color: '#B9A6E0',
                                legendFontColor: '#4A4F5D',
                                legendFontSize: 14,
                            },
                            {
                                name: 'Meninggal',
                                population: this.state.meninggal,
                                color: '#F88282',
                                legendFontColor: '#4A4F5D',
                                legendFontSize: 14,
                            },
                            {
                                name: 'Sembuh',
                                population: this.state.meninggal,
                                color: '#8BDFE2',
                                legendFontColor: '#4A4F5D',
                                legendFontSize: 14,
                            }
                        ]}
                        chartConfig={{
                            color: (opacity = 1)  => 'white',
                            labelColor: (opacity = 1) => "white",
                            style: {
                                borderRadius: 16,
                            }
                        }}
                    />
                </View>
                {/* end of chart */}
                {/* jumlah detail */}
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 20}}>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={[style.boldFont, {color: '#B9A6E0', fontSize: 16}]}>Positif</Text>
                        <Text style={[style.regularFont, {color:'#4A4F5D', marginVertical: 10,}]}>{this.state.positif}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={[style.boldFont, {color: '#F88282', fontSize: 16}]}>Meninggal</Text>
                        <Text style={[style.regularFont, {color:'#4A4F5D', marginVertical: 10,}]}>{this.state.meninggal}</Text>
                    </View>
                    <View style={{flex: 1, alignItems: 'center'}}>
                        <Text style={[style.boldFont, {color: '#8BDFE2', fontSize: 16}]}>Sembuh</Text>
                        <Text style={[style.regularFont, {color:'#4A4F5D', marginVertical: 10,}]}>{this.state.sembuh}</Text>
                    </View>
                </View>
                {/* akhir jumlah detail */}
                {/* Daerah internasional */}
                <Negara data={this.state.negara}/>
                {/* akhir daerah */}

            </ScrollView>
            </>
        )
    }
}

export default Global;