import { MaterialIcons } from '@expo/vector-icons'

export interface Category {
  id: number
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}

export default {}
