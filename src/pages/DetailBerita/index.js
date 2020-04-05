import React, {Component} from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import style from '../../style';

class DetailBerita extends Component
{
    render(){
        return(
            <>
            <View style={{flex: 1}}>
                <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>

                    {/* header */}
                    <View style={style.miniContainer}>
                        <TouchableOpacity style={style.backBtn}>
                            <Image source={require('../../atom/back.png')}/>
                        </TouchableOpacity>
                        <Text style={[style.boldFont, {fontSize: 18}]}>Pasien Sembuh COVID - 19 di aceh</Text>
                        <Text style={[style.regularFont, {marginVertical: 10,color: 'gray'}]}>2 jam yang lalu</Text>
                    </View>
                    {/* akhir header */}

                    {/* Gambar */}
                    <View style={style.detailGambar}>
                        <Image source={require('../../atom/coba.jpeg')} style={style.imgBerita}/>
                    </View>
                    {/* Gambar */}

                    {/* Detail Berita */}
                    <View style={style.container}>
                        <Text style={[style.regularFont, style.paragraph]}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </View>
                    {/* akhir Berita */}

                </ScrollView>
            </View>
            </>
        )
    }
}

export default DetailBerita;