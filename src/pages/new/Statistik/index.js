import React, {Component} from 'react';
import {  
    View,
    Text,
    ScrollView,
} from "react-native";
import style from '../Style'
import {Picker} from '@react-native-community/picker';
import Data from '../../../organism/new/Statistik/Data';
import Graphic from '../../../molekul/new/Statistik/Graphic';
import ParentData from '../../../organism/new/Statistik/ParentData';
import AnimatedLoader from 'react-native-animated-loader';


class Statistik extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            wilayah: 'indonesia',
            rootData: {
                confirmed: 0,
                deaths: 0,
                positif: 0,
                recovered: 0,
                update: 0,
            },
            data: [],
            loading: true,
        }
    }

    componentDidMount(){
        this.handleChaneRegion(this.state.wilayah)
    }

    handleDataRegion = async (region) => {
        if(region === "indonesia"){
            const req = await fetch('https://api.kawalcorona.com/indonesia/provinsi')
            const res = await req.json();
            let positif = 0 
            let terkonfirmasi = 0
            let meninggal = 0
            let sembuh = 0;
            let data = [];
            res.map((items,i) => {
                terkonfirmasi += items.attributes.Kasus_Posi;
                meninggal += items.attributes.Kasus_Meni;
                sembuh += items.attributes.Kasus_Semb;
                data[i] = {}
                data[i]['terkonfirmasi'] = items.attributes.Kasus_Posi;
                data[i]['positif'] = items.attributes.Kasus_Posi - (items.attributes.Kasus_Meni + items.attributes.Kasus_Semb);
                data[i]['meninggal'] = items.attributes.Kasus_Meni;
                data[i]['sembuh'] = items.attributes.Kasus_Semb
                data[i]['daerah'] = items.attributes.Provinsi
            })
            positif = terkonfirmasi - (meninggal + sembuh);
            await this.setState({
                rootData: {
                    confirmed: terkonfirmasi,
                    deaths: meninggal,
                    recovered: sembuh,
                    positif: positif,
                    update: new Date().getDate(),
                },
                data: data,
                loading: false,
            })

        }else{
            const req2 = await fetch('https://api.kawalcorona.com/')
            const res2 = await req2.json()
            let confirmed = 0;
            let positif = 0;
            let recovered = 0;
            let deaths = 0;
            let waktu = ''
            let globalData = [];
            res2.map((items,i) => {
                confirmed += items.attributes.Confirmed;
                recovered += items.attributes.Recovered;
                deaths += items.attributes.Deaths
                globalData[i] = {}
                globalData[i]['terkonfirmasi'] = items.attributes.Confirmed;
                globalData[i]['positif'] = items.attributes.Confirmed - (items.attributes.Deaths + items.attributes.Recovered);
                globalData[i]['meninggal'] = items.attributes.Deaths;
                globalData[i]['sembuh'] = items.attributes.Recovered
                globalData[i]['daerah'] = items.attributes.Country_Region
            });

            positif = await confirmed - (recovered + deaths);
            waktu = new Date(res2[res2.length - 1].attributes.Last_Update)
            await this.setState({
                rootData: {
                    confirmed: confirmed,
                    positif: positif,
                    recovered: recovered,
                    deaths: deaths,
                    update: waktu.getDate() + '-' + parseInt(waktu.getMonth() + 1) + '-' + waktu.getFullYear(),
                },
                data: globalData,
                loading: false,
            })

        }
    }

    handleChaneRegion = async (f) => {
        this.setState({wilayah:f, loading: true})
        this.handleDataRegion(f);

    }

    render(){
        if(this.state.loading === true){

            return(
                <>
                <AnimatedLoader
                visible={this.state.loading}
                overlayColor="rgba(255,255,255,1)"
                source={require('./loading.json')}
                animationStyle={{width: 250, height: 250}}
                speed={1}
                />
                </>
            )
        }else{
            return(
                <>
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}> 
                    <View style={style.container}>

                    {/* header */}
                    <View style={{width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                        <Text style={[style.boldFont1, {fontSize: 22}]}>Statistik</Text>
                        <Picker 
                        selectedValue={this.state.wilayah}
                        onValueChange={(itemsval, itemsin) => {this.handleChaneRegion(itemsval)}}
                        style={{heigh: 50, width: 150}}
                        >
                        <Picker.Item label="Indonesia" value="indonesia"/>
                        <Picker.Item label="Dunia" value="dunia"/>
                        </Picker>
                    </View>
                    <Graphic data={this.state.rootData}/>
                    <ParentData wilayah={this.state.wilayah} data={this.state.rootData}/>

                    {/* bagian data per wilayah secara detail */}
                    <Text style={[style.boldFont1, {fontSize: 22,marginVertical: 30,}]}>Detail</Text>
                    <Data wilayah={this.state.wilayah} data={this.state.data}/>
                    {/*  */}
                    </View>
                </ScrollView>
                </>
            )
        }
    }
}

export default Statistik;