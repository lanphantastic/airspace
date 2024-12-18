import { View, StyleSheet } from 'react-native'
import React from 'react'
import ExploreHeader from '@/components/ExploreHeader'
import { Stack } from 'expo-router'

const Header = () => <ExploreHeader />

const Page = () => {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ header: Header }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Page
