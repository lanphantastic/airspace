import React from 'react'
import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    mon: require('../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-bold': require('../assets/fonts/Montserrat-Bold.ttf'),
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const renderHeaderLeft = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name='close-outline' size={28} />
    </TouchableOpacity>
  )

  const router = useRouter()
  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='(modals)/login'
        options={{
          title: 'Log or sign up',
          headerTitleStyle: { fontFamily: 'mon-sb' },
          presentation: 'modal',
          headerLeft: () => renderHeaderLeft(),
        }}
      />
      <Stack.Screen name='listing/[id]' options={{ headerTitleStyle: '' }} />
      <Stack.Screen
        name='(modals)/booking'
        options={{
          presentation: 'transparentModal',
          animation: 'fade',
          headerLeft: () => renderHeaderLeft(),
        }}
      />
    </Stack>
  )
}
