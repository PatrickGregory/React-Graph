
import { Dropdown } from "antd";
import { SlOptions } from "react-icons/sl";



const items = [
    {
        key: '1',
        label: (
            <a className="text-secondary fs-6 text-decoration-none">FILTER</a>
        ),
    },
    {
        key: '2',
        label: (
            <a className="text-decoration-none">
                Today
            </a>
        ),
    },
    {
        key: '3',
        label: (
            <a className="text-decoration-none">
                This Month
            </a>
        ),
    },
    {
        key: '4',
        label: (
            <a className="text-decoration-none">
                This Year
            </a>
        ),
    }
];
export default function Dashboard() {
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
                <SlOptions className="ms-auto text-secondary"/>
        </Dropdown>
    )
}