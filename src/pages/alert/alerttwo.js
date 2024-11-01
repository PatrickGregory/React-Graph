import React from 'react'
import { Alert } from 'react-bootstrap'

export const AlertTwo = (props) =>{
    return(
        <div>
            <div className={`alert ${props.bg} ${props.text}`} role="alert">
                {props.icon}{props.primary}<br/>check it out!
            </div>
            <div className={`alert ${props.bgSec} ${props.textone}`} role="alert">
            {props.iconone}{props.secondary}  <br/>check it out!
            </div>
            <div className={`alert ${props.bgGreen} ${props.texttwo}`} role="alert">
            {props.icontwo}{props.success} <br/>check it out!
            </div>
            <div className={`alert ${props.bgRed} ${props.textthree}`} role="alert">
            {props.iconthree} {props.danger} <br/>check it out!
            </div>
            <div className={`alert ${props.bgYellow} ${props.textfour}`} role="alert">
            {props.iconfour} {props.warning}<br/>check it out!
            </div>
            <div className={`alert ${props.bgSky} ${props.textfive}`} role="alert">
            {props.iconfive} {props.info} <br/>check it out!
            </div>
            <div className={`alert ${props.bgLite} ${props.textsix}`} role="alert">
            {props.iconsix}  {props.light} <br/>check it out!
            </div>
            <div className={`alert ${props.bgDark} ${props.textseven}`} role="alert">
            {props.iconseven}  {props.dark}<br/>check it out!
            </div>
        </div>
    )
}

export const AlertHeader = (props) => {
    return (
        <Alert variant={`${props.color}`}>
      <Alert.Heading>{props.heading}</Alert.Heading>
      <p>
        {props.topmessage}
      </p>
      <hr />
      <p className="mb-0">
        {props.message}
      </p>
    </Alert>
    )
}