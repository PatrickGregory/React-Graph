

export const Border = () => {
    return (
        <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}
export const Growing = () => {
    return (
        <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export const Sizes = () => {
    return (
        <div>
            <div className="spinner-border-sm spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border" style={{width:'1.5rem',height:'1.5rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border" style={{width:'2.5rem',height:'2.5rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow spinner-grow-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" style={{width:'1.5rem',height:'1.5rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow" style={{width:'2.5rem',height:'2.5rem'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export const Colors = () => {
    return (
        <div>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-border text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export const GrowingColors = () => {
    return (
        <div>
            <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-info" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-light" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="spinner-grow text-dark" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export const Alignment = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export const LoadingButton = () => {
    return (
        <div classNameName="gap-2 d-flex">
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span className="visually-hidden" role="status">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span className="visually-hidden" role="status">Loading...</span>
            </button>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-grow spinner-grow-sm" aria-hidden="true"></span>
                <span role="status">Loading...</span>
            </button>
        </div>
    )
}