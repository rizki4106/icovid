import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'
import style from '../../style';
import MapView, {Marker} from 'react-native-maps';
import {getDistance} from 'geolib'
import GetLocation from 'react-native-get-location'
import Navigation from '../../molekul/Navigation';
import NetInfo from '@react-native-community/netinfo'
import AndroidOpenSeting from 'react-native-android-open-settings';

class Home extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            data: [],
            current: {
                name: '',
                distance: 0,
            },
            asal : {
                latitude: -6.208397,
                longitude: 106.84581,
                latitudeDelta: 0.500,
                longitudeDelta: 0.500,
                nama: 'Aktifkan Lokasi',
            }
        }
    }

    async componentDidMount(){

        NetInfo.fetch().then(res => {
            if(res.isConnected === false)
            {
                this.props.navigation.navigate('Error');
            }
        })

        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(loc => {
            if(loc){
                this.setState({
                    asal: {
                        latitude: loc.latitude,
                        longitude: loc.longitude,
                        latitudeDelta: 0.010,
                        longitudeDelta: 0.010,
                    }
                })
            }else{
                AndroidOpenSeting.locationSourceSettings();
            }
        }).catch(() => {
            AndroidOpenSeting.locationSourceSettings();
        })

        const getLoc = await fetch('http://health.senidigitalku.com/public/api/lokasi');
        const resLoc = await getLoc.json();
        await this.setState({
            data: resLoc.data,
        })
        await this.setState({
            current: {
                name: this.state.data[0].nama,
                distance: getDistance({latitude: this.state.asal.latitude, longitude: this.state.asal.longitude}, {latitude: this.state.data[0].latitude, longitude: this.state.data[0].longitude}) / 1000,
            }
        })

        await this.state.data.map(items => {
            let hasil = getDistance({latitude: this.state.asal.latitude, longitude: this.state.asal.longitude}, {latitude: items.latitude, longitude: items.longitude}) / 1000;
            if(hasil < this.state.current.distance)
            {
                this.setState({
                    current: {
                        name: items.nama,
                        distance: hasil,
                    }
                })
            }
        })
    }

    getCurrentLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(loc => {
            this.setState({
                asal : {
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                    latitudeDelta: 0.010,
                    longitudeDelta: 0.010,
                }
            })
        })
    }

    getMapRegion = () => ({
        latitude: this.state.asal.latitude,
        longitude: this.state.asal.longitude,
        latitudeDelta: this.state.asal.latitudeDelta,
        longitudeDelta: this.state.asal.longitudeDelta,
    })

    mapsPress = async (lat, long, title) => {
        let distance = await getDistance({latitude: this.state.asal.latitude, longitude: this.state.asal.longitude},{latitude: lat, longitude: long}) / 1000;
        await this.setState({
            current: {
                name: title,
                distance: distance,
            }
        })
        
    }

    render(){
        const el = this.state;
        return(
            <>
            <View style={[style.container2]}>
                {/* bagian maps */}
                <View accessible={true} style={style.coverMaps}>
                    <MapView style={style.map}
                    initialRegion={{
                        latitude: this.state.asal.latitude,
                        longitude: this.state.asal.longitude,
                        latitudeDelta: 0.010,
                        longitudeDelta: 0.010,
                    }}
                    followsUserLocation={true}
                    zoomEnabled={true}
                    showsUserLocation={true}
                    region={this.getMapRegion()}
                    >
                    {this.state.data.map((items,i) => (
                    <Marker onPress={() => {this.mapsPress(items.latitude, items.longitude, items.nama)}} key={i} coordinate={{
                        latitude: items.latitude,
                        longitude: items.longitude,
                    }}/>
                    ))}
                    </MapView>
                </View>
                {/* akhir bagian maps */}
                {/* navbar */}
                {/* akhir navbar */}
                {/* keterangan wilayah */}
                <View style={style.containerLoc}>

                    <View style={style.betWeenScontent}>

                        <View>

                        </View>
                        {/* get location */}
                        <TouchableOpacity style={style.getLocation} onPress={() => {this.getCurrentLocation()}}>
                            <Image source={require('../../atom/Home/nonactiveCurrentLocation.png')} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                        {/* end */}

                    </View>

                    {/* detail informasi */}
                    <View style={style.detailLoc}>
                        {/* alert pertama */}

                        <View style={style.alert1}>
                            <View style={style.alertContent}>
                                <Text style={[style.boldFont, {color: '#363636', fontSize: 12,marginBottom: 5,}]}>Peringatan</Text>
                                <Text style={{fontFamily: 'Montserrat-Regular', color: '#716A6A', fontSize: 10}}>Daerah terdekat terpapar COVID - 19</Text>
                            </View>
                            <TouchableOpacity style={style.detailBtn} onPress={() => {this.props.navigation.navigate("Data")}}>
                                <Text style={[style.regularFont, {color: 'white'}]}>Detail</Text>
                            </TouchableOpacity>
                        </View>

                        {/* alert ke 2 */}

                        <View style={style.alert2}>
                            <View style={{width: '20%', justifyContent: 'center', alignItems: 'baseline'}}>
                                <Image source={require('../../atom/Home/bigloc.png')} style={{width: 40, height: 55,}}/>
                            </View>
                            <View style={{width: '80%'}}>
                                <Text style={[style.boldFont, {fontSize: 14}]}>{this.state.current.name}</Text>
                                <Text style={[style.regularFont, {marginTop: 6, fontSize: 11}]}>{this.state.current.distance} KM lurus dari tempat kamu</Text>
                            </View>
                        </View>

                    </View>
                    {/* akhir detail */}
                    {/* footer */}
                    <Navigation style={{width: '100%', left: 0}} data={this.props} aktif="Home"/>
                    {/* akhir footer */} 
                </View>
                {/* akhir keterangan wilayah */}
            </View>
            </>
        )
    }
}

export default Home;