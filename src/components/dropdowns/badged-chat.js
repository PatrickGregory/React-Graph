import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { BsChatLeftText } from "react-icons/bs";
import { Button, Dropdown } from 'antd';
import { MessagesProps } from '../props';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 1,
    top: 6,
    border: `2px solid ${theme.palette.background.paper}`,
    borderRadius: '0.4rem',
    padding: '6px',
  },
}));
const items = [
  {
    key: '1',
    label: (
      <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        You have 3 new messages <span className="text-decoration ms-2"><Button className="bg-primary w-25 rounded-pill text-white fs-6">view all</Button></span>
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
        <MessagesProps
          img='./images/messages-1.jpg'
          name='Maria Hudson'
          message='quisquam est qui dolorem ipsum quia dolor sit amet'
          time='4 hrs. ago'
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
        3rd menu item
      </a>
    ),
  },
];

export default function ChatBadges() {
  return (
    <Dropdown
      menu={{
        items,
      }}
      placement="bottomRight"
      arrow={{
        pointAtCenter: false,
      }}
      trigger={['click']}
    >
        <StyledBadge badgeContent={3} color="success">
          <BsChatLeftText className=' fs-4 text-primary-emphasis' />
        </StyledBadge>
    </Dropdown>
  );
}
