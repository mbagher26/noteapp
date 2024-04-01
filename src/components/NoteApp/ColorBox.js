import React, { Component } from 'react'
import './../styles/ColorBox.css'

export default class ColorBox extends Component {

    clickHandler(color) {
        this.props.onColor(color)
    }
    
    render() {
        let Color = this.props.Color
        return (
            <div className='color-box' onClick={this.clickHandler.bind(this, Color)} style={{ backgroundColor:Color }}>
            </div>
        )
    }
}
