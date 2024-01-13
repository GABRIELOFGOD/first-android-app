import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard'
import Activities from './Activities'
import Homescreen from '../screen/homescreen'

const Home = () => {
  return (
    <View style={styles.home}>
      <StatusBar backgroundColor={'darkblue'} />
      <Homescreen />
      {/* <Dashboard />
      <Activities /> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home:{
        // flex: 1,
        // padding: 10,
    }
})