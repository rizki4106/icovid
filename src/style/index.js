import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container : {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    container2: {
        flex: 1,
        alignItems: 'center',
    },
    contentCenter: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconCovid : {
        width: 150,
        height: 150,
    },
    buttonLogin : {
        backgroundColor: 'white',
        width: '80%',
        flexDirection: 'row',
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 150,
        borderWidth: 2,
        borderColor: '#dfd3d3',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,

    },
    textButtonLog: {
        fontSize: 16,
        marginLeft: 20,
        color: '#363636',
        fontFamily: 'Montserrat-Bold',
    },
    containerBtn: {
      width: '80%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    segitiga: {
        position: 'absolute',
        left: 80,
        top: 200,
        width: 50,
        height: 50,
    },
    contentAbsolute: {
        position: 'absolute',
    },
    // navbar 
    navbar : {
        width: '90%',
        borderWidth: 1,
        borderColor: '#dfd3d3',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 3,
        top: 30,
        shadowOffset: {width: 0, height: 20},
        shadowColor: 'black',
        shadowOpacity: 1.0,
        backgroundColor: 'white',
        
    },
    point: {
        width: 10,
        height: 10,
        backgroundColor: '#59A8F5',
        borderRadius: 50,
        position: 'absolute',
        right: -3,
        top: -2,
        zIndex: 1,
    },
    containerLoc: {
        width: '100%',
        minHeight: 265,
        position: 'absolute',
        zIndex: 1,
        bottom: 0,
        paddingHorizontal: 20,
    },
    betWeenScontent : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    currentLocation : {
        width: '40%',
        height: 45,
        backgroundColor: 'white',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boldFont: {
        fontFamily: 'Montserrat-Bold',
        color: '#363636'
    },
    getLocation : {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#dfd3d3',
    },
    detailLoc: {
      backgroundColor: 'white',
      width: '100%',
      height: 180,
      marginTop: 20,
      borderRadius: 5,
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    alert1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    detailBtn: {
        width: '25%',
        height: 30,
        backgroundColor: '#74B49B',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    regularFont: {
        fontFamily: 'Montserrat-Regular',
        color: '#363636'
    },
    alert2: {
        width: '100%',
        height: 80,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#F9E6E6',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    coverMaps: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map : {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    // navigation
    navigation : {
        width: '90%',
        left: 20,
        height: 50,
        backgroundColor: 'white',
        marginVertical: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: '#F0F0F0',
        // shadowColor: 'rgba(0,0,0,0.1)',
        // shadowOffset: {width: 0, height: 5},
        // shadowOpacity: 0.29,
        // shadowRadius: 50,
        // elevation: 2,
        // position: 'absolute',
        // bottom: 10
    },
    navBtn: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    // data page
    graphic: {
        width: '100%',
        minHeight: 200,
        position: 'relative',
        marginVertical: 20,
        borderRadius: 10,
    },
    miniContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    dataCovid: {
        width: '100%',
        height: 130,
        borderWidth: 1,
        borderColor: '#dfd3d3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 20,
    },
    covidLoc: {
        flexDirection: 'row',
    },
    mediumFont: {
        fontFamily: 'Montserrat-Medium',
        color: '#363636',
    },
    covidMainData: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    boxMainData: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    // halaman berita
    boxBerita: {
        width: '100%',
        minHeight: 100,
        borderRadius: 5,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    imgBerita: {
        flex: 1,
        maxWidth: '100%',
        maxHeight: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    backBtn: {
        marginVertical: 30,
    },
    detailGambar: {
        width: '100%',
        height: 220,
        backgroundColor: '#dfd3d3',
        marginVertical: 20,
    }, 
    paragraph: {
        fontSize: 14,
        lineHeight: 25,
    },

    // halaman error
    error : {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnReload : {
        width: '30%',
        height: 45,
        backgroundColor: '#74B49B',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    // new page
    // home
    dataDetail: {
        width: '100%',
        height: 200,
        backgroundColor: 'white',
        borderRadius: 5,
        marginVertical: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        shadowColor: '#dfd3d3',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 20,
        shadowOpacity: 0.2,
        elevation: 8,
    },
    graphicBox: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
    },
    subData: {
        width: '45%',
        height: 179,
        backgroundColor: 'white',
        shadowColor: '#dfd3d3',
        shadowOffset: {
            width: 0,
            height: -10,
        },
        shadowRadius: 50,
        shadowOpacity: 0.2,
        elevation: 8,
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    BoxWilayah2 : 
    {
        width:'100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    // halaman pencarian
    searchBar: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F7F7',
        borderRadius: 50,
        paddingHorizontal: 20,
    },
    noData: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 400,
    },
    hideData: {
        display: 'none',
    }

})

export default style;