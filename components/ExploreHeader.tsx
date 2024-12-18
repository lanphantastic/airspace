import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { categories } from '@/app/model/category'

const fontFamily = {
  mon: 'mon',
  monSb: 'mon-sb',
  monBold: 'mon-bold',
}

const ExploreHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <Link href={'/(modals)/booking'} asChild>
            <TouchableOpacity style={styles.searchButton}>
              <Ionicons name='search' size={24} />
              <View>
                <Text style={{ fontFamily: fontFamily.monSb }}>Where to?</Text>
                <Text
                  style={{
                    fontFamily: fontFamily.mon,
                    color: Colors.light.grey,
                  }}
                >
                  Anywhere · Any week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons
              name='options-outline'
              size={24}
              color={Colors.light.grey}
            />
          </TouchableOpacity>
        </View>

        <ScrollView horizontal>
          {categories.map(category => (
            <TouchableOpacity key={category.id} style={styles.categoriesButton}>
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  actionRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  categoriesButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoryText: {
    color: Colors.light.grey,
    fontFamily: fontFamily.monSb,
    fontSize: 14,
  },
  // categoriesButtonActive: {
  //   flex: 1,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   borderBottomColor: '#000',
  //   borderBottomWidth: 2,
  //   paddingBottom: 8,
  // },
  // categoryTextActive: {
  //   fontSize: 14,
  //   fontFamily: fontFamily.monSb,
  //   color: Colors.light.text,
  // },
  container: {
    backgroundColor: Colors.light.background,
    elevation: 2,
    height: 130,
    paddingTop: 10,
    shadowColor: Colors.light.text,
    shadowOffset: {
      width: 1,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  filterButton: {
    borderColor: Colors.light.grey02,
    borderRadius: 24,
    borderWidth: 1,
    padding: 10,
  },
  safeArea: {
    backgroundColor: Colors.light.background,
    flex: 1,
  },
  searchButton: {
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.lightGrey,
    borderRadius: 30,
    borderWidth: StyleSheet.hairlineWidth,
    elevation: 2,
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
    width: 280,
  },
})

export default ExploreHeader
