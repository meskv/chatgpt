import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex flex-wrap justify-center items-center my-40 m-auto max-w-[1280px] w-4/5">
            <div className="text-center flex gap-4 flex-col">
                <h2 className='text-3xl font-bold'>404 Error</h2>
                <p className='text-2xl font-medium'>We cannot find that page!</p>
                <Link to="/" className='text-red-400'>Back to Home</Link>
            </div>
        </div>
    )
}

export default NotFound