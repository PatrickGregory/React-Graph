import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import CarouselSider from './carousel-sider'
import { AutoPlay, Captions, Controlled, Fade, Indicators } from './carousel'

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

function CarouselPage() {
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
                <div className="demo-logo" />
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
                    <CarouselSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Carousel</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='Carousels'
                    />
                    <div className='row container gap-5'>
                        <div className='col-lg-5 col-md-6 col-sm-6'>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>Slides only</h5>
                                <AutoPlay />
                            </div>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>With Indicators</h5>
                                <Indicators />
                            </div>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>Carousel with fade transition</h5>
                                <Fade />
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-6'>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>With Controls</h5>
                                <Controlled />
                            </div>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>With Captions</h5>
                                <Captions />
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default CarouselPage