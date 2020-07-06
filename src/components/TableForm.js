import React, { useState } from 'react'
import { Table, Pagination, Button } from 'react-bootstrap'

export default function TableForm({events, dataTable}) {

    const [searchEvents, setsearchEvents] = useState('')

    return (
        <>
        <div style={{marginTop: 20, marginBottom: 20, marginLeft: 20}}>
            <input type="text" style={{marginRight: 20}} onChange={(e) => setsearchEvents(e.target.value)} placeholder='Search event name' />
        </div>
            <Table striped bordered hover responsive='sm'>
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
                        dataTable.filter(data => data.title.includes(searchEvents)).map((event, index) => (
                            <tr key={index}>
                                <td>{event.id}</td>
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
        </>
    )
}
