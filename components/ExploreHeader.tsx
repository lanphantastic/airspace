import { View, StyleSheet, SafeAreaView, ScrollView } from 'react-native'
import * as Haptics from 'expo-haptics'
import React, { useRef, useState } from 'react'

import SearchBar from './SearchBar'
import Colors from '@/constants/Colors'
import { categories } from '@/app/mock/category'
import { CategoryItemRef } from '@/types/category'
import CategoryItem from './CategoryItem'
import OptionSearch from './OptionSearch'

const ExploreHeader = ({
  onCategoryChanged,
}: {
  onCategoryChanged: (category: string) => void
}) => {
  const scrollRef = useRef<ScrollView>(null)
  const itemsRef = useRef<(CategoryItemRef | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  const handleCategoryPress = (index: number) => {
    const selected = itemsRef.current[index]
    setActiveIndex(index)
    selected?.measure((x: number) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true })
    })

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    onCategoryChanged(categories[index].name)
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.actionRow}>
          <SearchBar />
          <OptionSearch />
        </View>

        <ScrollView
          horizontal
          ref={scrollRef}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContent}
        >
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              ref={el => (itemsRef.current[index] = el)}
              category={category}
              isActive={activeIndex === index}
              onPress={() => handleCategoryPress(index)}
            />
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
    gap: 10,
    justifyContent: 'space-between',
    paddingBottom: 16,
    paddingHorizontal: 24,
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
})

export default ExploreHeader
