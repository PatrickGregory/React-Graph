import { useState } from "react";
import { Col, Nav, Row, Tab, Tabs } from "react-bootstrap";


export const Default = () => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 fs-6"
        >
            <Tab className="fs-6" eventKey="home" title="Home">
                Sunt est soluta temporibus accusantium neque nam
                maiores cumque temporibus.
                Tempora libero non est unde veniam est qui dolor.
                Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
                Fuga sequi sed ea saepe at unde.
            </Tab>
            <Tab className="fs-6" eventKey="profile" title="Profile">
                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia.
                Accusantium distinctio omnis et atque fugiat.
                Itaque doloremque aliquid sint quasi quia distinctio similique.
                Voluptate nihil recusandae mollitia dolores.
                Ut laboriosam voluptatum dicta.
            </Tab>
            <Tab className="fs-6" eventKey="contact" title="Contact">
                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque.
                Accusantium quibusdam perspiciatis qui qui omnis magnam.
                Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure.
                Dignissimos fuga tempore dolor.
            </Tab>
        </Tabs>
    );
}
export const Pill = () => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 fs-6"
            variant="pills"
        >
            <Tab className="fs-6" eventKey="home" title="Home">
                Sunt est soluta temporibus accusantium neque nam
                maiores cumque temporibus.
                Tempora libero non est unde veniam est qui dolor.
                Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
                Fuga sequi sed ea saepe at unde.
            </Tab>
            <Tab className="fs-6" eventKey="profile" title="Profile">
                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia.
                Accusantium distinctio omnis et atque fugiat.
                Itaque doloremque aliquid sint quasi quia distinctio similique.
                Voluptate nihil recusandae mollitia dolores.
                Ut laboriosam voluptatum dicta.
            </Tab>
            <Tab className="fs-6" eventKey="contact" title="Contact">
                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque.
                Accusantium quibusdam perspiciatis qui qui omnis magnam.
                Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure.
                Dignissimos fuga tempore dolor.
            </Tab>
        </Tabs>
    );
}

export const VerticalPill = () =>{
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={3}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Profile</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Messages</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">Sunt est soluta temporibus accusantium neque nam
                maiores cumque temporibus.
                Tempora libero non est unde veniam est qui dolor.
                Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
                Fuga sequi sed ea saepe at unde.</Tab.Pane>
                <Tab.Pane eventKey="second">Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia.
                Accusantium distinctio omnis et atque fugiat.
                Itaque doloremque aliquid sint quasi quia distinctio similique.
                Voluptate nihil recusandae mollitia dolores.
                Ut laboriosam voluptatum dicta.</Tab.Pane>
                <Tab.Pane eventKey="third">Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque.
                Accusantium quibusdam perspiciatis qui qui omnis magnam.
                Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure.
                Dignissimos fuga tempore dolor.</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      );
}
export const Underline = () => {
    const [key, setKey] = useState('home');

    return (
        <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3 fs-6"
            variant="underline"
        >
            <Tab className="fs-6" eventKey="home" title="Home">
                Sunt est soluta temporibus accusantium neque nam
                maiores cumque temporibus.
                Tempora libero non est unde veniam est qui dolor.
                Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
                Fuga sequi sed ea saepe at unde.
            </Tab>
            <Tab className="fs-6" eventKey="profile" title="Profile">
                Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia.
                Accusantium distinctio omnis et atque fugiat.
                Itaque doloremque aliquid sint quasi quia distinctio similique.
                Voluptate nihil recusandae mollitia dolores.
                Ut laboriosam voluptatum dicta.
            </Tab>
            <Tab className="fs-6" eventKey="contact" title="Contact">
                Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque.
                Accusantium quibusdam perspiciatis qui qui omnis magnam.
                Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure.
                Dignissimos fuga tempore dolor.
            </Tab>
        </Tabs>
    );
}

export const JustifiedUnderlined = () =>{
    return (
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3 fs-6"
          variant="underline"
          fill
        >
          <Tab className="fs-6" eventKey="home" title="Home">
          Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
           Tempora libero non est unde veniam est qui dolor.
           Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
           Fuga sequi sed ea saepe at unde.
          </Tab>
          <Tab className="fs-6" eventKey="profile" title="Profile">
          Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. 
          Accusantium distinctio omnis et atque fugiat.
           Itaque doloremque aliquid sint quasi quia distinctio similique.
           Voluptate nihil recusandae mollitia dolores.
           Ut laboriosam voluptatum dicta.
          </Tab>
          <Tab className="fs-6" eventKey="contact" title="Contact">
          Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque.
           Accusantium quibusdam perspiciatis qui qui omnis magnam.
           Officiis accusamus impedit molestias nostrum veniam.
            Qui amet ipsum iure.
           Dignissimos fuga tempore dolor.
          </Tab>
        </Tabs>
      );
}
export const Justified = () =>{
    return (
        <Tabs
          defaultActiveKey="home"
          id="fill-tab-example"
          className="mb-3 fs-6"
          fill
        >
          <Tab className="fs-6" eventKey="home" title="Home">
          Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus.
           Tempora libero non est unde veniam est qui dolor.
           Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit.
           Fuga sequi sed ea saepe at unde.
          </Tab>
          <Tab className="fs-6" eventKey="profile" title="Profile">
          Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. 
          Accusantium distinctio omnis et atque fugiat.
           Itaque doloremque aliquid sint quasi quia distinctio similique.
           Voluptate nihil recusandae mollitia dolores.
           Ut laboriosam voluptatum dicta.
          </Tab>
          <Tab className="fs-6" eventKey="contact" title="Contact">
          Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque.
           Accusantium quibusdam perspiciatis qui qui omnis magnam.
           Officiis accusamus impedit molestias nostrum veniam.
            Qui amet ipsum iure.
           Dignissimos fuga tempore dolor.
          </Tab>
        </Tabs>
      );
}