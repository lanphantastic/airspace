import React from 'react'
import { Stack } from 'expo-router'

import useAuthRedirect from '../hooks/useAuthRedirect'

interface RootLayoutNavProps {
  renderHeaderLeft: React.JSX.Element
}

const RootLayoutNav: React.FC<RootLayoutNavProps> = ({ renderHeaderLeft }) => {
  useAuthRedirect()

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { fontFamily: 'mon' },
        headerLeft: () => renderHeaderLeft,
      }}
    >
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='(modals)/login'
        options={{
          title: 'Log in or Sign up',
          headerTitleStyle: { fontFamily: 'mon-sb' },
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name='listing/[id]'
        options={{
          headerTitleStyle: { fontFamily: 'mon' },
        }}
      />
      <Stack.Screen
        name='(modals)/booking'
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
        }}
      />
    </Stack>
  )
}

export default RootLayoutNav
