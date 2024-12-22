import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Listing } from '@/app/model/listing'

interface ListingsProps {
  listings: Listing[]
  category: string
}

const Listings = ({ listings, category }: ListingsProps) => {
  useEffect(() => {
    console.log(listings)
  }, [listings])

  return (
    <View>
      <Text>{category}</Text>
    </View>
  )
}

export default Listings
