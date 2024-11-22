import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import ValidationSider from './validationSider'
import { Custom, Default, ToolTip } from './validations'

const siderStyle = {
    overflow: 'auto',
    // position: 'absolute',
    insetInlineStart: 0,
    // background: 'white',
    width: 280,
    // height: 700,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thick',
    scrollbarColor: 'unset',
};

function ValidationPage() {
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
                    <ValidationSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Form Validation</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Forms'
                        div='Layouts'
                    />
                    <div className="row gap-3">
                        <div className='col-sm-6 col-md-6 col-lg-5'>
                            <div className='card p-4 my-3'>
                                <h4 className='text-primary-emphasis mt-1 mb-2'>Browser Default</h4>
                                <p className='fs-6'>Browser default validation with using the <span className='text-danger'>required</span> keyword. Try submitting the form below.
                                     Depending on your browser and OS, you’ll see a slightly different style of feedback.</p>
                                <div><Default/></div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Customed Style Validations</h4>
                                <p className='fs-6'>For custom Bootstrap form validation messages,
                                     you’ll need to add the <span className='text-danger'>novalidate</span> boolean 
                                    attribute to your <span className='text-danger'>&lt;form&gt;</span>. This disables the browser default feedback tooltips,
                                     but still provides access to the form validation APIs in JavaScript.</p>
                                <div><Custom/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h4 className='text-primary-emphasis my-3'>Custom Styled Validation with Tooltips</h4>
                                <p className='fs-6'>If your form layout allows it, you can swap the <span className="text-danger">{'.{valid|invalid}-feedback'}</span> classes for 
                                    <span className="text-danger">{'.{valid|invalid}-tooltip'}</span> classes to display validation feedback in a styled tooltip. 
                                    Be sure to have a parent with <span className="text-danger">position: relative</span> on it for tooltip positioning. 
                                    In the example below, our column classes have this already, 
                                    but your project may require an alternative setup.</p>
                                <div><ToolTip/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ValidationPage