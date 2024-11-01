import React from 'react'
import { ButtonProp } from '../../components/props'
import { Button, ButtonGroup } from 'react-bootstrap'
import { BsCheckCircle, BsCollection, BsExclamationOctagon, BsExclamationTriangle, BsFolder, BsInfoCircle, BsStar } from 'react-icons/bs'

export const ButtonRounded = () => {
    return (
        <ButtonProp
            variant='primary rounded-pill'
            variantone='secondary rounded-pill'
            varianttwo='success rounded-pill'
            variantthree='danger rounded-pill'
            variantfour='warning rounded-pill'
            variantfive='info rounded-pill'
            variantsix='light rounded-pill'
            variantseven='dark rounded-pill'
        />
    )
}
export const ButtonDefault = () => {
    return (
        <span>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </span>
    )
}
export const ButtonOutline = () => {
    return (
        <ButtonProp
            variant='outline-primary'
            variantone='outline-secondary'
            varianttwo='outline-success'
            variantthree='outline-danger'
            variantfour='outline-warning'
            variantfive='outline-info'
            variantsix='outline-light'
            variantseven='outline-dark'
        />
    )
}

export const ButtonSizes = () => {
    return (
        <span>
            <Button variant='primary' size="sm">Small</Button>{' '}
            <Button variant='secondary'>Normal</Button>{' '}
            <Button variant='success' size="lg">Large</Button>{' '}
            <Button variant='outline-danger' size="sm">Small</Button>{' '}
            <Button variant='outline-warning'>Normal</Button>{' '}
            <Button variant='outline-info' size="lg">Large</Button>
            <div className='d-grid gap-2'>
                <Button variant="primary" size="lg">
                    Block button
                </Button>
            </div>
        </span>
    )
}

export const ButtonIcons = () => {
    return (
        <span>
            <Button variant="primary"><BsStar className='mb-1' /> With Text</Button>{' '}
            <Button variant="secondary"><BsCollection /></Button>{' '}
            <Button variant="success"><BsCheckCircle /></Button>{' '}
            <Button variant="warning"><BsExclamationTriangle /></Button>{' '}
            <Button variant="danger"><BsExclamationOctagon /></Button>{' '}
            <Button variant="info"><BsInfoCircle /></Button>{' '}
            <Button variant="dark"><BsFolder /></Button>{' '}
        </span>
    )
}

export const ButtonState = () => {
    return (
        <span>
            <Button variant="primary"> Normal </Button>{' '}
            <Button variant="primary disabled"> Disabled </Button>{' '}
            <Button variant="outline-primary"> Normal </Button>{' '}
            <Button variant="outline-primary disabled"> Disabled </Button>
        </span>
    )
}

export const GroupButton = () => {
    return (
        <div className='row'>
            <ButtonGroup className='col-5 me-4 mb-2'>
                <Button variant="secondary">Left</Button>
                <Button variant="secondary">Middle</Button>
                <Button variant="secondary">Right</Button>
            </ButtonGroup>
            <ButtonGroup className='col-6 mb-2'>
                <Button variant="danger">Left</Button>
                <Button variant="warning">Middle</Button>
                <Button variant="success">Right</Button>
            </ButtonGroup>
            <ButtonGroup className='col-6'>
                <Button variant="outline-primary">Left</Button>
                <Button variant="outline-primary">Middle</Button>
                <Button variant="outline-primary">Right</Button>
            </ButtonGroup>
        </div>
    )
}