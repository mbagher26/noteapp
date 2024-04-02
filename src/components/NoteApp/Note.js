import React, { Component } from 'react'

export default class Note extends Component {

    removeHamdler(note) {
        this.props.onRemove(note)
    }
    render() {
        let color = [this.props.Color]
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: color }} onClick={this.removeHamdler.bind(this, this.props.Note)}><p className="card-text p-3">{this.props.Note}</p></div>
        )
    }
}
