import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screen/homescreen/styles'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { dummyProp } from '../utils'

const ActivitiesItem = ({name}:dummyProp) => {
  return (
    <View style={styles.ActivitiesItem}>
      <Text style={styles.ActivitiesItemTxt}>{name}</Text>
      {/* <FontAwesome5 name="bible" size={20} color="darkblue" /> */}
    </View>
  )
}

export default ActivitiesItem