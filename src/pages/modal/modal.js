import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export const BasicModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Basic modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Basic Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
export const ScrollModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Basic Modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Basic Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalHeight'>Non omnis incidunt qui sed occaecati magni asperiores est mollitia.
                    Soluta at et reprehenderit. Placeat autem numquam et fuga numquam.
                    Tempora in facere consequatur sit dolor ipsum.
                    Consequatur nemo amet incidunt est facilis.
                    Dolorem neque recusandae quo sit molestias sint dignissimos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


export const NoBackDrop = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch Modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop={false}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Disabled Backdrop</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Do not even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export const VerticallyCentred = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Vertically Centered
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Non omnis incidunt qui sed occaecati magni asperiores est mollitia.
                    Soluta at et reprehenderit. Placeat autem numquam et fuga numquam.
                    Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis.
                    Dolorem neque recusandae quo sit molestias sint dignissimos.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant='secondary'>Close</Button>
                <Button>Save Changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export const Center = () => {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Vertically Centered
            </Button>

            <VerticallyCentred
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export const ModalInstance = () => {
    return (
        <>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Launch static backdrop modal
            </button>


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const FullModal = () => {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    Full screen
                    {typeof v === 'string' && `below ${v.split('-')[0]}`}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Full Screen Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Non omnis incidunt qui sed occaecati magni asperiores est
                    mollitia. Soluta at et reprehenderit. Placeat autem numquam
                    et fuga numquam. Tempora in facere consequatur sit dolor ipsum.
                    Consequatur nemo amet incidunt est facilis. Dolorem neque
                    recusandae quo sit molestias sint dignissimos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export const ModalSize = () => {
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);
    const [xlShow, setXlShow] = useState(false);




    const handleClose = () => setSmShow(false);
    const handleclose = () => setLgShow(false);
    const Handleclose = () => setXlShow(false);

    return (
        <>
            <div>
                <Button onClick={() => setSmShow(true)} className="me-2">
                    Small modal
                </Button>
                <Button onClick={() => setLgShow(true)}>Large modal</Button>
                <Button onClick={() => setXlShow(true)} className='me-2'>Extra Large modal</Button>
                <FullModal />
            </div>
            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Small Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Non omnis incidunt qui sed occaecati magni asperiores
                    est mollitia. Soluta at et reprehenderit.
                    Placeat autem numquam et fuga numquam.
                    Tempora in facere consequatur sit dolor ipsum.
                    Consequatur nemo amet incidunt est facilis.
                    Dolorem neque recusandae quo sit molestias sint dignissimos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Non omnis incidunt qui sed occaecati magni asperiores
                    est mollitia. Soluta at et reprehenderit.
                    Placeat autem numquam et fuga numquam.
                    Tempora in facere consequatur sit dolor ipsum.
                    Consequatur nemo amet incidunt est facilis.
                    Dolorem neque recusandae quo sit molestias sint dignissimos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleclose}>
                        Close
                    </Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
            <Modal
                size="xl"
                show={xlShow}
                onHide={() => setXlShow(false)}
                aria-labelledby="example-modal-sizes-title-xl"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-xl">
                        Extra Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>Non omnis incidunt qui sed occaecati magni asperiores
                    est mollitia. Soluta at et reprehenderit.
                    Placeat autem numquam et fuga numquam.
                    Tempora in facere consequatur sit dolor ipsum.
                    Consequatur nemo amet incidunt est facilis.
                    Dolorem neque recusandae quo sit molestias sint dignissimos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={Handleclose}>
                        Close
                    </Button>
                    <Button variant="primary">Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export const NoAnimation = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Disabled Animation Modal
            </Button>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Disabled Animation Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>Non omnis incidunt qui sed occaecati magni asperiores est mollitia.
                    Soluta at et reprehenderit. Placeat autem numquam et fuga numquam.
                    Tempora in facere consequatur sit dolor ipsum. Consequatur nemo amet incidunt est facilis.
                    Dolorem neque recusandae quo sit molestias sint dignissimos.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}