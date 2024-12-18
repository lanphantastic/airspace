// components/OAuthButton.tsx
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'

interface OAuthButtonProps {
  iconName: string
  label: string
  onPress: () => void
}

const OAuthButton: React.FC<OAuthButtonProps> = ({
  iconName,
  label,
  onPress,
}) => (
  <TouchableOpacity
    style={styles.btnOutline}
    onPress={onPress}
    accessibilityLabel={`Continue with ${label}`}
  >
    <Ionicons name={iconName} size={24} style={defaultStyles.btnIcon} />
    <Text style={styles.btnOutlineText}>{label}</Text>
  </TouchableOpacity>
)

export default OAuthButton

const styles = StyleSheet.create({
  btnIcon: {
    marginRight: 8,
  },
  btnOutline: {
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    borderColor: Colors.light.grey,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  btnOutlineText: {
    color: Colors.light.text,
    fontFamily: 'mon-sb',
    fontSize: 16,
  },
})
