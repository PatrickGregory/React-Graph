import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import AccordionSider from './accordion-sider'
import { DropDown, NoBorder } from './accordion'
import { MainBreadcrumbPropOne } from '../../components/props'

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

function AccordionPage() {
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
                    <AccordionSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Accordion</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='Accordion'
                    />
                    <div className="d-flex gap-5">
                        <div className='col-lg-5 col-md-6 col-sm-6 card p-4 border-none'>
                            <h4 className='text-primary-emphasis'>Default Accordion</h4>
                            <DropDown />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 h-50 card p-4 border-none'>
                            <h4 className='text-primary-emphasis'>Accordion without outline borders</h4>
                            <NoBorder />
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AccordionPage