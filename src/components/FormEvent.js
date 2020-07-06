import React, { useState } from 'react'
import {
    Form,
    Button,
    Col,
    Alert,
    Spinner
} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createEvent } from '../store/actions'
import { handleImageAsFile } from '../firebase/imageHandler'
import { handleFirebaseUpload } from '../firebase/imageUploader'

export default function FormEvent() {

    const dispatch = useDispatch()
    const allInputs = { imgUrl: '' }
    const submitStatus = { status: false }
    const loadStatus = {status: false}
    const [title, setTitle] = useState('')
    const [location, setLocation] = useState('')
    const [participant, setParticipant] = useState('')
    const [date, setDate] = useState('')
    const [notes, setNotes] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [validated, setValidated] = useState(false);
    const [imageAsFile, setImageAsFile] = useState('')
    const [show, setShow] = useState(false)
    const [submit, setSubmit] = useState(submitStatus)
    const [isLoading, setIsLoading] = useState(loadStatus)

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
            setShow(true)
        }

        setValidated(true);
    }

    return (
        <>
            <Alert style={{position: "absolute", top: 60}} show={show} variant="success" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Event Has Been Added</Alert.Heading>
                    <p>
                    Please check on the dashboard or go directly to Home
                    </p>
            </Alert>
            {
                isLoading.status ? (
                        <Spinner animation="grow" style={{position: "absolute"}} />
                    ) : (
                        <span></span>
                    )
            }
            <div className="d-flex flex-column shadow px-5 py-5 rounded">
                <div className='align-self-center mb-5'>
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
                                <Form.Control style={{height: 38, width: '100%', textAlign: "center"}} required type='date' onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Group>
                        <Form.Label>Note</Form.Label>
                        <Form.Control required as="textarea" rows="3" defaultValue={notes} minLength="50" onChange={(e) => setNotes(e.target.value)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='d-flex flex-row align-items-center'>
                        <Form.File required id="fileInput" label="Choose Image" accept="image/*" onChange={e => handleImageAsFile(e, setImageAsFile)} />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        <Button variant="primary btn-sm h-25" onClick={e => handleFirebaseUpload(e, imageAsFile, setImageAsUrl, setSubmit, setIsLoading)}>
                            Upload
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type="submit" disabled={!submit.status}>
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </div>
        </>
    )
}
