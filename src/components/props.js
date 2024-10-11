import { Breadcrumb } from 'antd';

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

export const MainBreadcrumbProp = (props) => {
    return (
        <Breadcrumb
        items={[
          {
            title: `${props.page}`,
          },
          {
            title: <p className='text-primary-emphasis'>{props.div}</p>,
          },
        ]}
      />
    )
}

export const GridBreadcrumbs = (props) => {
    return (
        <div className='bread' aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item fs-5 text-primary-emphasis active fw-medium">{props.active}</li>
                <li class="breadcrumb-item fs-6 mt-1 text-secondary" aria-current="page">{props.inactive}</li>
            </ol>
        </div>
    )
}