import React from 'react'
import { useOAuth } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native'

import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { useWarmUpBrowser } from '../hooks/useWarmUpBrowser'

enum Strategy {
  Google = 'oauth_google',
  Apple = 'oauth_apple',
  Facebook = 'oauth_facebook',
}

const Page = () => {
  useWarmUpBrowser()

  const router = useRouter()
  const { startOAuthFlow: googleAuth } = useOAuth({ strategy: Strategy.Google })
  const { startOAuthFlow: appleAuth } = useOAuth({ strategy: Strategy.Apple })
  const { startOAuthFlow: facebookAuth } = useOAuth({
    strategy: Strategy.Facebook,
  })

  const onSelectAuth = async (strategy: Strategy) => {
    const authMethod = {
      [Strategy.Google]: googleAuth,
      [Strategy.Apple]: appleAuth,
      [Strategy.Facebook]: facebookAuth,
    }[strategy]

    try {
      const { createdSessionId, setActive } = await authMethod()

      if (createdSessionId) {
        setActive!({ session: createdSessionId })
        router.back()
      }
    } catch (err) {
      console.error('OAuth error', err)
      Alert.alert(
        'Authentication Error',
        'Failed to authenticate. Please try again.',
      )
    }
  }

  const OAuthButton = ({
    strategy,
    iconName,
    label,
  }: {
    strategy: Strategy
    iconName: string
    label: string
  }) => (
    <TouchableOpacity
      style={styles.btnOutline}
      onPress={() => onSelectAuth(strategy)}
      accessibilityLabel={`Continue with ${label}`}
    >
      <Ionicons name={iconName} size={24} style={styles.btnIcon} />
      <Text style={styles.btnOutlineText}>{label}</Text>
    </TouchableOpacity>
  )

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
          strategy={Strategy.Google}
          iconName='logo-google'
          label='Continue with Google'
        />
        <OAuthButton
          strategy={Strategy.Apple}
          iconName='logo-apple'
          label='Continue with Apple'
        />
        <OAuthButton
          strategy={Strategy.Facebook}
          iconName='logo-facebook'
          label='Continue with Facebook'
        />
        <TouchableOpacity style={styles.btnOutline}>
          <Ionicons name='call-outline' size={24} style={styles.btnIcon} />
          <Text style={styles.btnOutlineText}>Continue with Phone</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Page

const styles = StyleSheet.create({
  buttonGroup: {
    gap: 20,
  },
  btnOutline: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: Colors.light.grey,
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  btnIcon: {
    marginRight: 8,
  },
  btnOutlineText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'mon-sb',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
