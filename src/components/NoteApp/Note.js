import React, { Component } from 'react'

export default class Note extends Component {

    render() {
        let color = [...this.props.Color]
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: color }}><p className="card-text p-3">{this.props.Note}</p></div>
        )
    }
}
