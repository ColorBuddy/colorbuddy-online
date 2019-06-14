import { mColor } from './mColor'

class mPalette {
  name: string
  colors: mColor[]

  constructor(paletteName: string) {
    this.name = paletteName
    this.colors = []
  }

  addColor(colorToAdd: mColor) {
    this.colors.push(colorToAdd)
  }

  removeColor(colorIndex: number) {
    this.colors.slice(colorIndex, 1)
  }
}

export { mPalette }
