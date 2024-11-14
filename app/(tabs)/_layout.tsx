import React, { ComponentType } from 'react'
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

const iconComponents: Record<string, ComponentType<TabBarIconProps>> = {
  airbnb: FontAwesome5,
  'message-outline': MaterialCommunityIcons,
  default: Ionicons,
}

const Layout = () => {
  const renderTabBarIcon = ({ name, color, size }: TabBarIconProps) => {
    const IconComponent = iconComponents[name] || iconComponents.default
    return <IconComponent name={name} color={color} size={size} />
  }

  const screens = [
    { name: 'index', label: 'Explore', icon: 'search' },
    { name: 'wishlists', label: 'Wishlists', icon: 'heart-outline' },
    { name: 'trips', label: 'Trips', icon: 'airbnb' },
    { name: 'inbox', label: 'Inbox', icon: 'message-outline' },
    { name: 'profile', label: 'Profile', icon: 'person-circle-outline' },
  ]
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.light.primary,
        tabBarLabelStyle: { fontFamily: 'mon-sb' },
      }}
    >
      {screens.map(({ name, label, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            tabBarLabel: label,
            tabBarIcon: ({ color, size }) =>
              renderTabBarIcon({ name: icon, color, size }),
          }}
        />
      ))}
    </Tabs>
  )
}

export default Layout
