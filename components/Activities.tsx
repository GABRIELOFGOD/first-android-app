import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Activities = () => {

    const recentActivities = [
        {
            name: 'bible study',
            path: '',
            bgColor: 'red'
        },
        {
            name: 'bible study',
            path: '',
            bgColor: 'green'
        },
        {
            name: 'bible study',
            path: '',
            bgColor: '#EA56FE'
        },
        {
            name: 'bible study',
            path: '',
            bgColor: 'blue'
        },
        {
            name: 'bible study',
            path: '',
            bgColor: '#AF2370'
        }
    ]

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableOpacity>
            <View style={[styles.recentContain, {backgroundColor: '#34AE12'}]}>
                <Text style={styles.recentContainTxt}>Bible study</Text>
            </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Activities

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 20,
        height: 100,
        backgroundColor: 'grey',
        padding: 5
    },
    recentContain:{
        height: '100%'
    },
    recentContainTxt:{}
})