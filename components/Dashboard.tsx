import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <Text style={styles.smallTxt}>Welcome Evangelist </Text>
      <View style={styles.user}>
        <View style={styles.profile}>
          <Image source={require('./images/aaa.jpg')} style={styles.userImage} />
          <View style={styles.nameProf}>
            <Text style={styles.username}>GABRIEL</Text>
            <Text style={styles.nameDisc}>Little discription about user</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.view}>View activities</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statistics}>
        <View style={styles.statChild}>
          <View style={[styles.statRound, styles.greenBg]}></View>
          <Text style={styles.statText}>statistic 1</Text>
        </View>
        <View style={styles.statChild}>
          <View style={[styles.statRound, styles.blueBg]}></View>
          <Text style={styles.statText}>statistic 1</Text>
        </View>
        <View style={styles.statChild}>
          <View style={[styles.statRound, styles.yellowBg]}></View>
          <Text style={styles.statText}>statistic 1</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    dashboard:{
        flex: 1,
        alignSelf: 'stretch',
        width: '100%',
        height: 200,
        backgroundColor: 'skyblue',
        borderRadius: 10,
        padding: 15
    },
    username:{
      fontSize: 20,
      color: 'white',
      fontWeight: 'bold'
    },
    nameDisc:{
      color: 'gray',
      fontSize: 12
    },
    nameProf:{
      marginLeft: 10,
      marginVertical: 'auto'
    },
    view:{
      color: '#000023',
      fontSize: 10
    },
    user:{
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    statistics:{
      marginVertical: 10,
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    eachStat:{},
    statRound:{
      marginRight: 10,
      height: 5,
      width: 5,
      marginVertical: 'auto'
    },
    statText:{
      fontSize: 16
    },
    userImage:{
      height: 40,
      width: 40,
      borderRadius: 100
    },
    smallTxt:{
      fontSize: 12
    },
    profile:{
      flexDirection: 'row'
    },
    statChild:{
      flex: 1,
      flexDirection: 'row',
      // height: 25,
      width: 100,
      marginVertical: 10,
      minWidth: 100,
      marginHorizontal: 5,
      borderColor: 'black',
      borderWidth: 1,
      padding: 5,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center'
    },

    // ============== BACKGROUND COLORS ================= //
    blueBg: {
      backgroundColor: 'blue'
    },
    redBg: {
      backgroundColor: 'red'
    },
    greenBg: {
      backgroundColor: 'green'
    },
    yellowBg: {
      backgroundColor: 'yellow'
    },
})