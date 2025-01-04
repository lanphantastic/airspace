import React, { useEffect, useRef, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListRenderItem,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import Animated, { FadeInRight, FadeOutLeft } from 'react-native-reanimated'
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetFlatListMethods,
} from '@gorhom/bottom-sheet'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import fontFamily from '@/constants/FontFamily'
import { Listing } from '@/app/model/listing'

interface Props {
  listings: Listing[]
  refresh: number
  category: string
}

const Listings = ({ listings: items, refresh, category }: Props) => {
  const listRef = useRef<BottomSheetFlatListMethods>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // Update the view to scroll the list back top
  useEffect(() => {
    if (refresh) {
      scrollListTop()
    }
  }, [refresh])

  const scrollListTop = () => {
    listRef.current?.scrollToOffset({ offset: 0, animated: true })
  }

  // Use for "updating" the views data after category changed
  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [category])

  // Render one listing row for the FlatList
  const renderRow: ListRenderItem<any> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity>
        <Animated.View
          style={styles.listing}
          entering={FadeInRight}
          exiting={FadeOutLeft}
        >
          <Animated.Image
            source={{ uri: item.medium_url }}
            style={styles.image}
          />
          <TouchableOpacity
            style={styles.heartButton} // Updated to use styles
          >
            <Ionicons
              name='heart-outline'
              size={24}
              color={Colors.light.dark}
            />
          </TouchableOpacity>
          <View style={styles.rowContainer}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons name='star' size={16} />
              <Text style={styles.ratingText}>
                {item.review_scores_rating / 20}
              </Text>
            </View>
          </View>
          <Text style={styles.roomType}>{item.room_type}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceText}>€ {item.price}</Text>
            <Text style={styles.nightText}>night</Text>
          </View>
        </Animated.View>
      </TouchableOpacity>
    </Link>
  )

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRoot}>
      <View style={defaultStyles.container}>
        <BottomSheet>
          <BottomSheetFlatList
            renderItem={renderRow}
            data={loading ? [] : items}
            ref={listRef}
            ListHeaderComponent={
              <Text style={styles.info}>{items.length} homes</Text>
            }
          />
        </BottomSheet>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  gestureHandlerRoot: {
    flex: 1,
  },
  heartButton: {
    position: 'absolute',
    right: 30,
    top: 30,
  },
  image: {
    borderRadius: 10,
    height: 300,
    width: '100%',
  },
  info: {
    fontFamily: fontFamily.monSb,
    fontSize: 16,
    marginTop: 4,
    textAlign: 'center',
  },
  itemName: {
    fontFamily: fontFamily.monSb,
    fontSize: 16,
  },
  listing: {
    gap: 10,
    marginVertical: 16,
    padding: 16,
  },
  nightText: {
    fontFamily: 'mon',
  },
  priceContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  priceText: {
    fontFamily: fontFamily.monSb,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: 4,
  },
  ratingText: {
    fontFamily: fontFamily.monSb,
  },
  roomType: {
    fontFamily: 'mon',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default Listings
