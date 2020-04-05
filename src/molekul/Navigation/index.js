import React, {Component} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import style from '../../style';

class Navigation extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            homeIcon: require('../../atom/Navbar/home.png'),
            dataIcon: require('../../atom/Navbar/data.png'),
        }
    }

    componentDidMount(){
        if(this.props.aktif === "Home")
        {
            this.setState({
                homeIcon: require('../../atom/Navbar/activeHome.png'),
                dataIcon: require('../../atom/Navbar/data.png'),
            })
        }else{
            this.setState({
                homeIcon: require('../../atom/Navbar/home.png'),
                dataIcon: require('../../atom/Navbar/activedata.png'),
            })
        }
    }

    Home(){
        this.props.data.navigation.navigate("Home");
    }
    Data(){
        this.props.data.navigation.navigate("Data");
    }


    render(){
        return(
            <>
            <View style={(this.props.style) ? [style.navigation, this.props.style] : style.navigation}>
                <TouchableOpacity style={style.navBtn} onPress={() => this.Home()}>
                    <Image source={this.state.homeIcon}/>
                </TouchableOpacity>
                <TouchableOpacity style={style.navBtn} onPress={() => this.Data()}>
                    <Image source={this.state.dataIcon}/>
                </TouchableOpacity>
            </View>
            </>
        )
    }
}

export default Navigation;