import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import BadgeSider from './badge-sider'
import { Badges, ButtonBadge, HeaderBadge, IconBadge, NoBackground, RoundedBadge } from './badges'

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

function BadgePage() {
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
                        <BadgeSider />
                    </Sider>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <h4 className='text-primary-emphasis'>Badges</h4>
                        <MainBreadcrumbPropOne
                            page='Home'
                            pageone='Component'
                            div='Badges'
                        />
                        <div className='row gy-4'>
                            <div className='col-lg-5 mx-1 col-md-6 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis'>Default Badges</h5>
                                <Badges />
                            </div>
                            <div className='col-lg-6 mx-1 col-md-6 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis'>Border Badges</h5>
                                <NoBackground />
                            </div>
                            <RoundedBadge />
                            <div className='col-lg-6 col-md-6 mx-1 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis'>Button Badges</h5>
                                <ButtonBadge />
                            </div>
                            <div className='col-lg-5 mx-1 icon-move h-50 col-md-6 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis'>Icon Badges</h5>
                                <IconBadge />
                            </div>
                            <div className='col-lg-6 mx-1 col-md-6 col-sm-6 card p-1'>
                                <h5 className='text-primary-emphasis'>Heading Badges</h5>
                                <HeaderBadge/>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default BadgePage;