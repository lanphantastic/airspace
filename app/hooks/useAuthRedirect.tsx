import { useEffect, useState } from 'react'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'
import { Alert } from 'react-native'

function useAuthRedirect() {
  const router = useRouter()
  const { isLoaded, isSignedIn } = useAuth()
  const [isNavigating, setIsNavigating] = useState(false)

  useEffect(() => {
    let isMounted = true

    const handleAuth = async () => {
      if (!isLoaded || isNavigating) return

      try {
        setIsNavigating(true)

        if (isSignedIn) {
          router.push('/(tabs)')
        } else {
          router.push('/(modals)/login')
        }
      } catch (error) {
        console.error('Navigation failed:', error)
        // Add proper error handling here
        if (error instanceof Error) {
          Alert.alert('Navigation Error', error.message)
          // Or use your app's error reporting service
          // errorReportingService.log(error)
        }
      } finally {
        if (isMounted) {
          setIsNavigating(false)
        }
      }
    }

    handleAuth()

    return () => {
      isMounted = false
    }
  }, [isLoaded, isSignedIn, router, isNavigating])

  return { isNavigating }
}

export default useAuthRedirect
