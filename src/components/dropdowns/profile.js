
import { Dropdown } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";



const items = [
    {
        key: '1',
        label: (
            <a className='text-decoration-none' target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                <h6 className="mx-auto px-4">Patrick Gregory</h6>
                <p className="mx-auto px-4">Software Developer</p>
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
                2nd menu item
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
export default function Profile() {
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
            <div className='d-flex gap-1 mt-3'>
                <img className='rounded-circle profile-pic' src="./images/profile.jpg" alt="profile" />
                <h6 className='text-primary-emphasis mt-1'>KD</h6>
                <IoMdArrowDropdown className='mt-2 text-primary-emphasis' />
            </div>
        </Dropdown>
    )
}