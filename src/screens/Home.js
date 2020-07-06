import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getEvents } from '../store/actions'
import CardEvent from '../components/CardEvent'


export default function Home() {

    const dispatch = useDispatch()
    const events = useSelector(state => state.events)

    useEffect(() => {
        dispatch(getEvents())
    }, [])

    return (
        <div 
            className="d-flex flex-row flex-wrap justify-content-center align-items-center mt-3"
        >
            {
                events.length > 0 ? 
                events.map(event => (
                    <CardEvent key={event.id} event={event} />
                ))
                : <p>there are no events</p>
            }
        </div>
    )
}
