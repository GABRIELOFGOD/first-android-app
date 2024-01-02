import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dashboard from './Dashboard'

const Home = () => {
  return (
    <View style={styles.home}>
      <Text><Dashboard /></Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    home:{
        padding: 10,
        width: '100%'
    }
})