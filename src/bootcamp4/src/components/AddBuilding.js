import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const initState = {
    name: "",
    code: "",
    address: "",
    latitude: "",
    longitude: "",
}

const style = {
    input: {
        marginBotom: '10px',
    }
}

export default class AddBuilding extends Component {
    state = initState

    update = e => {
        this.setState({
            ...this.state,
            [e.target.id]: e.target.value,
        })
    }

    save = () => {
        const send = {
            ...this.state,
            coordinates: {
                latitude: this.state.latitude,
                longitude: this.state.longitude,
            }
        }
        this.props.onAdd(send)
        this.setState(initState)
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Control style={style.input} size="sm" type="text" placeholder="name" id="name" value={this.state.name} onChange={this.update}></Form.Control>
                    </Form.Group>
                    <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="code" id="code" value={this.state.code} onChange={this.update}></Form.Control>

                    </Form.Group>

                    <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="address" id="address" value={this.state.address} onChange={this.update}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="latitude" id="latitude" value={this.state.latitude} onChange={this.update}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Form.Control size="sm" type="text" placeholder="longitude" id="longitude" value={this.state.longitude} onChange={this.update}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                    <Button onClick={this.save}><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add</Button>

                    </Form.Group>

                    


                </Form>
                
            </div>
        )
    }
}
