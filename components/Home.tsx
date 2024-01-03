import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <View style={styles.home}>
      <Dashboard />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home:{
        // flex: 1,
        padding: 10,
    }
})