import { useOAuth } from '@clerk/clerk-expo'
import { Router } from 'expo-router'

import Strategy from '../types/enum'

interface AuthResponse {
  createdSessionId: string | null
  setActive?: (params: { session: string }) => void
}

const useOAuthHandlers = (router: Router) => {
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: Strategy.Google })
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: Strategy.Apple })
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: Strategy.Facebook,
  })

  const handleOAuth = async (authMethod: () => Promise<AuthResponse>) => {
    try {
      const { createdSessionId, setActive } = await authMethod()

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
        router.back()
      }
    } catch (err) {
      console.error('OAuth error', err)
      throw new Error('Failed to authenticate. Please try again.')
    }
  }

  return {
    googleAuth: () => handleOAuth(googleAuth),
    appleAuth: () => handleOAuth(appleAuth),
    facebookAuth: () => handleOAuth(facebookAuth),
  }
}

export default useOAuthHandlers
