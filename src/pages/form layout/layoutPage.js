import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import LayoutSider from './layoutSider'
import { FloatingLabels, Horizontal, MultiColumns, NoLabel, Vertical } from './layouts'

const siderStyle = {
    overflow: 'auto',
    // position: 'absolute',
    insetInlineStart: 0,
    // background: 'white',
    width: 280,
    height: 700,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thick',
    scrollbarColor: 'unset',
};

function LayoutPage() {
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
                    <LayoutSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Form Layouts</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Forms'
                        div='Layouts'
                    />
                    <div className="row gap-3">
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='card p-4 my-3'>
                                <h4 className='text-primary-emphasis my-1'>Horizontal Form</h4>
                                <div><Horizontal/></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h4 className='text-primary-emphasis my-1'>Multi Columns Form</h4>
                                <div><MultiColumns/></div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-5'>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Vertical Form</h4>
                                <div><Vertical/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>No Labels / Placeholders as labels Form</h4>
                                <div><NoLabel/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Floating Labels Form</h4>
                                <div><FloatingLabels/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default LayoutPage