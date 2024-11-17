// SecureStoreTokenCache.ts
import * as SecureStore from 'expo-secure-store'

export interface ITokenCache {
  getToken(key: string): Promise<string | null>
  setToken(key: string, value: string): Promise<void>
  saveToken(key: string, value: string): Promise<void>
}

class SecureStoreTokenCache implements ITokenCache {
  async getToken(key: string): Promise<string | null> {
    try {
      return await SecureStore.getItemAsync(key)
    } catch (error) {
      console.error('Error fetching token:', error)
      return null
    }
  }

  async setToken(key: string, value: string): Promise<void> {
    try {
      await SecureStore.setItemAsync(key, value)
    } catch (error) {
      console.error('Error saving token:', error)
    }
  }

  async saveToken(key: string, value: string): Promise<void> {
    await this.setToken(key, value) // No need to set twice
  }
}

export default SecureStoreTokenCache
