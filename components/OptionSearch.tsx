import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const OptionSearch = () => (
  <TouchableOpacity style={styles.filterButton}>
    <Ionicons name='options-outline' size={24} color={Colors.light.grey} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  filterButton: {
    borderColor: Colors.light.grey02,
    borderRadius: 24,
    borderWidth: 1,
    padding: 10,
  },
})

export default OptionSearch
