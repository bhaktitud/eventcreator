import React, { useState } from 'react'
import {
    Form,
    Button,
    Col
} from 'react-bootstrap'
import { FormContainer } from '../components/FormContainer'
import { useDispatch } from 'react-redux'
import { createEvent } from '../store/actions'
import { handleImageAsFile } from '../firebase/imageHandler'
import { handleFirebaseUpload } from '../firebase/imageUploader'

export default function FormParticipant() {

    const dispatch = useDispatch()
    const allInputs = { imgUrl: '' }
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [participant, setParticipant] = useState('')
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [validated, setValidated] = useState(false);
    const [imageAsFile, setImageAsFile] = useState('')

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        } else {
            e.preventDefault();
        
            let event = {
                title,
                location,
                participant,
                date,
                notes,
                image: imageAsUrl.imgUrl
            }
            dispatch(createEvent(event))
        }

        setValidated(true);
    }


    return (
        <React.Fragment>
            <FormContainer>
                <div className="shadow px-5 py-5 rounded">
                    <div>
                        <h3>
                            Add Event
                        </h3>
                    </div>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicEmail">
                                <Form.Label>Title</Form.Label>
                                <Form.Control required type="text" placeholder="Title" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Location</Form.Label>
                                <Form.Control required placeholder="Location" defaultValue={location} onChange={(e) => setLocation(e.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formBasicPassword">
                                <Form.Label>Participant</Form.Label>
                                <Form.Control required placeholder="Participant" defaultValue={participant} onChange={(e) => setParticipant(e.target.value)} />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Date</Form.Label>
                                <div>
                                    <input required type='date' onChange={(e) => setDate(e.target.value)} />
                                </div>
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group>
                            <Form.Label>Note</Form.Label>
                            <Form.Control required as="textarea" rows="3" defaultValue={notes} minLength="50" onChange={(e) => setNotes(e.target.value)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='d-flex flex-row'>
                            <Form.File required id="fileInput" label="Choose Image" accept="image/*" onChange={e => handleImageAsFile(e, setImageAsFile)} />
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            <Button size="sm" style={{height: 50}} onClick={e => handleFirebaseUpload(e, imageAsFile, setImageAsUrl)}>Upload</Button>
                        </Form.Group>
                        <Form.Group>
                            <Col>
                                <Button variant="primary" type="submit" >
                                    Submit
                                </Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </div>
            </FormContainer>
        </React.Fragment>
    )
}


