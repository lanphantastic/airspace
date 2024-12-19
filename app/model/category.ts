import { MaterialIcons } from '@expo/vector-icons'

export interface Category {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export default {}
