import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ExploreHeader from '@/components/ExploreHeader'
import { Stack } from 'expo-router'
import Listings from '@/components/Listings'

// const Header = () => <ExploreHeader />

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes')

  const onDataChanged = (newCategory: string) => {
    setCategory(newCategory)
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
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
