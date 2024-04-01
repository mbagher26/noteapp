import React, { Component } from 'react'

export default class ColorBox extends Component {
    render() {
        let Color = this.props.Color
        return (
            <div className='color-box' style={{ backgroundColor:Color, height: '10px', width: '10px' , borderRadius: '50%'}}>
            </div>
        )
    }
}
