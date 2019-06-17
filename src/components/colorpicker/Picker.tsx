import React from 'react'
import PickerCanvas from './PickerCanvas'
import PickerHue from './PickerHue'
import PickerCursor from './PickerCursor'
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
    </div>
  )
}

export default Picker
