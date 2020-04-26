import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    boldFont1:{
        fontFamily: 'Montserrat-Bold',
        fontSize: 28,
        color: '#252448',
    },
    centerContent : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    paragraph: {
        color: '#363636',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        lineHeight: 28,
        color: '#252448',
    },
    authButton: {
        width: '100%',
        height: 45,
        borderWidth: 1,
        borderColor: '#252448',
        borderRadius: 5,
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerText: {
        textAlign: 'center',
        color: '#252448',
        fontSize: 14,
    },
    // halaman home
    absoluteContent : {
        position: 'absolute',
        zIndex: 1,
        top: 40,
        flex: 1,
    },
    boxFitur: {
        width: '43%',
        height: 178,
        borderWidth: 1,
        borderColor: '#EBEBEB',
        backgroundColor: 'white',
        borderRadius: 5,
        paddingHorizontal: 20,
        justifyContent: 'center',
        marginVertical: 10,
    },
    // HALAMAN STATISTIK
    boxStatistik :
    {
        width: '100%',
        height: 300,
        marginVertical: 20,
    },
    boxData: {
        flex: 1,
        
    },
    dataSet: {
        marginVertical: 20,
        width: '100%',
        height: 190,
        borderWidth: 1,
        borderColor: '#DFD3D3',
        borderRadius: 5,
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    dataSetReal: {
        flex: 1,
        alignItems: 'center',
    }
})

export default style;