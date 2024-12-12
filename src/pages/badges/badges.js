import React from 'react'
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { BsCheckCircle, BsCollection, BsExclamationOctagon, BsExclamationTriangle, BsFolder, BsInfoCircle, BsStar } from 'react-icons/bs';

export const Badges = (props) => {
    return (
        <div className='gap-1 my-3 row container'>
            <div className={`badge col-2 ${props.round} text-bg-primary`}>Primary</div>
            <div className={`badge col-2 ${props.roundone} text-bg-secondary`}>Secondary</div>
            <div className={`badge col-2 ${props.roundtwo} text-bg-success`}>Success</div>
            <div className={`badge col-2 ${props.roundthree} text-bg-danger`}>Danger</div>
            <div className={`badge col-2 ${props.roundfour} text-bg-warning`}>Warning</div>
            <div className={`badge col-1 ${props.roundfive} text-bg-info`}>Info</div>
            <div className={`badge col-2 ${props.roundsix} text-bg-light`}>Light</div>
            <div className={`badge col-2 ${props.roundseven} text-bg-dark`}>Dark</div>
        </div>
    )
}

export const IconBadge = () => {
    return (
        <div className='gap-1 my-4 row container'>
            <div className={`badge w-25 col-2 text-bg-primary`}><BsStar />Primary</div>
            <div className={`badge w-25 col-3 text-bg-secondary`}><BsCollection className='me-1' />Secondary</div>
            <div className={`badge w-25 col-2 text-bg-success`}><BsCheckCircle className='me-1' />Success</div>
            <div className={`badge w-25 col-2 text-bg-danger`}><BsExclamationOctagon className='me-1' />Danger</div>
            <div className={`badge w-25 col-2 text-bg-warning`}><BsExclamationTriangle className='me-1' />Warning</div>
            <div className={`badge w-25 col-2 text-bg-info`}><BsInfoCircle className='me-1' />Info</div>
            <div className={`badge w-25 col-2 text-bg-light`}><BsStar className='me-1' />Light</div>
            <div className={`badge w-25 col-2 text-bg-dark`}><BsFolder className='me-1' />Dark</div>
        </div>
    )
}

export const HeaderBadge = () => {
    return (
        <div className='ms-2'>
            <h1>
                Example heading<br/> <Badge bg="primary">Primary</Badge>
            </h1>
            <h2>
                Example heading<br/> <Badge bg="secondary">Secondary</Badge>
            </h2>
            <h3>
                Example heading <Badge bg="success">Success</Badge>
            </h3>
            <h4>
                Example heading <Badge bg="danger">Danger</Badge>
            </h4>
            <h5>
                Example heading <Badge bg="warning">Warning</Badge>
            </h5>
            <h6>
                Example heading <Badge bg="info">Info</Badge>
            </h6>
        </div>
    )
}
export const NoBackground = () => {
    return (
        <div className='gap-1 my-3 row container'>
            <div className='badge col-2 text-primary'>Primary</div>
            <div className='badge col-2 text-secondary'>Secondary</div>
            <div className='badge col-2 text-success'>Success</div>
            <div className='badge col-2 text-danger'>Danger</div>
            <div className='badge col-2 text-warning'>Warning</div>
            <div className='badge col-1 text-info'>Info</div>
            <div className='badge col-2 text-primary-emphasis'>Light</div>
            <div className='badge col-2 text-dark'>Dark</div>
        </div>
    )
}

export const RoundedBadge = () => {
    return (
        <div className='col-lg-5 col-md-6 col-sm-6 card h-50 p-1 mx-1'>
            <h5 className='text-primary-emphasis'>Pill Badges</h5>
            <Badges
                round='rounded-pill'
                roundone='rounded-pill'
                roundtwo='rounded-pill'
                roundthree='rounded-pill'
                roundfour='rounded-pill'
                roundfive='rounded-pill'
                roundsix='rounded-pill'
                roundseven='rounded-pill'
            />
        </div>
    )
}

export const ButtonBadge = () => {
    return (
        <div className='row container my-3 gap-1 gy-2'>
            <Button className='col-3' variant="primary">
                Primary <Badge text='primary' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-4' variant="secondary">
                Secondary <Badge text='secondary' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-4' variant="success">
                Success <Badge text='success' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-3' variant="danger">
                Danger <Badge text='danger' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-4' variant="warning">
                Warning <Badge text='warning' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-3' variant="info">
                Info <Badge text='info' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-3' variant="light">
                Light <Badge text='light' bg="secondary">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
            <Button className='col-3' variant="dark">
                Dark <Badge text='dark' bg="white">4</Badge>
                <span className="visually-hidden">unread messages</span>
            </Button>
        </div>
    )
}