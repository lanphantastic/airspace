import React from 'react'
import { Tabs } from 'expo-router'
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from '@expo/vector-icons'

import Colors from '@/constants/Colors'

interface TabBarIconProps {
  name: string
  color: string
  size: number
}

const Layout = () => {
  const renderTabBarIcon = ({ name, color, size }: TabBarIconProps) => {
    if (typeof name === 'string' && name === 'airbnb') {
      return <FontAwesome5 name={name} color={color} size={size} />
    }
    if (typeof name === 'string' && name === 'message-outline') {
      return <MaterialCommunityIcons name={name} color={color} size={size} />
    }
    return <Ionicons name={name} color={color} size={size} />
  }
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarLabelStyle: { fontFamily: 'mon-sb' },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon({ name: 'search', color, size }),
        }}
      />
      <Tabs.Screen
        name='wishlists'
        options={{
          tabBarLabel: 'Wishlists',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon({ name: 'heart-outline', color, size }),
        }}
      />
      <Tabs.Screen
        name='trips'
        options={{
          tabBarLabel: 'Trips',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon({ name: 'airbnb', color, size }),
        }}
      />
      <Tabs.Screen
        name='inbox'
        options={{
          tabBarLabel: 'Inbox',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon({ name: 'message-outline', color, size }),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) =>
            renderTabBarIcon({ name: 'person-circle-outline', color, size }),
        }}
      />
    </Tabs>
  )
}

export default Layout
