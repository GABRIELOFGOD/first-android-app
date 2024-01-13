import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import ActivitiesItem from '../../components/ActivitiesItem'
import dummyData from '../../utils'

const UserActivities = () => {
  return (
    <View style={styles.activitiesContainer}>
      {
        dummyData.map((data, i) => (
          <TouchableOpacity
            key={i}
          >
            <ActivitiesItem
              name={data.name}
            />
          </TouchableOpacity>
        ))
      }
    </View>
  )
}

export default UserActivities