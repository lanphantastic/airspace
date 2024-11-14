import React from 'react'
import { useFonts } from 'expo-font'
import { Stack, useRouter } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'
import 'react-native-reanimated'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import * as SecureStore from 'expo-secure-store'
import { ClerkProvider, useAuth } from '@clerk/clerk-expo'

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

const tokenCache = {
  async getToken(key: string): Promise<string | undefined | null> {
    try {
      return SecureStore.getItemAsync(key)
    } catch (error) {
      return null
    }
  },
  async setToken(key: string, value: string): Promise<void> {
    try {
      return SecureStore.setItemAsync(key, value)
    } catch (error) {
      return
    }
  },
}

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

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <RootLayoutNav />
    </ClerkProvider>
  )
}

function RootLayoutNav() {
  const router = useRouter()
  const { isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/(modals)/login')
    } else if (isLoaded && isSignedIn) {
      router.push('/(tabs)')
    }

    // This will re-run every time the router state changes.
    // router.addListener(() => {
    //   if (isLoaded && !isSignedIn) {
    //     router.push('/(modals)/login')
    //   } else if (isLoaded && isSignedIn) {
    //     router.push('/(tabs)')
    //   }
    // })
  }, [isLoaded, isSignedIn])

  const renderHeaderLeft = () => (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name='close-outline' size={28} />
    </TouchableOpacity>
  )

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
