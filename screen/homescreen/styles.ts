import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{},
    topHome:{
        backgroundColor: 'darkblue',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    bibleTxt:{
        color: '#ffff',
        fontSize: 20,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },
    activitiesContainer:{
        paddingHorizontal: 30,
        paddingVertical: 10,
        marginTop: -40,
    },
    ActivitiesItem:{
        borderRadius: 10,
        height: 'auto',
        // justifyContent: 'center',
        backgroundColor: '#ffffee',
        paddingHorizontal: 20,
        marginBottom: 10,
        paddingVertical: 20,
        flexDirection: 'row'
    },
    ActivitiesItemTxt:{
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: 'darkblue'
    }
})

export default styles