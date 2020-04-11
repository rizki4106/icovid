import React, {Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput, Image} from 'react-native';
import Result from '../../organism/Search/Result';
import ucwords from 'ucwords';
import style from '../../style';

class Search extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            data: [],
            start: false,
            result: [],
        }
    }

    async componentDidMount(){
        const indo = await fetch('https://api.kawalcorona.com/indonesia/provinsi');
        const resindo = await indo.json()
        resindo.map((items, i) => {
            this.setState({
                data: [...this.state.data, {
                    wilayah: items.attributes.Provinsi,
                    positif: items.attributes.Kasus_Posi,
                    meninggal: items.attributes.Kasus_Meni,
                    sembuh:items.attributes.Kasus_Semb,
                }]
            })
        });
        const world = await fetch('https://api.kawalcorona.com/')
        const resworld = await world.json()

        resworld.map((items, i) => {
            this.setState({
                data: [...this.state.data, {
                    wilayah: items.attributes.Country_Region,
                    positif: items.attributes.Confirmed,
                    meninggal: items.attributes.Deaths,
                    sembuh:items.attributes.Recovered,
                }]
            })
        })

    }

    handleText = (t) => {
        if(t.length > 0){
            this.setState({
                start: true,
            });
            const res = this.state.data.filter(value => {
                return value.wilayah === ucwords(t);
            });

            if(res.length > 0){
                this.setState({
                    result: [...this.state.result, res],
                });
            }

        }else{
            this.setState({
                start: false,
                result: [],
            })
        }
    }

    render(){
        return(
            <>
            <ScrollView style={[style.container, {backgroundColor: 'white'}]}>
                <View style={style.searchBar}>
                    <TextInput onChangeText={(t) => {this.handleText(t)}} placeholder="Telusuri Disini" style={{height: 50, flex: 10}}/>
                    <TouchableOpacity style={{flex: 1}}>
                        <Image source={require('../../atom/search/search.png')}/>
                    </TouchableOpacity>
                </View>

                {/* result */}
                <Text>{'\n'}</Text>
                {(this.state.start === true) ?
                (this.state.result.length > 0)
                 ? 
                    <Result data={this.state.result}/>
                 : 
                    <View style={style.noData}>
                        <Image source={require('../../atom/search/nodata.png')}/>
                        <Text style={[style.boldFont, {marginTop: 30, fontSize: 16, color: '#4A4F5D'}]}>DATA TIDAK DITEMUKAN</Text>
                    </View>
                 :
                 <Text></Text>
                }
            </ScrollView>
            </>
        )
    }
}

export default Search;