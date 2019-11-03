import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


export default class RemoveBuilding extends Component {
    render() {
        return (
            <div>
                <Button variant="danger"><FontAwesomeIcon icon={faTrash} size="sm"></FontAwesomeIcon></Button>
            </div>
        )
    }
}
