import React from 'react'
import PickerCanvas from './PickerCanvas'
import PickerHue from './PickerHue'
import PickerAlpha from './PickerAlpha'
import PickerPreview from './PickerPreview'
import { mColor } from '../../models/mColor'

type pickerProps = {
  color: mColor
}

const Picker: React.FC<pickerProps> = (props) => {
  return (
    <div className="picker">
      <PickerPreview />
      <PickerCanvas />
      <PickerHue />
      <PickerAlpha />
    </div>
  )
}

export default Picker
