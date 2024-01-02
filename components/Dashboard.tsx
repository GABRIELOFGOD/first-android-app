import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Dashboard = () => {
  return (
    <View style={styles.dashboard}>
      <View style={styles.user}>
        <View>
          <Image source={require('./images/832.jpg')} />
          <Text>Welcome Evangelist GABRIEL</Text>
        </View>
        <TouchableOpacity>
          <Text>View activities</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.statistics}>
        <View>
          <View style={[styles.statRound]}></View>
          <Text style={styles.statText}>statistic 1</Text>
        </View>
      </View>
      
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({
    dashboard:{
        height: 200,
        backgroundColor: 'skyblue',
        width: '100%',
        borderRadius: 10
    },
    user:{},
    statistics:{},
    eachStat:{},
    statRound:{},
    statText:{}
})