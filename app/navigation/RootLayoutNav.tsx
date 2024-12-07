import React, { ReactElement } from 'react'
import { Stack } from 'expo-router'
import useAuthRedirect from '../hooks/useAuthRedirect'

interface RootLayoutNavProps {
  renderHeaderLeft: () => ReactElement
}

const RootLayoutNav: React.FC<RootLayoutNavProps> = ({ renderHeaderLeft }) => {
  useAuthRedirect()

  const defaultHeaderTitleStyle = { fontFamily: 'mon' }

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: defaultHeaderTitleStyle,
        headerLeft: renderHeaderLeft,
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
      <Stack.Screen name='listing/[id]' options={{ headerTitle: '' }} />
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
