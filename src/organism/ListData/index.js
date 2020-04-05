import React, {Component} from 'react';
import {Text} from 'react-native';
import style from '../../style';
import BoxData from '../../molekul/boxData';

class ListData extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <>
                <Text style={[{fontSize: 16}, style.boldFont]}>Provinsi</Text>
                {/* box data */}
                { (this.props.data ) ? this.props.data.map((items, i) => (
                    <BoxData key={items.attributes.Kode_Provi} positif={items.attributes.Kasus_Posi} sembuh={items.attributes.Kasus_Semb} meninggal={items.attributes.Kasus_Meni} daerah={items.attributes.Provinsi} />
                )) : <Text></Text>}
                
                {/* akhir box data */}
            </>
        )
    }
}

export default ListData;