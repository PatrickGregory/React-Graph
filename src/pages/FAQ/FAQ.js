import { Accordion } from "react-bootstrap"


export const Basic = () => {
    return (
        <div>
            <div className="mb-1">
                <h5 className="text-primary">1. Nisi ut ut exercitationem voluptatem esse sunt rerum?</h5>
                <p className="text-secondary fs-6 my-2">Saepe perspiciatis ea. Incidunt blanditiis
                    enim mollitia qui voluptates. Id rem nulla tenetur nihil in unde rerum.
                    Quae consequatur placeat qui cumque earum eius omnis quos.</p>
            </div>
            <div className="mb-1">
                <h5 className="text-primary">2. Reiciendis dolores repudiandae?</h5>
                <p className="text-secondary fs-6 my-2">Id ipsam non ut. 
                    Placeat doloremque deserunt quia tenetur inventore laboriosam
                     dolores totam odio. Aperiam incidunt et. Totam ut quos 
                     sunt atque modi molestiae dolorem.</p>
            </div>
            <div className="mb-1">
                <h5 className="text-primary">3. Qui qui reprehenderit ut est illo numquam voluptatem?</h5>
                <p className="text-secondary fs-6 my-2">Enim inventore in consequuntur 
                    ipsam voluptatem consequatur beatae. Nostrum consequuntur voluptates et blanditiis.</p>
            </div>
        </div>
    )
}

export const NoBorder = ({firstheader,firstbody,secondheader,secondbody,thirdheader,
    thirdbody,fourheader,fourbody,fiveheader,fivebody}) =>{
    return (
    <Accordion>
      <Accordion.Item eventKey="0" className='accordion-border border-secondary'>
        <Accordion.Header>{firstheader}</Accordion.Header>
        <Accordion.Body>
        {firstbody}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className='accordion-border border-secondary'>
        <Accordion.Header>{secondheader}</Accordion.Header>
        <Accordion.Body>
        {secondbody}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className='accordion-border border-secondary'>
        <Accordion.Header>{thirdheader}</Accordion.Header>
        <Accordion.Body>
        {thirdbody}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className='accordion-border border-secondary'>
        <Accordion.Header>{fourheader}</Accordion.Header>
        <Accordion.Body>
        {fourbody}
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className='accordion-border border-secondary'>
        <Accordion.Header>{fiveheader}</Accordion.Header>
        <Accordion.Body>
        {fivebody}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    )
}