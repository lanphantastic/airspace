import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect } from 'react'

export function useFontsLoader() {
  const [fontsLoaded, fontsError] = useFonts({
    mon: require('../../assets/fonts/Montserrat-Regular.ttf'),
    'mon-sb': require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    'mon-bold': require('../../assets/fonts/Montserrat-Bold.ttf'),
  })

  useEffect(() => {
    if (fontsError) {
      console.error('Font loading error:', fontsError)
      throw fontsError
    }
  }, [fontsError])

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return fontsLoaded
}
