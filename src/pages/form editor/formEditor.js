import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import EditorSider from './EditorSider'
import { All, Bubble, Default, TinyMCE } from './Editors'

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

function FormEditor() {
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
                    <EditorSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Form Editors</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Forms'
                        div='Editors'
                    />
                    <div className='row container gap-5'>
                        <div className='col-lg-6 col-md-6 col-sm-6'>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>Quill Editor Default</h5>
                                <div className="p-3"><Default/></div>
                            </div>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>Quill Editor Bubble</h5>
                                <p className="my-2 fs-5">Select some text to display options in poppovers</p>
                                <div className="p-3"><Bubble/></div>
                            </div>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>Quill Editor Full</h5>
                                <div className="p-3"><All/></div>
                            </div>
                        </div>
                        <div className='col-lg-5 col-md-6 col-sm-6'>
                            <div className="card p-2 shadow my-4">
                                <h5 className='text-primary-emphasis'>TinyMCE Editor</h5>
                                <div className="p-3"><TinyMCE/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default FormEditor