import React, { Component } from 'react'
import { mColor } from '../../models/mColor'
import { mPalette } from '../../models/mPalette'
import { Color } from './Color'

let testPalette01 = new mPalette('test palette 01')
testPalette01.addColor(new mColor('ff3322'))
testPalette01.addColor(new mColor('1122ff'))
testPalette01.addColor(new mColor('ae2f31'))

let testPalette02 = new mPalette('test palette 02')
testPalette02.addColor(new mColor('68ae25'))
testPalette02.addColor(new mColor('99dd22'))
testPalette02.addColor(new mColor('2255aa'))

type WorkstationState = {
  palettes: mPalette[]
}

export class Workstation extends Component<{}, WorkstationState> {
  addColorHandler(paletteIndex: number) {
    let newState = this.state.palettes
    newState[paletteIndex].addColor(new mColor('ffffff'))
    this.setState({
      palettes: newState,
    })
  }
  componentWillMount() {
    this.setState({
      palettes: [testPalette01, testPalette02],
    })
  }
  render() {
    return (
      <ul>
        {this.state.palettes.map((x, i) => (
          <li>
            {x.name}

            <ul>
              {x.colors.map((y) => (
                <li>
                  <Color color={y} />
                </li>
              ))}
              <li onClick={this.addColorHandler.bind(this, i)}>ADD</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Workstation
