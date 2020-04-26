import React, {Component} from 'react'
import {View, Text, ScrollView, TouchableOpacity, TextInput, Image} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import GetLocation from 'react-native-get-location';
import ImagePicker from 'react-native-image-picker';
import AndroidOpenSeting from 'react-native-android-open-settings';
import style from '../Style';
 
class DonasiUpload extends Component{
    constructor(props)
    {
        super(props)
        this.state = {
            donasi: '',
            noHp: {
                value: '',
                placeholder: "Contoh 081351387634",
                click: false,
            },
            alamat: {
                latitude: 0,
                longitude: 0,
                click: false,
                err: '',
            },
            images: [],
            deskripsi: '',
            loading: true,
        }
    }

    getLocation = () => {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000
        }).then(res => {
            if(res.latitude !== undefined){
                this.setState({
                    alamat: {
                        latitude: res.latitude,
                        longitude: res.longitude,
                        click: true,
                    }
                });
            }else{
                AndroidOpenSeting.locationSourceSettings();
            }
        }).catch(err => {
            this.setState({
                alamat: {
                    err: err,
                    click: true,
                }
            })
        })
    }


    getImage = () => {
        const options = {
            title: 'Pilih Gambar',
            customButtons: [
                {name: 'customOptionKey', title: 'Pilih Gambar'}
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
            noData: true,
        }
        ImagePicker.showImagePicker(options, res => {
            this.setState({
                images: [...this.state.images, res],
            })
        })
    }

    deleteImage = (i) => {
        console.log(this.state.images.length)
    }


    sendDonation = () => {
        const data = new FormData();
        data.append('judul', this.state.donasi);
        data.append('noHp', this.state.noHp.value)
        data.append('latitude', (this.state.alamat.latitude))
        data.append('longitude', this.state.alamat.longitude)
        data.append('deskripsi', this.state.deskripsi);
        console.log(data);
    }

    render(){
            return(
                <>
                <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
                    <View style={style.container}>
                        <TouchableOpacity>
                            <Icon name="ios-arrow-round-back" size={25} color="#252448"/>
                        </TouchableOpacity>
                        {/* box upload */}
                        <View style={{flex: 1, marginVertical: 20}}>
                            <View style={style.boxInput}>
                                <TextInput placeholder="Contoh pembagian masker" onChangeText={(f) => {this.setState({donasi: f})}} autoFocus={false}/>
                                <Text style={[style.paragraph, style.labelInput, style.labelPosition2]}>Jenis Donasi</Text>
                            </View>
                            <View style={style.boxInput}>
                                <TextInput placeholder={(this.state.noHp.click === true) ? "contoh 081351387634" : '' } onChangeText={(f) => {this.setState({noHp: {value: f, click: true}})}}/>
                                <Text style={[style.paragraph, style.labelInput, (this.state.noHp.click === true) ? style.labelPosition2 : style.labelPosition1]} onPress={() => {this.setState({noHp: {click: true}})}}>Nomor Telepon ( wajib )</Text>
                            </View>
                            <View style={style.boxInput}>
                                <Text style={[style.paragraph,{marginTop: 20}]}>{(this.state.alamat.latitude !== 0) ? this.state.alamat.latitude +','+ this.state.alamat.longitude : ''}</Text>
                                <Text style={[style.paragraph, style.labelInput, (this.state.alamat.click === true) ? style.labelPosition2 : style.labelPosition1]} onPress={() => {this.setState({alamat: {click: true}}); this.getLocation()}}>Alamat</Text>
                            </View>
    
                            {/* image preview and choises */}
                            <Text style={[style.paragraph, style.labelInput, {position: 'relative'}]}>Foto ( wajib )</Text>
                            <ScrollView  showsHorizontalScrollIndicator={false} horizontal={true} style={{width: '100%', height: 100,paddingVertical: 10, marginTop: 20}}>
                                {/* preview image */}
                                {this.state.images.map((items, i) => (
                                <View style={style.boxImg} key={i}>
                                    <Image source={{uri: items.uri}} style={style.imgStyle}/>
                                    <TouchableOpacity style={style.removeImg} onPress={() => {this.deleteImage(i)}}>
                                        <Text>X</Text>
                                    </TouchableOpacity>
                                </View>
                                ))}
                                {/* end of preview */}
                                <TouchableOpacity style={style.choseImg} onPress={() => {this.getImage()}}>
                                <Text>+</Text>
                                </TouchableOpacity>
                            </ScrollView>
                            {/*  */}
                            <Text style={[style.paragraph, style.labelInput, {position: 'relative'}]}>Deskripsi</Text>
                            <TextInput onChangeText={(f) => {this.setState({ deskripsi: f})}} style={style.textArea} multiline={true} placeholder="Deskripsikan donasi kamu disini"/>
                            <TouchableOpacity style={[style.btnUpload]}><Text style={{fontFamily: 'Montserrat-Bold', color: 'white'}} onPress={() => {this.sendDonation()}}>Upload</Text></TouchableOpacity>
                        </View>
                        {/*  */}
                    </View>
                </ScrollView>
                </>
            )
    }
}

export default DonasiUpload;