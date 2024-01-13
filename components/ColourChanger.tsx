import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const ColourChanger = () => {
    const [background, setBackground] = useState('#FFFFFF')

    const backgroundChanger = () => {
        let color = '#'
        const posibleColor = 'ABCDEF0123456789'
        for (let i = 0; i < 6; i++) {
            color += posibleColor[Math.floor(Math.random() * posibleColor.length)]
        }
        setBackground(color)
        console.log(background)
    }

  return (
    <>
        {/* <StatusBar backgroundColor={background} /> */}
      <View style={[styles.container, {backgroundColor: background}]}>
        <TouchableOpacity onPress={backgroundChanger}>
            <View style={styles.btn}>
                <Text style={styles.btnTxt}>Change Background</Text>
            </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default ColourChanger

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    btn:{
        flex: 1,
        backgroundColor: '#00FF00',
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 5
    },
    btnTxt:{
        color: 'blue'
    }
})