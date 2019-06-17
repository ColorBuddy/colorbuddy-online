import React, { MouseEvent } from 'react'

const PickerCanvas: React.FC = () => {
  const startHandler = (event: MouseEvent) => {
    console.log(event.target)
  }
  return (
    <div onMouseDown={startHandler} className="picker-canvas">
      Picker Canvas
    </div>
  )
}

export default PickerCanvas
