import React from 'react'

function Error() {
    return (
        <div className='d-flex justify-content-center'>
            <div className='text-center'>
                <h1 className='text-primary fw-medium font'>404</h1>
                <p className='fs-3 text-primary-emphasis'>The page you're looking for doesn't exist</p>
                <a href='/' className='btn btn-secondary'>Back to home</a>
                <div>
                    <img src="./images/not-found.svg" className='w-50' alt="error" />
                </div>
                <p className='fs-6'>Designed by <a href="https://github.com/PatrickGregory" className='text-decoration-none' target='_blank'>Kantee Da Dev</a></p>
            </div>
        </div>
    )
}

export default Error