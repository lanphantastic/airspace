import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Router } from 'expo-router'

interface RouterProps {
  router: Router
}

const HeaderLeft: React.FC<RouterProps> = ({ router }) => {
  return (
    <TouchableOpacity onPress={() => router.back()}>
      <Ionicons name='close-outline' size={28} />
    </TouchableOpacity>
  )
}

export default HeaderLeft
