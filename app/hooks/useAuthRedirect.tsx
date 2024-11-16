import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

export function useAuthRedirect() {
  const router = useRouter()
  const { isLoaded, isSignedIn } = useAuth()

  useEffect(() => {
    if (isLoaded) {
      if (isSignedIn) {
        router.push('/(tabs)')
      } else {
        router.push('/(modals)/login')
      }
    }
  }, [isLoaded, isSignedIn, router])
}
