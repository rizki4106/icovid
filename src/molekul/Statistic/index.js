import React, {Component} from 'react';
import {View, Dimensions, Text} from 'react-native'
import {
    LineChart
} from "react-native-chart-kit";

import style from '../../style';

class Statistic extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            data: [],
        }
    }

    async componentDidMount(){
            const data = await fetch('https://pomber.github.io/covid19/timeseries.json')
            const hasil = await data.json();
            const result = await hasil.Indonesia
            const middle = await parseInt(result.length / 5)
            const beforemid = await parseInt(middle / 2)

            // after middle
            const aftermid = await parseInt((result.length - middle) / 2);
            await this.setState({
                data: [result[0].confirmed,result[beforemid].confirmed, result[middle].confirmed, result[aftermid].confirmed, result[result.length - 1].confirmed]
            })
            
    }
    render(){
        return(
            <>
                    <View style={style.miniContainer}>
                    <Text style={[style.boldFont, {fontSize: 16}]}>Nasional</Text>
                    <Text style={[{marginTop: 10,},style.regularFont]}>Kasus positif COVID - 19 di Indonesia</Text>
                    </View>
                    <View style={style.graphic}>
                    {(this.state.data.length > 0) ? 
                    <LineChart
                        data={{
                        datasets: [
                            {
                            data: this.state.data,
                            }
                        ]
                        }}
                        width={Dimensions.get('window').width} // from react-native
                        height={220}
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                        backgroundColor: "#fff",
                        backgroundGradientFrom: "#74B49B",
                        backgroundGradientTo: "#74B49B",
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `#fff`,
                        labelColor: (opacity = 1) => `#fff`,
                        propsForDots: {
                            r: "6",
                            strokeWidth: "3",
                            stroke: "#74B49B"
                        }
                        }}
                        bezier
                        style={{
                        marginVertical: 8,
                        }}
                    />
                    :
                    <Text></Text>
                    }
                    </View>
            </>
        )
    }
}

export default Statistic;