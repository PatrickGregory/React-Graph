
export const NotificationProps = (props) => {
    return (
        <div className="d-flex gap-3">
            <i>{props.icon}</i>
            <div>
                <span className="fs-6">{props.title}</span>
                <p className="text-secondary">{props.message}
                    <br />
                    {props.time}
                </p>
            </div>
        </div>
    )
}
export const MessagesProps = (props) => {
    return (
        <div className="d-flex gap-3">
            <img className="rounded-circle profile-pic" src={props.img} alt={props.alt} />
            <div>
                <span className="fs-6">{props.name}</span>
                <p className="text-secondary">{props.message}
                    <br />
                    {props.time}
                </p>
            </div>
        </div>
    )
}