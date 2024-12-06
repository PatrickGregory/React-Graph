import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import ContactSider from './ContactSider'
import { BsClock, BsEnvelope, BsGeoAlt, BsTelephone } from 'react-icons/bs'
import { ContactIcon, Message } from './Contact'

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

function ContactPage() {
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
                    <ContactSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Contact</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Pages'
                        div='Contact'
                    />
                    <div className="row">
                        <div className='row gap-4 gy-2 col-12 col-lg-6'>
                            <div className="card shadow col-lg-5 col-md-5 p-4 col-12">
                            <ContactIcon
                                icon={<BsGeoAlt/>}
                                heading='Address'
                                content='Somewhere in Lagos'
                                subContent='Lagos, Nigeria'
                                />
                            </div>
                            <div className="card shadow p-4 col-lg-5 col-md-5 col-12">
                                <ContactIcon
                                icon={<BsTelephone/>}
                                heading='Call Us'
                                content='+234 123 456 7890'
                                subContent='+234 123 456 7890'
                                />
                            </div>
                            <div className="card shadow col-lg-5 col-md-5 p-4 col-12">
                                <ContactIcon
                                icon={<BsEnvelope/>}
                                heading='Email Us'
                                content='info@example.com'
                                subContent='contact@example.com'
                                />
                            </div>
                            <div className="card shadow col-lg-5 col-md-5 p-4 col-12">
                                <ContactIcon
                                icon={<BsClock/>}
                                heading='Open Hours'
                                content='Monday-Friday'
                                subContent='9:00 AM - 5:00 PM'
                                />
                            </div>
                        </div>
                        <div className='col-11 col-lg-5 card shadow'>
                            <Message/>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ContactPage