// ClerkConfig.ts

import { SecureStoreTokenCache } from '../services/SecureStoreTokenCache'

export const CLERK_PUBLISHABLE_KEY =
  process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if (!CLERK_PUBLISHABLE_KEY) {
  throw new Error(
    'Missing Clerk Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env file.',
  )
}

export const tokenCache = new SecureStoreTokenCache()
