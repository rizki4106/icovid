import React, {Component} from 'react'
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native'
import style from '../../style';
import MapView, {Marker} from 'react-native-maps';
import {getDistance} from 'geolib'
import GetLocation from 'react-native-get-location'
import NetInfo from '@react-native-community/netinfo'
import AndroidOpenSeting from 'react-native-android-open-settings';
import Icon from 'react-native-vector-icons/Octicons'
import ParentData from '../../organism/new/Statistik/ParentData';

class Maps extends Component{
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
            },
            rootData: {
                confirmed: 0,
                deaths: 0,
                recovered: 0,
                positif: 0,
            },
            hiddenDetails: true,
            detailData: {
                positif: 0,
                recovered: 0,
                deaths: 0,
                confirmed: 0,
            },
        }
    }

    currentLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        }).then(lokasi => {
            this.setState({
                asal: {
                    latitude: lokasi.latitude,
                    longitude: lokasi.longitude,
                    latitudeDelta: 0.010,
                    longitudeDelta: 0.010,
                }
            })
        }).catch(err => {
            Alert.alert(err);
        })
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
                this.getLocationData()
            }else{
                AndroidOpenSeting.locationSourceSettings();
                this.currentLocation();     
            }
        }).catch(() => {
            AndroidOpenSeting.locationSourceSettings();
            this.currentLocation();
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

    handleDetailsData(){
        this.setState({
            hiddenDetails: !this.state.hiddenDetails,
        })
    }

    // get detail national data
    async getLocationData(){
        const req = await fetch('https://api.kawalcorona.com/indonesia/provinsi')
        const res = await req.json();
        const filtered = await res.filter(value => {
            return value.attributes.Provinsi == this.state.current.name;
        })

        if(filtered.length > 0){

            await this.setState({
                detailData: {
                    positif: filtered[0].attributes.Kasus_Posi - (filtered[0].attributes.Kasus_Semb + filtered[0].attributes.Kasus_Meni),
                    confirmed: filtered[0].attributes.Kasus_Posi,
                    deaths: filtered[0].attributes.Kasus_Meni,
                    recovered: filtered[0].attributes.Kasus_Semb,
                }
            })
        }
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
                <View style={[style.containerLoc, (this.state.hiddenDetails) ? {minHeight: 20} : {minHeight: 420}]}>

                    <View style={style.betWeenScontent}>
                        <View></View>
                        {/* get location */}
                        <TouchableOpacity style={style.getLocation} onPress={() => {this.getCurrentLocation()}}>
                            <Image source={require('../../atom/Home/nonactiveCurrentLocation.png')} style={{width: 20, height: 20}}/>
                        </TouchableOpacity>
                        {/* end */}

                    </View>
                    {/* detail baru */}
                    <View style={style.newDetail}>
                        <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                            {/* header */}
                            <TouchableOpacity style={style.barClose} onPress={() => {this.handleDetailsData()}}>
                            </TouchableOpacity>
                            {/* end of header */}
                        </View>
                        <View style={style.alertInfo}>
                            <Text style={[style.boldFont, {fontSize: 16, color: '#252448'}]}>Pemberitahuan</Text>
                            <Text style={[style.regularFont, {color: '#252448', marginVertical: 10}]}>Daerah terpapar COVID - 19 terdekat</Text>
                            {/* distance */}
                            <View style={{width: '100%', flexDirection: 'row', alignItems: 'center', marginVertical: 10,}}>
                                <Icon name="location" size={26} color='#252448'/>
                                <Text style={[style.regularFont, {color: '#716a6a', marginLeft: 10}]}>{this.state.current.distance.toLocaleString()} km dari tempat kamu</Text>
                            </View>
                            <ParentData wilayah={this.state.current.name} data={this.state.detailData}/>
                            {/*  */}
                        </View>
                    </View>
                    {/* akhir detail baru */}
                </View>
                {/* akhir keterangan wilayah */}
            </View>
            </>
        )
    }
}

export default Maps;