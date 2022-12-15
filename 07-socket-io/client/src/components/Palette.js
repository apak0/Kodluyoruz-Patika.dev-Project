import React, { Component } from 'react'

export class Palette extends Component {
  render() {
    return (
      <div className='palette'>
        <input type="color" />
        <button>Click</button>
        </div>
    )
  }
}

export default Palette