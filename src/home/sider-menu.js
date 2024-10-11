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
        key: '1',
    label: 'Dashboard',
    icon: <RxDashboard className='fs-6'/>
      },
  {
    key: 'sub1',
    label: 'Components',
    icon: <RxDashboard />,
    children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
    ],
  },
  {
    key: 'sub2',
    label: 'Forms',
    icon: <AppstoreOutlined />,
    children: [
        {
          key: '9',
          label: 'Option 9',
        },
        {
          key: '10',
          label: 'Option 10',
        },
        {
          key: '11',
          label: 'Option 11',
        },
        {
          key: '12',
          label: 'Option 12',
        },
    ],
  },
  {
    key: 'sub4',
    label: 'Tables',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
  {
    key: 'sub5',
    label: 'Charts',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
  {
    key: 'sub6',
    label: 'Icons',
    icon: <SettingOutlined />,
    children: [
      {
        key: '9',
        label: 'Option 9',
      },
      {
        key: '10',
        label: 'Option 10',
      },
      {
        key: '11',
        label: 'Option 11',
      },
      {
        key: '12',
        label: 'Option 12',
      },
    ],
  },
  {
    key: 'grp',
    label: 'PAGES',
    type: 'group',
    children: [
      {
        key: '13',
        label: 'Profile',
        icon: <MdPersonOutline className='fs-5' />
      },
      {
        key: '14',
        label: 'F.A.Q',
        icon: <BsQuestionCircle className='fs-6'/>
      },
      {
        key: '15',
        label: 'Contact',
        icon: <BsEnvelope className='fs-6' />
      },
      {
        key: '16',
        label: 'Register',
        icon: <BsCardList className='fs-6'/>
      },
      {
        key: '17',
        label: 'Login',
        icon: <RiLoginBoxLine className='fs-6' />
      },
      {
        key: '18',
        label: 'Error 404',
        icon: <SlMinus className='fs-6' />
      },
      {
        key: '19',
        label: 'Blank',
        icon: <FaRegFile className='fs-6' />
      },
    ],
  },
];
const SiderMenu = () => {
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
export default SiderMenu;