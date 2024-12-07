import React from 'react'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const HeaderLeft = () => {
  const router = useRouter()
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name='close-outline' size={28} />
    </TouchableOpacity>
  )
}

export default HeaderLeft
