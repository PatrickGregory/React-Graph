import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import ListSider from './list-sider'
import { ActiveList, BadgeList, ButtonList, CheckBox, CustomContent, DefaultList, FlushList, IconList, ListContent, ListContext, OrderedList } from './listgroups'

const siderStyle = {
    overflow: 'auto',
    // position: 'absolute',
    insetInlineStart: 0,
    // background: 'white',
    width: 280,
    height: 1200,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thick',
    scrollbarColor: 'unset',
};

function ListPage() {
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
                    <ListSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>List Page</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Component'
                        div='List Page'
                    />
                    <div className='row ms-3 gap-3'>
                        <div className='col-lg-5 col-md-6 col-sm-6'>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3">Default List Group</h4>
                                <DefaultList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3"> Links and buttons </h4>
                                <ButtonList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3">With Icons</h4>
                                <IconList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3">Numbered</h4>
                                <OrderedList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3"> With Badges</h4>
                                <BadgeList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3"> With Contextual Classes</h4>
                                <ListContext />
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6'>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3">With active and disabled items</h4>
                                <ActiveList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-2">Clean list group</h4>
                                <p>Add <span className='text-danger'>.list-group-flush</span> to remove some borders and 
                                    rounded corners to render 
                                    list group items edge-to-edge 
                                    in a parent container (e.g., cards).</p>
                                <FlushList />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3">With custom content</h4>
                                <ListContent />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3"> Advanced Content </h4>
                                <CustomContent />
                            </div>
                            <div className="card p-2 my-3">
                                <h4 className="text-primary-emphasis my-3"> With Checkboxes and radios </h4>
                                <CheckBox />
                            </div>
                        </div>
                    </div>
                </Content>
            </Layout>
        </Layout>
    )
}

export default ListPage