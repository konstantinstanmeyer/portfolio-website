export interface Photo {
  id: string
  src: string
  title: string
  location: string
  category: 'landscape' | 'portrait' | 'street' | 'abstract'
  aspectRatio?: 'square' | 'portrait' | 'landscape'
}

export const photos: Photo[] = [
  
]

export const categories = ['all', 'farming', 'street'];