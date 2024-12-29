import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import BsSider from './BsSider'
import { BsAlarm, BsAlarmFill, BsAlignBottom, BsAlignCenter, BsAlignEnd, BsAlignMiddle, BsAlignStart, BsAlignTop, BsAlt, BsApp, BsAppIndicator, BsApple, BsArchive, BsArchiveFill, BsArrow90DegDown, BsArrow90DegLeft, BsArrow90DegRight, BsArrow90DegUp, BsArrowBarDown, BsArrowBarLeft, BsArrowBarRight, BsArrowBarUp, BsArrowClockwise, BsArrowCounterclockwise, BsFacebook, BsGithub, BsReddit, BsYoutube, BsZoomIn, BsZoomOut } from 'react-icons/bs'

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

function BsPage() {
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
                    <BsSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Bootstrap Icons</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Icons'
                        div='Bootstrap'
                    />
                    <p className='fs-6'>Use the following pattern to add the Bootstrap icons to anywhere in your project.
                        <span className="text-danger">&lt;i class="bi alarm-fille"&gt;&lt;/i&gt;</span> Replace the bold part with the below icon names. Check the
                       <a href="https://icons.getbootstrap.com/" className='text-decoration-none' target='_blank'> Official website</a> for more info.</p>
                    <span className='row container justify-content-center gap-2'>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlarmFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>alarm-fill</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlarm className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>alarm</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlignBottom className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>align-bottom</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlignCenter className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>align-center</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlignEnd className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>align-end</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlignMiddle className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>alarm-middle</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlignStart className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>align-start</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlignTop className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>align-top</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAlt className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>alt</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsAppIndicator className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>app-indicator</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsApp className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>app</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsApple className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>apple</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArchiveFill className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>archive-fill</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArchive className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>archive</p>
                        </span>
                        <span className="card align-items-center text-center p-2 col-lg-2 col-md-3 col-sm-3">
                            <BsArrow90DegDown className='fs-1 mt-3 text-primary-emphasis' />
                            <p className='mt-2'>arrow-90deg-down</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrow90DegLeft className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-90deg-left</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrow90DegRight className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-90deg-right</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrow90DegUp className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-90deg-up</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrowBarDown className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-bar-down</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrowBarLeft className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-bar-left</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrowBarRight className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-bar-right</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrowBarUp className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-bar-up</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsArrowClockwise className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-clockwise</p>
                        </span>
                        <span className="card align-items-center px-1 py-4  col-lg-2 col-md-3 col-sm-3">
                            <BsArrowCounterclockwise className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>arrow-counterclockwise</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsFacebook className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>facebook</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsGithub className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>github</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsReddit className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>reddit</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsYoutube className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>youtube</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsZoomIn className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>zoom-in</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BsZoomOut className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>zoom-out</p>
                        </span>
                    </span>
                </Content>
            </Layout>
        </Layout>
    )
}

export default BsPage