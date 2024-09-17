import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { PiWarningCircle } from "react-icons/pi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Button, Dropdown } from 'antd';
import { NotificationProps } from '../props';
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { BsInfoCircle } from "react-icons/bs";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius:'0.4rem',
    padding: '6px',
  },
}));
const items = [
    {
      key: '1',
      label: (
        <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          You have 4 new notifications <span className="text-decoration ms-2"><Button className="bg-primary w-25 rounded-pill text-white fs-6">view all</Button></span>
        </a>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: (
        <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          <NotificationProps
            icon={<PiWarningCircle className='text-warning mt-4 fs-3'/>}
            title='Lorem Ipsum'
            message='random text to be fetched from server'
            time='30 mins ago'
          />
        </a>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '3',
      label: (
        <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          <NotificationProps
            icon={<MdOutlineCancel className='text-danger mt-4 fs-3'/>}
            title='Atque rerum nesciunt'
            message='Quae dolorem earum veritatis oditseno'
            time='1 hr. ago'
          />
        </a>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '4',
      label: (
        <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          <NotificationProps
            icon={<FaRegCheckCircle className='text-success mt-4 fs-3'/>}
            title='Sit rerum fuga'
            message='Quae dolorem earum veritatis oditseno'
            time='2 hrs. ago'
          />
        </a>
      ),
    },
    {
      type: 'divider',
    },
    {
      key: '5',
      label: (
        <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          <NotificationProps
            icon={<BsInfoCircle className='text-primary mt-4 fs-3'/>}
            title='Dicta reprehenderit'
            message='Quae dolorem earum veritatis oditseno'
            time='4 hrs. ago'
          />
        </a>
      ),
    },
    {
      type: 'divider',
    },
    {
      label: (
        <a className='text-secondary justify-content-center fs-6 ms-5 ps-4'>Show all notifications</a>
      )
    }
  ];


export default function CustomizedBadges() {
  return (
    <Dropdown
    menu={{
      items,
  }}
  placement="bottomRight"
  arrow={{
      pointAtCenter: true,
  }}
  trigger={['click']}
    >
      <StyledBadge badgeContent={4} color="primary"> 
        <IoMdNotificationsOutline className='fs-3 text-primary-emphasis' />
      </StyledBadge>
    </Dropdown>
  );
}
