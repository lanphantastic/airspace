import React from 'react'
import { Link } from 'expo-router'
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import fontFamily from '@/constants/FontFamily'
import Colors from '@/constants/Colors'

const SearchBar = () => (
  <Link href={'/(modals)/booking'} asChild>
    <TouchableOpacity style={styles.searchButton}>
      <Ionicons name='search' size={24} />
      <View>
        <Text style={{ fontFamily: fontFamily.monSb }}>Where to?</Text>
        <Text style={styles.searchSubtext}>Anywhere · Any week</Text>
      </View>
    </TouchableOpacity>
  </Link>
)

const styles = StyleSheet.create({
  searchButton: {
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.lightGrey,
    borderRadius: 30,
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    shadowColor: Colors.light.text,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    // width: 300,
  },
  searchSubtext: {
    color: Colors.light.grey,
    fontFamily: fontFamily.mon,
  },
})

export default SearchBar
