import React, { Component } from 'react'

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


export class SelectedBeast extends Component {
    render() {
        return (

            <Modal
                show={this.props.isClicked}
                onHide={this.props.clickOff}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        {this.props.name}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <img src={this.props.src} />

                    <p>
                        I                {this.props.description}

                    </p>
                </Modal.Body>
            </Modal>
        )
    }
}

export default SelectedBeast
