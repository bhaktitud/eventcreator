import React from 'react'
import { Table } from 'react-bootstrap'

export default function TableForm({events}) {


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Location</th>
                <th>Date</th>
                <th>Participant</th>
                <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {
                    events.map((event, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{event.title}</td>
                            <td>{event.location}</td>
                            <td>{event.date}</td>
                            <td>{event.participant}</td>
                            <td>{event.notes}</td>
                        </tr>       
                    ))
                }
            </tbody>
        </Table>
    )
}
