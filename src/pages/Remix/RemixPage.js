import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import RemixSider from './RemixSider'
import { Ri24HoursFill, Ri24HoursLine, Ri4kFill, Ri4kLine, RiAB, RiAccountBoxFill, RiAccountBoxLine, RiAccountCircleFill, RiAccountCircleLine, RiAccountPinBoxFill, RiAccountPinBoxLine, RiAccountPinCircleFill, RiAccountPinCircleLine, RiAddBoxFill, RiAddBoxLine, RiAddCircleFill, RiAddCircleLine, RiAddFill, RiAddLine, RiAdminFill, RiAdminLine, RiAndroidFill, RiAndroidLine, RiAngularjsFill, RiAngularjsLine, RiAppleFill, RiAppleLine, RiGithubFill, RiGithubLine, RiReactjsFill, RiReactjsLine } from 'react-icons/ri'

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

function RemixPage() {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center p-4 col-lg-2 col-md-3 col-sm-3',
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
                    <RemixSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Remix Icons</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Icons'
                        div='Remix'
                    />
                    <p className='fs-6'>Use the following pattern to add the Bootstrap icons to anywhere in your project.
                        <span className="text-danger">&lt;i class="ri-add-line"&gt;&lt;/i&gt;</span> Replace the bold part with the below icon names. Check the 
                        <a href="https://remixicon.com/" className='text-decoration-none' target='_blank'> Official website</a> for more info.</p>
                    <span className='row container justify-content-center gap-2'>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <Ri24HoursFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-24-hours-fill</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <Ri24HoursLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-24-hours-line</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <Ri4kFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-4k-fill</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <Ri4kLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-4k-line</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAB className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-a-b</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountBoxFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-box-fill</p>
                        </span>
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountBoxLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-box-line</p>
                        </span>
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountCircleFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-circle-fill</p>
                        </span>
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountCircleLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-circle-line</p>
                        </span>
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountPinBoxFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-pin-box-fill</p>
                        </span>
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountPinBoxLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-pin-box-line</p>
                        </span>
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountPinCircleFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-pin-circle-fill</p>
                        </span>
                        <span className="card align-items-center px-1 py-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAccountPinCircleLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-account-pin-circle-line</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAddBoxFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-add-box-fill</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAddBoxLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-add-box-line</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAddCircleFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-add-circle-fill</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAddCircleLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-add-circle-line</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAddFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-add-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAdminFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-admin-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAdminLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-admin-line</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAndroidFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-android-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAndroidLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-android-line</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAngularjsFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-angularjs-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAngularjsLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-angularjs-line</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAppleFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-apple-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiAppleLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-apple-line</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiGithubFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-github-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiGithubLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-github-line</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiReactjsFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-reactjs-fill</p>
                        </span>   
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <RiReactjsLine className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>ri-reactjs-line</p>
                        </span>   
                    </span>
                </Content>
            </Layout>
        </Layout>
    )
}

export default RemixPage