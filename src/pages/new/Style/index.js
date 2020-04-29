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
    boxboarding: {
        width: '100%',
        minHeight: 164,
        marginVertical: 20,
    },
    boxFitur: {
        width: '100%',
        height: 75,
        borderWidth: 1,
        borderColor: '#dfd3d3',
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
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
    },
    // halaman donasi
    boxInput: {
        width: '100%',
        height: 50,
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: '#dfd3d3',
        marginVertical: 15,
    },
    labelInput: {
        fontSize: 11,
        color: '#4F6CFF',
        fontFamily: 'Montserrat-Bold',
        position: 'absolute',
        left: 2,
        backgroundColor: 'white',
    },
    labelPosition1: {
        top: 10,
    },
    labelPosition2: {
        top: -15,
    },
    choseImg: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderStyle: 'dotted',
        borderRadius: 150,
        borderColor: '#252448',
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxImg: {
        width: 50,
        height: 50,
        position: 'relative',
        marginRight: 10,
    },
    removeImg: {
        width: 20,
        height: 20,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderColor: '#252448',
        borderWidth: 1,
        position: 'absolute',
        right: -4,
        top: -3,
        zIndex: 1,
    },
    imgStyle: {
        width: 50,
        height: 50,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#252448',
    },
    textArea: {
        borderBottomWidth: 1,
        borderBottomColor: '#dfd3d3',
        paddingVertical: 20,
        paddingHorizontal: 0,
        minHeight: 100,
    },
    btnUpload: 
    {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4F6CFF',
        borderRadius: 5,
        marginVertical: 30,
    },
    lottie: {
        width: 100,
        height: 100,
    }
})

export default style;