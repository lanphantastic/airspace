import React from 'react'

import { ClerkProvider } from '@clerk/clerk-expo'
import useFontsLoader from './hooks/useFontLoader'

import { CLERK_PUBLISHABLE_KEY, tokenCache } from './config/ClerkConfig'
import RootLayoutNav from './navigation/RootLayoutNav'
import HeaderLeft from '@/components/HeaderLeft'

export const unstable_settings = {
  initialRouteName: '(tabs)',
}

export default function RootLayout() {
  const fontsLoaded = useFontsLoader()

  const renderHeaderLeft = () => <HeaderLeft />

  if (!fontsLoaded) {
    return null
  }

  return (
    <ClerkProvider
      publishableKey={CLERK_PUBLISHABLE_KEY!}
      tokenCache={tokenCache}
    >
      <RootLayoutNav renderHeaderLeft={renderHeaderLeft} />
    </ClerkProvider>
  )
}
