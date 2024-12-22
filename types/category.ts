import { MaterialIcons } from '@expo/vector-icons'

export interface CategoryItemProps {
  category: Category
  isActive: boolean
  onPress: () => void
}

export interface CategoryItemRef {
  measure: (callback: (x: number) => void) => void
}

export interface Category {
  id: string
  name: string
  icon: keyof typeof MaterialIcons.glyphMap
}
