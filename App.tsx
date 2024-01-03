import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './components/Home'
import ColourChanger from './components/ColourChanger'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.app}>
        {/* <Home /> */}
        <ColourChanger />
      </ScrollView>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  app:{
    // width: '100%'
  }
})