import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import ModalSider from './modal-sider'
import { BasicModal, Center, ModalSize, NoAnimation, NoBackDrop, ScrollModal} from './modal'

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

function ModalPage() {
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
                    <ModalSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Modal</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='Modal'
                    />
                    <div className="row gap-3">
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='card p-4 my-3'>
                                <h4 className='text-primary-emphasis my-1'>Basic Modal</h4>
                                <p className='fs-6'>Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page</p>
                                <div><BasicModal /></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h4 className='text-primary-emphasis my-1'>Disabled Backdrop</h4>
                                <p className='fs-6'>You can disable the backdrop by adding <span className='text-danger'>data-bs-backdrop="false"</span> to <span className="text-danger">.modal-dialog</span></p>
                                <div><NoBackDrop /></div>
                            </div>
                            <div className='card p-4 my-2'>
                                <h4 className='text-primary-emphasis my-1'>Scrolling long content</h4>
                                <p className='fs-6'>When modals become too long for the user’s viewport or device, they scroll independent of the page itself. You can also create a scrollable modal that allows scroll the modal body by adding <span className='text-danger'>.modal-dialog-scrollable</span> to <span className='text-danger'>.modal-dialog</span></p>
                                <div><ScrollModal /></div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-5'>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Vertically Centered</h4>
                                <p className='fs-6'>Add <span className='text-danger'>.modal-dialog-centered</span> to <span className='text-danger'>.modal-dialog</span> to vertically center the modal.</p>
                                <div><Center /></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Modal Sizes</h4>
                                <p className='fs-6'>Modals have three optional sizes, available via modifier
                                    classes to be placed on a <span className='text-danger'>.modal-dialog.</span>
                                    These sizes kick in at certain breakpoints to
                                    avoid horizontal scrollbars on narrower viewports.</p>
                                <div className="row gap-1">
                                    <div><ModalSize/></div>
                                </div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Disabled Animation</h4>
                                <p className='fs-6'>For modals that simply appear rather than fade in to view, remove the <span className='text-danger'>.fade</span> class from your <span className='text-danger'>.modal</span> element</p>
                                <div><NoAnimation/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ModalPage