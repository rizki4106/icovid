import React, {Component} from 'react';
import {View, Dimensions} from 'react-native';
import {BarChart} from 'react-native-chart-kit';
import style from '../../../../pages/new/Style';

class Graphic extends Component
{
    constructor(props)
    {
        super(props)
    }
    render(){
        return(
            <>
            <View style={style.boxStatistik}>

            <BarChart
                data={{
                    labels: ["Terkonfirmasi", "Positif", "Meninggal", "Sembuh"],
                    datasets: [
                        {
                            data: [
                                this.props.data.confirmed,
                                this.props.data.positif,
                                this.props.data.deaths,
                                this.props.data.recovered,
                            ]
                        }
                    ]
                }}

                width={Dimensions.get('window').width}
                chartConfig={{
                    backgroundColor: 'white',
                    backgroundGradientFrom: '#fff',
                    backgroundGradientTo: '#fff',
                    decimalPlaces: 2,
                    color: (opacity = 1) => '#363636',
                    labelColor: (opacity = 1) => '#363636',
                    barPercentage: 1,
                    propsForDots: {
                        r: '6',
                        strokeWidth: 0.5,
                        stroke: '#ebebeb'
                    }
                }}
                style={{marginLeft: -20}}
                height={300}
                verticalLabelRotation={0}
                showBarTops={true}
                withInnerLines={false}

            />

            </View>
            </>
        )
    }
}

export default Graphic;