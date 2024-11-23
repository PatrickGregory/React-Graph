import { useState } from 'react'
import DataTable from 'react-data-table-component'


export const Example = () => {

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'Ext.',
            selector: row => row.ext,
            sortable: true
        },
        {
            name: 'City',
            selector: row => row.city,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: row => row.start,
            sortable: true
        },
        {
            name: 'Completion',
            selector: row => row.completion,
            sortable: true
        }
    ]

    const data = [
        {
            id: 1,
            name: 'John Doe',
            ext: '555-0123',
            city: 'New York',
            start: '2017-01-01',
            completion: 100
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
        {
            id: 6,
            name: 'Stephanie Reeves',
            ext: '556-0143',
            city: 'Port Harcourt',
            start: '2016-11-21',
            completion: 70
        },
        {
            id: 7,
            name: 'Stevie Wonder',
            ext: '555-0000',
            city: 'Canary Islands',
            start: '2010-01-01',
            completion: 100
        },
        {
            id: 8,
            name: 'Sylvia Puckett',
            ext: '444-0123',
            city: 'Austin',
            start: '2013-07-31',
            completion: 97
        },
        {
            id: 9,
            name: 'Sandra Paul',
            ext: '445-0123',
            city: 'Brazil',
            start: '2012-09-30',
            completion: 100
        },
        {
            id: 10,
            name: 'Socrates Leopold',
            ext: '454-0122',
            city: 'Denver',
            start: '2019-06-01',
            completion: 79
        },
        {
            id: 11,
            name: 'Sunday Ndubuisi',
            ext: '660-0111',
            city: 'Onitsha',
            start: '2014-07-01',
            completion: 32
        },
        {
            id: 12,
            name: 'Adeola Sheriff',
            ext: '344-0125',
            city: 'Ojodu Berger',
            start: '2024-12-11',
            completion: 99
        },
        {
            id: 13,
            name: 'Otene John',
            ext: '484-0113',
            city: 'Benue',
            start: '2010-10-31',
            completion: 99
        },
        {
            id: 14,
            name: 'Maduka Chidinma',
            ext: '404-0103',
            city: 'Awka',
            start: '2012-04-21',
            completion: 12
        },
        {
            id: 15,
            name: 'Olamide Rose',
            ext: '500-0100',
            city: 'Gbagada',
            start: '2018-02-04',
            completion: 37
        },
        {
            id: 16,
            name: 'Uchegbu Chibueze',
            ext: '677-1123',
            city: 'Olu',
            start: '2019-10-01',
            completion: 92
        },
        {
            id: 17,
            name: 'Igwe Justus',
            ext: '660-0120',
            city: 'Lagos',
            start: '2023-01-31',
            completion: 97
        },
        {
            id: 18,
            name: 'Olusanya Olamide',
            ext: '555-0124',
            city: 'Ogun',
            start: '2021-03-10',
            completion: 85
        },
        {
            id: 19,
            name: 'Uzowuru McAnthony',
            ext: '444-0023',
            city: 'Seattle',
            start: '2015-04-22',
            completion: 100
        },
        {
            id: 20,
            name: 'Fajembola Daniel',
            ext: '454-0123',
            city: 'Glasgow',
            start: '2015-07-31',
            completion: 63
        },
        {
            id: 21,
            name: 'Cat Valentine',
            ext: '464-0120',
            city: 'Geneva',
            start: '2009-05-15',
            completion: 78
        },
        {
            id: 22,
            name: 'Sandra Morelli',
            ext: '444-0121',
            city: 'Paris',
            start: '2013-07-31',
            completion: 97
        },
        {
            id: 23,
            name: 'Olugbewesa Daniel',
            ext: '644-0123',
            city: 'Ajangbadi',
            start: '2016-03-12',
            completion: 54
        },
        {
            id: 24,
            name: 'Emmanuel Brown',
            ext: '455-0123',
            city: 'Ogbomosho',
            start: '2013-07-15',
            completion: 71
        },
        {
            id: 25,
            name: 'Owonubi Miraculous',
            ext: '554-0123',
            city: 'Dubai',
            start: '2019-01-30',
            completion: 100
        },
        {
            id: 26,
            name: 'Akachukwu Adika',
            ext: '504-0123',
            city: 'Lagos',
            start: '2011-09-02',
            completion: 100
        },
        {
            id: 27,
            name: 'Nwosu Chidubem',
            ext: '444-0124',
            city: 'Jos',
            start: '2017-04-18',
            completion: 50
        },
        {
            id: 28,
            name: 'Emory Tate',
            ext: '644-0123',
            city: 'Lisbon',
            start: '2011-11-28',
            completion: 70
        },
        {
            id: 29,
            name: 'Patrick Emeka',
            ext: '774-0123',
            city: 'Switzerland',
            start: '2024-12-11',
            completion: 100
        },
        {
            id: 30,
            name: 'Patrick Brenda',
            ext: '764-0123',
            city: 'Romania',
            start: '2022-12-11',
            completion: 100
        }
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