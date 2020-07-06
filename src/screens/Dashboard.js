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

    const totalpages = Math.ceil(events / 5)

    return (
        <React.Fragment>
            <div style={{marginTop: 20, marginBottom: 20, marginLeft: 20}}>
                <input type="text" style={{marginRight: 20}} />
                <Button variant="primary" type="submit" >
                    Search
                </Button>
            </div>
            <TableForm events={events} />
            <nav>
                <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">Previous</a>
                    </li>
                    {
                        
                    }
                    <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
