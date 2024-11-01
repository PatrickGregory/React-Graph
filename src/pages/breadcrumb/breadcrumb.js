import React from 'react';
import { HomeOutlined} from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import { BsDot } from 'react-icons/bs';


export const IconBreadCrumb = () => {
    return (
        <Breadcrumb
            items={[
                {
                    title: <HomeOutlined />,
                },
                {
                    title: 'Application List'
                },
                {
                    title: 'Application',
                },
            ]}
        />
    )
}

export const CustomSeperator = () =>{
    return (
        <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Library',
      },
      {
        title: 'Data',
      },
    ]}
  />
    )
}
export const CustomSeperatorone = () =>{
    return (
        <Breadcrumb
    separator="|"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Library',
      },
      {
        title: 'Data',
      },
    ]}
  />
    )
}
export const CustomSeperatortwo = () =>{
    return (
        <Breadcrumb
    separator="-"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Library',
      },
      {
        title: 'Data',
      },
    ]}
  />
    )
}
export const CustomSeperatorthree = () =>{
    return (
        <Breadcrumb
    separator={<BsDot className='fs-5'/>}
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Library',
      },
      {
        title: 'Data',
      },
    ]}
  />
    )
}
export const CustomSeperatorNot = () =>{
    return (
        <Breadcrumb
    separator=' '
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Library',
      },
      {
        title: 'Data',
      },
    ]}
  />
    )
}