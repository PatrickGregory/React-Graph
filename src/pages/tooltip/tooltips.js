import { Button, OverlayTrigger, Popover, Tooltip } from "react-bootstrap"


export const ToolTip = () =>{
    return (
        <>
        {['top', 'right', 'bottom', 'left'].map((placement) => (
          <OverlayTrigger
            trigger='hover'
            key={placement}
            placement={placement}
            overlay={
              <Tooltip id={`popover-positioned-${placement}`}>
                <Popover.Header as="h3">{`Tooltip ${placement}`}</Popover.Header>
              </Tooltip>
            }
          >
            <Button variant="secondary mx-1 mt-1">Tooltip on {placement}</Button>
          </OverlayTrigger>
        ))}
      </>
    )
}