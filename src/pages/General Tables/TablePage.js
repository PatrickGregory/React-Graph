import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import TableSider from './TableSider'
import { Active, Colors, Default } from './Table'

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

function TablePage() {
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
                    <TableSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>General Tables</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Tables'
                        div='General'
                    />
                    <div className="row gap-3">
                        <div className='col-sm-6 col-md-6 col-lg-5'>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis mt-1 mb-1'>Default Table</h5>
                                <div><Default/></div>
                            </div>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis mt-1 mb-1'>Dark Table</h5>
                                <div><Default style='table-dark'/></div>
                            </div>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis mt-1 mb-1'>Active Table</h5>
                                <p className='fs-6'>Highlight a table row or cell by adding a <span className='text-danger'>.table-active</span> class.</p>
                                <div><Active/></div>
                            </div>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis mt-1 mb-1'>Table without borders</h5>
                                <p className='fs-6'>Add <span className='text-danger'>.table-borderless</span> for a table without borders.</p>
                                <div><Default style='table-borderless'/></div>
                            </div>
                            <div className='card p-4 my-3'>
                                <h5 className='text-primary-emphasis mt-1 mb-1'>Table Variants</h5>
                                <p className='fs-6'>Use contextual classes <span className='text-danger'>.table-primary .table-secondary .table-success .table-danger .table-warning .table-info .table-light .table-dark</span> to color tables, table rows or individual cells.</p>
                                <div><Colors/></div>
                            </div>
                        </div>
                        <div className='col-sm-6 col-md-6 col-lg-6'>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-2'>Table with stripped rows</h5>
                                <div><Default style='table-striped'/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-2'>Table with hoverable rows</h5>
                                <div><Default style='table-hover'/></div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-2'>Bordered table</h5>
                                <div>
                                    <p>Add <span className='text-danger'>.table-bordered</span> for borders on all sides of the table and cells.</p>
                                    <Default style='table-bordered'/>
                                    <div className='fs-5 my-1'><span className='text-primary'>Border color utilities</span> can be added to change colors:</div>
                                    <Default style='table-bordered border-primary'/>
                                </div>
                            </div>
                            <div className='card p-2 my-3'>
                                <h5 className='text-primary-emphasis my-2'>Small Tables</h5>
                                <div>Add <span className='text-danger'>.table-sm</span> to make any <span className='text-danger'>.table</span> more compact by cutting all cell padding in half.</div>
                                <div><Default style='table-sm'/></div>
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default TablePage