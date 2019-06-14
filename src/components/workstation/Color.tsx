import React, { CSSProperties } from 'react'
import { mColor } from '../../models/mColor'
import '../../assets/libs/pickr/src/scss/themes/monolith.scss'
import Pickr from '../../assets/libs/pickr/src/js/pickr'

type iColorProps = {
  color: mColor
}

const Color: React.FC<iColorProps> = (props) => {
  let fieldStyle: CSSProperties = {
    backgroundColor: `#${props.color.hexValue}`,
  }

  let fieldHandler = () => {
    Pickr.create({
      el: '.color-field',
      theme: 'monolith',
      components: {
        preview: true,
        opacity: true,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          clear: true,
          save: true,
        },
      },
    })
  }

  return (
    <div className="color-field" style={fieldStyle} onClick={fieldHandler} />
  )
}

export { Color }
