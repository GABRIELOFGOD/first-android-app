import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import TouchID from 'react-native-touch-id'
import ColourChanger from './components/ColourChanger'

const App = () => {
  const [isAuth, setIsAuth] = useState(false)

  let optionalConfigObject = {
      title: 'Authentication Required',
      imageColor: '#1306ff',
      imageErrorColor: '#ff0000',
      sensorDescription: 'Touch sensor',
      sensorErrorDescription: 'Failed',
      cancelText: 'Cancel',
      unifiedErrors: false
    };

  useEffect(() => {
    handleBiometrics()
  })

  const handleBiometrics = () => {
    TouchID.authenticate('', optionalConfigObject)
    .then((success:any) => {
      console.log(success)
    })
    // TouchID.isSupported(optionalConfigObject)
    // .then(biometryType => {
    //   if(biometryType === 'FaceID'){
    //     console.log('faceId supported')
    //   }else{
    //     console.log('TouchID supported')
    //   }
    // })
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.app}>
        <Home />
        {/* <ColourChanger /> */}
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