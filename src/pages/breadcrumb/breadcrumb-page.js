import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import BreadcrumbSider from './bread-sider'
import { CustomSeperator, CustomSeperatorNot, CustomSeperatorone, CustomSeperatorthree, CustomSeperatortwo, IconBreadCrumb } from './breadcrumb'

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

function BreadcrumbPage() {
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
                        <BreadcrumbSider />
                    </Sider>
                    <Content
                        style={{
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}>
                        <h4 className='text-primary-emphasis'>Breadcrumbs</h4>
                        <MainBreadcrumbPropOne
                            page='Home'
                            pageone='Component'
                            div='Breadcrumbs'
                        />
                        <div className='row gy-4'>
                            <div className='col-lg-6 mx-2 col-md-6 col-sm-6'>
                                <div className='card p-1 my-4'>
                                    <h5 className='text-primary-emphasis my-1'>Default Breadcrumbs</h5>
                                    <div className='my-3'>
                                        <MainBreadcrumbPropOne
                                            page='Home'
                                            pageone='Library'
                                            div='Default'
                                        />
                                    </div>
                                </div>
                                <div className='card p-1 my-4'>
                                    <h5 className='text-primary-emphasis'>Centered</h5>
                                    <div className='mx-auto my-3'>
                                        <MainBreadcrumbPropOne
                                            page='Home'
                                            pageone='Library'
                                            div='Centered Position'
                                        />
                                    </div>
                                </div>
                                <div className='card p-1 my-4'>
                                    <h5 className='text-primary-emphasis'>Right Positioned</h5>
                                    <div className='ms-auto my-3'>
                                        <MainBreadcrumbPropOne
                                            page='Home'
                                            pageone='Library'
                                            div='Right Position'
                                        />
                                    </div>
                                </div>
                                <div className='card p-1 my-4'>
                                    <h5 className='text-primary-emphasis'>With Home Icon</h5>
                                    <div className='my-3'>
                                        <IconBreadCrumb/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5 mx-1 col-md-6 col-sm-6 '>
                                <div className='card p-1 my-4'>
                                    <h5 className='text-primary-emphasis my-1'>Breadcrumbs with a page title</h5>
                                    <div className='mt-3'>
                                        <h3 className='text-primary-emphasis'>Page Title</h3>
                                        <MainBreadcrumbPropOne
                                            page='Home'
                                            pageone='component'
                                            div='Breadcrumb'
                                        />
                                    </div>
                                </div>
                                <div className='card p-1 my-4'>
                                    <h5 className='text-primary-emphasis my-1'>Breadcrumbs with different dividers</h5>
                                    <div className='mt-4'>
                                        <CustomSeperator/>
                                    </div>
                                    <div className='my-2'><CustomSeperatorone/></div>
                                    <div className='my-2'><CustomSeperatortwo/></div>
                                    <div className='my-2'><CustomSeperatorthree/></div>
                                    <div className='my-2'><CustomSeperatorNot/></div>
                                </div>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}

export default BreadcrumbPage;