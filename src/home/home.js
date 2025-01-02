import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import { Breadcrumb, Button, Layout, theme } from 'antd';
import CustomizedBadges from '../components/dropdowns/badged-bell';
import ChatBadges from '../components/dropdowns/badged-chat';
import Profile from '../components/dropdowns/profile';
import SiderMenu from './sider-menu';
import { GridBreadcrumbs, MainBreadcrumbProp } from '../components/props';
import { BsCart, BsCurrencyDollar, BsPeople } from 'react-icons/bs';
import { FaDollarSign } from 'react-icons/fa6';
import Dashboard from '../components/dropdowns/Dashboard';
import Timeline from './timeline';
import { HomeTable, NoBorder } from './homeTable';
import { PieChart, Radar } from './echart';
import News from './news';
import { HomeGradient } from '../pages/apex/charts';
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

const { Header, Content, Sider } = Layout;

const App = () => {
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
                    <SiderMenu />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <h4 className='text-primary-emphasis'>dashboard</h4>
                    <MainBreadcrumbProp
                        page='Home'
                        div='Dashboard'
                    />
                    <div className='row justify-content-center'>
                        <div className='col-lg-8 h-50 row gy-3'>
                            <div className='col-lg-12 gx-1 row'>
                                <div className='col-lg-5 col-sm-6 container p-3 shadow mt-3 rounded'>
                                    <div className='d-flex'>
                                        <GridBreadcrumbs
                                            active='Sales'
                                            inactive='Today'
                                        />
                                        <Dashboard />
                                    </div>
                                    <div className='d-flex gap-3'>
                                        <div className='rounded-circle mb-3 bg-primary-subtle stat-size'>
                                            <BsCart className='fs-1 text-primary icon-edit' />
                                        </div>
                                        <div>
                                            <h1 className='text-primary-emphasis'>145</h1>
                                            <p className='text-success fs-6 fw-bold'>12%<span className='text-secondary ms-2 fw-medium'>increase</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-sm-6 p-3 mt-3 shadow container rounded'>
                                    <div className='d-flex'>
                                        <GridBreadcrumbs
                                            active='Revenue'
                                            inactive='This Month'
                                        />
                                        <Dashboard />
                                    </div>
                                    <div className='d-flex gap-3'>
                                        <div className='rounded-circle mb-3 bg-success-subtle stat-size'>
                                            <BsCurrencyDollar className='fs-1 text-success icon-edit' />
                                        </div>
                                        <div>
                                            <h1 className='text-primary-emphasis d-flex'><FaDollarSign />3,264</h1>
                                            <p className='text-success fs-6 fw-bold'>8%<span className='text-secondary ms-2 fw-medium'>increase</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-11 p-3 shadow rounded container mt-3'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Customer'
                                        inactive='This Year'
                                    />
                                    <Dashboard />
                                </div>
                                <div className='d-flex gap-3'>
                                    <div className='rounded-circle mb-3 bg-danger-subtle stat-size'>
                                        <BsPeople className='fs-1 text-danger icon-edit' />
                                    </div>
                                    <div>
                                        <h1 className='text-primary-emphasis'>1,244</h1>
                                        <p className='text-danger fs-6 fw-bold'>12%<span className='text-secondary ms-2 fw-medium'>decrease</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-11 p-3 shadow rounded container mt-3'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Reports'
                                        inactive='Today'
                                    />
                                    <Dashboard />
                                </div>
                                <div><HomeGradient /></div>
                            </div>
                            <div className='col-lg-11 p-3 shadow rounded container mt-3'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Top Selling'
                                        inactive='Today'
                                    />
                                    <Dashboard />
                                </div>
                                <div><HomeTable /></div>
                            </div>
                            <div className='col-lg-11 p-3 shadow rounded container mt-3'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Top Selling'
                                        inactive='Today'
                                    />
                                    <Dashboard />
                                </div>
                                <div><NoBorder /></div>
                            </div>
                        </div>
                        <div className='col-lg-4 '>
                            <div className='mt-4 p-3 shadow rounded container'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Recent Activity'
                                        inactive='Today'
                                    />
                                    <Dashboard />
                                </div>
                                <Timeline />
                            </div>
                            <div className='mt-4 p-3 shadow rounded container'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Budget Report'
                                        inactive='This Month'
                                    />
                                    <Dashboard />
                                </div>
                                <div className='container'>
                                    <Radar />
                                </div>
                            </div>
                            <div className='mt-4 p-3 shadow rounded container'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='Website Traffic'
                                        inactive='Today'
                                    />
                                    <Dashboard />
                                </div>
                                <PieChart />
                            </div>
                            <div className='mt-4 p-3 shadow rounded container'>
                                <div className="d-flex">
                                    <GridBreadcrumbs
                                        active='News & Updates'
                                        inactive='Today'
                                    />
                                    <Dashboard />
                                </div>
                                <News/>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};
export default App;