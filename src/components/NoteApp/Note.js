import React, { Component } from 'react'

export default class Note extends Component {

    removeHamdler(noteId) {
        this.props.onRemove(noteId)
    }
    render() {
        let {id, color, title} = this.props
        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: color }} onClick={this.removeHamdler.bind(this, id)}><p className="card-text p-3">{title}</p></div>
        )
    }
}
