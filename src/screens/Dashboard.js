import React, { useEffect, useState } from 'react'
import { getEvents, getPerPage } from '../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import TableForm from '../components/TableForm'
import { Button, Pagination } from 'react-bootstrap'

export default function Dashboard() {

    const dispatch = useDispatch()
    const totalPages = useSelector(state => state.totalPages)
    const dataTable = useSelector(state => state.dataTable)
    const events = useSelector(state => state.events)
    const [page, setPage] = useState(0)
    
    useEffect(() => {
        dispatch(getEvents())
        dispatch(getPerPage(page))
    }, [page])

    const handleOnChangePages = (page) => {
        setPage(page+1)
    }

    return (
        <React.Fragment>
            <div className='d-flex flex-column'>
                <TableForm events={events} dataTable={dataTable} />
                <Pagination className="align-self-center">
                    {
                        totalPages.map((page, index) => (
                            <Pagination.Item 
                                key={index}
                                onClick={() => handleOnChangePages(page)}
                            >
                                {page+1}
                            </Pagination.Item>
                        ))
                    }
                </Pagination>
            </div>
        </React.Fragment>
    )
}
