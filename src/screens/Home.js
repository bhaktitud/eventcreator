import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../store/actions'
import CardEvent from '../components/CardEvent'
import { Link } from 'react-router-dom'


export default function Home() {

    const dispatch = useDispatch()
    const events = useSelector(state => state.events)

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <div
            className="d-flex flex-row flex-wrap justify-content-center align-items-center"
        >
            <div className='d-flex flex-row flex-wrap justify-content-center align-items-center mt-5'>
                {
                    events.length > 0 ? 
                    events.map(event => (
                        <CardEvent key={event.id} event={event} />
                    ))
                    : <p>there are no events, <Link to='/form'>create some event</Link></p>
                }
            </div>
        </div>
    )
}
