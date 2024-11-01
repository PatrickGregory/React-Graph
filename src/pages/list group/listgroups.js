import { BsCheckCircle, BsCollection, BsExclamationOctagon, BsStar } from "react-icons/bs"

export const DefaultList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    )
}
export const IconList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item"><BsStar className="text-success mb-1 me-2" /> An item</li>
            <li className="list-group-item"><BsCollection className="text-primary mb-1 me-2" />A second item</li>
            <li className="list-group-item"><BsCheckCircle className="text-danger mb-1 me-2" />A third item</li>
            <li className="list-group-item"><BsExclamationOctagon className="text-warning mb-1 me-2" />A fourth item</li>
        </ul>
    )
}

export const OrderedList = () => {
    return (
        <ol className="list-group list-group-numbered">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Cras justo odio</li>
        </ol>
    )
}

export const ListContext = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">A simple default list group item</li>
            <li className="list-group-item list-group-item-primary">A simple primary list group item</li>
            <li className="list-group-item list-group-item-secondary">A simple secondary list group item</li>
            <li className="list-group-item list-group-item-success">A simple success list group item</li>
            <li className="list-group-item list-group-item-danger">A simple danger list group item</li>
            <li className="list-group-item list-group-item-warning">A simple warning list group item</li>
            <li className="list-group-item list-group-item-info">A simple info list group item</li>
            <li className="list-group-item list-group-item-light">A simple light list group item</li>
            <li className="list-group-item list-group-item-dark">A simple dark list group item</li>
        </ul>
    )
}

export const ActiveList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item active" style={{zIndex:0}} aria-current="true">An active item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li>
        </ul>
    )
}

export const FlushList = () => {
    return (
        <ul className="list-group list-group-flush">
            <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item disabled">A Disabled Item</li>
        </ul>
    )
}

export const CheckBox = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox"/>
                    <label className="form-check-label" for="firstCheckbox">First checkbox</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="secondCheckbox"/>
                    <label className="form-check-label" for="secondCheckbox">Second checkbox</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="thirdCheckbox"/>
                    <label className="form-check-label" for="thirdCheckbox">Third checkbox</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="fourthCheckbox"/>
                    <label className="form-check-label" for="fourthCheckbox">Fourth checkbox</label>
            </li>
            <li className="list-group-item">
                <input className="form-check-input me-1" type="checkbox" value="" id="fifthCheckbox"/>
                    <label className="form-check-label" for="fifthCheckbox">Fifth checkbox</label>
            </li>
        </ul>
    )
}

export const CustomContent = () => {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" style={{zIndex:0}} aria-current="true">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small>3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small>And some small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
            <a href="#" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">List group item heading</h5>
                    <small className="text-body-secondary">3 days ago</small>
                </div>
                <p className="mb-1">Some placeholder content in a paragraph.</p>
                <small className="text-body-secondary">And some muted small print.</small>
            </a>
        </div>
    )
}

export const ListContent = () => {
    return (
        <ol className="list-group list-group-numbered">
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-start">
                <div className="ms-2 me-auto">
                    <div className="fw-bold">Subheading</div>
                    Content for list item
                </div>
                <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
        </ol>
    )
}
export const BadgeList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item d-flex justify-content-between align-items-center">
                A list item
                <span className="badge text-bg-primary rounded-pill">14</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                A second list item
                <span className="badge text-bg-primary rounded-pill">2</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center">
                A third list item
                <span className="badge text-bg-primary rounded-pill">1</span>
            </li>
        </ul>
    )
}

export const ButtonList = () => {
    return (
        <div className="list-group">
            <a href="#" className="list-group-item list-group-item-action active" style={{zIndex:0}} aria-current="true">
                The current link item
            </a>
            <a href="#" className="list-group-item list-group-item-action">A second link item</a>
            <a href="#" className="list-group-item list-group-item-action">A third link item</a>
            <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
            <a className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link item</a>
        </div>
    )
}