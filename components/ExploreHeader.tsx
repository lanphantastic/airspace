import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import * as Haptics from 'expo-haptics'
import { Link } from 'expo-router'
import React, { useRef, useState } from 'react'
import { Ionicons, MaterialIcons } from '@expo/vector-icons'

import Colors from '@/constants/Colors'
import { categories } from '@/app/mock/category'

const fontFamily = {
  mon: 'mon',
  monSb: 'mon-sb',
  monBold: 'mon-bold',
}

const ExploreHeader = () => {
  const scrollRef = useRef<ScrollView>(null)
  const itemsRef = useRef<(any | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const selectedCategory = (index: number) => {
    const selected = itemsRef.current[index]
    setActiveIndex(index)
    selected?.measure((x: number) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true })
    })

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
  }

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

        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              ref={el => (itemsRef.current[index] = el)}
              key={index}
              style={
                activeIndex === index
                  ? styles.categoriesButtonActive
                  : styles.categoriesButton
              }
              onPress={() => selectedCategory(index)}
            >
              <MaterialIcons
                name={category.icon}
                size={24}
                color={
                  activeIndex === index ? Colors.light.text : Colors.light.grey
                }
              />
              <Text
                style={
                  activeIndex === index
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {category.name}
              </Text>
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
    gap: 10,
  },
  categoriesButton: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoriesButtonActive: {
    alignItems: 'center',
    borderBottomColor: Colors.light.text,
    borderBottomWidth: 2,
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 8,
  },
  categoryText: {
    color: Colors.light.grey,
    fontFamily: fontFamily.monSb,
    fontSize: 14,
  },
  categoryTextActive: {
    color: Colors.light.text,
    fontFamily: fontFamily.monSb,
    fontSize: 14,
  },

  container: {
    backgroundColor: Colors.light.background,
    elevation: 2,
    height: 160,
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
  scrollViewContent: {
    alignItems: 'center',
    gap: 20,
    paddingBottom: 15,
    paddingHorizontal: 16,
  },
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
})

export default ExploreHeader
