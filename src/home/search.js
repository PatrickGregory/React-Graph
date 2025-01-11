import React from 'react'
import { Dropdown } from "antd";
import { BsSearch } from 'react-icons/bs'

export const Search = () => {
    return (
        <div className='ps-5 search-bar shadow'>
            <form action="#" className='search-form'>
                <input type="text" placeholder='Search' className='h-100' />
                <button className='btn' type='submit'><BsSearch className='text-primary-emphasis mb-2 search-btn' /></button>
            </form>
        </div>
    )
}


export const SmallSearch = () => {
    return (
        <div className='mx-auto search-bar-responsive shadow'>
            <form action="#" className='search-form'>
                <input type="text" placeholder='Search' className='h-100' />
                <button className='btn' type='submit'><BsSearch className='text-primary-emphasis mb-2 search-btn' /></button>
            </form>
        </div>
    )
}

