import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import UserActivities from './UserActivities'

const index = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topHome}>
            <View>
                <Text style={styles.bibleTxt}>And he said unto them,Go ye into all the world, and preach the gospel to every creature.</Text>
            </View>
        </View>
        <View>
            <UserActivities />
        </View>
    </View>
  )
}

export default index