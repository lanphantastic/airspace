// RootLayoutNav.tsx
import React from 'react'
import { Stack, useRouter } from 'expo-router'

import HeaderLeft from '@/components/HeaderLeft'
import { useAuthRedirect } from '../hooks/useAuthRedirect'

export default function RootLayoutNav() {
  const router = useRouter()

  useAuthRedirect()

  return (
    <Stack
      screenOptions={{
        headerTitleStyle: { fontFamily: 'mon' },
        headerLeft: () => <HeaderLeft router={router} />,
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
