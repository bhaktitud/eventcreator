import React, { useEffect } from 'react'
import { getEvents } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import TableForm from '../components/TableForm'
import { Button } from 'react-bootstrap'

export default function Dashboard() {

    const dispatch = useDispatch()
    const events = useSelector(state => state.events)

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <React.Fragment>
            <div style={{marginTop: 20, marginBottom: 20, marginLeft: 20}}>
                <input type="text" style={{marginRight: 20}} />
                <Button variant="primary" type="submit" >
                    Search
                </Button>
            </div>
            <TableForm events={events} />
        </React.Fragment>
    )
}
