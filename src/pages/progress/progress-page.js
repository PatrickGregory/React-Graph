import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import ProgressSider from './progress-sider'
import { Animated, Default, Height, Label, ProgressBg, Stripe } from './progress'

const siderStyle = {
    overflow: 'auto',
    // position: 'absolute',
    insetInlineStart: 0,
    // background: 'white',
    width: 280,
    height: 1200,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thick',
    scrollbarColor: 'unset',
};

function ProgressPage() {
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
                    <ProgressSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Progress</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='Progress'
                    />
                    <div className="row gap-3">
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Default</h5>
                                <div className='mt-4'><Default/></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h5 className='text-primary-emphasis my-1'>Labels</h5>
                                <div className='mt-4'><Label/></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h5 className='text-primary-emphasis my-1'>Backgrounds</h5>
                                <div className='mt-4'><ProgressBg/></div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-5'>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Height</h5>
                                <p className='text-secondary fs-5'>We only set a height value on the .progress, so if you change that value the inner .progress-bar will automatically resize accordingly</p>
                                <div className='mt-1'><Height/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Striped Backgrounds</h5>
                                <div className='mt-1'><Stripe/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Striped Animated Backgrounds</h5>
                                <div className='mt-1'><Animated/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ProgressPage