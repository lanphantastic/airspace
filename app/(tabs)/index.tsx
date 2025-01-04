import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'

import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const Header = ({
  onDataChanged,
}: {
  onDataChanged: (category: string) => void
}) => <ExploreHeader onCategoryChanged={onDataChanged} />

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes')

  const onDataChanged = (newCategory: string) => {
    setCategory(newCategory)
  }

  const screenOptions = () => <Header onDataChanged={onDataChanged} />

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: screenOptions }} />
      <Listings listings={[]} category={category} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 230, //! 230 is the height of the header. it will be removed in the future
  },
})

export default Page
