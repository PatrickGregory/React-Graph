import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import ChartSider from './chartSider'
import { Area, Bar, Bubble, Column, Doughnut, Line, Pie, PolarArea, Radar, RadialBar} from './charts'

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

function ApexPage() {
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
                    <ChartSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Echarts</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Charts'
                        div='ECharts'
                    />
                    <div>
                        <p className='ms-14 fs-5'>ECharts Examples. You can check the <a className='text-decoration-none' target='_blank' href="https://echarts.apache.org/examples/en/index.html">official website</a> for more examples</p>
                        <div className="row gap-5 justify-content-center my-3">
                            <div className='col-sm-6 col-md-6 col-lg-5 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Line Chart</h3>
                                <div><Line/></div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-6 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Area Chart</h3>
                                <div><Area/></div>
                            </div>
                        </div>
                        <div className="row gap-5 justify-content-center my-3">
                            <div className='col-sm-6 col-md-6 col-lg-5 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Column Chart</h3>
                                <div><Column/></div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-6 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Bar Chart</h3>
                                <div><Bar/></div>
                            </div>
                        </div>
                        <div className="row gap-5 justify-content-center my-3">
                            <div className='col-sm-6 col-md-6 col-lg-5 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Doughnut Chart</h3>
                                <div><Doughnut/></div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-6 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Pie Chart</h3>
                                <div><Pie/></div>
                            </div>
                        </div>
                        <div className="row gap-5 justify-content-center my-3">
                            <div className='col-sm-6 col-md-6 col-lg-5 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Radar Chart</h3>
                                <div><Radar/></div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-6 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Polar Area Chart</h3>
                                <div><PolarArea/></div>
                            </div>
                        </div>
                        <div className="row gap-5 justify-content-center my-3">
                            <div className='col-sm-6 col-md-6 col-lg-5 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Radial Bar Chart</h3>
                                <div><RadialBar/></div>
                            </div>
                            <div className='col-sm-6 col-md-6 col-lg-6 card shadow'>
                                <h3 className="text-primary-emphasis my-3">Bubble Chart</h3>
                                <div><Bubble/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ApexPage