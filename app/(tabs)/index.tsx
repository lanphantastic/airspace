import { View, StyleSheet } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Stack } from 'expo-router'

import listingsData from '@/assets/data/airbnb-listings.json'
import ExploreHeader from '@/components/ExploreHeader'
import Listings from '@/components/Listings'

const Header = ({
  onDataChanged,
}: {
  onDataChanged: (category: string) => void
}) => <ExploreHeader onCategoryChanged={onDataChanged} />

const Page = () => {
  const listings = useMemo(() => listingsData as any, [])
  const [category, setCategory] = useState<string>('Tiny homes')

  const onDataChanged = (newCategory: string) => {
    setCategory(newCategory)
  }

  const screenOptions = () => <Header onDataChanged={onDataChanged} />

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: screenOptions }} />
      <Listings listings={listings} category={category} refresh={1} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 155, //! 230 is the height of the header. it will be removed in the future
  },
})

export default Page
