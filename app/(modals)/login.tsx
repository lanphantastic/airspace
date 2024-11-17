// screens/Page.tsx
import React, { useCallback } from 'react'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
} from 'react-native'
import { useRouter } from 'expo-router'

import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import OAuthButton from '@/components/OAuthButton'
import useOAuthHandlers from '../hooks/useOAuthHandlers'

const LoginPage: React.FC = () => {
  const router = useRouter()
  console.log('Login Page Mounted')
  const { googleAuth, appleAuth, facebookAuth } = useOAuthHandlers(router)

  const handleOAuthError = useCallback((error: Error) => {
    Alert.alert('Authentication Error', error.message)
  }, [])

  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize='none'
        placeholder='Email'
        style={[defaultStyles.inputField, styles.inputField]}
      />

      <TouchableOpacity style={defaultStyles.btn}>
        <Text style={defaultStyles.btnText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separatorLine} />
        <Text style={styles.separatorText}>or</Text>
        <View style={styles.separatorLine} />
      </View>

      <View style={styles.buttonGroup}>
        <OAuthButton
          iconName='logo-google'
          label='Continue with Google'
          onPress={() => googleAuth().catch(handleOAuthError)}
        />
        <OAuthButton
          iconName='logo-apple'
          label='Continue with Apple'
          onPress={() => appleAuth().catch(handleOAuthError)}
        />
        <OAuthButton
          iconName='logo-facebook'
          label='Continue with Facebook'
          onPress={() => facebookAuth().catch(handleOAuthError)}
        />
        <OAuthButton
          iconName='call-outline'
          label='Continue with Phone'
          onPress={() => Alert.alert('Phone Auth', 'Not implemented yet!')}
        />
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  buttonGroup: {
    gap: 20,
  },
  container: {
    backgroundColor: Colors.light.background,
    flex: 1,
    padding: 26,
  },
  inputField: {
    marginBottom: 30,
  },
  separatorContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 30,
  },
  separatorLine: {
    borderBottomColor: Colors.light.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flex: 1,
  },
  separatorText: {
    color: Colors.light.grey,
    fontFamily: 'mon-sb',
    fontSize: 16,
    marginHorizontal: 10,
  },
})
