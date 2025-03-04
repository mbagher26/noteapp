import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'
import './../styles/NoteApp.css'
import { GrAdd } from "react-icons/gr";
import { PiEraserThin } from "react-icons/pi";

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }

        this.inputHandler = this.inputHandler.bind(this)
        this.colorHandler = this.colorHandler.bind(this)
        this.plusHandler = this.plusHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
        this.removeNote = this.removeNote.bind(this)
    }

    inputHandler(event) {
        this.setState({
            noteTitle: event.target.value
        })
    }

    colorHandler(color) {
        this.setState({
            inputColor: color
        })
    }

    plusHandler() {
        let newnote = {
            id: this.state.notes.length + 1,
            title: this.state.noteTitle,
            color: this.state.inputColor
        }

        this.setState((prevState) => {
            return {
                notes: [...prevState.notes, newnote],
                noteTitle: '',
                inputColor: '#fff'
            }
        })

    }

    deleteHandler() {
        this.setState({
            noteTitle: '',
            inputColor: '#fff'
        })
    }

    removeNote(noteId) {
        let notes = this.state.notes
        let newNote = notes.filter(note => {
            return note.id !== noteId
        })
        this.setState({
            notes: [...newNote]
        })
    }

    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">React Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" className="form-control" type="text" maxLength="40" value={this.state.noteTitle} onChange={this.inputHandler} style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." />
                                    </div>
                                    <div className=" col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {
                                                this.state.colors.map((color) => (
                                                    <ColorBox key={color} Color={color} value={this.state.inputColor} onColor={this.colorHandler} />
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={this.plusHandler}><span className="fa fa-plus" ><GrAdd/></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={this.deleteHandler}><span id="btn-icon" className="fa fa-eraser"><PiEraserThin/></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.map(note => (

                                                    <Note key={note.id} {...note} onRemove={this.removeNote} />
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
