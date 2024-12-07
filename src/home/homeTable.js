import { useState } from 'react'
import DataTable from 'react-data-table-component'


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
            identify: <a href="#" className='text-decoration-none'>2457</a>,
            customer: 'Brandon Jacob',
            product: 'At praesentium minu',
            price: '$64',
            status: 'Approved'
        },
        {
            id: 2,
            name: 'kantee deeDev',
            ext: '555-0125',
            city: 'Los Angeles',
            start: '2013-04-11',
            completion: 90
        },
        {
            id: 3,
            name: 'Emilia Doe',
            ext: '555-0124',
            city: 'New Jersey',
            start: '2015-10-12',
            completion: 85
        },
        {
            id: 4,
            name: 'John Stewart',
            ext: '545-0123',
            city: 'London',
            start: '2020-08-21',
            completion: 59
        },
        {
            id: 5,
            name: 'Patrick Joe',
            ext: '655-0123',
            city: 'Lagos',
            start: '2021-04-01',
            completion: 30
        },
    ]

    function handleFilter(event){
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
    return(
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
            <td  className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-1.jpg' alt="first product" /></a></td>
            <td><a href="#" className='text-decoration-none'>Ut inventore ipsa voluptas nulla</a></td>
            <td>$64</td>
            <td className='fw-bold'>124</td>
            <td>$5,828</td>
          </tr>
          <tr className='border-none'>
            <td  className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-2.jpg' alt="first product" /></a></td>
            <td><a href="#" className="text-decoration-none">Exercitationem similique doloremque</a></td>
            <td>$46</td>
            <td className='fw-bold'>98</td>
            <td>$4,508</td>
          </tr>
          <tr className='border-none'>
          <td  className='w-25'><a href="#"><img className='w-25' src='./images/product-3.jpg' alt="first product" /></a></td>
            <td ><a href="#" className='text-decoration-none'>Doloribus nisi exercitationem</a></td>
            <td >$59</td>
            <td className='fw-bold'>74</td>
            <td>$4,366</td>
          </tr>
          <tr className='border-none'>
          <td  className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-4.jpg' alt="first product" /></a></td>
            <td ><a href="#" className="text-decoration-none">Officiis quaerat sint rerum error</a></td>
            <td >$32</td>
            <td className='fw-bold'>63</td>
            <td>$2,016</td>
          </tr>
          <tr className='border-none'>
          <td  className='w-25' scope="row"><a href="#"><img className='w-25' src='./images/product-5.jpg' alt="first product" /></a></td>
            <td ><a href="#" className="text-decoration-none">Sit unde debitis delectus repellendus</a></td>
            <td >$79</td>
            <td className="fw-bold">41</td>
            <td>$3,239</td>
          </tr>
        </tbody>
      </table>
    )
}