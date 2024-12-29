import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import SpinnerSider from './spinner-sider'
import { Alignment, Border, Colors, Growing, GrowingColors, LoadingButton, Sizes } from './spinners'

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

function SpinnerPage() {
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
                    <SpinnerSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Spinners</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='Spinners'
                    />
                    <div className="row gap-3">
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Border Spinner</h5>
                                <p className='text-secondary fs-5'>Use the border spinners for a lightweight loading indicator.</p>
                                <div className='mt-1'><Border/></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h5 className='text-primary-emphasis my-1'>Colors</h5>
                                <div className='mt-3'><Colors/></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h5 className='text-primary-emphasis my-1'>Alignment</h5>
                                <p className='fs-6 text-secondary'>Use flexbox utilities, float utilities, or text alignment utilities to place spinners exactly where you need them in any situation.</p>
                                <div className='mt-1'><Alignment/></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h5 className='text-primary-emphasis my-1'>Buttons</h5>
                                <p className='fs-6 text-secondary'>Use spinners within buttons to
                                     indicate an action is currently processing or taking place.
                                     You may also swap the text out of the spinner 
                                    element and utilize button text as needed.</p>
                                <div className='mt-1'><LoadingButton/></div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-5'>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Growing Spinner</h5>
                                <p className='text-secondary fs-5'>If you don’t fancy a border spinner, switch to the grow spinner. While it doesn’t technically spin, it does repeatedly grow!</p>
                                <div className='mt-1'><Growing/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Striped Backgrounds</h5>
                                <div className='my-3'><GrowingColors/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-1'>Sizes</h5>
                                <p className='text-secondary my-2'>Add <span className='text-danger'>.spinner-border-sm</span> and <span className='text-danger'>.spinner-grow-sm</span> to make a smaller spinner that can quickly be used within other components. Or, use custom CSS or inline styles to change the dimensions as needed.</p>
                                <div className='mt-1'><Sizes/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default SpinnerPage