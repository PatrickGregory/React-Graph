import { useState } from 'react'
import DataTable from 'react-data-table-component'
import { HomeBadge } from '../pages/badges/badges'


export const HomeTable = () => {

    const columns = [
        {
            name: '#',
            selector: row => row.identify,
            sortable: true
        },
        {
            name: 'Customer',
            selector: row => row.customer,
            sortable: true
        },
        {
            name: 'Product',
            selector: row => row.product,
            sortable: true
        },
        {
            name: 'Price',
            selector: row => row.price,
            sortable: true
        },
        {
            name: 'Status',
            selector: row => row.status,
            sortable: true
        }
    ]

    const data = [
        {
            id: 1,
            identify: <a href="#" className='text-decoration-none'>#2457</a>,
            customer: 'Brandon Jacob',
            product: <a href="#" className='text-decoration-none'>At praesentium minu</a>,
            price: `$${64}`,
            status: <HomeBadge color='success' text='Approved' />
        },
        {
            id: 2,
            identify: <a href="#" className='text-decoration-none'>#2147</a>,
            customer: 'Birdie Kessler',
            product: <a href="#" className='text-decoration-none'>Blanditiis dolor omnis similique</a>,
            price: `$${47}`,
            status: <HomeBadge color='warning' text='Pending' />
        },
        {
            id: 3,
            identify: <a href="#" className='text-decoration-none'>#2049</a>,
            customer: 'Ashleigh Langosh',
            product: <a href="#" className='text-decoration-none'>	At recusandae consectetur</a>,
            price: `$${147}`,
            status: <HomeBadge color='success' text='Approved' />
        },
        {
            id: 4,
            identify: <a href="#" className='text-decoration-none'>#2644</a>,
            customer: 'Angus Grady',
            product: <a href="#" className='text-decoration-none'>	Ut voluptatem id earum et</a>,
            price: `$${67}`,
            status: <HomeBadge color='danger' text='Rejected' />
        },
        {
            id: 5,
            identify: <a href="#" className='text-decoration-none'>#2549</a>,
            customer: 'Raheem Lehner',
            product: <a href="#" className='text-decoration-none'>Sunt similique distinctio</a>,
            price: `$${165}`,
            status: <HomeBadge color='success' text='Approved' />
        },
    ]

    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData)
    }

    const [records, setRecords] = useState(data)
    return (
        <div>
            <div className='text-end'><input type="text" onChange={handleFilter} /></div>
            <DataTable
                columns={columns}
                data={records}
                fixedHeader
                pagination
            >

            </DataTable>
        </div>
    )
}

export const NoBorder = () => {
    return (
        <div className="table-responsive">
            <table class="table table-borderless">
                <thead>
                    <tr className='border-none'>
                        <th scope="col">Preview</th>
                        <th scope="col">Product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Sold</th>
                        <th scope="col">Revenue</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-none'>
                        <td className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-1.jpg' alt="first product" /></a></td>
                        <td><a href="#" className='text-decoration-none'>Ut inventore ipsa voluptas nulla</a></td>
                        <td>$64</td>
                        <td className='fw-bold'>124</td>
                        <td>$5,828</td>
                    </tr>
                    <tr className='border-none'>
                        <td className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-2.jpg' alt="first product" /></a></td>
                        <td><a href="#" className="text-decoration-none">Exercitationem similique doloremque</a></td>
                        <td>$46</td>
                        <td className='fw-bold'>98</td>
                        <td>$4,508</td>
                    </tr>
                    <tr className='border-none'>
                        <td className='w-25'><a href="#"><img className='w-25' src='./images/product-3.jpg' alt="first product" /></a></td>
                        <td ><a href="#" className='text-decoration-none'>Doloribus nisi exercitationem</a></td>
                        <td >$59</td>
                        <td className='fw-bold'>74</td>
                        <td>$4,366</td>
                    </tr>
                    <tr className='border-none'>
                        <td className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-4.jpg' alt="first product" /></a></td>
                        <td ><a href="#" className="text-decoration-none">Officiis quaerat sint rerum error</a></td>
                        <td >$32</td>
                        <td className='fw-bold'>63</td>
                        <td>$2,016</td>
                    </tr>
                    <tr className='border-none'>
                        <td className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-5.jpg' alt="first product" /></a></td>
                        <td ><a href="#" className="text-decoration-none">Sit unde debitis delectus repellendus</a></td>
                        <td >$79</td>
                        <td className="fw-bold">41</td>
                        <td>$3,239</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}