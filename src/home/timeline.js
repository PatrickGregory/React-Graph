import React from 'react'
import { BsCircleFill } from 'react-icons/bs'

function Timeline() {
    return (
        <div>
            <div className="d-flex gap-3 justify-content-center z-n1">
                <p className='text-secondary'>32 min</p>
                <BsCircleFill className='text-success' />
                <span className='w-50'>Quia quae rerum <strong>explicabo officiis</strong> beatae</span>
            </div>
            <hr className='timeline z-0' />
            <div className="d-flex gap-3 justify-content-center z-n1">
                <p className='text-secondary'>56 min</p>
                <BsCircleFill className='text-danger' />
                <p className='w-50 py-2'>Voluptatem blanditiis blanditiis eveniet</p>
            </div>
            <hr className='timeline1 z-0' />
            <div className="d-flex gap-3 justify-content-center z-n1">
                <p className='text-secondary'>2 hrs</p>
                <BsCircleFill className='text-primary' />
                <p className='w-50'>Voluptates corrupti molestias voluptatem</p>
            </div>
            <hr className='timeline2 z-0' />
            <div className="d-flex gap-3 justify-content-center z-n1">
                <p className='text-secondary'>1 day</p>
                <BsCircleFill className='text-info' />
                <span className='w-50'>Tempore autem saepe <strong>occaecati voluptatem</strong> tempore</span>
            </div>
            <hr className='timeline3 z-0' />
            <div className="d-flex gap-3 justify-content-center z-n1">
                <p className='text-secondary'>2 days</p>
                <BsCircleFill className='text-warning' />
                <p className='w-50'>Est sit eum reiciendis exercitationem</p>
            </div>
            <hr className='timeline4 z-0' />
            <div>
                <div className="d-flex gap-2 justify-content-center z-n1">
                    <p className='text-secondary'>4 weeks</p>
                    <BsCircleFill className='text-dark' />
                    <p className='w-50'>Dicta dolorem harum nulla eius. Ut quidem quidem sit quas</p>
                </div>
                <hr className='timeline5 z-0' />
            </div>
        </div>
    )
}

export default Timeline