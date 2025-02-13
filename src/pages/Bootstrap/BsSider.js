import React from 'react';
import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { BsQuestionCircle, BsEnvelope, BsCardList, BsMenuButtonWide, BsJournalText, BsLayoutTextWindowReverse, BsBarChart, BsGem } from "react-icons/bs";
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
    key: 'sub6',
    label: 'Components',
    icon: <BsMenuButtonWide />,
    children: [
      {
        key: '9',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/alert">
            Alert
          </a>,
      },
      {
        key: '26',
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
    icon: <BsJournalText />,
    children: [
      {
        key: '13',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/form_elements">
            Form Elements
          </a>,
      },
      {
        key: '14',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/form_layout">
            Form Layouts
          </a>,
      },
      {
        key: '15',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/form_editor">
            Form Editors
          </a>,
      },
      {
        key: '16',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/form_validation">
            Form Validation
          </a>,
      },
    ],
  },
  {
    key: 'sub4',
    label: 'Tables',
    icon: <BsLayoutTextWindowReverse />,
    children: [
      {
        key: '17',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/general_table">
            General Tables
          </a>,
      },
      {
        key: '18',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/data_table">
            Data Tables
          </a>,
      },
    ],
  },
  {
    key: 'sub5',
    label: 'Charts',
    icon: <BsBarChart />,
    children: [
      {
        key: '21',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/chartJs">
            Chart.js
          </a>,
      },
      {
        key: '22',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/apex">
            ApexCharts
          </a>,
      },
      {
        key: '23',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/echart">
            ECharts
          </a>,
      },
    ],
  },
  {
    key: 'sub1',
    label: 'Icons',
    icon: <BsGem />,
    children: [
      {
        key: '1',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/bootstrap">
            Bootstrap Icons
          </a>,
      },
      {
        key: '27',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/remix">
            Remix Icons
          </a>,
      },
      {
        key: '28',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/boxicons">
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
          <a className='text-decoration-none' rel="noopener noreferrer" href="/profile">
            Profile
          </a>,
        icon: <MdPersonOutline className='fs-5' />
      },
      {
        key: '3',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/faq">
            F.A.Q.
          </a>,
        icon: <BsQuestionCircle className='fs-6' />
      },
      {
        key: '4',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/contact">
            Contact
          </a>,
        icon: <BsEnvelope className='fs-6' />
      },
      {
        key: '5',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" target='_blank' href="/register">
            Register
          </a>,
        icon: <BsCardList className='fs-6' />
      },
      {
        key: '6',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" target='_blank' href="/login">
            Login
          </a>,
        icon: <RiLoginBoxLine className='fs-6' />
      },
      {
        key: '7',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" target='_blank' href="/error">
            Error 404
          </a>,
        icon: <SlMinus className='fs-6' />
      },
      {
        key: '8',
        label:
          <a className='text-decoration-none' rel="noopener noreferrer" href="/blank">
            Blank
          </a>
        ,
        icon: <FaRegFile className='fs-6' />
      },
    ],
  },
];
const BsSider = () => {
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
export default BsSider;