import { Button, Layout, theme } from 'antd';
import React from 'react'
import CustomizedBadges from '../../components/dropdowns/badged-bell';
import ChatBadges from '../../components/dropdowns/badged-chat';
import Profile from '../../components/dropdowns/profile';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from 'react';
import AlertSider from './alertSider';
import AlertOne from './alertone';
import { MainBreadcrumbPropOne } from '../../components/props';
import { BsCheckCircle, BsCollection, BsExclamationOctagon, BsExclamationTriangle, BsFolder, BsInfoCircle, BsStar } from 'react-icons/bs';
import { AlertHeader, AlertTwo } from './alerttwo';

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

function Alerts() {
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
          <AlertSider />
        </Sider>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
          }}
          className='mt-4'>
          <h4 className='text-primary-emphasis'>Alert</h4>
          <MainBreadcrumbPropOne
            div="Alerts"
            pageone='Components'
            page="Home"
          />
          <div className='row container' style={{maxHeight:"inherit"}}>
            <div className='col-lg-6 fs-6 col-md-6 col-sm-6 card h-50 p-2 mx-3'>
              <h5 className='text-primary-emphasis'>Default</h5>
              <AlertOne />
            </div>
            <div className='col-lg-5 fs-6 col-md-6 col-sm-6 card p-2 mx-3'>
              <h5 className='text-primary-emphasis'>Default Solid Color</h5>
              <AlertTwo
                primary='A simple primary alert with solid color —' text='text-white' bg='bg-primary'
                secondary='A simple secondary alert with solid color —' textone='text-white' bgSec='bg-secondary'
                success='A simple success alert with solid color —' texttwo='text-white' bgGreen='bg-success'
                danger='A simple danger alert with solid color —' textthree='text-white' bgRed='bg-danger'
                warning='A simple warning alert with solid color —' textfour='text-secondary' bgYellow='bg-warning'
                info='A simple info alert with solid color —' textfive='text-secondary' bgSky='bg-info'
                light='A simple light alert with solid color —' textsix='text-secondary' bgLite='bg-light'
                dark='A simple dark alert with solid color —' textseven='text-white' bgDark='bg-dark'
              />
            </div>
            <div className='col-lg-6 fs-6 col-md-6 col-sm-6 card p-2 mb-auto mx-3 alert-margin'>
              <h5 className='text-primary-emphasis'>With Icon</h5>
              <AlertTwo
                icon={<BsStar className='mb-1 me-3 text-primary-emphasis' />} text='text-primary-emphasis' primary='A simple primary alert with solid color —' bg='bg-primary-subtle text-black'
                iconone={<BsCollection className='mb-1 me-3' />} secondary='A simple secondary alert with solid color —' bgSec='bg-secondary-subtle text-black'
                icontwo={<BsCheckCircle className='mb-1 me-3 text-success-emphasis' />} success='A simple success alert with solid color —' bgGreen='bg-success-subtle text-black'
                iconthree={<BsExclamationOctagon className='mb-1 me-3 text-danger-emphasis' />} danger='A simple danger alert with solid color —' bgRed='bg-danger-subtle text-black'
                iconfour={<BsExclamationTriangle className='mb-1 me-3 text-warning-emphasis' />} warning='A simple warning alert with solid color —' bgYellow='bg-warning-subtle text-black'
                iconfive={<BsInfoCircle className='mb-1 me-3 text-info-emphasis' />} info='A simple info alert with solid color —' bgSky='bg-info-subtle text-black'
                iconsix={<BsFolder className='mb-1 me-3 text-light-emphasis' />} light='A simple light alert with solid color —' bgLite='bg-light-subtle text-black'
                iconseven={<BsFolder className='mb-1 me-3 text-white' />} dark='A simple dark alert with solid color —' bgDark='bg-dark-subtle text-black'
              />
            </div>
            <div className='col-lg-5 fs-6 col-md-6 col-sm-6 card p-2 mt-4 mx-3'>
              <h4 className='text-primary-emphasis my-2'>With heading and Seperator</h4>
              <AlertHeader
                color='primary'
                heading='Primary Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='secondary'
                heading='Secondary Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='success'
                heading='Success Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='danger'
                heading='Danger Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='warning'
                heading='Warning Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='info'
                heading='Info Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='light'
                heading='Light Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
              <AlertHeader
                color='dark'
                heading='Dark Heading'
                topmessage='Et suscipit deserunt earum itaque dignissimos recusandae dolorem qui. Molestiae rerum perferendis laborum. Occaecati illo at laboriosam rem molestiae sint.'
                message='Temporibus quis et qui aspernatur laboriosam sit eveniet qui sunt.'
              />
            </div>
            <div className='col-lg-6 fs-6 col-md-6 col-sm-6 card p-2 mx-3 alert-marginone h-50'>
            <h4 className='text-primary-emphasis my-2'>Outlined</h4>
              <AlertTwo
                primary='A simple primary outlined alert —' bg='border border-primary'
                secondary='A simple secondary outlined alert —' bgSec='border border-secondary'
                success='A simple success outlined alert —' bgGreen='border border-success'
                danger='A simple danger outlined alert —' bgRed='border border-danger'
                warning='A simple warning outlined alert —' bgYellow='border border-warning'
                info='A simple info outlined alert —' bgSky='border border-info'
                light='A simple light outlined alert —' bgLite='border border-light'
                dark='A simple dark outlined alert —' bgDark='border border-dark'
              />
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Alerts;