import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons'

export default function CardEvent({event}) {
    const { title, notes, date, image, participant, location } = event
    return (
        <div style={{minHeight: '200px',  minWidth:'25rem', maxWidth: '25rem', marginBottom: 10}}>
            <Card className="mx-5 shadow-lg">
                <Card.Img variant="top" src={image} style={{height: '250px'}} />
                <Card.Body>
                    <div className='d-flex flex-direction-row align-items-center justify-content-start'>
                        <FontAwesomeIcon icon={faMapMarker} style={{marginRight: 5}} />
                        <Card.Text>
                            {location.toUpperCase()}
                        </Card.Text>
                    </div>
                    <Card.Title><h3>{title}</h3></Card.Title>
                    <Card.Text style={{fontSize: 10}}>{date}</Card.Text>
                    <div className='d-flex flex-direction-row align-items-center justify-content-start'>
                        <FontAwesomeIcon icon={faUser} style={{marginRight: 5}} />
                        <Card.Text>
                            {participant}
                        </Card.Text>
                    </div>
                </Card.Body>
                    <Card.Footer>
                        <Card.Text>
                            <strong>
                                Notes:
                            </strong>
                        </Card.Text>
                        <Card.Text style={{wordWrap: "break-word"}}>
                            {notes}
                        </Card.Text>
                    </Card.Footer>
            </Card>
        </div>
    )
}
