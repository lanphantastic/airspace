import React, { forwardRef } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

import { CategoryItemProps } from '@/types/category'
import fontFamily from '@/constants/FontFamily'
import Colors from '@/constants/Colors'

const CategoryItem = forwardRef<any, CategoryItemProps>(
  ({ category, isActive, onPress }, ref) => (
    <TouchableOpacity
      ref={ref}
      style={isActive ? styles.categoriesButtonActive : styles.categoriesButton}
      onPress={onPress}
    >
      <MaterialIcons
        name={category.icon}
        size={24}
        color={isActive ? Colors.light.text : Colors.light.grey}
      />
      <Text style={isActive ? styles.categoryTextActive : styles.categoryText}>
        {category.name}
      </Text>
    </TouchableOpacity>
  ),
)

CategoryItem.displayName = 'CategoryItem'

export const styles = StyleSheet.create({
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
})

export default CategoryItem
