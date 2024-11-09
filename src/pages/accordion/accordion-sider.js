import React from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { BsQuestionCircle, BsEnvelope, BsCardList } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";
import { FaRegFile } from "react-icons/fa6";
import { MdPersonOutline } from "react-icons/md";
import { RiLoginBoxLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import { Menu } from 'antd';

const siderStyle = {
  overflow: 'auto',
  position: 'fixed',
  insetInlineStart: 0,
  // background: 'white',
  width: 280,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thick',
  scrollbarColor: 'unset',
};

const items = [

  {
    key: '10',
    label: 
    <a className='text-decoration-none' rel="noopener noreferrer" href="/">
      Dashboard
    </a>,
    icon: <RxDashboard className='fs-6' />
  },
  {
    key: 'sub1',
    label: 'Components',
    icon: <RxDashboard />,
    children: [
      {
        key: '9',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/alert">
            Alert
          </a>,
      },
      {
        key: '1',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/accordion">
            Accordion
          </a>,
      },
      {
        key: '11',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/badges">
            Badges
          </a>,
      },
      {
        key: '12',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/breadcrumb">
            Breadcrumbs
          </a>,
      },
      {
        key: '29',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/buttons">
            Buttons
          </a>,
      },
      {
        key: '30',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/cards">
            Cards
          </a>,
      },
      {
        key: '31',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/carousel">
            Carousel
          </a>,
      },
      {
        key: '32',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/lists">
            List group
          </a>,
      },
      {
        key: '33',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/modal">
            Modal
          </a>,
      },
      {
        key: '34',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/tabs">
            Tabs
          </a>,
      },
      {
        key: '35',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/pagination">
            Pagination
          </a>,
      },
      {
        key: '36',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/progress">
            Progress
          </a>,
      },
      {
        key: '37',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/spinners">
            Spinners
          </a>,
      },
      {
        key: '38',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/tooltips">
            Tooltips
          </a>,
      }
    ],
  },
  {
    key: 'sub2',
    label: 'Forms',
    icon: <AppstoreOutlined />,
    children: [
      {
        key: '13',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Form Elements
          </a>,
      },
      {
        key: '14',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Form Layouts
          </a>,
      },
      {
        key: '15',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Form Editors
          </a>,
      },
      {
        key: '16',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Form Validation
          </a>,
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Tables',
    icon: <SettingOutlined />,
    children: [
      {
        key: '17',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            General Tables
          </a>,
      },
      {
        key: '18',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Data Tables
          </a>,
      },
    ],
  },
  {
    key: 'sub5',
    label: 'Charts',
    icon: <SettingOutlined />,
    children: [
      {
        key: '21',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Chart.js
          </a>,
      },
      {
        key: '22',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            ApexCharts
          </a>,
      },
      {
        key: '23',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            ECharts
          </a>,
      },
    ],
  },
  {
    key: 'sub6',
    label: 'Icons',
    icon: <SettingOutlined />,
    children: [
      {
        key: '26',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Bootstrap Icons
          </a>,
      },
      {
        key: '27',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Remix Icons
          </a>,
      },
      {
        key: '28',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Boxicons
          </a>,
      },
    ],
  },
  {
    key: 'grp',
    label: 'PAGES',
    type: 'group',
    children: [
      {
        key: '2',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Profile
          </a>,
        icon: <MdPersonOutline className='fs-5' />
      },
      {
        key: '3',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            F.A.Q.
          </a>,
        icon: <BsQuestionCircle className='fs-6' />
      },
      {
        key: '4',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Contact
          </a>,
        icon: <BsEnvelope className='fs-6' />
      },
      {
        key: '5',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Register
          </a>,
        icon: <BsCardList className='fs-6' />
      },
      {
        key: '6',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Login
          </a>,
        icon: <RiLoginBoxLine className='fs-6' />
      },
      {
        key: '7',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Error 404
          </a>,
        icon: <SlMinus className='fs-6' />
      },
      {
        key: '8',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="https://www.luohanacademy.com">
            Blank
          </a>
        ,
        icon: <FaRegFile className='fs-6' />
      },
    ],
  },
];
const AccordionSider = () => {
  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Menu
      onClick={onClick}
      // style={siderStyle}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};
export default AccordionSider;