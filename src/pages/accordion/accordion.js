import React from 'react'
import { Accordion } from 'react-bootstrap';

export const DropDown = () => {
    return (
        <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Accordion Item #1</Accordion.Header>
          <Accordion.Body>
          <span className='fw-bolder'>This is the first item's accordion body.</span> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
           These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
           You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any
           HTML can go within the <span className='text-danger-emphasis'>.accordion-body</span>, though the transition does limit overflow
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Accordion Item #2</Accordion.Header>
          <Accordion.Body>
          <span className='fw-bolder'>This is the second item's accordion body.</span> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
           These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
           You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any
           HTML can go within the <span className='text-danger-emphasis'>.accordion-body</span>, though the transition does limit overflow
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Accordion Item #3</Accordion.Header>
          <Accordion.Body>
          <span className='fw-bolder'>This is the third item's accordion body.</span> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.
           These classes control the overall appearance, as well as the showing and hiding via CSS transitions.
           You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any
           HTML can go within the <span className='text-danger-emphasis'>.accordion-body</span>, though the transition does limit overflow
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
}

export const NoBorder = () =>{
    return (
    <Accordion>
      <Accordion.Item eventKey="0" className='accordion-border border-secondary'>
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
        Placeholder content for this accordion,
         which is intended to demonstrate the <span className='text-danger-emphasis'>.accordion-flush</span> class. 
        This is the first item's accordion body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='accordion-border border-secondary'>
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
        Placeholder content for this accordion,
         which is intended to demonstrate the <span className='text-danger-emphasis'>.accordion-flush</span> class. 
        This is the first item's accordion body.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='accordion-border border-secondary'>
        <Accordion.Header>Accordion Item #3</Accordion.Header>
        <Accordion.Body>
        Placeholder content for this accordion,
         which is intended to demonstrate the <span className='text-danger-emphasis'>.accordion-flush</span> class. 
        This is the first item's accordion body.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
}
