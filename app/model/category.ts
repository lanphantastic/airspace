import { MaterialIcons } from '@expo/vector-icons'

export interface Category {
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export default {}
