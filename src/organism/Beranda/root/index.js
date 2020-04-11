import React, {Component} from 'react';
import DataCovid from '../DataCovid';
import Daerah from '../Daerah';
import {ScrollView, View, Image, Text} from 'react-native';
import style from '../../../style';


class root extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            daerah: [],
        }
    }

    async componentDidMount(){
        const reqprov = await fetch('https://api.kawalcorona.com/indonesia/provinsi')
        const resprov = await reqprov.json()
        this.setState({
            daerah: [...this.state.daerah, resprov],
        })
    }

    render(){
        return(
            <>
            <ScrollView style={{flex: 1, position: 'relative',backgroundColor: 'white'}}>
                {/* Data Pasien */}
                <Image source={require('../../../atom/beranda/bg1.png')} style={{width: '100%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, zIndex: -1}}/>
                
                <View style={[style.container, {flex: 1,top: 5, width: '100%', paddingBottom: 20, marginTop: -220}]}>
                    <Text style={[style.boldFont, {fontSize: 24,color: 'white'}]}>Indonesia</Text>
                    <Text style={[style.regularFont, {fontSize: 12, color: 'white', marginVertical: 5,}]}>{`${new Date().getDate()} - ${new Date().getUTCMonth() + 1} - ${new Date().getFullYear()}`}</Text>
                    <DataCovid/>
                    <Daerah data={this.state.daerah}/>
                    <Text>{'\n\n\n\n\n'}</Text>
                    {/* akhir detail data */}
                </View>
                {/* akhir data */}
            </ScrollView>
            </>
        )
    }
}

export default root;