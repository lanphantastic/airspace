import { Category } from '@/app/model/category'

export interface CategoryItemProps {
  category: Category
  isActive: boolean
  onPress: () => void
}

export interface CategoryItemRef {
  measure: (callback: (x: number) => void) => void
}
