import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import BlankSider from './blankSider'

const siderStyle = {
    overflow: 'auto',
    // position: 'absolute',
    insetInlineStart: 0,
    // background: 'white',
    width: 280,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thick',
    scrollbarColor: 'unset',
};

function BlankPage() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <div>
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
                        <BlankSider/>
                    </Sider>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <h4 className='text-primary-emphasis'>Blank Page</h4>
                        <MainBreadcrumbPropOne
                            page='Home'
                            pageone='Pages'
                            div='Blank'
                        />
                        <div className='row gap-3'>
                            <div className='col-lg-5 col-md-6 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis my-3'>Example Card</h5>
                                <p className='fs-5'>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                            </div>
                            <div className='col-lg-6 col-md-6 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis my-3'>Example Card</h5>
                                <p className='fs-5'>This is an examle page with no contrnt. You can use it as a starter for your custom pages.</p>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default BlankPage;