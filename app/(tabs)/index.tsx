import { View, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ExploreHeader from '@/components/ExploreHeader'
import { Stack } from 'expo-router'

// const Header = () => <ExploreHeader />

const Page = () => {
  const [category, setCategory] = useState<string>('Tiny homes')

  const onDataChanged = (category: string) => {
    setCategory(category)
  }
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Page
