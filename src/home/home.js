import React, { useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { AiOutlineMenu } from "react-icons/ai";
import {  Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import CustomizedBadges from '../components/dropdowns/badged-bell';
import ChatBadges from '../components/dropdowns/badged-chat';
import Profile from '../components/dropdowns/profile';

const siderStyle = {
    overflow: 'auto',
    height: '100vh',
    position: 'fixed',
    insetInlineStart: 0,
    background: 'white',
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarColor: 'unset',
};

const { Header, Content, Sider } = Layout;


const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
    const key = String(index + 1);
    return {
        key: `sub${key}`,
        icon: React.createElement(icon),
        label: `subnav ${key}`,
        children: new Array(4).fill(null).map((_, j) => {
            const subKey = index * 4 + j + 1;
            return {
                key: subKey,
                label: `option${subKey}`,
            };
        }),
    };
});
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
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                }}
            >
                <div className="demo-logo" />
                <Button
                    type="text"
                    icon={collapsed ? <AiOutlineMenu /> : <AiOutlineMenu />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '32px',
                        width: 64,
                        height: 64,
                    }}
                />
                <div></div>
                <div className='ms-auto d-flex gap-3'>
                    <div><CustomizedBadges/></div>
                    <div><ChatBadges/></div>
                    <a className='text-decoration-none'><Profile/></a>
                </div>
            </Header>
            <Layout>
                <Sider
                    mode="block"
                    width={290}
                    style={siderStyle}
                    breakpoint="lg"
                    collapsedWidth="0"
                    onBreakpoint={(broken) => {
                        console.log(broken);
                    }}
                    onCollapse={(collapsed, type) => {
                        console.log(collapsed, type);
                    }}
                    trigger={null} collapsible collapsed={collapsed}
                >
                    <div className='pt-5 bg-white mt-5'></div>
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        Content
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default App;