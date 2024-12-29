import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import CardSider from './card-sider'

const siderStyle = {
    overflow: 'auto',
    position: 'sticky',
    insetInlineStart: 10,
    backgroundColor: 'white',
    width: 280,
    height: '100dvh',
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thick',
    scrollbarColor: 'unset',
};

function CardPage() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    position: 'sticky',
                    background: 'white',
                    border: 'none',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    boxShadow: '0 2px 4px #312f2f53'
                }}
            >
                <div className="demo-logo" id='top' />
                <Button
                    type="text"
                    icon={collapsed ? <AiOutlineMenu className='fs-4' /> : <AiOutlineMenu className='fs-4' />}
                    onClick={() => setCollapsed(!collapsed)}
                />
                <div></div>
                <div className='ms-auto d-flex gap-3'>
                    <div><CustomizedBadges /></div>
                    <div><ChatBadges /></div>
                    <a className='text-decoration-none'><Profile /></a>
                </div>
            </Header>
            <Layout>
                <Sider
                    mode="block"
                    style={siderStyle}
                    breakpoint="lg"
                    background="white"
                    collapsedWidth="0"
                    onBreakpoint={(collapsed) => {
                        setCollapsed(collapsed);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    trigger={null} collapsible collapsed={collapsed}
                    className='sider-style mt-1'
                >
                    <CardSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Cards</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='Cards'
                    />
                    <div className='row ms-3 gap-3 fs-6'>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className="card my-3 p-2">
                                <h5 className='text-primary-emphasis'>Default Card</h5>
                                <div className='card-body'>Ut in ea error laudantium quas omnis officia.
                                    Sit sed praesentium voluptas.
                                    Corrupti inventore consequatur nisi necessitatibus modi
                                    consequuntur soluta id. Enim autem est esse natus assumenda.
                                    Non sunt dignissimos officiis expedita. Consequatur sint repellendus voluptas.
                                    Quidem sit est nulla ullam.
                                    Suscipit debitis ullam iusto dolorem animi dolorem numquam.
                                    Enim fuga ipsum dolor nulla quia ut.
                                    Rerum dolor voluptatem et deleniti libero totam numquam nobis
                                    distinctio. Sit sint aut. Consequatur rerum in</div>
                            </div>
                            <div className="card my-3">
                                <div className='card-header'>Header</div>
                                <div className="card-body">
                                    <h5 className='text-primary-emphasis'>Default Card</h5>
                                    <p>Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas. Corrupti inventore
                                        consequatur nisi necessitatibus modi consequuntur soluta id.
                                        Enim autem est esse natus assumenda. Non sunt dignissimos officiis expedita.
                                        Consequatur sint repellendus voluptas. Quidem sit est nulla ullam.
                                        Suscipit debitis ullam iusto dolorem animi dolorem numquam.
                                        Enim fuga ipsum dolor nulla quia ut.
                                        Rerum dolor voluptatem et deleniti libero
                                        totam numquam nobis distinctio.
                                        Sit sint aut. Consequatur rerum in.</p>
                                </div>
                                <div className="card-footer">Footer</div>
                            </div>
                            <div className='card my-3'>
                                <div className='row'>
                                    <img className='col-5' src="./images/card.jpg" alt="card-example" />
                                    <div className='col-6'>
                                        <h5 className="text-primary-emphasis">Card with an Image on left</h5>
                                        <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div className="card my-3">
                                <img className='w-100' src="./images/card.jpg" alt='card-example' />
                                <div>
                                    <h5 className="text-primary-emphasis my-1 px-1">Card with an image on top</h5>
                                    <p className='p-1'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="card my-3">
                                <div>
                                    <h5 className="text-primary-emphasis my-1 px-1">Card with an image on bottom</h5>
                                    <p className='p-1'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                                <img className='w-100' src="./images/card.jpg" alt='card-example' />
                            </div>
                            <div className="card my-3 text-primary-emphasis">
                                <img src="./images/card.jpg" className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <p clasNclassNames="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <div className="card my-3">
                                <div className="card-body">
                                    <h5 className="card-title text-primary-emphasis">Card title</h5>
                                    <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#top" class="btn btn-primary me-2">Button</a>
                                    <a href="#top" className="card-link">Card link</a>
                                    <a href="#top" className="card-link">Another link</a>
                                </div>
                            </div>
                            <div className="card my-3">
                                <div className='card-header'>
                                    <a href="#top" class="btn btn-primary me-2">Active</a>
                                    <a href="#top" className="card-link text-decoration-none fs-5">Link</a>
                                    <a href="#top" className="disabled btn ms-2">Disabled</a>
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-primary-emphasis">Special title treatment</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#top" class="btn d-block btn-primary">Go Somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default CardPage