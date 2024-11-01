import { Breadcrumb } from 'antd';
import { Button} from 'react-bootstrap';

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
export const MainBreadcrumbPropOne = (props) => {
    return (
        <Breadcrumb
        items={[
          {
            title: `${props.page}`,
          },
          {
            title: `${props.pageone}`,
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

// button page prop
export const ButtonProp = (props) => {
  return (
      <div>
          <Button variant={`${props.variant}`}>Primary</Button>{' '}
          <Button variant={`${props.variantone}`}>Secondary</Button>{' '}
          <Button variant={`${props.varianttwo}`}>Success</Button>{' '}
          <Button variant={`${props.variantthree}`}>Danger</Button>{' '}
          <Button variant={`${props.variantfour}`}>Warning</Button>{' '}
          <Button variant={`${props.variantfive}`}>Info</Button>{' '}
          <Button variant={`${props.variantsix}`}>Light</Button>{' '}
          <Button variant={`${props.variantseven}`}>Dark</Button>{' '}
      </div>
  )
}