import { Button, Layout, theme } from 'antd'
import { Content, Header } from 'antd/es/layout/layout'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import CustomizedBadges from '../../components/dropdowns/badged-bell'
import ChatBadges from '../../components/dropdowns/badged-chat'
import Profile from '../../components/dropdowns/profile'
import Sider from 'antd/es/layout/Sider'
import { MainBreadcrumbPropOne } from '../../components/props'
import BoxSider from './BoxSider'
import { BiLogo500Px, BiLogoAdobe, BiLogoAirbnb, BiLogoAlgolia, BiLogoAmazon, BiLogoAndroid, BiLogoAngular, BiLogoApple, BiLogoAudible, BiLogoAws, BiLogoBaidu, BiLogoBehance, BiLogoBing, BiLogoBitcoin, BiLogoBlender, BiLogoBlogger, BiLogoBootstrap, BiLogoChrome, BiLogoCodepen, BiLogoCPlusPlus, BiLogoCreativeCommons, BiLogoCss3, BiLogoDailymotion, BiLogoDeviantart, BiLogoDevTo, BiLogoDigg, BiLogoDigitalocean, BiLogoDiscordAlt, BiLogoDjango, BiLogoDocker, BiLogoGithub } from 'react-icons/bi'

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

function BoxPage() {
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
                    <BoxSider />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}>
                    <h4 className='text-primary-emphasis'>Box Icons</h4>
                    <MainBreadcrumbPropOne
                        page='Home'
                        pageone='Icons'
                        div='Boxicons'
                    />
                    <p className='fs-6'>Use the following pattern to add the Bootstrap icons to anywhere in your project.
                        <span className="text-danger">&lt;i class="ri-add-line"&gt;&lt;/i&gt;</span> Replace the bold part with the below icon names. Check the 
                        <a href="https://boxicons.com/" className='text-decoration-none' target='_blank'> Official website</a> for more info.</p>
                    <span className='row container justify-content-center gap-2'>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogo500Px className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-500px</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAdobe className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-adobe</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAirbnb className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-airbnb</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAlgolia className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-algolia</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAmazon className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-amazon</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAndroid className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-android</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAngular className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-angular</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoApple className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-apple</p>
                        </span>
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAudible className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-audible</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoAws className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-aws</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoBehance className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-behance</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoBing className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-bing</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoBitcoin className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-bitcoin</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoBlender className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-blender</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoBlogger className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-blogger</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoBootstrap className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-bootstrap</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoChrome className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-chrome</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoCodepen className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-codepen</p>
                        </span> 
                        <span className="card align-items-center py-4 px-2 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoCPlusPlus className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-c-plus-plus</p>
                        </span> 
                        <span className="card align-items-center py-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoCreativeCommons className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-creative-commons</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoCss3 className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-css3</p>
                        </span> 
                        <span className="card align-items-center py-4 px-2 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDailymotion className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-dailymotion</p>
                        </span> 
                        <span className="card align-items-center py-4 px-2 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDeviantart className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-deviantart</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDevTo className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-dev-to</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDigg className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-digg</p>
                        </span> 
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDigitalocean className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-digitalocean</p>
                        </span> 
                        <span className="card align-items-center px-2 py-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDiscordAlt className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-discord-alt</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDjango className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-django</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoDocker className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-docker</p>
                        </span> 
                        <span className="card align-items-center p-4 col-lg-2 col-md-3 col-sm-3">
                            <BiLogoGithub className='fs-1 text-primary-emphasis' />
                            <p className='mt-2'>bi-logo-github</p>
                        </span> 
                    </span>
                </Content>
            </Layout>
        </Layout>
    )
}

export default BoxPage